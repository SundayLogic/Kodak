import {
  HomeIcon,
  SearchIcon,
  FilmIcon,
  CollectionIcon,
  VideoCameraIcon,
  StarIcon,
} from "@heroicons/react/solid";
type Icons =
  | "HOME"
  | "SEARCH"
  | "MOVIES"
  | "SERIES"
  | "WATCHLIST"
  | "ORIGINALS"
  | "TRENDING";
interface IconText {
  title: string;
  iconName: Icons;
}
const IconNavbar = ({ title, iconName }: IconText) => {
  const iconCreator = (name: Icons) => {
    let finalCode;
    switch (name) {
      case "HOME":
        finalCode = <HomeIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "SEARCH":
        finalCode = <SearchIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "MOVIES":
        finalCode = <FilmIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "SERIES":
        finalCode = <VideoCameraIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "WATCHLIST":
        finalCode = <CollectionIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "ORIGINALS":
        finalCode = <StarIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      case "TRENDING":
        finalCode = <SearchIcon className="w-7 h-7 md:w-8 md:h-8 lg:w-8.5 lg:h-8.5" />;
        break;
      default:
        finalCode = <h1>not found</h1>;
    }
    return finalCode;
  };
  return (
    <div className="flex flex-col items-center space-y-2 cursor-pointer py-3 group w-[100px]">
      <div className="opacity-90 group-hover:opacity-100 ease-out duration-150 transition-all">
        {iconCreator(iconName)}
      </div>
      <h1 className="text-xl uppercase z-1 opacity-90 group-hover:opacity-100 group-hover:tracking-wider transition-all">
        {title}
      </h1>
    </div>
  );
};
export default IconNavbar;
