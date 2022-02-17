import { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TikTukContext } from "../store/context";
import TrendingFeedItem from "../components/TrendingFeedItem";
import { getTrendingFeedData } from "../services";
import LoadingSpinner from "../assets/LoadingSpinner";

const TrendingFeedPage = () => {
  const { setIsLoading, isLoading } = useContext(TikTukContext);
  const [videoIndex, setVideoIndex] = useState(9);
  const [trendingFeedServerData, setTrendingFeedServerData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    getTrendingFeedData().then((trendingFeedData: any) => {
      setTrendingFeedServerData(trendingFeedData);
      setIsLoading(false);
    });
  }, []);

  const canShowMore = () => {
    return trendingFeedServerData.length - videoIndex > 0;
  };

  const addVideos = () => {
    if (trendingFeedServerData.length - videoIndex > 9) {
      setVideoIndex(videoIndex + 9);
      return;
    }
    setVideoIndex(videoIndex + (trendingFeedServerData.length - videoIndex));
  };

  return (
    <div className="bg-dark">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TrendingFeedItem
            trendingFeedServerData={trendingFeedServerData.slice(0, videoIndex)}
          />
          {canShowMore() && (
            <Card className="bg-dark text-white">
              <Button onClick={() => addVideos()} type="button" variant="light">
                Show more
              </Button>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default TrendingFeedPage;
