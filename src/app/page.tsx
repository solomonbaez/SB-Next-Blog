import Link from "next/link";
import { getPosts } from "../lib/posts";

export default function Home() {
  const posts: any = getPosts();
  return (
    <div>
      <h1>Hi! Welcome to my next blog 💀</h1>
      <br />
      <section>
        <h1 className="text-red-600 text-center">BLOG</h1>
        <hr className="h-px my-4 bg-red-800 border-0" />
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              <Link
                className="hover:underline hover:text-blue-400"
                href={`/posts/${id}`}
              >
                {title}
              </Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
