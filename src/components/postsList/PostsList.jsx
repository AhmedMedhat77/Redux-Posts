import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//all from posts Slice
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPost,
  reactionAdded,
} from "../../redux/Features/Posts/postsSlice";

import PostForm from "../postForm/PostForm";
import PostsExcerpt from "../PostsExcerpt/PostsExcerpt";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPost());
    }
  }, [postsStatus, dispatch]);

  console.log(postsStatus);

  const onPostClick = React.useCallback(
    (name, post) =>
      dispatch(reactionAdded({ postId: post.id, reaction: name })),
    [dispatch]
  );

  const content = React.useMemo(() => {
    if (postsStatus === "succeeded") {
      const oderPosts = posts
        .slice("")
        .sort((a, b) => b.date.localeCompare(a.date));
      return (
        <>
          {oderPosts?.map((post) => {
            return (
              <PostsExcerpt key={post.id} post={post} onClick={onPostClick} />
            );
          })}
        </>
      );
    }
    if (postsStatus === "loading") {
      return <p>Loading..</p>;
    }
    if (postsStatus === "fail") {
      return <p>Post Error</p>;
    }
    return <p>Something went Wrong</p>;
  }, [posts, postsStatus]);

  return (
    <section className="posts_sections">
      <h2 className="post__title">Posts</h2>
      <PostForm />
      {content}
    </section>
  );
}

export default PostsList;
