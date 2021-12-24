import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../App";
import VideoFeedItem from "../components/UserFeedItem";
import UserInfo from "../components/UserInfo";
import { getUserInfoData } from "../api/apiRequest";
import { MAX_POSTS } from "../constants";

const UserFeed = () => {
  const { setIsLoading, isLoading } = useContext(Context);
  const params = useParams();

  const [userDataServerData, setUserDataServerData] = useState({});
  const [dummyUserData, setDummyUserData] = useState([]);

  useEffect(() => {
    axios
      .get("./user-feed.json")
      .then((res) => {
        setDummyUserData(res.data.itemList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (params.currentUser) {
      getUserInfoData(params.currentUser).then((userInfoData) => {
        setUserDataServerData(userInfoData);
        setIsLoading(false);
      });
    }
  }, [params]);

  return (
    <div>
      <UserInfo {...userDataServerData} />
      {dummyUserData && (
        <VideoFeedItem userFeedServerData={dummyUserData.slice(0, MAX_POSTS)} />
      )}
    </div>
  );
};

export default UserFeed;
