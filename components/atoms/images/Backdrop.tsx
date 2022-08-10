import Image from "next/image";
interface BackdropProps {
  src: string;
  w:number;
  h?:number;
}
const Backdrop = ({ src, w, h}: BackdropProps) => {
  return (
    <Image 
        src={src}
        width={w}
    />
  );
};
export default Backdrop;