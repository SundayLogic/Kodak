import TrendingPage from "../components/pages/TrendingPage";
import {Movie, Serie} from "../typings";
import requests from "../utils/requests/requests";

interface TrendingProps{
  trending: (Serie | Movie)[];
  popularMovies: Movie[];
  popularSeries: Serie[];
}
const trending = ({ trending, popularMovies, popularSeries }: TrendingProps) => {
  const trendingProps= {
    trending,
    popularMovies,
    popularSeries,
  };
  return (
    <>
        <TrendingPage props={trendingProps}/>
    </>
  );
};

export default trending;

export const getServerSideProps = async () => {
  const [
    trending,
    moviesPopular,
    seriesPopular,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchSeriesPopular).then((res) => res.json()),
  ]);
  return {
    props: {
      trending: trending.results,
      popularMovies: moviesPopular.results,
      popularSeries: seriesPopular.results,
    },
  };
};
