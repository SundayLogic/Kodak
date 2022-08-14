import { ContentType, Movie, Serie } from "../../typings";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

interface ContentSliderProps {
  contentResults: (Movie | Serie)[];
  sliderName: string;
}

const ContentSlider = ({ contentResults, sliderName }: ContentSliderProps) => {
  console.log(contentResults);
  return (
    <section className="mt-2 px-3 pt-3 h-[25vh] md:h-[32vh] lg:h-[34vh] flex flex-col space-y-3 z-1">
      <TextAtom text={sliderName} type={"SECTION"} />
      <div className="flex pl-5 items-center overflow-x-scroll lg:space-x-5 md:space-x-4 space-x-3 scrollbar-hide h-[20vh] md:h-[25vh] lg:h-[29vh] z-1">
        {contentResults.map((e:Serie | Movie) => (
          <ContentThumbnail
            image={e.poster_path}
            key={e.id}
            contentId={e.id}
            contentType={e.media_type}
            firstAir={e.first_air_date} 
          />
        ))}
      </div>
    </section>
  );
};
export default ContentSlider;
