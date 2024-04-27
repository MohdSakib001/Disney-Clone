import React from "react";
import { ImCross } from "react-icons/im";
import { HeaderFeature } from "./HeaderFeature";
import { useSelector } from "react-redux";

export const Sidebar = ({
  handleSearchBar,
  handleSidebar,
  sidebar,
  headerFeatures,
  handleSignOut,
}) => {
  const userStore = useSelector((store) => store.User);

  return (
    <div
      className={`w-screen h-screen bg-fixed fixed max-h-full z-30 bg-[#040714] overflow-hidden flex flex-col justify-between ${
        sidebar ? "translate-x-full" : "translate-x-0"
      } lg:translate-x-full transition duration-500 ease-in-out`}
    >
      <div className="flex-1">
        <div className=" mx-3 my-2 flex justify-between items-center">
          <div className="flex items-center gap-x-5 font-semibold text-lg flex-wrap">
            <img
              src={
                userStore.photo === null
                  ? "./images/profile-placeholder.jpg"
                  : userStore.photo
              }
              alt={userStore.name === null ? "Guest" : userStore.name}
              className="rounded-full w-12 cursor-pointer"
            />
            <h4 className="cursor-pointer tracking-wide">
              Welcome, {userStore.name === null ? "Guest" : userStore.name}
            </h4>
          </div>

          <ImCross
            onClick={handleSidebar}
            className="font-semibold text-xl cursor-pointer"
          />
        </div>

        <ul className=" m-5 text-md" onClick={handleSidebar}>
          {!sidebar && (
            <HeaderFeature
              headerFeatures={headerFeatures}
              handleSearchBar={handleSearchBar}
            />
          )}
        </ul>
      </div>
      <div
        onClick={handleSignOut}
        className=" transition ease-in mx-1 my-4 cursor-pointer"
      >
        <span className="bg-[rgb(19,19,19)] mx-4 py-2 px-5 border border-white rounded-md font-semibold tracking-widest active:bg-white active:text-[#040714] transition">
          Sign Out
        </span>
      </div>
    </div>
  );
};
