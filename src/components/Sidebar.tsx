import React, { useState } from "react";
import {
  Button,
  Content,
  PlaylistItem,
  PlaylistList,
  Title,
  HamburgerButton,
  SidebarContainer,
  ActionButton,
} from "../styles";
import { usePlaylists } from "../hooks/usePlaylists";
import { useNavigate } from "react-router-dom";
import updatePlaylist from "../services/updatePlaylist";
import getPlaylist from "../services/getPlaylist";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const {
    addPlaylist,
    playlists,
    removePlaylist,
    updatePlaylist: update,
  } = usePlaylists();

  const handleCreatePlaylist = async () => {
    const playlistName = prompt("Enter playlist name");
    if (playlistName) {
      addPlaylist(playlistName);
    }
  };

  const handleEditPlaylist = async (playlistId: string) => {
    const newName = prompt("Enter new playlist name");

    if (newName) {
      const playlist = await getPlaylist(playlistId);

      updatePlaylist(playlistId, playlist);

      update(playlistId, newName);
    }
  };

  const handleDeletePlaylist = (playlistId: string) => {
    removePlaylist(playlistId);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </HamburgerButton>
      <SidebarContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Content>
          <Title>Playlists</Title>
          <Button onClick={handleCreatePlaylist}>Create Playlist</Button>
          <PlaylistList>
            {playlists.map((playlist) => (
              <PlaylistItem
                key={playlist.id}
                onClick={() => navigate(`playlist/${playlist.id}`)}
              >
                {playlist.name}
                <div>
                  <ActionButton onClick={() => handleEditPlaylist(playlist.id)}>
                    Edit
                  </ActionButton>
                  <ActionButton
                    onClick={() => handleDeletePlaylist(playlist.id)}
                  >
                    Delete
                  </ActionButton>
                </div>
              </PlaylistItem>
            ))}
          </PlaylistList>
        </Content>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
