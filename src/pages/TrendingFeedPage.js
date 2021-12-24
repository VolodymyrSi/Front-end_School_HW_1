import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import TrendingFeedItem from "../components/TrendingFeedItem";
import { getTrendingFeedData } from "../api/apiRequest";
import LoadingSpinner from "../utils/LoadingSpinner";

const TrendingFeedPage = () => {
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <TrendingFeedItem trendingFeedServerData={trendingFeedServerData} />
      )}
    </div>
  );
};

export default TrendingFeedPage;
