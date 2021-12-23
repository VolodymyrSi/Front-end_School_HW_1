import { Link } from 'react-router-dom';
import { numberWithCommas } from '../utils/helper';
import PropTypes from 'prop-types';

const TrendingFeedItem = ({ trendingFeedServerData }) => {
  return (
    <div className="bg-dark">
      {trendingFeedServerData.map((trendingVideosData) => (
        <div
          key={trendingVideosData.id}
          className="card bg-dark text-light flex-lg-row flex-sm-column align-items-sm-center">
          <div style={{ textAlign: 'center' }}>
            <video
              className="m-lg-5"
              controls
              width={trendingVideosData.videoMeta.width / 2}
              height={trendingVideosData.videoMeta.height / 2}
              src={trendingVideosData.videoUrl}
              frameBorder="0"
              allowFullScreen
              title="Embedded video"
            />
          </div>
          <div
            className="flex-column d-flex justify-content-center align-items-center"
            style={{ width: '100%' }}>
            <h2 className="card-title text-center mb-2 ">{trendingVideosData.text}</h2>
            <Link to={'/' + trendingVideosData.authorMeta.name}>
              {' '}
              <div className="userData mt-2 mb-2 text-center">
                <img
                  style={{
                    display: 'inline',
                    width: 60,
                    height: 'auto',
                    marginRight: 10
                  }}
                  className="rounded"
                  src={trendingVideosData.authorMeta.avatar}
                  alt={trendingVideosData.authorMeta.nickName}
                />
                <h3 style={{ display: 'inline' }} className="text-light">
                  {trendingVideosData.authorMeta.nickName}
                </h3>
              </div>
            </Link>
            <div className="videoStats text-secondary mt-3">
              <h4>{'❤️ Likes: ' + numberWithCommas(trendingVideosData.diggCount)}</h4>
              <h4>{'💭 Comments: ' + numberWithCommas(trendingVideosData.commentCount)}</h4>
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
      videoUrl: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TrendingFeedItem;
