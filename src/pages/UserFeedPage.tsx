import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import UserFeedItem from "../components/UserFeedItem";
// @ts-ignore
import UserInfo from "../features/UserInfo.tsx";
import { getUserInfoData } from "../services";
import LoadingSpinner from "../assets/LoadingSpinner";
import { TikTukContext } from "../store/context";

const UserFeedPage = () => {
  const maxPosts = 29;
  const { setIsLoading, isLoading } = useContext(TikTukContext);
  const parameters = useParams();

  const [userDataFromServer, setUserDataFromServer] = useState({
    stats: undefined,
    user: undefined,
  });
  const [dummyUserDataVideos, setDummyUserDataVideos] = useState([]);

  useEffect(() => {
    axios
      .get("./userFeed.json")
      .then((response) => {
        setDummyUserDataVideos(response.data.itemList);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (parameters.currentUser) {
      getUserInfoData(parameters.currentUser)
        .then((userInfoData: any) => {
          setUserDataFromServer(userInfoData);
          setIsLoading(false);
        })
        .catch((error: any) => console.log(error));
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
          userFeedServerData={dummyUserDataVideos.slice(0, maxPosts)}
        />
      )}
    </div>
  );
};

export default UserFeedPage;
