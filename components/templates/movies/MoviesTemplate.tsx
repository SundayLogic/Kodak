import {  PageMovieProps } from "../../../typings";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
const MoviesPageTemplate = ({ props }: PageMovieProps) => {
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  const backdropMovie = props.upcoming?.[0]
  return (
    <>
      <Header />
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
      <ContentSlider sliderName="Upcoming" contentResults={props.upcoming} />
      <ContentSlider
        sliderName="Popular"
        contentResults={props.popular}
      />
      <ContentSlider
        sliderName="Top Rated"
        contentResults={props.topRated}
      />
    </>
  );
};
export default MoviesPageTemplate;
