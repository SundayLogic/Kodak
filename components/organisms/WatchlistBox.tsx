import ImageAtom from "../atoms/images/ImageAtom";
import TextAtom from "../atoms/Text/TextAtom";

const WatchlistBox = () => {
  const message = "Empty...";
  const image =
    "https://i.pinimg.com/originals/bf/2c/9d/bf2c9d58639fff887fbfd2d5d33c0209.jpg";
  return (
    <div className="flex items-center justify-center px-10 py-6  rounded-lg bg-kodakPurple-1.5/5 flex-col space-y-9">
      <TextAtom text={message} type={"TITLE"} />
      <div className="opacity-90 shadow-md">
        <ImageAtom
          src={image}
          w={300}
          h={380}
          alt="Missing-image"
          quality={100}
        />
      </div>
    </div>
  );
};
export default WatchlistBox;
