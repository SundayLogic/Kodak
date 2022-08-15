import IndividualContentPage from "../../components/pages/IndividualContentPage";
import { Movie } from "../../typings";
import requests from "../../utils/requests/requests";
interface movieProps {
  moviesPopular: Movie[];
  moviesTopRated: Movie[];
  moviesUpcoming: Movie[];
}
const movie= ({
  moviesPopular,
  moviesTopRated,
  moviesUpcoming,
}:movieProps) => {
  const movieProps = {
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

export const getServerSideProps = async () => {
  const [
    moviesPopular,
    moviesTopRated,
    moviesUpcoming,
  ] = await Promise.all([
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
    fetch(requests.fetchMoviesUpcoming).then((res) => res.json()),
  ]);
  return {
    props: {
      moviesPopular: moviesPopular.results,
      moviesTopRated: moviesTopRated.results,
      moviesUpcoming: moviesUpcoming.results,
    },
  };
};
