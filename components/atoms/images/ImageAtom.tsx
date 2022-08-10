import Image from "next/image";
interface ImageAtomProps {
  src: string;
  w:number;
  h?:number;
}
const ImageAtom = ({ src, w, h}: ImageAtomProps) => {
  return (
    <Image 
        src={src}
        width={w}
    />
  );
};
export default ImageAtom;