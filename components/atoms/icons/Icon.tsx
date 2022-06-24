import React from "react";
interface Props{
    icon:string|number,
}
const Icon = ({icon}:Props) => {
    return(
        <div>
            <h1>{icon} icon</h1>
        </div>
    );
};
export default Icon;