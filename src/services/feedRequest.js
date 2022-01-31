import axios from "axios";

const getTrendingFeedData = async (currentUser) => {
  try {
    const response = await axios.get("trendingFeed.json");
    console.log(currentUser);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getTrendingFeedData;
