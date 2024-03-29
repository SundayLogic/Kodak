import { PageTrendingProps } from "../../../typings";
import randomContentNumber from "../../../utils/functions/randomContentNumber";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
const TrendingPageTemplate = ({ props }: PageTrendingProps) => {
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  let randomNumber = randomContentNumber(props.trending, 7000);
  const backdropMovie = props.trending?.[randomNumber];
  console.log(props.popularMovies);
  return (
    <>
      <Header />
      <div className="pt-8 md:pt-0">
        <Hero
          backdrop={backdropMovie?.backdrop_path}
          title={
            backdropMovie?.title ? backdropMovie?.title : backdropMovie?.name
          }
          overview={backdropMovie?.overview}
          pageName={"Trending"}
          purpleBg={true}
          purpleTitleBg
          btns={btnProps}
          id={backdropMovie?.id}
          mediaType={backdropMovie.media_type}
        />
      </div>
      <div className="mt-20 md:mt-0">
        <ContentSlider sliderName="Trending" contentResults={props.trending} />
      </div>
      <ContentSlider
        sliderName="Popular Movies"
        contentResults={props.popularMovies}
      />
      <ContentSlider
        sliderName="Popular Series"
        contentResults={props.popularSeries}
      />
    </>
  );
};
export default TrendingPageTemplate;
