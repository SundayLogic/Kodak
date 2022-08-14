import Image from "next/image";
interface ImageAtomProps {
  src: string;
  w?:number | string;
  h?:number | string;
  alt:string
}
const ImageAtom = ({ src, w, alt, h}: ImageAtomProps) => {
  return (
    <Image 
        src={src}
        alt={alt}
        width={w}
        height={h}
    />
  );
};
export default ImageAtom;