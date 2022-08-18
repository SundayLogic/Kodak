import { PageMovieProps } from "../../typings";
import MoviesPageTemplate from "../templates/movies/MoviesTemplate";

const MoviesPage = (props: PageMovieProps) => {
  const moviesProps = {
    popular: props.props.popular,
    topRated: props.props.topRated,
    upcoming: props.props.upcoming,
  };
  return (
    <>
      <MoviesPageTemplate props={moviesProps} />
    </>
  );
};
export default MoviesPage;
