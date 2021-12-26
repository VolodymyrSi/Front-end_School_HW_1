import PropTypes from "prop-types";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";
import Stats from "./subcomponents/Stats";

const UserFeedItem = ({ userFeedServerData }) => {
  return (
    <div className="bg-dark">
      {userFeedServerData.map((userFeedVideos) => (
        <div
          key={userFeedVideos.id}
          className="card bg-dark text-light flex-lg-row flex-sm-column align-items-md-center align-items-sm-center"
        >
          <Video
            width={userFeedVideos.video.width / 2}
            height={userFeedVideos.video.height / 2}
            src={userFeedVideos.video.playAddr}
          />
          <div
            className="flex-column d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <h2 className="card-title text-center mb-2 ">
              {userFeedVideos.desc}
            </h2>
            <Author
              avatar={userFeedVideos.author.avatarThumb}
              nickname={userFeedVideos.author.nickname}
            />
            <Stats
              likes={userFeedVideos.stats.diggCount}
              comments={userFeedVideos.stats.commentCount}
              views={userFeedVideos.stats.playCount}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

UserFeedItem.propTypes = {
  userFeedServerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      videoMeta: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserFeedItem;
