import React from "react";
import { ViewBox } from "./ViewBox";

export const Viewers = () => {
  const viewers = [
    {
      imgSrc: "/images/viewers-disney.png",
      vdoSrc: "/videos/1564674844-disney.mp4",
      alt: "disney",
    },
    {
      imgSrc: "/images/viewers-marvel.png",
      vdoSrc: "/videos/1564676115-marvel.mp4",
      alt: "marvel",
    },
    {
      imgSrc: "/images/viewers-national.png",
      vdoSrc: "/videos/1564676296-national-geographic.mp4",
      alt: "national",
    },
    {
      imgSrc: "/images/viewers-pixar.png",
      vdoSrc: "/videos/1564676714-pixar.mp4",
      alt: "pixar",
    },
    {
      imgSrc: "/images/viewers-starwars.png",
      vdoSrc: "/videos/1608229455-star-wars.mp4",
      alt: "starwars",
    },
  ];

  return (
    <div className="mt-20 lg:mt-16 overflow-x-hidden py-2 flex flex-col items-center gap-y-5 lg:gap-x-5 lg:flex-row lg:overflow-x-scroll px-5 lg:px-3">
      {viewers.map((image, index) => (
        <ViewBox key={index} image={image} />
      ))}
    </div>
  );
};
