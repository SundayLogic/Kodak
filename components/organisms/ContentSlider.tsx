import { ContentType } from "../../typings";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

interface ContentSliderProps {
  contentResults: any,
  sliderName: string,
}

const ContentSlider = ({contentResults, sliderName}:ContentSliderProps) => {
  console.log(contentResults);
  return (
    <section className="px-3   h-[25vh] md:h-[32vh] lg:h-[34vh] flex flex-col space-y-3 z-1 ">
      <TextAtom text={sliderName} type={"SECTION"}/>
      <div className="flex pl-5 items-center overflow-x-scroll lg:space-x-5 md:space-x-4 space-x-3 scrollbar-hide h-[900px] z-1">
        <ContentThumbnail image={contentResults.poster_path} contentType={"movie"} contentId={contentResults.id}/>
      </div>
    </section>
  );
};
export default ContentSlider;
