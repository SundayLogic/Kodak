import { ContentType } from "../../typings";
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
  contentData?: {
    id: number;
    mediaType: string;
  }
}
const Hero = ({
  backdrop,
  title,
  overview,
  pageName,
  purpleBg,
  purpleTitleBg,
  btns,
  contentData,
}: HeroProps) => {
  const btnsProps = {
    info: btns.info,
    add: btns.add,
    play: btns.play
  }
  return (
    <>
      <Backdrop
        image={backdrop}
        quality={100}
        height={"h-[40vh] md:h-[60vh] lg:h-[64vh]"}
      />
      <ContentDescription
        title={title}
        overview={overview}
        purpleBg={purpleBg}
        purpleTitleBg={purpleTitleBg}
        btns={btnsProps}
        id={contentData?.id}
        mediaType={contentData?.mediaType}
      />
      <TextAtom text={pageName} type={"PAGE"} />
    </>
  );
};
export default Hero;
