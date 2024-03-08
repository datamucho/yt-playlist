import axios from "axios";
import { BASE_URI } from "../constants";

const updatePlaylist = async (playlistId: string) => {
  try {
    const response = await axios.put(`${BASE_URI}/playlists/${playlistId}`, {
      name: "My playlist",
      videos: [
        {
          videoId: "5qap5aO4i9A",
          title: "My video",
          thumbnailUrl: "https://...",
        },
        {
          videoId: "lTRiuFIWV54",
          title: "Other video",
          thumbnailUrl: "https://...",
        },
      ],
    });

    return response;
  } catch (error) {
    console.error("Error updating the playlist:");
  }
};

export default updatePlaylist;
