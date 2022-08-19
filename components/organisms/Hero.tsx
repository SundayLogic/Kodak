import Backdrop from "../atoms/images/Backdrop";
import TextAtom from "../atoms/Text/TextAtom";
import ContentDescription from "./ContentDescription";

interface HeroProps {
  backdrop?: string | undefined;
  title: string | undefined;
  overview: string | undefined;
  pageName?: string;
  purpleBg?: boolean;
  purpleTitleBg?: boolean;
  btns: {
    play?: boolean | undefined;
    info?: boolean;
    add: boolean;
  };
  id: number | undefined;
  mediaType: string;
  playProps?: {
    active: boolean;
    changePlay: any;
  };
  isPlayWindow?: any;
}
const Hero = ({
  backdrop,
  title,
  overview,
  pageName,
  purpleBg,
  purpleTitleBg,
  btns,
  id,
  mediaType,
  isPlayWindow,
}: HeroProps) => {
  const btnsProps = {
    info: btns.info,
    add: btns.add,
    play: btns.play,
  };
  return (
    <>
      <Backdrop
        image={backdrop}
        quality={100}
        height={"h-[66vh] md:h-[60vh] lg:h-[90vh]"}
      />
      <ContentDescription
        title={title}
        overview={overview}
        purpleBg={purpleBg}
        btns={btnsProps}
        id={id}
        mediaType={mediaType}
        isPlayWindow={isPlayWindow}
      />
      <TextAtom text={pageName} type={"PAGE"} />
    </>
  );
};
export default Hero;
