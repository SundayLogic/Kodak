import {useEffect, useState} from "react";
const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = global;
    return{
        width, height
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
    useEffect(() => {
        function handleSize(){
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, [])
    return windowDimensions;
}
export default useWindowDimensions;