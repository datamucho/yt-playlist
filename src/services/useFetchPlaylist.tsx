import { useQuery } from "@tanstack/react-query";
import { BASE_URI } from "../constants";
import { Playlist } from "../types";

export const useFetchPlaylist = (playlistId: string) => {
  return useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: () =>
      fetch(`${BASE_URI}/playlists/${playlistId}`).then(
        (res) => res.json() as Promise<Playlist>
      ),
  });
};
