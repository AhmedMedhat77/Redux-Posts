import { useDispatch } from "react-redux";
import { reactionAdded } from "../../redux/Features/Posts/postsSlice";
import React from "react";

const ReactionsEmojs = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffe: "☕",
};

function ReactionButtons(props) {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(ReactionsEmojs).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(reactionAdded({ postId: props.post.id, reaction: name }))
          }
        >
          {emoji} {props.post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
