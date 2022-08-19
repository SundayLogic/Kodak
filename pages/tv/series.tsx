import Footer from "../../components/organisms/Footer";
import MoviesPage from "../../components/pages/MoviesPage";
import SeriesPage from "../../components/pages/SeriesPage";
import { Serie} from "../../typings";
import requests from "../../utils/requests/requests";

interface SeriePageProps{
  popular: Serie[];
  topRated: Serie[];
  airing: Serie[];
}
const series = ({ popular, topRated, airing}: SeriePageProps) => {
  const seriesProps = {
    popular: popular,
    topRated: topRated,
    airing: airing,
  };
  return (
    <>
      <SeriesPage props={seriesProps}/>
      <Footer />
    </>
  );
};

export default series;

export const getServerSideProps = async () => {
  const [popular, topRated, airignToday] = await Promise.all([
    fetch(requests.fetchSeriesPopular).then((res) => res.json()),
    fetch(requests.fetchSeriesTopRated).then((res) => res.json()),
    fetch(requests.fetchSeriesAiringToday).then((res) => res.json()),
  ]);
  return {
    props: {
      popular: popular.results,
      topRated: topRated.results,
      airing: airignToday.results,
    },
  };
};
