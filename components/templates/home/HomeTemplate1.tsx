import { useEffect, useState } from "react";
import { HomeProps } from "../../../typings";
import randomBackdropNumber from "../../../utils/functions/RandomBackdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const HomeTemplate1 = ({ results }: any) => {
  return (
    <>
      <h1>{results.trending[0].title}</h1>
      <Header />
    </>
  );
};
export default HomeTemplate1;
