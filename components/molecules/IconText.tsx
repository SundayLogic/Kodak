import React from "react";
import Icon from "../atoms/icons/Icon";
interface Props{
    type:string,
};
const IconText = ({type}:Props) => {
    return(
        <div className="flex flex-col justify-center p-1 text-center bg-red-800 cursor-pointer">
            <Icon icon={type}/>
            <h1>{type}</h1>
        </div>
    );
};
export default IconText;
