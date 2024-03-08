type videoType = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
};

type videoResponseType = {
  snippet: { thumbnails: { url: string } };
  id: { videoId: string };
};

type VideoDetailsType = {
  id: string;
  title: string;
  description: string;
};

export type { videoType, videoResponseType, VideoDetailsType };
