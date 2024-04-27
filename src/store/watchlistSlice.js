import { createSlice } from "@reduxjs/toolkit";

// Getting the IDs of all users
const userIDs = JSON.parse(localStorage.getItem("userIDs"));

// Function to retrieve watchlist data for a specific user
const getWatchlistDataForUser = (userID) => {
  return JSON.parse(localStorage.getItem(userID)) || [];
};

const watchlistSlice = createSlice({
  name: "WatchList",
  initialState: [],
  reducers: {
    addToWatchList: (state, action) => {
      const { userID, itemID } = action.payload;

      // Retrieve the current user's watchlist data
      const userData = getWatchlistDataForUser(userID);

      // Update the watchlist data for the current user
      const updatedUserData = [...userData, itemID];
      localStorage.setItem(userID, JSON.stringify(updatedUserData));

      return updatedUserData;
    },
    removeFromWatchList: (state, action) => {
      const { userID, itemID } = action.payload;

      // Retrieve the current user's watchlist data
      const userData = getWatchlistDataForUser(userID);

      // Filter out the itemID from the user's watchlist data
      const updatedUserData = userData.filter((element) => element !== itemID);
      localStorage.setItem(userID, JSON.stringify(updatedUserData));

      return updatedUserData;
    },
    initializeFromLocalstorage: (state, action) => {
      // getting data of current user from localstorage and store into the state
      return getWatchlistDataForUser(action.payload);
    },
  },
});

export default watchlistSlice;
export const watchlistAction = watchlistSlice.actions;
