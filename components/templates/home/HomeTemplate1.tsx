import { useEffect, useState } from "react";
import { HomeProps } from "../../../typings";
import randomBackdropNumber from "../../../utils/functions/RandomBackdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const HomeTemplate1 = ({ results }: any) => {
  return (
    <>
      <Header />
      <Hero title={results.trending[0].title} backdrop={results.trending[0].backdrop_path} overview={results.trending[0].overview}/>
    </>
  );
};
export default HomeTemplate1;
