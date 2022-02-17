import axios from "axios";

const REQUEST_OPTIONS_TRENDING_FEED = {
  method: "GET",
  url: process.env.REACT_APP_TRENDING_FEED_URL,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_HOST,
    "x-rapidapi-key": process.env.REACT_APP_API,
  },
};

const REQUEST_OPTIONS_USER_FEED = (userID) => {
  return {
    method: "GET",
    url: `${process.env.REACT_APP_USER_FEED_URL}${userID}`,
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API,
    },
  };
};

export const getUserInfoData = (currentUser) => {
  return axios
    .request(REQUEST_OPTIONS_USER_FEED(currentUser))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getTrendingFeedData = () =>
  axios
    .request(REQUEST_OPTIONS_TRENDING_FEED)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
