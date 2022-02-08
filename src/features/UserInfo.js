import PropTypes from "prop-types";

const UserInfo = ({ user, stats }) => {
  return (
    <div className="bg-dark text-light d-flex align-items-center justify-content-center p-3">
      {user && (
        <div>
          <h2 className="text-center">{user.nickname}</h2>
          <img alt={user.nickname} className="w-200" src={user.avatarLarger} />
        </div>
      )}
      {stats && (
        <div className="ml-3">
          <p>{`⬅️ Followers: ${stats.followerCount.toLocaleString()}`}</p>
          <p>{`➡️ Following: ${stats.followingCount.toLocaleString()}`}</p>
          <p>{`❤️ Total likes: ${stats.heartCount.toLocaleString()}`}</p>
          <p>{`🎥 Total videos: ${stats.videoCount.toLocaleString()}`}</p>
        </div>
      )}
    </div>
  );
};

UserInfo.propTypes = {
  stats: PropTypes.shape({
    followerCount: PropTypes.string.isRequired,
    followingCount: PropTypes.string.isRequired,
    heartCount: PropTypes.string.isRequired,
    videoCount: PropTypes.string.isRequired,
  }),
  user: PropTypes.shape({
    avatarLarger: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
  }),
};

UserInfo.defaultProps = {
  stats: {
    followerCount: "no data",
    followingCount: "no data",
    heartCount: "no data",
    videoCount: "no data",
  },
  user: {
    nickname: "John Doe",
    avatarLarger:
      "https://pbs.twimg.com/profile_images/1326707048478892033/Ln0v50LP_400x400.jpg",
  },
};

export default UserInfo;
