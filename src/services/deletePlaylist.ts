import axios from "axios";
import { BASE_URI } from "../constants";

const deletePlaylist = async (playlistId: number) => {
  try {
    const response = await axios.delete(`${BASE_URI}/playlists/${playlistId}`);
    return response; // Or handle the response as needed
  } catch (error) {
    console.log(error);
  }
};

export default deletePlaylist;
