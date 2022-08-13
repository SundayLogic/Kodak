import { useEffect, useState } from "react";
import { Serie, Movie } from "../../../typings";
import randomBackdropNumber from "../../../utils/functions/RandomBackdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
interface HomeProps {
  props: {
    trending: (Serie | Movie)[];
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    seriesPopular: Serie[];
    seriesTopRated: Serie[];
  };
}

const HomeTemplate1 = ({ props }: HomeProps) => {
  let arr = undefined || [];
  return (
    <>
      <Header />
      <Hero backdrop={props.moviesPopular?.[0].backdrop_path} title={props.moviesPopular?.[0].title} overview={props.moviesPopular?.[0].overview}/>
    </>
  );
};
export default HomeTemplate1;
