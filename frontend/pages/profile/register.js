import RegisterLayout from "@/components/layouts/profile/register.layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>MirrorStudy</title>
          <meta name="description" content="MirrorStudy" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="bg-white dark:bg-black">
          <RegisterLayout />
        </div>
      </div>
    </>
  );
}
