import { ContentType } from "../../typings";
import links from "../../utils/links";
import ActionBtnAtom from "../atoms/Btns/ActionBtn";
import LinkAtom from "../atoms/Btns/LinkAtom";
import ImageAtom from "../atoms/images/ImageAtom";

interface ContentThumbnailProps {
  contentId: number;
  image: string;
  contentType: string;
  firstAir?: string;
}

const ContentThumbnail = ({
  image,
  contentType,
  contentId,
  firstAir,
}: ContentThumbnailProps) => {
  const mediaType = contentType === "tv" || firstAir ? "tv" : "movie";
  const thumbnailImage = `${links.urls.dbImage}/${image}`;
  const thumbnailGenerator = () => (
    <div className="min-w-[181px] min-h-[266.5px] md:min-w-[228px] lg:min-w-[248px] lg:min-h-[362px]  md:min-h-[342px]  cursor-pointer opacity-95 hover:opacity-100 hover:scale-110 transition-all duration-150 ease-in-out hover:saturate-200 flex items-center rounded-md  drop-shadow-md hover:drop-shadow-2xl  ">
      <ImageAtom src={thumbnailImage} alt={"contentImage"} fill quality={1} />
    </div>
  );
  return (
    <LinkAtom
      reference={`/${mediaType}/${contentId}`}
      content={thumbnailGenerator()}
    />
  );
};
export default ContentThumbnail;
