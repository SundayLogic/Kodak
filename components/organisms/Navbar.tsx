import React from "react";
import LogStatus from "../atoms/buttons/LogStatus";
import KodakIcon from "../atoms/icons/KodakIcon";
import UserLogin from "../molecules/UserLogin";
import IconNavbar from "../molecules/IconNavbar";
import {
  HomeIcon,
  SearchIcon,
  CollectionIcon,
  FilmIcon,
  VideoCameraIcon,
  StarIcon,
} from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <div className="flex items-center bg-red-900">
      <div className="flex items-center justify-center space-x-3">
        <KodakIcon w={60} h={60} />
        <IconNavbar title={"Home"} iconName={"HOME"}/>
        <IconNavbar title={"Movies"} iconName={"MOVIES"}/>
        <IconNavbar title={"Series"} iconName={"SERIES"}/>
        <IconNavbar title={"Originals"} iconName={"ORIGINALS"}/>
        <IconNavbar title={"Watchlist"} iconName={"WATCHLIST"}/>
      </div>
      <div className="flex items-center ml-8 space-x-2">
        <LogStatus status={true} />
        <UserLogin />
      </div>
    </div>
  );
};
export default Navbar;
