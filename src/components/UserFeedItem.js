import { numberWithCommas } from '../utils/Helper';
import PropTypes from 'prop-types';

const VideoFeedItem = ({ userFeedServerData }) => {
  return (
    <div className="bg-dark">
      {userFeedServerData.map((userFeedVideos) => (
        <div
          key={userFeedVideos.id}
          className="card bg-dark text-light flex-lg-row flex-md-column flex-sm-column align-items-md-center align-items-sm-center">
          <div style={{ textAlign: 'center' }}>
            <video
              className="m-lg-5"
              controls
              width={userFeedVideos.video.width / 2}
              height={userFeedVideos.video.height / 2}
              src={userFeedVideos.video.playAddr}
              frameBorder="0"
              allowFullScreen
              title="Embedded video"
            />
          </div>
          <div
            className="flex-column d-flex justify-content-center align-items-center"
            style={{ width: '100%' }}>
            <h2 className="card-title text-center mb-2 ">{userFeedVideos.desc}</h2>
            <div className="userData mt-2 mb-2 text-center">
              <img
                style={{
                  display: 'inline',
                  width: 60,
                  height: 'auto',
                  marginRight: 10
                }}
                className="rounded"
                src={userFeedVideos.author.avatarThumb}
                alt={userFeedVideos.author.nickname}
              />
              <h3 style={{ display: 'inline' }} className="text-light">
                {userFeedVideos.author.nickname}
              </h3>
            </div>
            <div className="videoStats text-secondary mt-3">
              <h4>{'❤️ Likes: ' + numberWithCommas(userFeedVideos.stats.diggCount)}</h4>
              <h4>
                {'💭 Comments: ' + numberWithCommas(userFeedVideos.stats.commentCount)}
              </h4>
              <h4>{'📺 Views: ' + userFeedVideos.stats.playCount}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

VideoFeedItem.propTypes = {
  userFeedServerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      videoMeta: PropTypes.string.isRequired
    })
  ).isRequired
};

export default VideoFeedItem;
