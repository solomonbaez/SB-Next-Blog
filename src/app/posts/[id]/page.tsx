import Link from "next/link";
// import getPosts from "../lib/posts";

// function declarations don't need closing colons
export default function Post({ params }: { params: { id: string } }) {
  return <h1 className="text-center">ID: {params.id}</h1>;
}
