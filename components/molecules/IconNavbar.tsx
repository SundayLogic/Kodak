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
  iconName?: Icons;
}
const IconNavbar = ({ title, iconName }: IconText) => {
  const iconCreator = (name: string) => {
    let finalCode;
    switch (name) {
      case "HOME":
        finalCode = <HomeIcon className="w-7 h-7 opacity-60 group:hover:opacity-100" />;
        break;
      case "SEARCH":
        finalCode = <SearchIcon className="w-7 h-7" />;
        break;
      case "MOVIES":
        finalCode = <FilmIcon className="w-7 h-7" />;
        break;
      case "SERIES":
        finalCode = <VideoCameraIcon className="w-7 h-7" />;
        break;
      case "WATCHLIST":
        finalCode = <CollectionIcon className="w-7 h-7" />;
        break;
      case "ORIGINALS":
        finalCode = <StarIcon className="w-7 h-7" />;
        break;
      case "TRENDING":
        finalCode = <SearchIcon className="w-7 h-7" />;
        break;
      default:
        finalCode = <h1>Not found</h1>;
    }
    return finalCode;
  };
  return (
    <div className="flex flex-col items-center space-y-1.5 cursor-pointer p-2 group">
      {iconCreator(iconName)}
      <h1 className="text-xl uppercase opacity-60 group:hover:opacity-100">
        {title}
      </h1>
    </div>
  );
};
export default IconNavbar;
