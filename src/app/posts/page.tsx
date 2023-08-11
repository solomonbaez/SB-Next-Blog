import Link from "next/link";

// function declarations don't need closing colons
export default function FirstPost() {
  return (
    <div className="m-3rem">
      <h1 className="text-center">First Post</h1>
      <Link
        className="text-center text-sky-400 hover:underline font-bold"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
