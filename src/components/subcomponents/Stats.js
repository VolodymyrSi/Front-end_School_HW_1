const Stats = ({ likes, comments, views }) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{`❤️ Likes: ${likes.toLocaleString()}`}</h4>
      <h4>{`💭 Comments: ${comments.toLocaleString()}`}</h4>
      {views && <h4>{`📺 Views: ${views}`}</h4>}
    </div>
  );
};

export default Stats;
