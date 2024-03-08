import axios from "axios";
import { BASE_URI } from "../constants";

const removeVideoFromPlaylist = async (playlistId: string, videoId: string) => {
  try {
    const response = await axios.delete(
      `${BASE_URI}/playlists/${playlistId}/videos/${videoId}`
    );

    return response;
  } catch (error) {
    console.error("Error removing video from playlist:", error);
  }
};

export default removeVideoFromPlaylist;
