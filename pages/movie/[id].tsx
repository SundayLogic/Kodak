import IndividualContentPage from "../../components/pages/IndividualContentPage";
import { Movie, MovieTrailer } from "../../typings";
import links from "../../utils/links";
import requests from "../../utils/requests/requests";
interface movieProps {
  movie: Movie;
  trailers: MovieTrailer[];
  moviesPopular: Movie[];
  moviesTopRated: Movie[];
  moviesUpcoming: Movie[];
}
const movie= ({
  movie,
  trailers,
  moviesPopular,
  moviesTopRated,
  moviesUpcoming,
}:movieProps) => {
  console.log(movie)
  const movieProps = {
    movie: movie,
    trailers: trailers,
    moviesPopular: moviesPopular,
    moviesTopRated: moviesTopRated,
    moviesUpcoming: moviesUpcoming,
  };
  return (
    <>
      <IndividualContentPage props={movieProps}/>
    </>
  );
};
export default movie;

export const getServerSideProps = async (context:any) => {
  const {id} = context.query;
  const movieTrailer = `${links.urls.dbMovie}${id}${links.urls.dbMovieVideosKey}`
  const movieUrl = `${links.urls.dbMovie}${id}${links.urls.dbKey}`
  const [
    movie,
    trailers,
    moviesPopular,
    moviesTopRated,
    moviesUpcoming,
  ] = await Promise.all([
    fetch(movieUrl).then((res) => res.json()),
    fetch(movieTrailer).then((res) => res.json()),
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
    fetch(requests.fetchMoviesUpcoming).then((res) => res.json()),
  ]);
  return {
    props: {
      movie: movie,
      trailers: trailers.results,
      moviesPopular: moviesPopular.results,
      moviesTopRated: moviesTopRated.results,
      moviesUpcoming: moviesUpcoming.results,
    },
  };
};
