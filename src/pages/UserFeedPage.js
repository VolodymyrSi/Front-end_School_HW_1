import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../App";
import UserFeedItem from "../components/UserFeedItem";
import UserInfo from "../components/UserInfo";
import { getUserInfoData } from "../api/apiRequest";
import { MAX_POSTS } from "../constants";
import LoadingSpinner from "../utils/LoadingSpinner";

const UserFeedPage = () => {
  const { setIsLoading, isLoading } = useContext(Context);
  const params = useParams();

  const [userDataFromServer, setUserDataFromServer] = useState({});
  const [dummyUserDataVideos, setDummyUserDataVideos] = useState([]);

  useEffect(() => {
    axios
      .get("./user-feed.json")
      .then((res) => {
        setDummyUserDataVideos(res.data.itemList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (params.currentUser) {
      getUserInfoData(params.currentUser).then((userInfoData) => {
        setUserDataFromServer(userInfoData);
        setIsLoading(false);
      });
    }
  }, [params]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <UserInfo
          user={userDataFromServer.user}
          stats={userDataFromServer.stats}
        />
      )}
      {dummyUserDataVideos && (
        <UserFeedItem
          userFeedServerData={dummyUserDataVideos.slice(0, MAX_POSTS)}
        />
      )}
    </div>
  );
};

export default UserFeedPage;
