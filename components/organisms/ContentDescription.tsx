import TextAtom from "../atoms/Text/TextAtom";
import ContentDescriptionBtnBox from "./ContentDescriptionBtnBox";

interface ContentDescriptionProps {
  title: string | undefined;
  overview: string | undefined;
  purpleBg?: boolean;
  purpleTitleBg?: boolean;
  btns: {
    play?: boolean;
    info?: boolean;
    add: boolean;
  };
  id: number | undefined;
  mediaType: string | undefined;
  playWindow?: any;
  isPlayWindow?: any
}

const ContentDescription = ({
  title,
  overview,
  purpleBg,
  purpleTitleBg,
  btns,
  id,
  mediaType,
  isPlayWindow,
}: ContentDescriptionProps) => {
  return (
    <div className="flex justify-start">
      <div
        className={`${
          purpleBg ? "md:bg-kodakPurple-9/20" : null
        } flex flex-col w-[100vw] space-y-6  px-9 lg:px-20 h-[40vh] md:h-[60vh] lg:h-[64vh] justify-center rounded-lg items-center md:items-start`}
      >
        <div className="flex flex-col mt-20 pace-y-2 lg:space-y-6 md:space-y-4">
          <TextAtom text={title} type={"TITLE"} purpleTitleBg={purpleTitleBg} />
          <TextAtom text={overview} type={"OVERVIEW"} />
        </div>
        <ContentDescriptionBtnBox
          info={btns.info}
          add={btns.add}
          play={btns.play}
          id={id}
          mediaType={mediaType}
          isPlayWindow={isPlayWindow}
        />
      </div>
    </div>
  );
};
export default ContentDescription;
