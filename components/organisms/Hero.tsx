interface HeroProps{
  text: string;
}
const Hero = ({ text}: HeroProps) => {
  return <>{text}</>
};
export default Hero;