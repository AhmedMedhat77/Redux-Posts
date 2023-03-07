import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/CounterSlice";
import postsReducer from "../Features/Posts/postsSlice";
import usersReducer from "../Features/users/usersSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
