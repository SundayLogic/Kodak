import { Movie, Serie} from "../../../typings";

const randomContentSlider = (slider:(Movie|Serie)[] | undefined) => slider?.sort((a,b) => 0.5 - Math.random())

export default randomContentSlider;