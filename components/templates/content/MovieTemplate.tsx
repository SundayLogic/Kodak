import { useEffect, useState } from "react";
import { IndividualContentProps, Trailer } from "../../../typings";
import fetchTrailerKey from "../../../pages/utils/functions/fetchTrailerKey";
import randomContentSlider from "../../../pages/utils/functions/RandomContent";
import reloadPage from "../../../pages/utils/functions/reloadPage";
import links from "../../../pages/utils/links";
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
  let [videoKey, setVideoKey] = useState<any>("");
  let youtubeUrl = `${links.urls.youtubeSearch}${videoKey}`;
  useEffect(() => {
    const findKey = () =>
      trailers
        .filter(
          (trailer: Trailer) =>
            trailer.name === "Official Trailer" || trailer.name === "Trailer"
        )
        .map((trailer: Trailer) => trailer.key);
    if (trailers.length === 0) {
      return setVideoKey("rPleicjySdI");
    } else if (findKey().length >= 1) {
      return setVideoKey(findKey()[0]);
    } else {
      return setVideoKey(trailers[0].key);
    }
  });
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
      <div className="pt-8 md:pt-0">
        <Hero
          title={content?.title}
          overview={content?.overview}
          btns={btnsProps}
          id={content.id}
          mediaType={content.media_type}
          isPlayWindow={changePlayer}
        />
      </div>
      <div className="mt-20 md:mt-0">
        <ContentSlider
          sliderName={"Recommended Movies"}
          contentResults={randomContentSlider(recommended?.upcoming)}
        />
      </div>
      {isVideoPlayer ? (
        <VideoPlayerWindow
          closePlayer={changePlayer}
          isOpen={isVideoPlayer}
          videoLink={youtubeUrl}
        />
      ) : null}
    </>
  );
};
export default MovieTemplate;
