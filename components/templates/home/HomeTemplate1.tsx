import { useEffect, useState } from "react";
import { HomeProps } from "../../../typings";
import randomBackdropNumber from "../../../utils/functions/RandomBackdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const HomeTemplate1 = ({ results }: any) => {
  let [contentNumber, setContentNumber] = useState<number>(0);
  let homeContentNumber = results.trending[contentNumber];
  let homeImage = homeContentNumber.backdrop_path
    ? homeContentNumber.backdrop_path
    : homeContentNumber.poster.path;
  const changeContentNumber = (time: number) => {
    let result;
    setTimeout(() => {
      setContentNumber(Math.floor(Math.random() * results.trending.length));
    }, time);
    return result;
  };
  changeContentNumber(3000);
  return (
    <>
      <Header />
      <Hero />
      <section></section>
    </>
  );
};
export default HomeTemplate1;
