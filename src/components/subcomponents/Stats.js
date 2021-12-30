const Stats = (properties) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{`❤️ Likes: ${properties.likes.toLocaleString()}`}</h4>
      <h4>{`💭 Comments: ${properties.comments.toLocaleString()}`}</h4>
      {properties.views && <h4>{`📺 Views: ${properties.views}`}</h4>}
    </div>
  );
};

export default Stats;
