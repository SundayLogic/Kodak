import LinkAtom from "../atoms/Btns/LinkAtom";
import HeaderIcon from "../molecules/HeaderIcon";

type Icons =
  | "HOME"
  | "MOVIES"
  | "SERIES"
  | "WATCHLIST"
  | "TRENDING";
const Header = () => {
  const links = {
    home: "/",
    movies: "/movie/movies",
    series: "/tv/series",
    trending: "/trending",
    account: "/account",
  };
  const iconTextGenerator = (name:string, iconName:Icons) => 
            <HeaderIcon name={name} iconName={iconName}/>
  console.log(typeof links.movies);
  return (
    <header className="bg-gradient-to-b from-black w-[100vw] pt-2  fixed  z-10">
      <div className="flex items-center justify-center opacity-95 space-x-6 lg:space-x-8">
        <div className="flex items-center justify-center sm:space-x-6 w-fit ">
          <LinkAtom reference={links.home} content={iconTextGenerator("Logo", "HOME")}/>
          <div className="flex items-center justify-between space-x-3 md:space-x-5 xl:space-x-6">
            <LinkAtom reference={links.home} content={iconTextGenerator("Home", "HOME")}/>
            <LinkAtom reference={links.movies} content={iconTextGenerator("Movies", "MOVIES")}/>
            <LinkAtom reference={links.trending} content={iconTextGenerator("Trending", "TRENDING")}/>
            <LinkAtom reference={links.series} content={iconTextGenerator("Series", "SERIES")}/>
            <LinkAtom reference={links.home} content={iconTextGenerator("Watchlist", "WATCHLIST")}/>
          </div>
        </div>
        <div className="items-center hidden sm:flex ml-5 md:ml-20 md:flex">
            <LinkAtom reference={links.account} content={iconTextGenerator("Account", "HOME")}/>
        </div>
      </div>
    </header>
  );
};
export default Header;
