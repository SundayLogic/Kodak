import Box from "../molecules/Box";

const SubscriptionBox = () => {
    return(
        <div className="flex-col items-center justify-center space-y-7">
            <Box text={"Base"} price={"14.99"}/>
            <Box text={"Mid"} price={"19.99"}/>
            <Box text={"High"} price={"24.99"}/>
        </div>
    );
};
export default SubscriptionBox;