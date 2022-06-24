import React from "react";
import ImageVideoBtn from "../atoms/buttons/ImageVideoBtn";
const BrandHoverContent= () =>{
    return(
        <div className="flex justify-center p-1 bg-blue-900 space-x-5">
            <ImageVideoBtn brand={"Marvel"}/>
            <ImageVideoBtn brand={"Disney"}/>
            <ImageVideoBtn brand={"Pixar"}/>
            <ImageVideoBtn brand={"Star Wars"}/>
            <ImageVideoBtn brand={"National Geographic"}/>
            <ImageVideoBtn brand={"History"}/>
        </div>
    );
};
export default BrandHoverContent;
