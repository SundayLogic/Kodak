import { PageTrendingProps } from "../../typings";
import TrendingPageTemplate from "../templates/trending/TrendingTemplate";

const TrendingPage = (props:PageTrendingProps) => {

  const trendingProps = {
    trending: props.props.trending,
    popularMovies: props.props.popularMovies,
    popularSeries: props.props.popularSeries,
  };
    return(
        <>
            <TrendingPageTemplate props={trendingProps}/>
        </> 
        );
};
export default TrendingPage;