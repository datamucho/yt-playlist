import { create } from "zustand";
import { Playlist, videoType } from "../types";

interface PlaylistStoreType {
  playlists: Playlist[];
  setPlaylists: (playlist: Playlist[]) => void;
  playlistVideos: { [key: string]: videoType[] };
}

const playlistStore = create<PlaylistStoreType>((set) => ({
  playlists: [],
  setPlaylists: (playlists: Playlist[]) => set({ playlists }),
  playlistVideos: {},
}));

export default playlistStore;
