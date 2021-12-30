import PropTypes from "prop-types";
import Video from "./subcomponents/Video";
import Author from "./subcomponents/Author";
import Stats from "./subcomponents/Stats";
import { Card } from "react-bootstrap";

const UserFeedItem = ({ userFeedServerData }) => {
  return (
    <div className="bg-dark">
      {userFeedServerData.map((userFeedVideos) => (
        <>
          <Card
            key={userFeedVideos.id}
            className="bg-dark text-light text-center"
          >
            <Card.Body>
              <Video
                width={userFeedVideos.video.width / 2}
                height={userFeedVideos.video.height / 2}
                src={userFeedVideos.video.playAddr}
              />
              <Card.Title>{userFeedVideos.desc}</Card.Title>
              <Author
                avatar={userFeedVideos.author.avatarThumb}
                nickname={userFeedVideos.author.nickname}
              />
              <Stats
                likes={userFeedVideos.stats.diggCount}
                comments={userFeedVideos.stats.commentCount}
                views={userFeedVideos.stats.playCount}
              />
            </Card.Body>
          </Card>
        </>
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
