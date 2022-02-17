import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";
import Stats from "./subcomponents/Stats";

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
              src={trendingVideosData.videoUrl}
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
      videoMeta: PropTypes.object.isRequired,
      videoUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrendingFeedItem;
