import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 text-center">
      <div className="mb-6">{children}</div>
      <Link
        className="text-gray-200 mx-auto hover:underline hover:text-blue-400 font-bold"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
}
