import { create } from "zustand";
import { videoType } from "../types";

interface VideoStoreType {
  videos: videoType[];
  setVideos: (videos: videoType[]) => void;
}

const videoStore = create<VideoStoreType>((set) => ({
  videos: [],
  setVideos: (videos: videoType[]) => set({ videos }),
}));

export default videoStore;
