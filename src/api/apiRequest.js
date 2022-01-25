import axios from "axios";

export const getUserInfoData = (currentUser) => {
  return axios
    .get("userFeed.json")
    .then((response) => {
      console.log(currentUser);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getTrendingFeedData = () =>
  axios
    .get("trendingFeed.json")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
