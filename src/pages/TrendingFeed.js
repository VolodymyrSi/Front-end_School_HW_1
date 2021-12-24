import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import TrendingFeedItem from "../components/TrendingFeedItem";
import { userApi } from "../api/api";
import {getTrendingFeedData} from "../api/apiRequest";

const TrendingFeed = () => {
  const { setIsLoading, isLoading } = useContext(Context);
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    getTrendingFeedData().then((trendingFeedData) => {
      setTrendingFeedServerData(trendingFeedData);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <TrendingFeedItem trendingFeedServerData={trendingFeedServerData} />
    </div>
  );
};

export default TrendingFeed;
