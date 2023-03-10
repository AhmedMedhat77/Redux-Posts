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
import { selectAllUsers } from "../../redux/Features/users/usersSlice";

import PostForm from "../postForm/PostForm";
import PostsExcerpt from "../PostsExcerpt/PostsExcerpt";

const ReactionsEmojs = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffe: "☕",
};

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const users = useSelector(selectAllUsers);

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

  // const author = users.find((user) => user.id === props.userId);

  const content = React.useMemo(() => {
    if (postsStatus === "succeeded") {
      const oderPosts = posts
        .slice("")
        .sort((a, b) => b.date.localeCompare(a.date));
      return (
        <>
          {oderPosts?.map((post) => {
            return (
              <PostsExcerpt
                key={post.id}
                author={users.find((usr) => usr.id === post.userId)}
                post={post}
                onClick={onPostClick}
                reactionsEmojs={ReactionsEmojs}
              />
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
  }, [onPostClick, posts, postsStatus, users]);

  return (
    <section className="posts_sections">
      <h2 className="post__title">Posts</h2>
      <PostForm />
      {content}
    </section>
  );
}

export default PostsList;
