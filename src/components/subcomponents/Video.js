const Video = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <video
        className="m-lg-5"
        controls
        width={props.width}
        height={props.height}
        src={props.src}
        frameBorder="0"
        allowFullScreen
        title="Embedded video"
      />
    </div>
  );
};

export default Video();
