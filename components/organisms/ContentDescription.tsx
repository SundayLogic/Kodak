import TextAtom from "../atoms/Text/TextAtom";
import ContentDescriptionBtnBox from "./ContentDescriptionBtnBox";

interface ContentDescriptionProps {
  title: string;
  overview: string;
}

const ContentDescription = ({ title, overview }: ContentDescriptionProps) => {
  return (
    <div className="flex flex-col bg-orange-600/5 p-10 h-[60vh] justify-center space-y-6">
      <div className="flex flex-col">
        <TextAtom text={title} type={"TITLE"} />
        <TextAtom text={overview} type={"OVERVIEW"} />
      </div>
      <ContentDescriptionBtnBox />
    </div>
  );
};
export default ContentDescription;
