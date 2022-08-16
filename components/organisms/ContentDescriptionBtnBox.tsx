import LinkAtom from "../atoms/Btns/LinkAtom";
import ContentDescriptionBtn from "../molecules/ContentDescriptionBtn";
import links from "../../utils/links";
type Icons = "INFO" | "ADD" | "PLAY";
interface ContentDescriptionBtnBoxProps {
    play?: boolean;
    info?: boolean;
    add: boolean;
    id: number;
    mediaType: string;
}
const ContentDescriptionBtnBox = ({play,info,add, id, mediaType}:ContentDescriptionBtnBoxProps) => {
  const buttonCreator = (text: string, iconName: Icons) => (
    <ContentDescriptionBtn text={text} iconName={iconName} />
  );
  
  const buttonShow = (show:boolean|undefined) => show  ? "flex" : "hidden";
  const moreInfoUrl = `/${mediaType}/${id}`;
  return (
    <div className="flex space-x-4 md:justify-start">
        <span className={`${buttonShow(add)}`}>
            <LinkAtom reference={links.urls.home} content={buttonCreator("Watch Later","ADD")}/>
        </span>
        <span className={`${buttonShow(info)}`}>
            <LinkAtom reference={moreInfoUrl} content={buttonCreator("More Info","INFO")}/>
        </span>
        <span className={`${buttonShow(play)}`}>
            <LinkAtom reference={links.urls.home} content={buttonCreator("Play","PLAY")}/>
        </span>
        
    </div>
  );
};
export default ContentDescriptionBtnBox;
