import { Movie, Serie} from "../../typings";
import { useState } from "react";
const randomContentNumber = (content:(Movie|Serie)[], time:number) => {
    const [number, setNumber] = useState<number>(0)
    setTimeout(() => {
        setNumber(Math.floor(Math.random() * content.length))
    }, time)
    return number;
}
export default randomContentNumber;