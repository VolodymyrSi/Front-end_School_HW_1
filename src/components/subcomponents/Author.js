const Author = ({ avatar, nickname }) => {
  return (
    <div className="userData mt-2 mb-2 text-center">
      <img
        className="d-inline h-auto rounded"
        style={{
          width: 60,
          marginRight: 10,
        }}
        src={avatar}
        alt={nickname}
      />
      <h3 style={{ display: "inline" }} className="text-light">
        {nickname}
      </h3>
    </div>
  );
};

export default Author;
