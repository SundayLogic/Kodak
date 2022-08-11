import {
  HomeIcon,
  FilmIcon,
  CollectionIcon,
  VideoCameraIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
type Icons =
  | "HOME"
  | "SEARCH"
  | "MOVIES"
  | "SERIES"
  | "WATCHLIST"
  | "TRENDING";
interface HeaderIconProps {
  name: string;
  iconName: Icons;
}
const HeaderIcon = ({ name, iconName}: HeaderIconProps) => {
  const iconCreator = (name: Icons) => {
    let finalCode;
    switch (name) {
      case "HOME":
        finalCode = <HomeIcon className="headerIcon" />;
        break;
      case "MOVIES":
        finalCode = <FilmIcon className="headerIcon" />;
        break;
      case "SERIES":
        finalCode = <VideoCameraIcon className="headerIcon" />;
        break;
      case "WATCHLIST":
        finalCode = <CollectionIcon className="headerIcon" />;
        break;
      case "TRENDING":
        finalCode = <TrendingUpIcon className="headerIcon" />;
        break;
      default:
        finalCode = <h1>icon not found</h1>;
    }
    return finalCode;
  };
  return(
    <div className="flex flex-col items-center py-3 md:space-y-3 cursor-pointer space-y-2 group md:w-[80px]">
      <div className="opacity-90 group-hover:opacity-100 ease-out duration-150 transition-all">
        {iconCreator(iconName)}
      </div>
      <h1 className="text-subtitle uppercase z-1 opacity-90 group-hover:opacity-100 sm:group-hover:tracking-wider transition-all md:group-hover:font-bold duration-200 ease-in-out">
        {name}
      </h1>
    </div>
  );
};
export default HeaderIcon;
