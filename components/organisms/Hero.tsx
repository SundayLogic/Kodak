import Backdrop from "../atoms/images/Backdrop";
import TextAtom from "../atoms/Text/TextAtom";
import ContentDescription from "./ContentDescription";

interface HeroProps {
  backdrop: string;
  title: string;
  overview: string;
  btns?: boolean;
  pageName?: string;
  purpleBg?: boolean;
  purpleTitleBg?: boolean;
}
const Hero = ({ backdrop, title, overview, pageName , purpleBg, purpleTitleBg}: HeroProps) => {
  return (
    <>
      <Backdrop
        image={backdrop}
        quality={100}
        height={"h-[40vh] md:h-[60vh] lg:h-[70vh]"}
      />
      <ContentDescription title={title} overview={overview} purpleBg={purpleBg} purpleTitleBg={purpleTitleBg}/>
      <TextAtom text={pageName} type={"PAGE"} />
    </>
  );
};
export default Hero;
