import PropTypes from "prop-types";
import sampleAvatar from "../assets/img.png";

const Author = ({ nickname }) => {
  return (
    <div className="userData mt-2 mb-2 text-center">
      <img
        alt={nickname}
        className="d-inline h-auto rounded"
        src={sampleAvatar}
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
  nickname: PropTypes.string,
};

Author.defaultProps = {
  nickname: "John Doe",
};

export default Author;
