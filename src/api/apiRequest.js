import axios from "axios";
import { userApi } from "../api/api";

const REQUEST_OPTIONS_TRENDING_FEED = {
  method: "GET",
  url: "https://tiktok33.p.rapidapi.com/trending/feed",
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": userApi,
  },
};

const REQUEST_OPTIONS_USER_FEED = (userID) => {
  return {
    method: "GET",
    url: `https://tiktok33.p.rapidapi.com/user/info/${userID}`,
    headers: {
      "x-rapidapi-host": "tiktok33.p.rapidapi.com",
      "x-rapidapi-key": userApi,
    },
  };
};

export const getUserInfoData = (currentUser) => {
  return axios
    .request(REQUEST_OPTIONS_USER_FEED(currentUser))
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const getTrendingFeedData = () =>
  axios
    .request(REQUEST_OPTIONS_TRENDING_FEED)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
