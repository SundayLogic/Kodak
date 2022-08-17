import { ContentPageProps, PageMovieProps } from "../../typings";
import MoviesTemplate1 from "../templates/movies/MoviesTemplate1";

const MoviesPage = ({ topRated, upcoming, popular}: PageMovieProps) => {
  return (
    <>
      <MoviesTemplate1
        topRated={topRated}
        upcoming={upcoming}
        popular={popular}
      />
    </>
  );
};
export default MoviesPage;
