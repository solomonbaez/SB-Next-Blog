import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name: string = "Admin";
export const siteTitle: string = "NextBlog";

export default function PostLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Head className="flex-col items-center">
          <title>First Post</title>
        </Head>
        <header className="flex items-center">
          {home ? (
            <>
              <div>
                <Image
                  priority
                  src="/images/Aelionore.jpg"
                  className="rounded-full"
                  height={144}
                  width={144}
                  alt=""
                />
                <h1 className="text-2xl text-w leading-4 tracking-tighter m-1rem-0">
                  {name}
                </h1>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link href="/">
                  <Image
                    priority
                    src="/images/Aelionore.jpg"
                    className="rounded-full"
                    height={108}
                    width={108}
                    alt=""
                  />
                </Link>
                <h2 className="text-base text-w leading-4 tracking-tighter m-1rem-0">
                  <Link href="/" className="text-inherit">
                    {name}
                  </Link>
                </h2>
              </div>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className="m-3rem">
            <Link className="text-sky-400 hover:underline font-bold" href="/">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
