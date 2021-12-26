const Author = (props) => {
  return (
    <div className="userData mt-2 mb-2 text-center">
      <img
        style={{
          display: "inline",
          width: 60,
          height: "auto",
          marginRight: 10,
        }}
        className="rounded"
        src={props.avatar}
        alt={props.nickname}
      />
      <h3 style={{ display: "inline" }} className="text-light">
        {props.nickname}
      </h3>
    </div>
  );
};

export default Author;
