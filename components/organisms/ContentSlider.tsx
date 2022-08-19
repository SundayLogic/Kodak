import { ContentType, Movie, Serie } from "../../typings";
import TextAtom from "../atoms/Text/TextAtom";
import ContentThumbnail from "../molecules/ContentThumbnail";

interface ContentSliderProps {
  contentResults: (Movie | Serie)[] | undefined;
  sliderName: string;
}

const ContentSlider = ({ contentResults, sliderName }: ContentSliderProps) => {
  return (
    <section className="mt-2 pb-12 px-3 pt-3 h-[28vh] md:h-[45vh] lg:h-[40vh] flex flex-col space-y-3 -z-20 group ">
      <TextAtom text={sliderName} type={"SECTION"} />
      <div className="flex pl-5 items-center overflow-x-scroll lg:space-x-5 md:space-x-4 space-x-3 scrollbar-hide h-[35vh] md:h-[45vh] lg:h-[39vh] z-1  bg-kodakPurple-10/5">
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
