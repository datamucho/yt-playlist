const getVideosByPlaylist = async (playlistId: string) => {
  const data = localStorage.getItem(`${playlistId}-videos`);

  if (data) {
    const parsedData = JSON.parse(data);
    return parsedData[playlistId] || [];
  }

  return [];
};

export default getVideosByPlaylist;
