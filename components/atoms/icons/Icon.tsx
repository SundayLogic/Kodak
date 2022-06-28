import React from "react";
enum Icons {
  Home = "Home",
  Search = "Search",
}
const ICONS_MAP = {
  0: Icons.Home,
  1: Icons.Search,
};
const Icon = ({ iconName }:any) => {
  return (
    <div>
      <h1>{iconName} icon</h1>
    </div>
  );
};
export default Icon;

