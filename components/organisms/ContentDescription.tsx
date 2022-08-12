import TextAtom from "../atoms/Text/TextAtom";
import ContentDescriptionBtnBox from "./ContentDescriptionBtnBox";

interface ContentDescriptionProps {
  title: string;
  overview: string;
}

const ContentDescription = ({ title, overview }: ContentDescriptionProps) => {
  return (
    <div className="flex justify-start">
      <div className="flex flex-col w-[100vw] space-y-6  px-9 lg:px-20 h-[40vh] md:h-[50vh] lg:h-[60vh] justify-center   rounded-lg items-center md:items-start bg-kodakPurple-9/20">
        <div className="flex flex-col mt-20 pace-y-2 lg:space-y-6 md:space-y-4">
          <TextAtom text={title} type={"TITLE"} />
          <TextAtom text={overview} type={"OVERVIEW"} />
        </div>
        <ContentDescriptionBtnBox info  add/>
      </div>
    </div>
  );
};
export default ContentDescription;
