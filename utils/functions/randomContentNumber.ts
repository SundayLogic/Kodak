import { Movie, Serie} from "../../typings";
import { useState } from "react";
const randomContentNumber = (content: any , time:number) => {
    let contentNumber;
    setTimeout(() => {
        contentNumber = Math.floor(Math.random() * content.length)
    },time)
    return contentNumber;
}
export default randomContentNumber;