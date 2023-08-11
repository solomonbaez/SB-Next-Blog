import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-3rem">
      {children}
      <br />
      <Link
        className="text-center text-sky-400 hover:underline font-bold"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
