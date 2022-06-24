import type { NextPage } from "next";
import Head from "next/head";
import BannerSlider from "../components/organisms/BannerSlider";
import ContentSlider from "../components/organisms/ContentSlider";
import BrandHoverContent from "../components/organisms/BrandHoverContent";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white">
        <Navbar />
        <div>
          <BannerSlider />
          <BrandHoverContent />
          <div className="p-3 bg-purple-900 space-y-3">
            <ContentSlider type={"Movie"}/>
            <ContentSlider type={"Movie"}/>
            <ContentSlider type={"Series"}/>
            <ContentSlider type={"Series"}/>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
