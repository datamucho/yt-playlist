import axios from "axios";
import { videoResponseType } from "../types";

const getVideos = (term: string) =>
  axios
    .get(`https://youtube.thorsteinsson.is/api/search?q=${term}`)
    .then((response) =>
      response.data.map((video: videoResponseType) => ({
        ...video,
        thumbnail: video.snippet.thumbnails.url,
        id: video.id.videoId,
      }))
    );

export default getVideos;
