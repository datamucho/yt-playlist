import { useNavigate } from "react-router-dom";
import { VideoItem, VideoList } from "../styles";
import { videoType } from "../types";
import Loading from "../components/Loading";
import getVideos from "../services/getVideos";
import { useQuery } from "@tanstack/react-query";
import videoStore from "../stores/videos.store";
import { useEffect } from "react";

const words = ["dog", "cat", "bird", "fish", "rabbit"];
const randomWord = words[Math.floor(Math.random() * words.length)];

const Videos = () => {
  const navigate = useNavigate();
  const { videos, setVideos } = videoStore((state) => ({
    videos: state.videos,
    setVideos: state.setVideos,
  }));

  const { data: randomFeed } = useQuery({
    queryKey: ["videos", randomWord],
    queryFn: () => getVideos(randomWord),
    enabled: !(videos || []).length,
  });

  useEffect(() => {
    if (randomFeed && !(videos || []).length) {
      setVideos(randomFeed);
    }
  }, [randomFeed]);

  const handleVideoSelect = (videoId: string) => {
    navigate(`/video/${videoId}/`);
  };

  return (
    <Loading isLoading={!!false}>
      <VideoList>
        {(videos || []).map((video: videoType) => (
          <VideoItem key={video.id} onClick={() => handleVideoSelect(video.id)}>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </VideoItem>
        ))}
      </VideoList>
    </Loading>
  );
};

export default Videos;
