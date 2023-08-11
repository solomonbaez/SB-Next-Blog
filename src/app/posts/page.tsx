import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

// function declarations don't need closing colons
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Image src="/images/Aelionore.jpg" width={100} height={100} alt="PFP" />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </>
  );
}
