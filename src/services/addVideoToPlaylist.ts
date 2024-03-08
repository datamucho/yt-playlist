import axios from "axios";
import { BASE_URI } from "../constants";

type videoId = { videoId: string; title: string; thumbnailUrl: string };

const addVideoToPlaylist = async (playlistId: string, video: videoId) => {
  try {
    const response = await axios.post(
      `${BASE_URI}/playlists/${playlistId}/videos`,
      video
    );

    return response;
  } catch (error) {
    console.error("Error adding video to playlist");
  }
};

export default addVideoToPlaylist;
