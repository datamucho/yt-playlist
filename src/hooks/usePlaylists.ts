import { useState, useEffect } from "react";
import playlistStore from "../stores/playlist.store";
import createPlaylist from "../services/createPlaylist";
import getPlaylists from "../services/getPlaylists";
import { Playlist } from "../types";
import deletePlaylist from "../services/deletePlaylist";

export const usePlaylists = () => {
  const { playlists, setPlaylists } = playlistStore((state) => state);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPlaylists = localStorage.getItem("playlists");
    if (storedPlaylists) {
      setPlaylists(JSON.parse(storedPlaylists));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (playlists.length === 0) {
      return;
    }
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const addPlaylist = async (playlistName: string) => {
    const response = await createPlaylist(playlistName);
    const newPlaylist = { id: response.id, name: playlistName, videos: [] };

    setPlaylists([...playlists, newPlaylist]);

    const oldPlaylists = getPlaylists();
    localStorage.setItem(
      "playlists",
      JSON.stringify([...oldPlaylists, newPlaylist])
    );

    return newPlaylist;
  };

  const removePlaylist = (playlistId: string) => {
    setPlaylists(playlists.filter((playlist) => playlist.id !== playlistId));
    const oldPlaylists = getPlaylists();
    localStorage.setItem(
      "playlists",
      JSON.stringify(
        oldPlaylists.filter((playlist: Playlist) => playlist.id !== playlistId)
      )
    );
    deletePlaylist(playlistId);
  };

  const updatePlaylist = (playlistId: string, newName: string) => {
    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        return { ...playlist, name: newName };
      }
      return playlist;
    });
    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  return { playlists, addPlaylist, removePlaylist, isLoading, updatePlaylist };
};
