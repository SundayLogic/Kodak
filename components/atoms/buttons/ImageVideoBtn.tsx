import React from "react";
interface Props{
    brand:string|number,
}
const ImageVideoBtn = ({brand}:Props) =>{
    return(
        <div className="p-2 bg-blue-700 cursor-pointer">
            <h1>{brand}</h1>
        </div>
    );
};
export default ImageVideoBtn;
