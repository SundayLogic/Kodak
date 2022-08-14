import { Serie, Movie } from "../../../typings";
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
  return (
    <>
      <Header />
      <Hero
        backdrop={props.moviesPopular?.[0].backdrop_path}
        title={props.moviesPopular?.[0].title}
        overview={props.moviesPopular?.[0].overview}
        page={"Movies"}
      />
      <ContentSlider sliderName="Trending" contentResults={props.moviesPopular} />
      <ContentSlider sliderName="Top Rated Movies" contentResults={props.moviesTopRated} />
      <ContentSlider sliderName="Top Rated Series" contentResults={props.seriesTopRated} />
    </>
  );
};
export default HomeTemplate1;
