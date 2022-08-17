import { useState } from "react";
import { IndividualContentProps } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import useYoutubeTrailer from "../../../utils/hooks/useYoutubeTrailer";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
import VideoPlayerWindow from "../../organisms/VideoPlayerWIndow";

const MovieTemplate = ({
  content,
  trailers,
  recommended,
}: IndividualContentProps) => {
  const btnsProps = {
    info: false,
    play: true,
    add: true,
  };
  const [isVideoPlayer, setIsVideoPlayer] = useState<boolean>(false)
  const changePlayer = () => setIsVideoPlayer(!isVideoPlayer);
  return (
    <>
      <Header />
      <Backdrop
        image={content?.backdrop_path}
        quality={100}
        height={"h-[100vh]"}
      />
      <Hero
        title={content?.title}
        overview={content?.overview}
        btns={btnsProps}
        id={content.id}
        mediaType={content.media_type}
      />
      <button onClick={() => changePlayer()}>Open</button>
      <ContentSlider
        sliderName={"Recommended Movies"}
        contentResults={randomContentSlider(recommended?.upcoming)}
      />
      {isVideoPlayer ? <VideoPlayerWindow closePlayer={changePlayer}/> : null}
    </>
  );
};
export default MovieTemplate;
