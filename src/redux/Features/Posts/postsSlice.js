import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = {
  posts: [
    {
      id: 1,
      title: "Learn Redux Tool Kit",
      content: "Learn Every Day A new Thing",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffe: 0,
      },
    },
    {
      id: 2,
      title: "Slices...",
      content: "Iam hungry Right Now ",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffe: 0,
      },
    },
  ],
};

const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffe: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

// this is  selector beacuse if we change the initial state structure we didn't miss in every component we want to call posts on it
export const selectAllPosts = (state) => state.posts.posts;

// exporting actions
export const { postAdded, reactionAdded } = PostsSlice.actions;

export default PostsSlice.reducer;
