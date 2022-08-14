import {ContentType} from "../../typings"
import links from "../../utils/links";
import LinkAtom from "../atoms/Btns/LinkAtom";
import ImageAtom from "../atoms/images/ImageAtom";
interface ContentThumbnailProps {
    contentId: number;
    image: string;
    contentType: ContentType;
}
const ContentThumbnail = ({image, contentType, contentId}:ContentThumbnailProps) => {
    const thumbnailImage = `${links.urls.dbImage}/${image}`;
    const thumbnailGenerator = () =>
        <div className="relative min-w-[181px] min-h-[266.5px] md:min-w-[228px] lg:min-w-[248px] lg:min-h-[362px]  md:min-h-[342px]  cursor-pointer opacity-95 hover:opacity-100 hover:scale-110 transition-all duration-150 ease-in-out hover:saturate-200 flex items-center rounded-md  drop-shadow-xl hover:drop-shadow-2xl  -z-9 ">
            <ImageAtom src={thumbnailImage} alt={"contentImage"}  w={181} h={266.5}/>
        </div>
    return <LinkAtom reference={`/${contentType}/${contentId}`} content={thumbnailGenerator()}/>;
};
export default ContentThumbnail;