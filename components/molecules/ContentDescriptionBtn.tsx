import {
  InformationCircleIcon,
  PlayIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import TextAtom from "../atoms/Text/TextAtom";
type Icons = "INFO" | "ADD" | "PLAY";
interface ContentDescriptionBtnProps {
  text: string;
  iconName: Icons;
}
const ContentDescriptionBtn = ({
  text,
  iconName,
}: ContentDescriptionBtnProps) => {
  const iconCreator = () => {
    let finalCode;
    switch (iconName) {
      case "INFO":
        finalCode = <InformationCircleIcon className="descriptionIcon" />;
        break;
      case "PLAY":
        finalCode = <PlayIcon className="descriptionIcon" />;
        break;
      case "ADD":
        finalCode = <PlusCircleIcon className="descriptionIcon"/>;
        break;
      default:
        finalCode = <h1>button not found</h1>;
    }
    return finalCode;
  };
  return (
    <div className="flex items-center justify-center max-w-[200px] space-x-2 text-subtitle bg-kodakPurple-6/90 px-4 py-2 rounded-md hover:bg-kodakPurple-1/90 hover:text-kodakPurple-10 transition-all duration-200 ease-out tracking-wide">
      {iconCreator()}
      <TextAtom text={text} type="DESCRIPTION_LINK"/>
    </div>
  );
};
export default ContentDescriptionBtn;
