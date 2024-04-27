import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const sliderImages = [
    {
      src: "/images/slider-badging.jpg",
      alt: "",
    },
    {
      src: "/images/slider-badag.jpg",
      alt: "",
    },
    {
      src: "/images/slider-scale.jpg",
      alt: "",
    },
    {
      src: "/images/slider-scales.jpg",
      alt: "",
    },
  ];

  return (
    <Slider {...settings} className="slider-container pt-0 ">
      {sliderImages.map((sliderImage, index) => (
        <a
          href="#"
          key={index}
          className="rounded-xl border-2 border-gray-400 hover:border-2 hover:border-white hover:shadow-lg cursor-pointer w-full h-[25vh] sm:h-[40vh] md:h-[50vh] relative overflow-hidden transition duration-500 ease-in-out"
        >
          <img
            src={sliderImage.src}
            alt={sliderImage.alt}
            className="hover:scale-105 rounded-xl object-right-bottom object-cover absolute top-0 min-h-[25vh] sm:min-h-[40vh] md:min-h-[50vh] transition duration-500 ease-in-out"
          />
        </a>
      ))}
    </Slider>
  );
};
