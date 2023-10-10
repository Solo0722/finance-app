import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.deezer.com/",
});

export const getTopTracks = async () => {
  try {
    const data = await axiosInstance.get("chart/0/tracks");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTopArtists = async () => {
  try {
    const data = await axiosInstance.get("chart/0/artists");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTopPodcasts = async () => {
  try {
    const data = await axiosInstance.get("chart/0/podcasts");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getTopAlbums = async () => {
  try {
    const data = await axiosInstance.get("chart/0/albums");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const getListOfGenres = async () => {
  try {
    const data = await axiosInstance.get("genre");
    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getListOfAlbumTracks = async (albumId) => {
  try {
    const data = await axiosInstance.get(`album/${albumId}/tracks`);
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
