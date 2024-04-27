import React from "react";
import { InnerBox } from "../components/InnerBox.jsx";

export const Recommended = ({ InnerBoxDetail }) => {
  return (
    <div
      className="my-10"
      id={`${InnerBoxDetail.category.split(" ").join("")}`}
    >
      <h4 className="text-xl font-semibold px-1 lg:px-3 tracking-wider">
        {InnerBoxDetail.category}
      </h4>

      <div className="flex flex-row row-span-2 lg:row-span-4 overflow-visible lg:overflow-x-scroll gap-5 md:gap-x-10 lg:gap-5 flex-wrap lg:flex-nowrap justify-around lg:justify-start py-4 px-0 lg:px-3 mx-auto">
        {/* Creating many image components Dynamically */}
        {InnerBoxDetail.movies.map((movie, index) => (
          <InnerBox key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};
