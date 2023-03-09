import React from "react";

const ReactionsEmojs = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffe: "☕",
};

function ReactionButtons(props) {

  const reactionButtons = Object.entries(ReactionsEmojs).map(
    ([name, emoji]) => {
      return (
        <button
          key={`${props.post.id}-${name}`}
          type="button"
          className="reactionButton"
          onClick={()=>props.onClick(name,props.post)}
        >
          {emoji} {props.post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionButtons}</div>;
}

export default ReactionButtons;
