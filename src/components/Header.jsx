import React, { useEffect, useState } from "react";
import logo from "/images/logo.svg";
import { auth, provider } from "../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice";
import { HeaderFeature } from "./HeaderFeature";
import { Search } from "./Search";
import { watchlistAction } from "../store/watchlistSlice";
import { Link } from "react-router-dom";

export const Header = ({
  searchBar,
  handleSearchBar,
  handleIsLoading,
  handleSidebar,
  headerFeatures,
  handleSignOut,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Reading the slice from store
  const userSelector = useSelector((store) => store.User);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDetails = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          userID: user.uid,
        };
        dispatch(userAction.setUserLoginDetails(userDetails));

        // const userData = localStorage.getItem(user.uid);
        // console.log(userData);

        dispatch(
          watchlistAction.initializeFromLocalstorage(userDetails.userID)
        );
        navigate("/home");
      }
      handleIsLoading();
    });
  }, [userSelector.isLogin]);

  return (
    <nav className=" w-screen py-3 px-3 md:px-5 flex justify-between items-center fixed top-0 bg-[#040714] flex-wrap select-none z-20">
      <div className=" flex">
        <a href="/">
          <img src={logo} alt="" className="w-20 mr-6" />
        </a>
        {userSelector.isLogin && (
          <ul className=" hidden lg:flex lg:items-end gap-x-5 font-semibold tracking-widest">
            <HeaderFeature
              headerFeatures={headerFeatures}
              handleSearchBar={handleSearchBar}
            />
          </ul>
        )}
      </div>

      <Search searchBar={searchBar} />

      {userSelector.isLogin ? (
        <div onClick={handleSidebar} className="relative group hover:shadow-md">
          <img
            src={
              userSelector.photo === null
                ? "./images/profile-placeholder.jpg"
                : userSelector.photo
            }
            alt={userSelector.name}
            className="rounded-full w-12 cursor-pointer"
          />

          <div className="hidden group-hover:block group-hover:opacity-100 absolute -left-24 -bottom-[33px] opacity-0 transition ease-in">
            <span
              onClick={handleSignOut}
              className="bg-[rgb(19,19,19)] py-2 px-5 border border-white rounded-md font-semibold tracking-widest text-lg active:bg-white active:text-[#040714] transition group-hover:cursor-pointer"
            >
              Sign Out
            </span>
          </div>
        </div>
      ) : (
        <Link
          type="button"
          to="/LoginSignup"
          className="py-2 px-5 border border-white rounded-md font-semibold tracking-widest text-lg hover:bg-white hover:text-[#040714] transition delay-100 ease-in"
        >
          Login
        </Link>
      )}
    </nav>
  );
};
