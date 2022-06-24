import React from "react";
import ContentImage from "../atoms/images/ContentImage";
interface Props{
    seriesName: string,
    seriesImage: string
}
const SeriesBtn = ({seriesName, seriesImage}:Props) =>{
    return(
        <div>
            <ContentImage image={seriesImage}/>
            <h1>{seriesName}</h1>
        </div>
    );
};
export default SeriesBtn; 