import React from "react";
import LogStatus from "../atoms/buttons/LogStatus";
import KodakIcon from "../atoms/icons/KodakIcon";
import IconText from "../molecules/IconText";
import UserLogin from "../molecules/UserLogin";
const Navbar = () => {
  return (
    <div className="bg-red-900 flex items-center">
      <div className="flex space-x-3 justify-center items-center">
        <KodakIcon w={60} h={60}/>
        <IconText type={"Home"}/>
        <IconText type={"Search"}/>
        <IconText type={"Watchlist"}/>
        <IconText type={"Movies"}/>
        <IconText type={"Series"}/>
      </div>
      <div className="flex ml-9 items-center space-x-2">
        <LogStatus status={true}/>
        <UserLogin/>
      </div>
    </div>
  );
};
export default Navbar;
