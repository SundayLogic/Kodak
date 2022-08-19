import TextAtom from "../atoms/Text/TextAtom";

interface BoxProps {
    price: string;
    text: string;
}
const Box = ({price, text}:BoxProps) => {
    return(
        <div className="bg-kodakPurple-8/50 flex-col opacity-90 max-w-[32vw] px-3 rounded-lg justify-center hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer hover:text-kodakPurple-0 hover:opacity-100 hover:bg-kodakPurple-7/90">
            <div className="pt-3">
                <TextAtom text={text} type={"OVERVIEW"}/>
            </div>
            <div className="flex  justify-center items-center ">
                <TextAtom text={price} type={"TITLE"}/>
                <TextAtom text={"$/month"} type={"OVERVIEW"}/>
            </div>
        </div>
    );
};
export default Box;