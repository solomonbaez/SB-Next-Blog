import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import PostLayout from "./layout";

// function declarations don't need closing colons
export default function FirstPost() {
  return (
    <PostLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <div>
        <Image
          className=" h-300 w-300 display-block "
          src="/images/Aelionore.jpg"
          width={100}
          height={100}
          alt="PFP"
        />
        <h1>First Post</h1>
        <h2>
          <Link className=" font-bold underline " href="/">
            Back to Home
          </Link>
        </h2>
      </div>
    </PostLayout>
  );
}
