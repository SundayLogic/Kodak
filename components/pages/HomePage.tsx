import { HomeProps } from "../../typings";
import HomeTemplate1 from "../templates/home/HomeTemplate1";

const HomePage = ({props}:any) => {
    return(
        <>
            <h1>{props.trending[0].title}</h1>
        </> 
        )
};
export default HomePage;