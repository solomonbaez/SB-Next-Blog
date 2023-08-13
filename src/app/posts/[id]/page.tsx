import Head from "next/head";
import { getPost, PostData } from "../../../lib/posts";
import { getDate } from "../../../lib/date";

// function declarations don't need closing colons
export default async function Post({ params }: { params: { id: string } }) {
  let post: PostData & { htmlContent: string } = await getPost(params.id);
  let date: string = getDate(post.date);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="mx-10 md-4">
        <h1 className="my-4 text-center text-2xl text-w leading-4 tracking-tighter m-1rem-0">
          {post.title}
        </h1>
        <small>
          <p className="my-4 text-left text-gray-500">{date}</p>
        </small>
        <hr className="h-px my-4 bg-red-800 border-0" />
        <div
          className="text-left"
          dangerouslySetInnerHTML={{ __html: post.htmlContent }}
        />
      </div>
    </>
  );
}
