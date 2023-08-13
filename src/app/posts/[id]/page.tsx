import { getPost } from "../../../lib/posts";
import { getDate } from "../../../lib/date";

// function declarations don't need closing colons
export default async function Post({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);
  let date = getDate(post.date);

  return (
    <div className="mx-10 md-6">
      <h1>{post.title}</h1>
      <h2>{date}</h2>
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </div>
  );
}
