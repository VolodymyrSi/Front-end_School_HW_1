import { useState, useEffect, useContext } from "react";
import { LoadingSpinner } from "@volodymyrsi/component-library";
import { TikTukContext } from "../store/context";
import TrendingFeedItem from "../components/TrendingFeedItem";
import { getTrendingFeedData } from "../services";

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
