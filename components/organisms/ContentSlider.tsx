import React from "react";
import ContentBtn from "../molecules/ContentBtn";
interface Props{
    type:string
}
const ContentSlider = ({type}:Props) =>{
    return(
        <div className="flex flex-col items-start">
            <div className="text-xl">
                <h1>{type}</h1>
            </div>
            <div className="flex items-center justify-start p-1 bg-purple-700 space-x-3">
                <ContentBtn content={type}/>
                <ContentBtn content={type}/>
                <ContentBtn content={type}/>
                <ContentBtn content={type}/>
                <ContentBtn content={type}/>
                <ContentBtn content={type}/>
            </div>
        </div>
    );
};
export default ContentSlider;
