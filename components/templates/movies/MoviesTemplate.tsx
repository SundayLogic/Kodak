import { PageMovieProps } from "../../../typings";
import randomContentNumber from "../../../pages/utils/functions/randomContentNumber";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
const MoviesPageTemplate = ({ props }: PageMovieProps) => {
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  let randomNumber = randomContentNumber(props.upcoming, 7000);
  const backdropMovie = props.upcoming?.[randomNumber];
  return (
    <>
      <Header />
      <div className="pt-9 md:pt-0">
        <Hero
          backdrop={backdropMovie?.backdrop_path}
          title={backdropMovie?.title}
          overview={backdropMovie?.overview}
          pageName={"Movies"}
          purpleBg={true}
          purpleTitleBg
          btns={btnProps}
          id={backdropMovie?.id}
          mediaType={"movie"}
        />
      </div>
      <div className="mt-28">
        <ContentSlider sliderName="Upcoming" contentResults={props.upcoming} />
      </div>
      <ContentSlider sliderName="Popular" contentResults={props.popular} />
      <ContentSlider sliderName="Top Rated" contentResults={props.topRated} />
    </>
  );
};
export default MoviesPageTemplate;
