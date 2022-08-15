import { Movie, MovieTrailer } from "../../typings";
import ContentTemplate1 from "../templates/content/ContentTemplate1";

interface IndividualContentPageProps {
  props: {
    movie: Movie;
    trailers: MovieTrailer[];
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    moviesUpcoming: Movie[];
  };
}
const IndividualContentPage = (props: IndividualContentPageProps) => {
  const individualContentProps= {
    movie: props.props.movie,
    trailers: props.props.trailers,
    moviesPopular: props.props.moviesPopular,
    moviesTopRated: props.props.moviesTopRated,
    moviesUpcoming: props.props.moviesUpcoming,
  };
  return (
    <>
      <ContentTemplate1 props={individualContentProps}/>
    </>
  );
};
export default IndividualContentPage;
