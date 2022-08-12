import LinkAtom from "../atoms/Btns/LinkAtom";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

type SliderTypes = "TRENDING" | "UPCOMING" | "TOP_RATED" | "AIRING_TODAY";
type ContentType = "TV" | "MOVIES";
interface ContentSliderProps {
  sliderTitle: string;
  contentType: ContentType;
  sliderType: SliderTypes;
}
const ContentSlider = ({sliderTitle, contentType, sliderType}:ContentSliderProps) => {

  return (
    <section className="px-3   h-[25vh] md:h-[32vh] lg:h-[34vh] flex flex-col space-y-3 z-1 ">
      <TextAtom text={sliderTitle} type={"SECTION"}/>
      <ContentThumbnail image={"Image"}/>
    </section>
  );
};
export default ContentSlider;
