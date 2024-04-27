import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  recommend: [],
  newDisney: [],
  original: [],
  trending: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState: INITIAL_STATE,
  reducers: {
    setMovie: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export default movieSlice;
export const movieAction = movieSlice.actions;
