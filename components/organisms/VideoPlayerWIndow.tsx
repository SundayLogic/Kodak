import ActionBtnAtom from "../atoms/Btns/ActionBtn";

interface VideoPlayerWindowProps {
    closePlayer: any
}

const VideoPlayerWindow = ({closePlayer}:VideoPlayerWindowProps) => {
  const closeWindowSymbol = () => <h1>X</h1>
  return (
    <div className="h-[100vh] absolute z-20 justify-center flex px-16 bg-slate-900/30  w-[100vw] space-y-6 inset-y-0 items-center">
      <div className="flex flex-col space-y-5">
        <div className="text-end text-4xl text-slate-200/90 hover:opacity-100 transition-all duration-150 ease-in-out hover:text-white py-2 ">
            <ActionBtnAtom action={closePlayer} content={closeWindowSymbol()}/>
        </div>
        <h1>Video Window</h1>
      </div>
    </div>
  );
};
export default VideoPlayerWindow;
