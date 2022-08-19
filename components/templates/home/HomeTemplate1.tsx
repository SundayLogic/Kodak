import { useState, useCallback } from "react";
import { Serie, Movie } from "../../../typings";
import randomContentNumber from "../../../utils/functions/randomContentNumber";
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
  let backdropContent = props.trending?.[backdropNumber];
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  const contentTitle = () =>
    backdropContent?.title ? backdropContent?.title : backdropContent?.name;
  const movieOrTv = () => (props.trending?.[0].title ? "movie" : "tv");
  const contentDataProps = {
    id: props.trending?.[0].id,
    mediaType: movieOrTv(),
  };

  const [play, setPlay] = useState<boolean>(false);
  const changePlayProp = useCallback(() => {
    setPlay(!play);
  }, []);
  return (
    <>
      <Header />

      <div className="pt-8 md:pt-0">
        <Hero
          backdrop={backdropContent?.backdrop_path}
          title={contentTitle()}
          overview={backdropContent?.overview}
          pageName={"Home"}
          purpleBg={true}
          purpleTitleBg
          btns={btnProps}
          id={contentDataProps.id}
          mediaType={contentDataProps.mediaType}
        />
      </div>
      <div className="mt-20 md:mt-0">
        <ContentSlider sliderName="Trending" contentResults={props.trending} />
      </div>
      <ContentSlider
        sliderName="Top Rated Movies"
        contentResults={props.moviesTopRated}
      />
      <ContentSlider
        sliderName="Top Rated Series"
        contentResults={props.seriesTopRated}
      />
    </>
  );
};
export default HomeTemplate1;
