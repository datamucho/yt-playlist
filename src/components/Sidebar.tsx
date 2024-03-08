import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import createPlaylist from "../services/createPlaylist";
import getPlaylists from "../services/getPlaylists";
import playlistStore from "../stores/playlist.store";

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 480px;
  height: 100vh;
  background: #f8f9fa; /* Light grey background */
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow-y: auto; /* Enables scrolling if content overflows */
`;

const HamburgerButton = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 110;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;

  div {
    width: 30px;
    height: 3px;
    background: #343a40; /* Dark grey for contrast */
    border-radius: 10px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
  }
`;

const Content = styled.div`
  padding: 40px;
`;

const Title = styled.h2`
  color: #495057; /* Dark grey */
  font-size: 24px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  background-color: #007bff; /* Bootstrap blue */
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  transition: background-color 250ms;

  &:hover {
    background-color: #0056b3; /* Darker blue */
  }
`;

const PlaylistList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PlaylistItem = styled.li`
  background-color: #ffffff; /* White */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 250ms;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  margin-left: 10px;
  font-size: 16px;
  color: #007bff; /* Bootstrap blue for action buttons */

  &:hover {
    color: #0056b3; /* Darker blue */
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { playlists, setPlaylists } = playlistStore((state) => state);

  useEffect(() => {
    setPlaylists(getPlaylists());
  }, []);

  const handleCreatePlaylist = async () => {
    const name = prompt("Playlist name:");
    if (name) {
      const res = await createPlaylist(name);

      if (!res?.data?.id) {
        return;
      }

      const newPlaylist = {
        id: res.data.id,
        name: name,
      };

      const updatedPlaylists = [...playlists, newPlaylist];

      setPlaylists(updatedPlaylists);
      localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    }
  };

  const handleDeletePlaylist = (id) => {
    const updatedPlaylists = playlists.filter((playlist) => playlist.id !== id);
    setPlaylists(updatedPlaylists);
    localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
  };

  const handleEditPlaylist = (id) => {
    const playlist = playlists.find((playlist) => playlist.id === id);
    const newName = prompt("New playlist name:", playlist?.name);
    if (newName) {
      const updatedPlaylists = playlists.map((playlist) =>
        playlist.id === id ? { ...playlist, name: newName } : playlist
      );
      setPlaylists(updatedPlaylists);
      localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    }
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
              <PlaylistItem key={playlist.id}>
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
