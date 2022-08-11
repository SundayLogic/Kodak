import ContentDescriptionBtn from "../molecules/ContentDescriptionBtn";

const ContentDescriptionBtnBox = () => {
    return(
        <div className="flex space-x-4">
            <ContentDescriptionBtn text={"Play"} iconName={"PLAY"}/>
            <ContentDescriptionBtn text={"More Info"} iconName={"INFO"}/>
            <ContentDescriptionBtn text={"Watch Later"} iconName={"ADD"}/>
        </div>
    );
};
export default ContentDescriptionBtnBox;