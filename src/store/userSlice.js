import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: "",
  name: "",
  email: "",
  photo: "",
  isLogin: false,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      // Setting up name, email and photo
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.userID = action.payload.userID;
      state.isLogin = true;

      // Getting previous users if exist
      const prevUsers =
        JSON.parse(localStorage.getItem("userID")) === null
          ? []
          : JSON.parse(localStorage.getItem("userID"));

      // Adding newuser into localstorage
      if (!prevUsers.includes(state.userID)) {
        localStorage.setItem(
          "userID",
          JSON.stringify([...prevUsers, state.userID])
        );
      }
    },

    setSignOutState: (state) => {
      // Remove user details if he logs out
      state.name = null;
      state.email = null;
      state.photo = null;
      state.userID = null;
      state.isLogin = false;

      // localStorage.removeItem("userID");
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
