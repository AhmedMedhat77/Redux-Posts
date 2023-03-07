import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: "0", name: "Ahmed Medhat" },
    { id: "1", name: "Jhon Doe" },
    { id: "2", name: "Nick Jyrad" },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users.users;

export default usersSlice.reducer;
