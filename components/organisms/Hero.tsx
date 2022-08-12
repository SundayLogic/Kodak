import Backdrop from "../atoms/images/Backdrop";
import ContentDescription from "./ContentDescription";

interface HeroProps{
  text?: string;
}
const Hero = () => {
  const title = "Movie Title";
  const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A totam ducimus deleniti consectetur modi nemo nobis? Tempora suscipit ad aspernatur illo nihil. Aliquid minus similique tempore rem culpa, nesciunt suscipit magnam temporibus minima voluptate placeat eveniet quis. Tempora, minima deserunt!"
  return (
    <>
      <Backdrop />
      <ContentDescription title={title} overview={paragraph}/>
    </>
  );
};
export default Hero;