import IndividualContent from "../../components/pages/IndividualContent";
import { IndividualContentProps } from "../../typings";
import links from "../../utils/links";
import requests from "../../utils/requests/requests";
const serie = ({
  content,
  trailers,
  recommended,
  contentId,
}: IndividualContentProps) => {
  const recommendedProp = {
    popular: recommended?.popular,
    topRated: recommended?.topRated,
    airing: recommended?.airing,
  };
  return (
    <>
      <IndividualContent
        content={content}
        trailers={trailers}
        recommended={recommendedProp}
        contentType="tv"
        contentId={contentId}
      />
    </>
  );
};
export default serie;
export const getServerSideProps = async (context: any) => {
  const { id } = context.query;
  const serieTrailer = `${links.urls.dbSerie}${id}${links.urls.dbVideosKey}`;
  const serieUrl = `${links.urls.dbSerie}${id}${links.urls.dbKey}`;
  const [serie, trailers, seriePopular, serieTopRated, serieAiringToday] =
    await Promise.all([
      fetch(serieUrl).then((res) => res.json()),
      fetch(serieTrailer).then((res) => res.json()),
      fetch(requests.fetchSeriesPopular).then((res) => res.json()),
      fetch(requests.fetchMoviesTopRated).then((res) => res.json()),
      fetch(requests.fetchSeriesAiringToday).then((res) => res.json()),
    ]);
  return {
    props: {
      contentId: id,
      content: serie,
      trailers: trailers.results,
      recommended: {
        popular: seriePopular.results,
        topRated: serieTopRated.results,
        airing: serieAiringToday.results,
      },
    },
  };
};
