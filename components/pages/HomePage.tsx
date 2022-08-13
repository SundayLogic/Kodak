import { Content, Movie, Serie} from "../../typings";
import HomeTemplate1 from "../templates/home/HomeTemplate1";

interface HomeProps {
    props: {
        trending: (Serie | Movie)[];
        moviesPopular: Movie[];
        moviesTopRated: Movie[];
        seriesPopular: Serie[];
        seriesTopRated: Serie[];
    }
}
const HomePage = (props:HomeProps) => {

  const homeProps = {
    trending: props.props.trending,
    moviesPopular: props.props.moviesPopular,
    moviesTopRated: props.props.moviesTopRated,
    seriesPopular: props.props.seriesPopular,
    seriesTopRated: props.props.seriesPopular,
  };
    return(
        <>
            <HomeTemplate1 props={homeProps}/>
        </> 
        );
};
export default HomePage;