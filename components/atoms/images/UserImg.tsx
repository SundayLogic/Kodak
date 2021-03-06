import Image from "next/image";
interface Props{
    w:number,
    h:number
}
const UserImg = ({w,h}:Props) =>{
    const pictureUrl = "https://i.pinimg.com/564x/42/13/ca/4213ca952ed901ed414210a1fb36f30a.jpg";
    return(
        <div className="p-1 cursor-pointer min-w-[50px] opacity-90 hover:opacity-100 transition-all duration-200 ease-out">
            <Image
                className="rounded-full"
                src={pictureUrl}
                alt="User image"
                width={w}
                height={h}
            />
        </div>
    );
};
export default UserImg;
