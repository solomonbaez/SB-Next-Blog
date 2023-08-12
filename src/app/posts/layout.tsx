import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 text-center">
      <div className="mb-6">{children}</div>
      <Link className="mx-auto text-sky-400 hover:underline font-bold" href="/">
        Back to Home
      </Link>
    </div>
  );
}
