import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Learn Redux Tool Kit",
      content: "Learn Every Day A new Thing",
    },
    {
      id: 2,
      title: "Slices...",
      content: "Iam hungry Right Now ",
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
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// this is  selector beacuse if we change the initial state structure we didn't miss in every component we want to call posts on it
export const selectAllPosts = (state) => state.posts.posts;

// exporting actions
export const { postAdded } = PostsSlice.actions;

export default PostsSlice.reducer;
