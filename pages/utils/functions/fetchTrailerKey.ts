import links from "../links";

const fetchTrailerKey = async (id:number) => {
    const serieTrailer = await `${links.urls.dbSerie}${id}${links.urls.dbVideosKey}`;
    const youtubeKey = await fetch(serieTrailer).then((res) => res.json())
    return youtubeKey.results
};
export default fetchTrailerKey