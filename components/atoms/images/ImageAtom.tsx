import Image from "next/image";
import links from "../../../pages/utils/links";
interface ImageAtomProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  fill?: boolean;
  quality: number;
}
const ImageAtom = ({ src, alt, w, h, fill, quality }: ImageAtomProps) => {
  const fillChecker = () =>
    fill ? (
      <Image src={src} alt={alt} layout="fill" quality={quality}/>
    ) : (
      <Image src={src} alt={alt} width={w} height={h} quality={quality}/>
    );
  return fillChecker() ;
};
export default ImageAtom;
