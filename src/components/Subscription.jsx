import React from "react";
import { ImCross } from "react-icons/im";

export const Subscription = ({ handleMoviePlay }) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full  justify-center items-center bg-black bg-opacity-50  transition">
      <div className="w-1/2 h-20 mx-2 lg:mx-0 rounded-lg relative bg-[#040714] text-red-600 font-bold uppercase flex justify-center items-center text-center animate-bounce tracking-wider">
        <span>you dont have subscription</span>
        <div
          onClick={handleMoviePlay}
          className="absolute -right-2 -top-2 text-xs bg-[#040714] p-3 rounded-full cursor-pointer opacity-70 hover:opacity-100 transition"
        >
          <ImCross />
        </div>
      </div>
    </div>
  );
};
