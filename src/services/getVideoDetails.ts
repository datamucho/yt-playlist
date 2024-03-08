import axios from "axios";

const getVideoDetails = async (id: string) => {
  return axios
    .get(`https://youtube.thorsteinsson.is/api/videos/${id}`)
    .then((res) => res.data);
};

export default getVideoDetails;
