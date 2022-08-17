import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
  isPlaying: boolean;
}
const VideoPlayer = ({ url, isPlaying }: VideoPlayerProps) => {
  return (
    <>
      <ReactPlayer
        url={url}
        width="90vw"
        height="70vh"
        playing={isPlaying}
        volume={0.2}
        controls
      />
    </>
  );
};
export default VideoPlayer;
