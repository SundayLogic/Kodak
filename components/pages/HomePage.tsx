import { HomeProps } from "../../typings";
import HomeTemplate1 from "../templates/home/HomeTemplate1";

const HomePage = ({results}:any) => {
    return(
        <>
            <HomeTemplate1 results={results}/>
        </> 
        )
};
export default HomePage;