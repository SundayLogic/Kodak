import { useEffect, useState } from "react";
import { IndividualContentProps, Trailer } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import links from "../../../utils/links";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
import VideoPlayerWindow from "../../organisms/VideoPlayerWIndow";

const MovieTemplate = ({
  content,
  recommended,
  trailers,
  contentId,
}: IndividualContentProps) => {
  const [isVideoPlayer, setIsVideoPlayer] = useState<boolean>(false);
  const changePlayer = () => setIsVideoPlayer(!isVideoPlayer);
  const [videoKey, setVideoKey] = useState<string>("");
  const youtubeUrl = `${links.urls.youtubeSearch}${videoKey}`;
  useEffect(() => {
    const findKey = () =>
      trailers
        .filter((trailer: Trailer) => trailer.name === "Official Trailer" || trailer.name === "Trailer")
        .map((trailer: Trailer) => trailer.key);
    if (trailers.length === 0) {
      return setVideoKey("rPleicjySdI");
    } else if (findKey().length >= 1) {
      return setVideoKey(findKey()[0]);
    } else {
      return setVideoKey(trailers[0].key);
    }
  }, []);
  const btnsProps = {
    info: false,
    play: true,
    add: true,
  };
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
        isPlayWindow={changePlayer}
      />
      {isVideoPlayer ? (
        <VideoPlayerWindow
          closePlayer={changePlayer}
          isOpen={isVideoPlayer}
          videoLink={youtubeUrl}
        />
      ) : null}
      <ContentSlider
        sliderName={"Recommended Movies"}
        contentResults={randomContentSlider(recommended?.upcoming)}
      />
    </>
  );
};
export default MovieTemplate;
