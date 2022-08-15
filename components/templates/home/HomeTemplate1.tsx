import { Serie, Movie } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import randomContentNumber from "../../../utils/functions/randomNumber";
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
  let backdropNumber = randomContentNumber(props.trending, 7000);
  return (
    <>
      <Header />
      <Hero
        backdrop={props.moviesPopular?.[backdropNumber].backdrop_path}
        title={props.moviesPopular?.[backdropNumber].title}
        overview={props.moviesPopular?.[backdropNumber].overview}
        pageName={"Movies"}
        purpleBg={true}
        purpleTitleBg
      />
      <ContentSlider sliderName="Trending" contentResults={props.trending} />
      <ContentSlider sliderName="Top Rated Movies" contentResults={props.moviesTopRated} />
      <ContentSlider sliderName="Top Rated Series" contentResults={props.seriesTopRated} />
    </>
  );
};
export default HomeTemplate1;
