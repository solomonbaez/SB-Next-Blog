import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name: string = "Admin";
export const siteTitle: string = "NextBlog";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <header className=" text-center mb-6">
            <Image
              priority
              src="/images/Aelionore.jpg"
              className="rounded-full mx-auto mb-6"
              height={144}
              width={144}
              alt=""
            />
            <h1 className="text-center text-2xl text-w leading-4 tracking-tighter m-1rem-0">
              {name}
            </h1>
          </header>
          <main>{children}</main>
        </div>
      </div>
    </html>
  );
}
