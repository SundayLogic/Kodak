import React from "react";
import ContentImage from "../atoms/images/ContentImage";
interface Props{
    movieName: string,
    movieImage: string
}
const MovieBtn= ({movieName, movieImage}:Props) =>{
    return(
        <div className="cursor-pointer">
            <ContentImage image={movieImage + " Image"}/>
            <h1>{movieName} Name</h1>
        </div>
    );
};
export default MovieBtn; 
