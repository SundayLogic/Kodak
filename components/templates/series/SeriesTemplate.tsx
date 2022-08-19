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
  const backdropSerie = props.popular?.[randomNumber];
  return (
    <>
      <Header />
      <Hero
        backdrop={backdropSerie?.backdrop_path}
        title={backdropSerie?.name}
        overview={backdropSerie?.overview}
        pageName={"Series"}
        purpleBg={true}
        purpleTitleBg
        btns={btnProps}
        id={backdropSerie?.id}
        mediaType={"tv"}
      />
      <ContentSlider sliderName="Top Rated" contentResults={props.topRated} />
      <ContentSlider sliderName="Popular" contentResults={props.popular} />
      <ContentSlider sliderName="Airing Today" contentResults={props.airing} />
    </>
  );
};
export default SeriesTemplate;
