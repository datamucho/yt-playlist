const getPlaylists = () => {
  const playlistsJSON = localStorage.getItem("playlists");
  return playlistsJSON ? JSON.parse(playlistsJSON) : [];
};

export default getPlaylists;
