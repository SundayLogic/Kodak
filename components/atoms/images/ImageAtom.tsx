import Image from "next/image";
import links from "../../../utils/links";
interface ImageAtomProps {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  fill?: boolean;
}
const ImageAtom = ({ src, alt, w, h, fill }: ImageAtomProps) => {
  const fillChecker = () =>
    fill ? (
      <Image src={src} alt={alt} layout="fill" />
    ) : (
      <Image src={src} alt={alt} width={w} height={h} />
    );
  return fillChecker() ;
};
export default ImageAtom;
