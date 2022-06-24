import React from "react";
interface Props{
    image: string
};
const ContentImage = ({image}:Props) => {
    return(
        <div>
            <h1>{image}</h1>
        </div>
    );
};
export default ContentImage;