interface Props{
    status: boolean
}
const LogStatus = ({status}:Props) =>{
    return(
        <div className="p-2 cursor-pointer">
            {
                status === true 
                ? 
                    <div className="flex p-2 text-white bg-black h-fit rounded-md">
                        <h1>Logged</h1>
                    </div> 
                : 
                    <div className="p-2 text-black bg-white h-fit rounded-md">
                        <h1>Log In</h1>
                    </div>
            }
        </div>
    );
};
export default LogStatus;
