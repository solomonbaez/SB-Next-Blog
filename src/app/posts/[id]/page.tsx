import { getPost } from "../../../lib/posts";

// function declarations don't need closing colons
export default async function Post({ params }: { params: { id: string } }) {
  let post = await getPost(params.id);

  return (
    <div className="mx-10 md-6">
      {post.title}
      <br />
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent }} />
    </div>
  );
}
