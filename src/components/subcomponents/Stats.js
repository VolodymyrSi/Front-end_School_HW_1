import { numberWithCommas } from "../../utils/helper";

const Stats = (props) => {
  return (
    <div className="videoStats text-secondary mt-3">
      <h4>{"❤️ Likes: " + numberWithCommas(props.likes)}</h4>
      <h4>{"💭 Comments: " + numberWithCommas(props.comments)}</h4>
      {props.views && <h4>{"📺 Views: " + props.views}</h4>}
    </div>
  );
};

export default Stats;
