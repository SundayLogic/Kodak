import { ContentType } from "../../typings";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

type SliderType = "TRENDING" | "TOP_RATED" | "UPCOMING" | "AIRING_TODAY";
interface ContentSliderProps {
  contentResults: any,
  sliderType: SliderType,
  contentType: ContentType,
}

const ContentSlider = ({contentResults, sliderType, contentType}:ContentSliderProps) => {
  const sliderTitle = "Title"
  return (
    <section className="px-3   h-[25vh] md:h-[32vh] lg:h-[34vh] flex flex-col space-y-3 z-1 ">
      <TextAtom text={sliderTitle} type={"SECTION"}/>
      <div className="flex pl-5 items-center overflow-x-scroll lg:space-x-5 md:space-x-4 space-x-3 scrollbar-hide h-[900px] z-1">
      </div>
    </section>
  );
};
export default ContentSlider;
