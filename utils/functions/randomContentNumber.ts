import { Movie, Serie} from "../../typings";
import { useState, useEffect } from "react";
const randomContentNumber = (content:(Serie|Movie)[], time:number) => {
    const [bgNumber, setBgNumber] = useState<number>(0)
    let myNum = bgNumber;
    useEffect(() => {
        setTimeout(() => { setBgNumber(Math.floor(Math.random() *  content.length))
        },time)

    })
    return myNum;
}
export default randomContentNumber;