import axios from "axios";

const getUserInfoData = async () => {
  try {
    const response = await axios.get("userFeed.json");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getUserInfoData;
