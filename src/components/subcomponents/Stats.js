const Stats = (props) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{`❤️ Likes: ${props.likes.toLocaleString()}`}</h4>
      <h4>{`💭 Comments: ${props.comments.toLocaleString()}`}</h4>
      {props.views && <h4>{"📺 Views: " + props.views}</h4>}
    </div>
  );
};

export default Stats;
