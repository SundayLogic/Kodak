import { useEffect, useState } from "react";
import { Trailer } from "../../typings";
import links from "../links";
const useYoutubeLink = (trailers: Trailer[], searchFor: string) => {
  const notFoundKey = "rPleicjySdI";
  const [key, setKey] = useState<string>(notFoundKey)
  const findYoutubeKey = () => trailers.filter((e:Trailer) => e.type === searchFor).map((e:Trailer) => e.key);
  useEffect(() => {
    if(trailers.length === 0){
      return setKey(notFoundKey)
    } else if (findYoutubeKey().length >= 1){
      return setKey(findYoutubeKey()[0])
    } else {
      return setKey(trailers[0].key)
    }
  },[])
  return `${links.urls.youtubeSearch}${key}`
  }
  export default useYoutubeLink;
