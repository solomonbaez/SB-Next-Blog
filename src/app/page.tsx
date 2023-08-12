import Image from "next/image";
import RootLayout from "./layout";
import { getPosts } from "../lib/posts";

export default function Home() {
  const posts: any = getPosts();
  return (
    <div>
      <h1 className="text-center">HI!</h1>
      <section>
        <h1>Blog</h1>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
