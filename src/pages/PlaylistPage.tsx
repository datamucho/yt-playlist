import { useParams } from "react-router-dom";
import {
  Container,
  VideoColumns,
  VideoDesc,
  VideoDescription,
  VideoEl,
  VideoInfo,
  VideoPage,
  VideoT,
  VideoThumbnail,
  VideoTitle,
  VideoWrapper,
} from "../styles";
import { usePlaylists } from "../hooks/usePlaylists";
import { useState } from "react";
import YouTube from "react-youtube";

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { playlists } = usePlaylists();
  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const [playingVideoId, setPlayingVideoId] = useState<string>(
    playlist?.videos[0]?.videoId || ""
  );

  const videoDetails = (playlist?.videos || []).find(
    (video) => video.videoId === playingVideoId
  );

  const otherVideos = (playlist?.videos || []).filter(
    (el) => el.videoId !== playingVideoId
  );

  // Handler for when the video ends
  const handleVideoEnd = () => {
    const nextVideoId = otherVideos[0].videoId;
    setPlayingVideoId(nextVideoId);
  };

  if (!videoDetails) {
    return <h1>No videos!</h1>;
  }

  // YouTube component options
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <VideoPage>
      <Container>
        {videoDetails && (
          <>
            <VideoWrapper>
              <YouTube
                videoId={videoDetails.videoId}
                opts={opts}
                onEnd={handleVideoEnd}
                className={"youtube-container"}
                style={{ width: "100%" }}
              />
            </VideoWrapper>
            <div>
              <VideoTitle>{videoDetails.title}</VideoTitle>
              <VideoDescription>{videoDetails.description}</VideoDescription>
            </div>
          </>
        )}
      </Container>
      <VideoColumns>
        {otherVideos.map((video) => (
          <VideoEl
            key={video.videoId}
            onClick={() => setPlayingVideoId(video.videoId)}
          >
            <VideoThumbnail src={video.thumbnailUrl} alt={video.title} />
            <VideoInfo>
              <VideoT>{video.title}</VideoT>
              <VideoDesc>{video.description}</VideoDesc>
            </VideoInfo>
          </VideoEl>
        ))}
      </VideoColumns>
    </VideoPage>
  );
};

export default PlaylistPage;
