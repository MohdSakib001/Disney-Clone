import React from "react";

export const FullPageLoader = () => {
  return (
    <div className="-z-10 absolute bg-[#040714] w-screen h-screen flex justify-center items-center">
      <div className="w-20 h-20 bg-transparent rounded-full border-8 border-white border-s-8 border-s-transparent animate-spin "></div>
    </div>
  );
};
