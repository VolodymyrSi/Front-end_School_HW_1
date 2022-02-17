import { Link } from "react-router-dom";
import PropTypes, { number } from "prop-types";
import { Card } from "react-bootstrap";
import Video from "../features/Video";
import Author from "../features/Author";
import Stats from "../features/Stats";
import sample from "../assets/sample.mp4";

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((trendingVideosData) => (
        <Card
          key={trendingVideosData.id}
          className="bg-dark text-light text-center"
        >
          <Card.Body>
            <Video
              height={trendingVideosData.videoMeta.height / 2}
              src={sample}
              width={trendingVideosData.videoMeta.width / 2}
            />
            <Card.Title>{trendingVideosData.text}</Card.Title>
            <Link to={`/${trendingVideosData.authorMeta.name}`}>
              <Author
                avatar={trendingVideosData.authorMeta.avatar}
                nickname={trendingVideosData.authorMeta.nickName}
              />
            </Link>
            <Stats
              comments={trendingVideosData.commentCount}
              likes={trendingVideosData.diggCount}
              views={trendingVideosData.playCount}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

TrendingFeedItem.propTypes = {
  trendingFeedServerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      videoMeta: PropTypes.shape({
        duration: number,
        height: number,
        width: number,
      }),
      videoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrendingFeedItem;
