import Backdrop from "../atoms/images/Backdrop";
import ContentDescription from "./ContentDescription";

interface HeroProps{
  backdrop: any;
  title: any;
  overview: any;
  page?: any;
}
const Hero = ({backdrop, title, overview, page}:HeroProps) => {
  return (
    <>
      <Backdrop image={backdrop} quality={100} height={"h-[60vh]"}/>
      <ContentDescription title={title} overview={overview}/>
    </>
  );
};
export default Hero;