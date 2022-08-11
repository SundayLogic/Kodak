import TextAtom from "../atoms/Text/TextAtom";
import ContentDescriptionBtnBox from "./ContentDescriptionBtnBox";

interface ContentDescriptionProps {
  title: string;
  overview: string;
}

const ContentDescription = ({ title, overview }: ContentDescriptionProps) => {
  return (
    <div className="flex justify-start">
      <div className="flex flex-col space-y-6  px-9 lg:px-20 h-[40vh] md:h-[50vh] lg:h-[60vh] justify-center   items-center md:items-start max-w-[60vw] bg-kodakPurple-4">
        <div className="">
          <TextAtom text={title} type={"TITLE"} />
          <TextAtom text={overview} type={"OVERVIEW"} />
        </div>
        <ContentDescriptionBtnBox info  add/>
      </div>
    </div>
  );
};
export default ContentDescription;
