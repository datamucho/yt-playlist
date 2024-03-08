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
  StyledDropdown,
  StyledButton,
} from "../styles";
import videoStore from "../stores/videos.store";
import playlistStore from "../stores/playlist.store";
import addVideoToPlaylist from "../services/addVideoToPlaylist";

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  const { data: videoDetails } = useQuery({
    queryKey: ["videoDetails", videoId],
    queryFn: () => getVideoDetails(videoId!),
    enabled: videoId !== "",
  });

  const [selectedPlaylistId, setSelectedPlaylistId] = useState("");
  const { playlists, setPlaylists } = playlistStore((state) => state);
  const videos = videoStore((state) => state.videos);

  const handleAddToPlaylist = async () => {
    if (!selectedPlaylistId || !videoId) {
      return;
    }

    const video = {
      videoId,
      ...videoDetails,
    };

    const response = await addVideoToPlaylist(selectedPlaylistId, video);
    if (!response?.name) {
      return;
    }

    console.log({ response });

    const updatedPlaylists = playlists.map((playlist) => {
      if (playlist.name === response.name) {
        return {
          ...playlist,
          videos: response.videos,
        };
      }

      return playlist;
    });

    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    setPlaylists(updatedPlaylists);
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
            <div>
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
            </div>
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
