import links from "../links";

const API_KEY ="4d071ab1be7403c2486ed2ab0fa244c2";
const BASE_URL = links.urls.dbBase;
const requests = {
    fetchTrending:`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMoviesPopular:`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMoviesTopRated:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMoviesUpcoming:`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesPopular:`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesTopRated:`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesAiringToday:`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
