// src/components/Banner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HomeAnimation from "./HomeAnimation";

const Banner = () => {
  const slides = [
    { type: "component", content: <HomeAnimation /> },
    {
      type: "image",
      content: "https://i.ibb.co/mFM7NdvG/library-slider-img-3-1653482722.jpg",
    },
    {
      type: "image",
      content: "https://i.ibb.co/bRqqMWwG/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 rounded-lg overflow-hidden px-4">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay, Pagination]}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {slide.type === "image" ? (
              <img
                src={slide.content}
                alt={`slide-${idx}`}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-lg"
              />
            ) : (
              <div className="w-full h-[300px] md:h-[500px]">
                {slide.content}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
