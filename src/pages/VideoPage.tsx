import React, { useState } from "react";
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
import playlistStore from "../stores/playlist.store";
import axios from "axios";
import styled from "styled-components";
import addVideoToPlaylist from "../services/addVideoToPlaylist";

const BASE_URI = "https://youtube.thorsteinsson.is/api";

// Styled components
const StyledDropdown = styled.select`
  padding: 10px 15px;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

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

  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");
  const { playlists } = playlistStore((state) => state);
  const videos = videoStore((state) => state.videos);

  const handleAddToPlaylist = async () => {
    if (!selectedPlaylistId || !videoId) {
      return;
    }

    const video = {
      videoId,
      title: videoDetails?.title,
      thumbnailUrl: videoDetails?.thumbnail,
    };

    console.log(await addVideoToPlaylist(selectedPlaylistId, video));
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
            <StyledDropdown
              onChange={(e) => setSelectedPlaylistId(e.target.value)}
              value={selectedPlaylistId}
            >
              <option value="">Select a playlist</option>
              {playlists.map((playlist) => (
                <option key={playlist.id} value={playlist.id}>
                  {playlist.name}
                </option>
              ))}
            </StyledDropdown>
            <StyledButton onClick={handleAddToPlaylist}>
              Add to Playlist
            </StyledButton>
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
