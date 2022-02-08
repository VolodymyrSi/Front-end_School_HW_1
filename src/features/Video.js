import PropTypes from "prop-types";

const Video = ({ height, src, width }) => {
  return (
    <div className="text-center">
      <video
        className="m-lg-5"
        controls
        height={height}
        src={src}
        title="Embedded video"
        width={width}
      />
    </div>
  );
};

Video.propTypes = {
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Video;
