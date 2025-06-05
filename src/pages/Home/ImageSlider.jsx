// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  const images = [
    "https://i.ibb.co/SXSmY9yz/fpcxvlp1bp171.jpg",
    "https://i.ibb.co/3yBP0B4T/dacaa1c78843c6e0f94220d2cf7f42b7.jpg",
    "https://i.ibb.co/nq1fVpCN/square-houseplant-tips.jpg",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={url}
              alt={`slide-${idx}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]  rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
