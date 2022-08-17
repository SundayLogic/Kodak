import ActionBtnAtom from "../atoms/Btns/ActionBtn";
import VideoPlayer from "../molecules/VideoPlayer";
interface VideoPlayerWindowProps {
  closePlayer: any;
  isOpen: boolean;
  videoLink: string;
}

const VideoPlayerWindow = ({
  closePlayer,
  isOpen,
  videoLink,
}: VideoPlayerWindowProps) => {
  const closeWindowSymbol = () => <h1>X</h1>
  return (
    <div className="h-[100vh] absolute z-20 justify-center flex px-16 bg-slate-900/30  w-[100vw] space-y-6 inset-y-0 items-center">
      <div className="flex flex-col space-y-5">
        <div className="text-end text-7xl text-kodakPurple-0/80 hover:text-white/100 transition-all duration-150 ease-in-out py-2">
          <ActionBtnAtom action={closePlayer} content={closeWindowSymbol()} />
        </div>
        <VideoPlayer url={videoLink} isPlaying={isOpen} />
      </div>
    </div>
  );
};
export default VideoPlayerWindow;
