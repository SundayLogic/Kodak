import Image from "next/image";
import links from "../../../utils/links";
interface BackdropProps {
  image: string;
  quality: number;
  height?: string;
}
const Backdrop = ({ image, quality, height}: BackdropProps) => {
  const imgUrl = `${links.urls.dbImage}${image}`
  return (
    <div className={`absolute top-0 left-0 w-screen shadow-2xl -z-10 ${height}`}>
      <Image 
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          quality={quality}
          className="absolute opacity-50 md:opacity-60"
      />

    </div>
  );
};
export default Backdrop;