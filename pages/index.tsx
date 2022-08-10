import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../components/pages/HomePage";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;
