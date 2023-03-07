import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/Features/Posts/postsSlice";
import PostAuthor from "../PostAuthor/PostAuthor";
import PostForm from "../postForm/PostForm";
import ReactionButtons from "../reactions/ReactionButtons";
import TimeAgo from "../TimeAgo/TimeAgo";
function PostsList() {
  const posts = useSelector(selectAllPosts);
  // to sort array and slice to make shalow copy
  const oderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  // we will map over orderd posts
  const renderedPosts = oderPosts?.map((post) => {
    return (
      <article className="post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    );
  });

  return (
    <section className="posts_sections">
      <h2 className="post__title">Posts</h2>
      <PostForm />
      {renderedPosts}
    </section>
  );
}

export default PostsList;
