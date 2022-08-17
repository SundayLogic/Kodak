import { useState, useCallback} from "react";
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
  const btnProps = {
    info: true,
    play: false,
    add: true,
  };
  const contentTitle = () =>
    props.trending?.[backdropNumber].title
      ? props.trending[backdropNumber].title
      : props.trending?.[backdropNumber].name;
  const movieOrTv = () =>
    props.trending?.[backdropNumber].title ? "movie" : "tv";
  const contentDataProps = {
    id: props.trending?.[backdropNumber].id,
    mediaType: movieOrTv(),
  };

  const [play, setPlay] = useState<boolean>(false);
  const changePlayProp = useCallback(() => {
    setPlay(!play);
  }, []);
  return (
    <>
      <Header />
      <Hero
        backdrop={props.trending?.[backdropNumber].backdrop_path}
        title={contentTitle()}
        overview={props.trending?.[backdropNumber].overview}
        pageName={"Home"}
        purpleBg={true}
        purpleTitleBg
        btns={btnProps}
        id={contentDataProps.id}
        mediaType={contentDataProps.mediaType}
      />
      <ContentSlider sliderName="Trending" contentResults={props.trending} />
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
