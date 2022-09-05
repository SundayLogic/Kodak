import MoviesPage from "../../components/pages/MoviesPage";
import { Movie} from "../../typings";
import requests from "../utils/requests/requests";

interface MoviePageProps {
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
const movies = ({ popular, topRated, upcoming }: MoviePageProps) => {
  const moviesProps = {
    popular: popular,
    topRated: topRated,
    upcoming: upcoming,
  };
  return (
    <>
      <MoviesPage props={moviesProps} />
    </>
  );
};

export default movies;

export const getServerSideProps = async () => {
  const [popular, topRated, upcoming] = await Promise.all([
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
    fetch(requests.fetchMoviesUpcoming).then((res) => res.json()),
  ]);
  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      upcoming: upcoming.results,
    },
  };
};
