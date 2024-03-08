import { useMutation } from "@tanstack/react-query";
import { BASE_URI } from "../constants";
import { Playlist } from "../types";

export const useRemoveVideoFromPlaylist = (id: string) => {
  return useMutation({
    mutationKey: ["addVideoToPlaylist", id],
    mutationFn: async (videoId: string) => {
      return fetch(`${BASE_URI}/playlists/${id}/videos/${videoId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json() as Promise<Playlist>);
    },
  });
};
