import axios from "axios";

const getPlaylist = async (playlistId: string) => {
  try {
    const response = await axios.get(
      `https://youtube.thorsteinsson.is/api/playlists/${playlistId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error retrieving the playlist:");
  }
};

export default getPlaylist;
