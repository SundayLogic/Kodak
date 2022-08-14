import { Serie, Movie } from "../../../typings";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
import useWindowDimensions from "../../../utils/hooks/getWindowDimensions"
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
  const Component = () => {
    const {height, width} = useWindowDimensions();
    return (<h1>width: {width} | height: {height}</h1>)
  }

  return (
    <>
      <Header />
      <Hero
        backdrop={props.moviesPopular?.[0].backdrop_path}
        title={props.moviesPopular?.[0].title}
        overview={props.moviesPopular?.[0].overview}
        page={"Movies"}
      />
      {Component()}
      <ContentSlider sliderName="Trending Movies" contentResults={props.moviesPopular?.[0]} />
    </>
  );
};
export default HomeTemplate1;
