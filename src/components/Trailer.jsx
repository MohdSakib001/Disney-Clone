import React from "react";
import { ImCross } from "react-icons/im";

export const Trailer = ({ trailerURL, handleTrailerPlay }) => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-full  justify-center items-center bg-black bg-opacity-50  transition">
      <div className="w-full lg:w-2/3 h-2/3 mx-2 lg:mx-0 rounded-lg relative bg-[#040714]">
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="w-20 h-20 bg-transparent rounded-full border-8 border-white border-s-8 border-s-transparent animate-spin "></div>
        </div>
        <iframe
          width="560"
          height="315"
          src={trailerURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-full h-full border-4 border-[#040714]"
        ></iframe>
        <div
          onClick={handleTrailerPlay}
          className="absolute -right-2 -top-2 text-xs bg-[#040714] p-3 rounded-full cursor-pointer opacity-70 hover:opacity-100 transition"
        >
          <ImCross />
        </div>
      </div>
    </div>
  );
};
