import React from "react";

export const ViewBox = ({ image }) => {
  return (
    <a
      href="#"
      className="border-4 border-gray-700 hover:border-white shadow-lg rounded-xl hover:scale-105 transition delay-100 duration-500 ease-in-out min-h-60 min-w-[80vw] md:min-w-[60vw] lg:min-h-44 lg:min-w-60 relative overflow-hidden group"
    >
      <video
        src={image.vdoSrc}
        className="w-full h-full absolute top-0 object-cover rounded-lg  opacity-0 group-hover:opacity-100 transition delay-100 duration-500 ease-in-out"
        autoPlay
        loop
        muted
        playsInline // Add playsInline for iOS support
      />
      <img
        src={image.imgSrc}
        alt={image.alt}
        className="w-full h-full absolute top-0 object-cover rounded-lg"
      />
    </a>
  );
};
