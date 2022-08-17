import { useState, useCallback, useEffect } from "react";
import { IndividualContentProps } from "../../../typings";
import randomContentSlider from "../../../utils/functions/RandomContent";
import links from "../../../utils/links";
import Backdrop from "../../atoms/images/Backdrop";
import ContentSlider from "../../organisms/ContentSlider";
import Header from "../../organisms/Header";
import Hero from "../../organisms/Hero";
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
  const [videoKey, setVideoKey] = useState<any>([]);
  const youtubeUrl = `${links.urls.youtubeSearch}${videoKey}`;
  useEffect(() => {
    const findKey = (search: string) =>
      trailers.filter((e: any) => e.type === search).map((e: any) => e.key);
    if (trailers.length === 0) {
      return setVideoKey("rPleicjySdI");
    } else if (findKey("Official Trailer").length >= 1) {
      return setVideoKey(findKey("Official Trailer")[0]);
    } else if (findKey("Trailer").length >= 1) {
      return setVideoKey(findKey("Trailer")[0]);
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
        isPlayWindow={youtubeUrl}
      />
      <ContentSlider
        sliderName={"Recommended Series"}
        contentResults={randomContentSlider(recommended?.popular)}
      />
    </>
  );
};
export default SerieTemplate;
