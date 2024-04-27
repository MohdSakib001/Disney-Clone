import React from "react";
import { Link } from "react-router-dom";

export const InnerBox = ({ movie }) => {
  return (
    <Link
      to={`/details/${movie.id}`}
      className="border-4 border-gray-700 hover:border-white shadow-lg hover:shadow-2xl rounded-xl hover:scale-105 transition delay-100 duration-500 ease-in-out min-h-32 min-w-[45vw] md:min-h-60 lg:min-h-40 lg:min-w-60 relative overflow-hidden group custom-breakpoint"
    >
      <img
        src={movie.cardImg}
        alt={movie.title}
        className="w-full h-full absolute top-0 object-cover rounded-lg"
      />
    </Link>
  );
};
