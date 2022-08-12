import Image from "next/image";
interface ImageAtomProps {
  src: string;
  w?:number;
  h?:number;
  alt:string
}
const ImageAtom = ({ src, w, alt, h}: ImageAtomProps) => {
  return (
    <Image 
        src={src}
        width={w}
        alt={alt}
        height={h}
    />
  );
};
export default ImageAtom;