import Box from "../molecules/Box";

const SubscriptionBox = () => {
    return(
        <div className="flex-col items-center justify-center space-y-7">
            <Box text={"Basic"} price={"8.99"}/>
            <Box text={"Standard"} price={"12.99"}/>
            <Box text={"Premium"} price={"15.99"}/>
        </div>
    );
};
export default SubscriptionBox;