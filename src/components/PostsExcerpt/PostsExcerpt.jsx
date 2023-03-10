import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";
import ReactionButtons from "../reactions/ReactionButtons";
import TimeAgo from "../TimeAgo/TimeAgo";

function PostsExcerpt(props) {
  return (
    <article className="post">
      <h3>{props.post.title}</h3>
      <p>{props.post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor author={props.author} />
        <TimeAgo timeStamp={props.post.date} />
      </p>
      <ReactionButtons
        reactionsEmojs={props.reactionsEmojs}
        onClick={props.onClick}
        post={props.post}
      />
    </article>
  );
}

export default React.memo(PostsExcerpt);
