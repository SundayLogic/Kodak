import { PageMovieProps, PageSeriesProps } from "../../../typings";
import randomContentNumber from "../../../utils/functions/randomContentNumber";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
const SeriesTemplate = ({ props }: PageSeriesProps) => {
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  let randomNumber = randomContentNumber(props.topRated, 7000);
  const backdropMovie = props.topRated?.[randomNumber];
  return (
    <>
      <Header />
      <Hero
        backdrop={backdropMovie?.backdrop_path}
        title={backdropMovie?.name}
        overview={backdropMovie?.overview}
        pageName={"Series"}
        purpleBg={true}
        purpleTitleBg
        btns={btnProps}
        id={backdropMovie?.id}
        mediaType={"tv"}
      />
      <ContentSlider sliderName="Top Rated" contentResults={props.topRated} />
      <ContentSlider sliderName="Popular" contentResults={props.popular} />
      <ContentSlider sliderName="Airing Today" contentResults={props.airing} />
    </>
  );
};
export default SeriesTemplate;
