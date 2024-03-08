import { useParams } from "react-router-dom";

import {
  Container,
  VideoColumns,
  VideoDesc,
  VideoDescription,
  VideoEl,
  VideoIframe,
  VideoInfo,
  VideoPage,
  VideoT,
  VideoThumbnail,
  VideoTitle,
  VideoWrapper,
} from "../styles";

import { usePlaylists } from "../hooks/usePlaylists";

const PlaylistPage = () => {
  const { playlistId } = useParams();
  const { playlists } = usePlaylists();

  const playlist = playlists.find((playlist) => playlist.id === playlistId);
  const videoDetails = playlist?.videos[0];

  console.log(videoDetails);

  const otherVideos = playlist?.videos.slice(1);

  return (
    <VideoPage>
      <Container>
        {videoDetails && (
          <>
            <VideoWrapper>
              <VideoIframe
                src={`https://www.youtube.com/embed/${videoDetails.videoId}`}
                title={videoDetails.title}
                allowFullScreen
              ></VideoIframe>
            </VideoWrapper>
            <div>
              <VideoTitle>{videoDetails.title}</VideoTitle>
              <VideoDescription>{videoDetails.description}</VideoDescription>
            </div>
          </>
        )}
      </Container>
      <VideoColumns>
        {otherVideos?.map((video) => (
          <VideoEl key={video.videoId}>
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
