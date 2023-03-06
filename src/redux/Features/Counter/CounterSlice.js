import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, actions) => {
      return { ...state, count: state.count + actions.payload };
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
