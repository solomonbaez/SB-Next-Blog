import "./globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name: string = "Admin";
export const siteTitle: string = "NextBlog";

export default function RootLayout({
  children,
  home,
}: {
  children: React.ReactNode;
  home: React.ReactNode;
}) {
  return (
    <html lang="en">
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
                  <h1 className="text-center text-2xl text-w leading-4 tracking-tighter m-1rem-0">
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
                  <h2 className="text-center text-base text-w leading-4 tracking-tighter m-1rem-0">
                    <Link href="/" className="text-inherit">
                      {name}
                    </Link>
                  </h2>
                  <br />
                </div>
              </>
            )}
          </header>
          <main>{children}</main>
        </div>
      </div>
    </html>
  );
}
