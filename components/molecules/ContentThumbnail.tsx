interface ContentThumbnailProps {
    image: string;
}
const ContentThumbnail = ({image}:ContentThumbnailProps) => {
    return(
        <h1>{image}</h1>
    );
};
export default ContentThumbnail;