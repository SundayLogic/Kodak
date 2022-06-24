import React from "react";
import MovieBtn from "./MovieBtn";
import SeriesBtn from "./SeriesBtn";
interface Props{
    content: string
}
const ContentBtn = ({content}:Props) =>{
    return(
        <div className="bg-purple-900">
            {content === "Movie"||"movie" ? <MovieBtn movieImage={content} movieName={content}/> 
            : <SeriesBtn seriesImage={content} seriesName={content}/>}
        </div>
    );
};
export default ContentBtn;