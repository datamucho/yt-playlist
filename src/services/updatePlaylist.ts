import { BASE_URI } from "../constants";
import { Playlist } from "../types";

const updatePlaylist = async (playlistId: string, playlist: Playlist) => {
  return fetch(`${BASE_URI}/playlists/${playlistId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlist),
  }).then((res) => res.json());
};

export default updatePlaylist;
