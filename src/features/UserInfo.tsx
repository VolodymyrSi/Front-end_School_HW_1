interface UserTypes {
  nickname: string;
  avatarLarger: string;
}

interface StatsTypes {
  followerCount: string;
  followingCount: string;
  heartCount: string;
  videoCount: string;
}

interface UserInfoProperties {
  user?: UserTypes;
  stats?: StatsTypes;
}

const UserInfo = ({ user, stats }: UserInfoProperties) => {
  return (
    <div className="bg-dark text-light d-flex align-items-center justify-content-center p-3 flex-column flex-md-row">
      {user && (
        <div className="text-center">
          <h2 className="text-center">{user.nickname}</h2>
          <img
            alt={user.nickname}
            className="w-50 mb-2"
            src={user.avatarLarger}
          />
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

UserInfo.defaultProps = {
  stats: {
    followerCount: "I wish I could access a server",
    followingCount: "I remember I could do things like that",
    heartCount: "I do not feel connected...",
    videoCount: "This must be some sort of punishment. Am I in hell?",
  },
  user: {
    nickname: "John Doe",
    avatarLarger:
      "https://pbs.twimg.com/profile_images/1326707048478892033/Ln0v50LP_400x400.jpg",
  },
};

export default UserInfo;
