import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import UserFeedItem from "../components/UserFeedItem";
import UserInfo from "../components/UserInfo";
import { getUserInfoData } from "../api/apiRequest";
import LoadingSpinner from "../utils/LoadingSpinner";
import { TikTukContext } from "../context";

const UserFeedPage = () => {
  const max_posts = 29;
  const { setIsLoading, isLoading } = useContext(TikTukContext);
  const parameters = useParams();

  const [userDataFromServer, setUserDataFromServer] = useState({});
  const [dummyUserDataVideos, setDummyUserDataVideos] = useState([]);

  useEffect(() => {
    axios
      .get("./user-feed.json")
      .then((res) => {
        setDummyUserDataVideos(res.data.itemList);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (parameters.currentUser) {
      getUserInfoData(parameters.currentUser).then((userInfoData) => {
        setUserDataFromServer(userInfoData);
        setIsLoading(false);
      });
    }
  }, [parameters]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <UserInfo
          stats={userDataFromServer.stats}
          user={userDataFromServer.user}
        />
      )}
      {dummyUserDataVideos && (
        <UserFeedItem
          userFeedServerData={dummyUserDataVideos.slice(0, max_posts)}
        />
      )}
    </div>
  );
};

export default UserFeedPage;
