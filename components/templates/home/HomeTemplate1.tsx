import { useEffect, useState } from "react";
import { HomeProps } from "../../../typings";
import randomBackdropNumber from "../../../utils/functions/RandomBackdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const HomeTemplate1 = (results: any) => {
  const resultProps = {
    trending: results.results.trending,
    moviesPopular: results.results.trending,
    moviesTopRated: results.results.trending,
    seriesPopular: results.results.trending,
    seriesTopRated: results.results.trending,
  }
  console.log(resultProps.trending[0].backdrop_path)
  return (
    <>
      <Header />
      <Hero backdrop={resultProps.trending[0].backdrop_path} title={resultProps.trending[0].title} overview={resultProps.trending[0].overview} />
    </>
  );
};
export default HomeTemplate1;
