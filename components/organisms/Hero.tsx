import Backdrop from "../atoms/images/Backdrop";
import TextAtom from "../atoms/Text/TextAtom";
import ContentDescription from "./ContentDescription";

interface HeroProps {
  backdrop: string;
  title: string;
  overview: string;
  btns?: boolean;
  page?: string;
}
const Hero = ({ backdrop, title, overview, page }: HeroProps) => {
  return (
    <>
      <Backdrop
        image={backdrop}
        quality={100}
        height={"h-[40vh] md:h-[60vh] lg:h-[70vh]"}
      />
      <ContentDescription title={title} overview={overview} />
      <TextAtom text={page} type={"PAGE"} />
    </>
  );
};
export default Hero;
