import { PageSeriesProps } from "../../typings";
import SeriesTemplate from "../templates/series/SeriesTemplate";

const SeriesPage = (props: PageSeriesProps) => {
  const seriesProps = {
    popular: props.props.popular,
    topRated: props.props.topRated,
    airing: props.props.airing,
  };
  return (
    <>
      <SeriesTemplate props={seriesProps}/>
    </>
  );
};
export default SeriesPage;
