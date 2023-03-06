import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../../redux/Features/Posts/postsSlice";
import PostForm from "../postForm/PostForm";
function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts?.map((post) => {
    return (
      <article className="post" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
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
