import sampleAvatar from "../assets/img.png";

interface AuthorProperties {
  nickname: string;
}

const Author = ({ nickname }: AuthorProperties) => {
  return (
    <div className="userData mt-2 mb-2 text-center">
      <img
        alt="user"
        className="d-inline h-auto rounded"
        src={sampleAvatar}
        style={{
          width: 60,
          marginRight: 10,
        }}
      />
      <h4 className="text-light" style={{ display: "inline" }}>
        {nickname || "John Doe"}
      </h4>
    </div>
  );
};

export default Author;
