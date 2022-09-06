import IndividualContent from "../../components/pages/IndividualContent";
import { IndividualContentProps, Trailer } from "../../typings";
import links from "../../utils/links";
import requests from "../../utils/requests/requests";
const movie = ({ content, trailers, recommended, contentId }: IndividualContentProps) => {
  const recommendedProp = {
    popular: recommended?.popular,
    topRated: recommended?.topRated,
    upcoming: recommended?.upcoming,
  };
  return (
    <>
      <IndividualContent
        content={content}
        contentType={"movie"}
        recommended={recommendedProp}
        trailers={trailers}
        contentId={contentId}
      />
    </>
  );
};
export default movie;

export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const movieTrailer = `${links.urls.dbMovie}${id}${links.urls.dbVideosKey}`;
  const movieUrl = `${links.urls.dbMovie}${id}${links.urls.dbKey}`;
  const [movie, trailers, moviesPopular, moviesTopRated, moviesUpcoming] =
    await Promise.all([
      fetch(movieUrl).then((res) => res.json()),
      fetch(movieTrailer).then((res) => res.json()),
      fetch(requests.fetchMoviesPopular).then((res) => res.json()),
      fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
      fetch(requests.fetchMoviesUpcoming).then((res) => res.json()),
    ]);
  return {
    props: {
      contentId: id,
      content: movie,
      trailers: trailers.results,
      recommended: {
        topRated: moviesPopular.results,
        popular: moviesTopRated.results,
        upcoming: moviesUpcoming.results,
      },
    },
  };
};
