import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils/helper";
import PropTypes from "prop-types";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((trendingVideosData) => (
        <div
          key={trendingVideosData.id}
          className="card bg-dark text-light flex-lg-row flex-sm-column align-items-sm-center"
        >
          <Video
            width={trendingVideosData.videoMeta.width / 2}
            height={trendingVideosData.videoMeta.height / 2}
            src={trendingVideosData.videoUrl}
          />
          <div className="flex-column d-flex justify-content-center align-items-center w-100">
            <h2 className="card-title text-center mb-2 ">
              {trendingVideosData.text}
            </h2>
            <Link to={"/" + trendingVideosData.authorMeta.name}>
              <Author
                avatar={trendingVideosData.authorMeta.avatar}
                nickname={trendingVideosData.authorMeta.nickName}
              />
            </Link>
            <div className="videoStats text-secondary mt-3">
              <h4>
                {"❤️ Likes: " + numberWithCommas(trendingVideosData.diggCount)}
              </h4>
              <h4>
                {"💭 Comments: " +
                  numberWithCommas(trendingVideosData.commentCount)}
              </h4>
            </div>
          </div>
        </div>
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
