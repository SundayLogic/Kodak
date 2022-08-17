import { ContentPageProps, Movie } from "../../../typings";
import randomContentNumber from "../../../utils/functions/randomNumber";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

interface MoviesProps{
    topRated: Movie[]|undefined;
    upcoming: Movie[]|undefined;
    popular: Movie[]|undefined;
}
const MoviesTemplate1 = ({ topRated, upcoming, popular}: MoviesProps) => {
  const heroContent = () => popular?.[randomContentNumber(popular, 8000)];
  const btnsProps = {
    info: true,
    play: false,
    add: true,
  };
  console.log(topRated)
  return (
    <>
      <Header />
      <Hero
        backdrop={popular?.[0].backdrop_path}
        title={heroContent()?.title}
        overview={heroContent()?.overview}
        pageName={"Movies"}
        purpleBg={true}
        purpleTitleBg
        btns={btnsProps}
        mediaType={"movie"}
        id={heroContent()?.id}
      />
      <ContentSlider sliderName="Upcoming" contentResults={upcoming} />
      <ContentSlider sliderName="Popular" contentResults={popular} />
      <ContentSlider sliderName="Top Rated Movies" contentResults={topRated} />
    </>
  );
};
export default MoviesTemplate1;
