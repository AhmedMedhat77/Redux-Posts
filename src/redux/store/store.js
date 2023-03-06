import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";
import postsReducer from "../Features/Posts/postsSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export default store;
