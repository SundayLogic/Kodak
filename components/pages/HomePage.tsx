import { HomeProps } from "../../typings";
import HomeTemplate1 from "../templates/home/HomeTemplate1";

const HomePage = (props:any) => {
    return(
        <>
            <HomeTemplate1 results={props.results}/>
        </> 
        )
};
export default HomePage;