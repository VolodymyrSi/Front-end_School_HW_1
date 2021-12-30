import PropTypes from "prop-types";

const UserInfo = ({ user, stats }) => {
  return (
    <div className="bg-dark text-light d-flex align-items-center justify-content-center p-3">
      {user && (
        <div>
          <h2 className="text-center">{user.nickname}</h2>
          <img className="w-200" src={user.avatarLarger} alt={user.nickname} />
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
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatarLarger: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
    })
  ).isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followerCount: PropTypes.string.isRequired,
      followingCount: PropTypes.string.isRequired,
      heartCount: PropTypes.string.isRequired,
      videoCount: PropTypes.string.isRequired,
    })
  ),
};

export default UserInfo;
