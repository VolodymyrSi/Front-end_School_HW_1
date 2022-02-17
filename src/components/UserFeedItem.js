import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";
import Stats from "./subcomponents/Stats";

const UserFeedItem = ({ userFeedServerData }) => {
  return (
    <div className="bg-dark">
      {userFeedServerData.map((userFeedVideos) => (
        <Card
          key={userFeedVideos.id}
          className="bg-dark text-light text-center"
        >
          <Card.Body>
            <Video
              height={userFeedVideos.video.height / 2}
              src={userFeedVideos.video.playAddr}
              width={userFeedVideos.video.width / 2}
            />
            <Card.Title>{userFeedVideos.desc}</Card.Title>
            <Author
              avatar={userFeedVideos.author.avatarThumb}
              nickname={userFeedVideos.author.nickname}
            />
            <Stats
              comments={userFeedVideos.stats.commentCount}
              likes={userFeedVideos.stats.diggCount}
              views={userFeedVideos.stats.playCount}
            />
          </Card.Body>
        </Card>
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
