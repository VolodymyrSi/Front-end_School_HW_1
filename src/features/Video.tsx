interface VideoProperties {
  height: number;
  src: string;
  width: number;
}

const Video = ({ height, src, width }: VideoProperties) => {
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

export default Video;
