import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import watchlistSlice from "./watchlistSlice";

const disneyStore = configureStore({
  reducer: {
    User: userSlice.reducer,
    Movies: movieSlice.reducer,
    WatchList: watchlistSlice.reducer,
  },
});

export default disneyStore;
