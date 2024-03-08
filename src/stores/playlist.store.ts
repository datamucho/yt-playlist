import { create } from "zustand";
import { videoType } from "../types";

type playlistType = {
  id: string;
  name: string;
};

interface PlaylistStoreType {
  playlists: playlistType[];
  setPlaylists: (playlist: playlistType[]) => void;
  videos: { [key: string]: videoType[] };
}

const playlistStore = create<PlaylistStoreType>((set) => ({
  playlists: [],
  setPlaylists: (playlists: playlistType[]) => set({ playlists }),
}));

export default playlistStore;
