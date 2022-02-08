import PropTypes from "prop-types";

const Stats = ({ likes, comments, views }) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{`❤️ Likes: ${likes.toLocaleString()}`}</h4>
      <h4>{`💭 Comments: ${comments.toLocaleString()}`}</h4>
      {views && <h4>{`📺 Views: ${views}`}</h4>}
    </div>
  );
};

Stats.propTypes = {
  comments: PropTypes.number,
  likes: PropTypes.number,
  views: PropTypes.number,
};

Stats.defaultProps = {
  comments: "no data",
  likes: "no data",
  views: "no data",
};

export default Stats;
