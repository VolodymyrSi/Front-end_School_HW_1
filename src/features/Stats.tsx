interface StatsTypes {
  likes: string;
  comments: string;
  views: string;
}

const Stats = ({ likes, comments, views }: StatsTypes) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{`❤️ Likes: ${likes.toLocaleString()}`}</h4>
      <h4>{`💭 Comments: ${comments.toLocaleString()}`}</h4>
      {views && <h4>{`📺 Views: ${views.toLocaleString()}`}</h4>}
    </div>
  );
};

export default Stats;
