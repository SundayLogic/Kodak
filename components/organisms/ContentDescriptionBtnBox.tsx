import LinkAtom from "../atoms/Btns/LinkAtom";
import ContentDescriptionBtn from "../molecules/ContentDescriptionBtn";
import links from "../../utils/links";
type Icons = "INFO" | "ADD" | "PLAY";
interface ContentDescriptionBtnBoxProps {
    play?: boolean;
    info?: boolean;
    add: boolean;
}
const ContentDescriptionBtnBox = ({play,info,add}:ContentDescriptionBtnBoxProps) => {
  const buttonCreator = (text: string, iconName: Icons) => (
    <ContentDescriptionBtn text={text} iconName={iconName} />
  );
  
  const buttonShow = (show:boolean|undefined) => show  ? "flex" : "hidden";
  return (
    <div className="flex space-x-4 md:justify-start">
        <span className={`${buttonShow(info)}`}>
            <LinkAtom reference={links.urls.home} content={buttonCreator("More Info","INFO")}/>
        </span>
        <span className={`${buttonShow(play)}`}>
            <LinkAtom reference={links.urls.home} content={buttonCreator("Play","PLAY")}/>
        </span>
        <span className={`${buttonShow(add)}`}>
            <LinkAtom reference={links.urls.home} content={buttonCreator("Watch Later","ADD")}/>
        </span>
        
    </div>
  );
};
export default ContentDescriptionBtnBox;
