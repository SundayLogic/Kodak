import React from "react";
import LogStatus from "../atoms/buttons/LogStatus";
import KodakIcon from "../atoms/icons/KodakIcon";
import UserLogin from "../molecules/UserLogin";
import { HomeIcon, SearchIcon,  } from "@heroicons/react/solid";
const Navbar = () => {
  return (
    <div className="flex items-center bg-red-900">
      <div className="flex items-center justify-center space-x-3">
        <KodakIcon w={60} h={60} />
        <div className="flex flex-col items-center space-y-1">
          <HomeIcon className="w-8 h-8" />
          <p className="text-xl">Home</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <SearchIcon className="w-8 h-8" />
          <p className="text-xl">Home</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <HomeIcon className="w-8 h-8" />
          <p className="text-xl">Home</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <HomeIcon className="w-8 h-8" />
          <p className="text-xl">Home</p>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <HomeIcon className="w-8 h-8" />
          <p className="text-xl">Home</p>
        </div>
      </div>
      <div className="flex items-center ml-8 space-x-2">
        <LogStatus status={true} />
        <UserLogin />
      </div>
    </div>
  );
};
export default Navbar;
