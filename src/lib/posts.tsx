import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostData {
  id: string;
  title: string;
  date: string;
}

const postsDirectory = path.join(process.cwd(), "src/app/posts/markup");

export function getPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents) as GrayMatterFile<string>;

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });

  return posts.sort((a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPost(
  id: string,
): Promise<PostData & { htmlContent: string }> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const post = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(post) as GrayMatterFile<string>;

  const htmlResult: any = await remark()
    .use(html)
    .process(matterResult.content);

  let htmlContent = htmlResult.toString();

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    htmlContent,
  };
}
