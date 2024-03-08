import { BASE_URI } from "../constants";
import { Playlist } from "../types";

type videoType = { videoId: string; title: string; thumbnailUrl: string };

const addVideoToPlaylist = async (playlistId: string, video: videoType) => {
  return fetch(`${BASE_URI}/playlists/${playlistId}/videos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  }).then((res) => res.json() as Promise<Playlist>);
};

export default addVideoToPlaylist;
