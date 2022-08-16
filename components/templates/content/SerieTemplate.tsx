import { IndividualContentProps } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";

const SerieTemplate = ({
  content,
  videos,
  recommended,
}: IndividualContentProps) => {
  const btnProps = {
    info: false,
    add: true,
    play: true,
  }
  return (
    <>
      <Header />
      <Backdrop
        image={content?.backdrop_path}
        quality={100}
        height={"h-[100vh]"}
      />
      <Hero title={content?.name} overview={content?.overview} btns={btnProps}/>
      <ContentSlider
        sliderName={"Recommended Series"}
        contentResults={randomContentSlider(recommended?.popular)}
      />
    </>
  );
};
export default SerieTemplate;
