import React from "react";
interface Props{
    w: number,
    h: number,
}
const KodakIcon = ({w,h}:Props) =>{
    return(
        <div className="flex items-center h-4 p-3 font-black bg-purple-500 cursor-pointer">
            <h1>Kodak</h1>
        </div>
    );
};
export default KodakIcon;
