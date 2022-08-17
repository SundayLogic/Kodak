import { ContentType, Movie, Serie } from "../../typings";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

interface ContentSliderProps {
  contentResults: (Movie | Serie)[] | undefined;
  sliderName: string;
}

const ContentSlider = ({ contentResults, sliderName }: ContentSliderProps) => {
  return (
    <section className="mt-2 px-3 pt-3 h-[27vh] md:h-[34vh] lg:h-[36vh] flex flex-col space-y-3 -z-20 ">
      <TextAtom text={sliderName} type={"SECTION"} />
      <div className="flex pl-5 items-center overflow-x-scroll lg:space-x-5 md:space-x-4 space-x-3 scrollbar-hide h-[29vh] md:h-[30vh] lg:h-[32vh] z-1 ">
        {contentResults?.map((e: Serie | Movie) => (
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
