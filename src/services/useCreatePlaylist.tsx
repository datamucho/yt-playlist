import { useMutation } from "@tanstack/react-query";
import { BASE_URI } from "../constants";

export const useCreatePlaylist = (name: string) => {
  return useMutation({
    mutationKey: ["playlist", name],
    mutationFn: async () => {
      return fetch(`${BASE_URI}/playlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
    },
  });
};
