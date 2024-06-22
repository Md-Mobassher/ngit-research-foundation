"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "./slidesData";

type TSlide = {
  id: number;
  title?: string;
  url?: string;
  image: any;
};

const BannerSection = () => {
  return (
    <div className="shadow-lg rounded-md lg:px-4 md:px-3 px-2 py-2 border border-gray-300 lg:h-[600px] md:h-[450px] h-[300px] mt-2">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="w-full h-full rounded-lg mySwiper"
      >
        {slides.map((slide: TSlide) => (
          <SwiperSlide key={slide?.id}>
            <div className="w-full flex justify-center items-start h-full">
              <a href={`${slide.url}`} target="_blank">
                <Image
                  src={slide?.image}
                  alt={`Slide ${slide?.id}`}
                  className="rounded-md mx-auto"
                  width={1000}
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
