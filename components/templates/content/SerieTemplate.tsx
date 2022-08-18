import { useState, useEffect } from "react";
import { IndividualContentProps, Trailer } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import links from "../../../utils/links";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
import VideoPlayerWindow from "../../organisms/VideoPlayerWIndow";
const SerieTemplate = ({
  content,
  recommended,
  trailers,
}: IndividualContentProps) => {
  const btnProps = {
    info: false,
    add: true,
    play: true,
  };
  const [isVideoPlayer, setIsVideoPlayer] = useState<boolean>(false);
  const changePlayer = () => setIsVideoPlayer(!isVideoPlayer);
  let [videoKey, setVideoKey] = useState<string>("");
  let youtubeUrl = `${links.urls.youtubeSearch}${videoKey}`;

  useEffect(() => {
    const findKey = () =>
      trailers
        ?.filter((e: Trailer) => e.type === "Official Trailer" || e.type === "Trailer")
        .map((e: Trailer) => e.key);
    if (trailers?.length === 0) {
      return setVideoKey("rPleicjySdI");
    } else if (findKey()?.length >= 1) {
      return setVideoKey(findKey()[0]);
    } else {
      return setVideoKey(trailers?.[0].key);
    }
  });
  const btnsProps = {
    info: false,
    play: true,
    add: true,
  };
  console.log(trailers)
  return (
    <>
      <Header />
      <Backdrop
        image={content?.backdrop_path}
        quality={100}
        height={"h-[100vh]"}
      />
      <Hero
        title={content?.name}
        overview={content?.overview}
        btns={btnsProps}
        id={content.id}
        mediaType={content.media_type}
        isPlayWindow={changePlayer}
      />
      <ContentSlider
        sliderName={"Recommended Series"}
        contentResults={randomContentSlider(recommended.airing)}
      />
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
export default SerieTemplate;
