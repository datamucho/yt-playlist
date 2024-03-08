import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getVideoDetails from "../services/getVideoDetails";
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
import videoStore from "../stores/videos.store";
// Import styled components for the button
import styled from "styled-components";
import playlistStore from "../stores/playlist.store";

const AddToPlaylistButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;

  &:hover {
    background-color: #0056b3;
  }
`;

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  const { data: videoDetails } = useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => getVideoDetails(videoId!),
    enabled: videoId !== "",
  });
  const { playlists, setPlaylists } = playlistStore((state) => state);

  const videos = videoStore((state) => state.videos);

  // Placeholder function for handling the addition to a playlist
  const handleAddToPlaylist = () => {
    handleAddToPlaylist();
  };

  return (
    <VideoPage>
      <Container>
        {videoDetails && (
          <>
            <VideoWrapper>
              <VideoIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={videoDetails.title}
                allowFullScreen
              ></VideoIframe>
            </VideoWrapper>
            <VideoTitle>{videoDetails.title}</VideoTitle>
            <VideoDescription>{videoDetails.description}</VideoDescription>
            <AddToPlaylistButton onClick={handleAddToPlaylist}>
              Add to Playlist
            </AddToPlaylistButton>
          </>
        )}
      </Container>
      <VideoColumns>
        {videos?.map((video) => (
          <VideoEl key={video.id}>
            <VideoThumbnail src={video.thumbnail} alt={video.title} />
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

export default VideoDetailsPage;
