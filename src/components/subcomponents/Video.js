const Video = (properties) => {
  return (
    <div className="text-center">
      <video
        className="m-lg-5"
        controls
        height={properties.height}
        src={properties.src}
        title="Embedded video"
        width={properties.width}
      />
    </div>
  );
};

export default Video;
