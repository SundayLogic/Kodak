const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const requests = {
    fetchTrending:`${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMoviePopular:`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMovieTopRated:`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchMovieLatest:`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchMovieUpcoming:`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesPopular:`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesTopRated:`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesLatest:`${BASE_URL}/tv/latest?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSeriesAiringToday:`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
