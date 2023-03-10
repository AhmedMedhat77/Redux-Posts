import React from "react";



function ReactionButtons(props) {

  const reactionButtons = Object.entries(props.reactionsEmojs).map(
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

export default React.memo( ReactionButtons );
