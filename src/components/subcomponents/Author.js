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

export default Author;
