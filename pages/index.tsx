import Head from "next/head";
import TextAtom from "../components/atoms/Text/TextAtom";
import HomePage from "../components/pages/HomePage";
import { Movie, Serie } from "../typings";
import requests from "../utils/requests/requests";

interface HomeProps {
  trending: (Serie | Movie)[];
  moviesPopular: Movie[];
  moviesTopRated: Movie[];
  seriesPopular: Serie[];
  seriesTopRated: Serie[];
}
const Home = ({
  trending,
  moviesPopular,
  moviesTopRated,
  seriesPopular,
  seriesTopRated,
}: HomeProps) => {
  const homeProps = {
    trending: trending,
    moviesPopular: moviesPopular,
    moviesTopRated: moviesTopRated,
    seriesPopular: seriesPopular,
    seriesTopRated: seriesTopRated,
  };
  return (
    <div>
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main>
        <HomePage props={homeProps} />
        <h1>{homeProps.trending[0]?.backdrop_path}</h1>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const [
    trending,
    moviesPopular,
    moviesTopRated,
    seriesPopular,
    seriesTopRated,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchMoviesPopular).then((res) => res.json()),
    fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
    fetch(requests.fetchSeriesPopular).then((res) => res.json()),
    fetch(requests.fetchSeriesTopRated).then((res) => res.json()),
  ]);
  return {
    props: {
      trending: trending.results,
      moviesPopular: moviesPopular.results,
      moviesTopRated: moviesTopRated.results,
      seriesPopular: seriesPopular.results,
      seriesTopRated: seriesTopRated.results,
    },
  };
};
