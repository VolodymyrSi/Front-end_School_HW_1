const Video = (props) => {
  return (
    <div className="text-center">
      <video
        className="m-lg-5"
        controls
        width={props.width}
        height={props.height}
        src={props.src}
        title="Embedded video"
      />
    </div>
  );
};

export default Video;
