import LinkAtom from "../atoms/Btns/LinkAtom";
import ImageAtom from "../atoms/images/ImageAtom";
import HeaderIcon from "../molecules/HeaderIcon";
import links from "../../utils/links";
type Icons = "HOME" | "MOVIES" | "SERIES" | "WATCHLIST" | "TRENDING";
const Header = () => {
  const iconTextGenerator = (name: string, iconName: Icons) => (
    <HeaderIcon name={name} iconName={iconName} />
  );
  const imageCreator = (
    src: string,
    alt: string,
    width: number,
    height: number
  ) => <ImageAtom src={src} w={width} h={height} alt={alt} fill={false} quality={100}/>;
  return (
    <header className="bg-gradient-to-b from-black w-[100vw] pt-2  fixed  z-10">
      <div className="flex items-center justify-center opacity-95 space-x-6 lg:space-x-8">
        <div className="flex items-center justify-center sm:space-x-6 w-fit ">
          <div className="hidden md:flex p-1 min-w-[80px] opacity-90   headerImg">
            <LinkAtom
              reference={links.urls.home}
              content={imageCreator(links.sources.logo, "logoImage", 100, 50)}
            />
          </div>
          <div className="flex items-center justify-between space-x-3 md:space-x-5 xl:space-x-6">
            <LinkAtom
              reference={links.urls.home}
              content={iconTextGenerator("Home", "HOME")}
            />
            <LinkAtom
              reference={links.urls.trending}
              content={iconTextGenerator("Trending", "TRENDING")}
            />
            <LinkAtom
              reference={links.urls.movies}
              content={iconTextGenerator("Movies", "MOVIES")}
            />
            <LinkAtom
              reference={links.urls.series}
              content={iconTextGenerator("Series", "SERIES")}
            />
            <LinkAtom
              reference={links.urls.watchlist}
              content={iconTextGenerator("Watchlist", "WATCHLIST")}
            />
          </div>
        </div>
        <div className="items-center hidden sm:flex ml-5 md:ml-20 md:flex headerImg">
          <LinkAtom
            reference={links.urls.account}
            content={imageCreator(
              links.sources.accountImage,
              "account-image",
              45,
              45
            )}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
