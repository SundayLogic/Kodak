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
  return (
    <>
      <Header />
      <Backdrop
        image={content?.backdrop_path}
        quality={100}
        height={"h-[100vh]"}
      />
      <Hero title={content?.name} overview={content?.overview} />
      <ContentSlider
        sliderName={"Recommended Series"}
        contentResults={randomContentSlider(recommended?.popular)}
      />
    </>
  );
};
export default SerieTemplate;
