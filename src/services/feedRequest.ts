import axios from "axios";

const getTrendingFeedData = async () => {
  try {
    const response = await axios.get("trendingFeed.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getTrendingFeedData;
