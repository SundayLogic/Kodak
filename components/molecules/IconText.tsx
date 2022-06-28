import React from "react";
import { HomeIcon, SearchIcon } from "@heroicons/react/solid";

type Icons = "Home" | "Search";

const IconText = (icon: Icons, title: string) => {
  return (
    <div>
      <h1>{icon}</h1>
      <p>{title}</p>
    </div>
  );
};
export default IconText;
