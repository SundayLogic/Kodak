import Head from "next/head";
import HomePage from "../components/pages/HomePage";
import { HomeProps } from "../typings";
import requests from "../utils/requests/requests";
const Home = (props:HomeProps) => {
  return (
    <div>
      <Head>
        <title>Kodak</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main>
        <h1>{props.moviesPopular[0].title}</h1>
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
