import { createReducer } from "@reduxjs/toolkit";

export const firstReducer = createReducer(
  {
    //state
    count: 0,
  },
  {
    //actionMap
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  }
);
