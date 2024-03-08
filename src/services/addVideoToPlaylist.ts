import axios from "axios";
import { BASE_URI } from "../constants";

type videoType = { videoId: string; title: string; thumbnailUrl: string };

const addVideoToPlaylist = async (playlistId: string, video: videoType) => {
  try {
    console.log({ playlistId, video });
    const response = await axios.post(
      `${BASE_URI}/playlists/${playlistId}/videos`,
      video
    );

    return response;
  } catch (error) {
    console.error("Error adding video to playlist");
    console.log(error);
  }
};

export default addVideoToPlaylist;
