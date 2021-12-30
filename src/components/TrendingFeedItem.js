import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";
import Stats from "./subcomponents/Stats";
import { Card } from "react-bootstrap";

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((trendingVideosData) => (
        <>
          <Card
            key={trendingVideosData.id}
            className="bg-dark text-light text-center"
          >
            <Card.Body>
              <Video
                width={trendingVideosData.videoMeta.width / 2}
                height={trendingVideosData.videoMeta.height / 2}
                src={trendingVideosData.videoUrl}
              />
              <Card.Title>{trendingVideosData.text}</Card.Title>
              <Link to={`/${trendingVideosData.authorMeta.name}`}>
                <Author
                  avatar={trendingVideosData.authorMeta.avatar}
                  nickname={trendingVideosData.authorMeta.nickName}
                />
              </Link>
              <Stats
                likes={trendingVideosData.diggCount}
                comments={trendingVideosData.commentCount}
              />
            </Card.Body>
          </Card>
        </>
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
