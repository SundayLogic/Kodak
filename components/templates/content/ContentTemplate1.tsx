import { Movie } from "../../../typings";
import Backdrop from "../../atoms/images/Backdrop";
import ContentDescription from "../../organisms/ContentDescription";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

interface IndividualContentPageProps {
  props: {
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    moviesUpcoming: Movie[];
  };
}
const ContentTemplate1 = ({ props }: IndividualContentPageProps) => {
  console.log(props);
  return (
    <>
      <Header />
      <ContentDescription title={props.moviesPopular[0].title} overview={props.moviesPopular[0].overview}/>
      <Backdrop image={props.moviesPopular[0].backdrop_path} height={"h-[100vh]"} quality={80}/>
      <ContentSlider contentResults={props.moviesPopular} sliderName={"Other Movies"}/>
    </>
  );
};
export default ContentTemplate1;
