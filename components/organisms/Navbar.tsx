import React from "react";
import KodakIcon from "../atoms/icons/KodakIcon";
import UserLogin from "../molecules/UserLogin";
import IconNavbar from "../molecules/IconNavbar";
const Navbar = () => {
  return (
    <div className="flex bg-red-900 bottom space-x-20 md:justify-between lg:justify-center">
      <div className="flex items-center space-x-1 md:space-x-4 lg:space-x-[80px]">
        <KodakIcon w={60} h={60} />
        <div className="flex space-x-0.5 items-center md:space-x-2 lg:space-x-4">
          <IconNavbar title={"Home"} iconName={"HOME"} />
          <IconNavbar title={"Originals"} iconName={"ORIGINALS"} />
          <IconNavbar title={"Movies"} iconName={"MOVIES"} />
          <IconNavbar title={"Series"} iconName={"SERIES"} />
          <IconNavbar title={"Watchlist"} iconName={"WATCHLIST"} />
        </div>
      </div>
      <div className="flex items-center invisible md:visible">
        <UserLogin />
      </div>
    </div>
  );
};
export default Navbar;
