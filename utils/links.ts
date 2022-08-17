const API_KEY = "4d071ab1be7403c2486ed2ab0fa244c2";
const links = {
    urls: {
    home: "/",
    movies: "/movie/movies",
    series: "/tv/series",
    trending: "/trending",
    account: "/account",
    dbImage: "https://image.tmdb.org/t/p/original",
    dbBase: "https://api.themoviedb.org/3",
    dbMovie: "https://api.themoviedb.org/3/movie/",
    dbVideosKey: `/videos?api_key=${API_KEY}&language=en-US`,
    dbSerie: "https://api.themoviedb.org/3/tv/",
    dbKey: `?api_key=${API_KEY}&language=en-US`,
    youtubeSearch: "https://www.youtube.com/watch?v=",
    },
    sources :  {
    logo: "/images/BendedLogo2.png",
    accountImage: "/images/smilingFace.png",
    },


}
export default links;
