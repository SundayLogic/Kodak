import MoviesPage from "../../components/pages/MoviesPage";
import { PageMovieProps } from "../../typings";
import links from "../../utils/links";
import requests from "../../utils/requests/requests";

const movies = ({props}:PageMovieProps) => {
  return (
    <>
      <MoviesPage content={props}/>
    </>
  );
};
export default movies;
export const getServerSideProps = async () => {
  const [moviesPopular, moviesTopRated, moviesUpcoming] = await Promise.all([
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
    fetch(requests.fetchMoviesUpcoming).then((res) => res.json()),
  ]);
  return {
    props: {
      topRated: moviesPopular?.results,
      popular: moviesTopRated?.results,
      upcoming: moviesUpcoming?.results,
    },
  };
};
