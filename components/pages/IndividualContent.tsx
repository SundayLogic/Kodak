import { useEffect, useState } from "react";
import YouTubePlayer from "react-player/youtube";
import { Serie, Movie, Trailer} from "../../typings";
import links from "../../utils/links";
import MovieTemplate from "../templates/content/MovieTemplate";
import SerieTemplate from "../templates/content/SerieTemplate";
type ContentType = "tv" | "movie";

interface IndividualContentProps {
  contentType: ContentType;
  content: Serie | Movie;
  trailers: Trailer[];
  recommended: {
    popular: (Serie | Movie)[] | undefined;
    topRated: (Serie | Movie)[] | undefined;
    airing?: Serie[] | undefined;
    upcoming?: Movie[] | undefined;
  };
  contentId: number;
}
const IndividualContent = ({
  content,
  trailers,
  recommended,
  contentType,
  contentId,
}: IndividualContentProps) => {
  return (
    <>
      {contentType === "movie" ? (
        <MovieTemplate
          content={content}
          trailers={trailers}
          recommended={recommended}
          contentId={contentId}
        />
      ) : (
        <SerieTemplate
          content={content}
          trailers={trailers}
          recommended={recommended}
          contentId={contentId}
        />
      )}
    </>
  );
};
export default IndividualContent;
