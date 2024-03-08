import axios from "axios";

const createPlaylist = async (name: string) => {
  try {
    const response = await axios.post(
      "https://youtube.thorsteinsson.is/api/playlists",
      {
        name,
      }
    );

    return response;
  } catch (_) {
    console.error("Error creating the playlist:");
  }
};

export default createPlaylist;
