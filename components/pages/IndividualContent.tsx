import { Serie, Movie, Trailer} from "../../typings";
import MovieTemplate from "../templates/content/MovieTemplate";
import SerieTemplate from "../templates/content/SerieTemplate";
type ContentType = "tv" | "movie";

interface IndividualContentProps {
  contentType: ContentType;
  content: Serie | Movie;
  videos: Trailer[];
  recommended: {
    popular: (Serie | Movie)[] | undefined;
    topRated: (Serie | Movie)[] | undefined;
    airing?: Serie[] | undefined;
    upcoming?: Movie[] | undefined;
  };
}
const IndividualContent = ({
  content,
  videos,
  recommended,
  contentType,
}: IndividualContentProps) => {
  return (
    <>
      {contentType === "movie" ? (
        <MovieTemplate
          content={content}
          videos={videos}
          recommended={recommended}
        />
      ) : (
        <SerieTemplate
          content={content}
          videos={videos}
          recommended={recommended}
        />
      )}
    </>
  );
};
export default IndividualContent;
