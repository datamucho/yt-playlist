import { create } from "zustand";

type playlistType = {
  id: string;
  name: string;
};

interface PlaylistStoreType {
  playlists: playlistType[];
  setPlaylists: (playlist: playlistType[]) => void;
}

const playlistStore = create<PlaylistStoreType>((set) => ({
  playlists: [],
  setPlaylists: (playlists: playlistType[]) => set({ playlists }),
}));

export default playlistStore;
