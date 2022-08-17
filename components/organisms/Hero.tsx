import { useState } from "react";
import { ContentType, Trailer } from "../../typings";
import useYoutubeTrailer from "../../utils/hooks/useYoutubeTrailer";
import Backdrop from "../atoms/images/Backdrop";
import TextAtom from "../atoms/Text/TextAtom";
import ContentDescription from "./ContentDescription";
import VideoPlayerWindow from "./VideoPlayerWindow";

interface HeroProps {
  backdrop?: string | undefined;
  title: string | undefined;
  overview: string | undefined;
  pageName?: string;
  purpleBg?: boolean;
  purpleTitleBg?: boolean;
  btns: {
    play?: boolean | undefined;
    info?: boolean;
    add: boolean;
  };
  id:number
  mediaType: string;
  playProps?: {
    active: boolean;
    changePlay: any;
  }
}
const Hero = ({
  backdrop,
  title,
  overview,
  pageName,
  purpleBg,
  purpleTitleBg,
  btns,
  id,
  mediaType,
  playProps,
}: HeroProps) => {
  const btnsProps = {
    info: btns.info,
    add: btns.add,
    play: btns.play
  }
  return (
    <>
      <Backdrop
        image={backdrop}
        quality={100}
        height={"h-[40vh] md:h-[60vh] lg:h-[64vh]"}
      />
      <ContentDescription
        title={title}
        overview={overview}
        purpleBg={purpleBg}
        purpleTitleBg={purpleTitleBg}
        btns={btnsProps}
        id={id}
        mediaType={mediaType}
        playWindow={playProps?.changePlay}
        activeWindow={playProps?.active}
      />
      <TextAtom text={pageName} type={"PAGE"} />
    </>
  );
};
export default Hero;
