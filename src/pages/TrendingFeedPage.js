import { useState, useEffect, useContext } from "react";
import { TikTukContext } from "../context";
import TrendingFeedItem from "../components/TrendingFeedItem";
import { getTrendingFeedData } from "../api/apiRequest";
import LoadingSpinner from "../utils/LoadingSpinner";

const TrendingFeedPage = () => {
  const { setIsLoading, isLoading } = useContext(TikTukContext);
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    getTrendingFeedData().then((trendingFeedData) => {
      setTrendingFeedServerData(trendingFeedData);
      setIsLoading(false);
    });
  }, [isLoading]);

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
