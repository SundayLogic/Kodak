import { Movie, MovieTrailer } from "../../../typings";
import Backdrop from "../../atoms/images/Backdrop";
import ContentDescription from "../../organisms/ContentDescription";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

interface IndividualContentPageProps {
  props: {
    movie: Movie;
    trailers: MovieTrailer[];
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    moviesUpcoming: Movie[];
  };
}
const ContentTemplate1 = ({ props }: IndividualContentPageProps) => {
  return (
    <>
      <Header />
      <ContentDescription title={props.movie.title} overview={props.movie.overview}/>
      <Backdrop image={props.movie.backdrop_path} height={"h-[100vh]"} quality={80}/>
      <ContentSlider contentResults={props.moviesPopular} sliderName={"Other Movies"}/>
    </>
  );
};
export default ContentTemplate1;
