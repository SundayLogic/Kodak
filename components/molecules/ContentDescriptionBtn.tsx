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
    <div className="px-4 py-2 bg-[#4735f2]/80 rounded-md text-lg cursor-pointer items-center flex space-x-2  opacity-95 hover:opacity-100 transition-all duration-200 ease-out hover:bg-[#f5f0ff]/100 hover:text-[#0d0033] hover:bg-opacity-20 justify-center tracking-wider;">
      <div>{iconCreator()}</div>
      <TextAtom text={text} type="DESCRIPTION_LINK"/>
    </div>
  );
};
export default ContentDescriptionBtn;
