import PropTypes from "prop-types";

const Author = ({ avatar, nickname }) => {
  return (
    <div className="userData mt-2 mb-2 text-center">
      <img
        alt={nickname}
        className="d-inline h-auto rounded"
        src={avatar}
        style={{
          width: 60,
          marginRight: 10,
        }}
      />
      <h3 className="text-light" style={{ display: "inline" }}>
        {nickname}
      </h3>
    </div>
  );
};

Author.propTypes = {
  avatar: PropTypes.string,
  nickname: PropTypes.string,
};

Author.defaultProps = {
  avatar:
    "https://pbs.twimg.com/profile_images/1326707048478892033/Ln0v50LP_400x400.jpg",
  nickname: "John Doe",
};

export default Author;
