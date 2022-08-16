import { IndividualContentProps} from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const MovieTemplate = ({content, videos, recommended}:IndividualContentProps) => {
  const btnsProps = {
    info: false,
    play: true,
    add: true,
  }
  return (
    <>
      <Header />
      <Backdrop
        image={content?.backdrop_path}
        quality={100}
        height={"h-[100vh]"}
      />
      <Hero title={content?.title} overview={content?.overview} btns={btnsProps}/>
      <ContentSlider
        sliderName={"Recommended Movies"}
        contentResults={randomContentSlider(recommended?.upcoming)}
      />
    </>
  );
};
export default MovieTemplate;
