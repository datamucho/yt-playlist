export type Video = {
  videoId: string;
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailUrl: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      id: string;
      url: string;
      height: number;
      width: number;
    };
  };
  duration: string;
  views: string;
  channelName: string;
  url: string;
};

export type Playlist = {
  id: string;
  name: string;
  videos: Video[];
};
