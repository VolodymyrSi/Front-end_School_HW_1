import axios from "axios";

const getUserInfoData = async (currentUser) => {
  try {
    const response = await axios.get("userFeed.json");
    console.log(currentUser);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getUserInfoData;
