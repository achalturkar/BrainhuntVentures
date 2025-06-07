"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCar } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { MdHealthAndSafety, MdFactory } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import Line from "../Line/Line";

const industryIcon = [
  { icon: <FaCar />, industry: "Automobile" },
  { icon: <GrTechnology />, industry: "Technology" },
  { icon: <MdFactory />, industry: "Industrial" },
  { icon: <IoFastFood />, industry: "Consumer" },
  { icon: <FaShop />, industry: "Retail" },
  { icon: <MdHealthAndSafety />, industry: "Pharma & Healthcare" },
  { icon: <FaMoneyCheckAlt />, industry: "Financial Services" },
];

const IndustryServe = () => {
  return (
    <section className="py-10 px-2 md:px-10 lg:px-20">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Industries We Serve
        </h2>
        <Line/>
        <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
         We serve a wide range of industries with customized recruitment and staffing solutions that align the right talent with business needs
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        onSlideChangeTransitionEnd={() => {
          const slides = document.querySelectorAll(".swiper-slide");
          slides.forEach((slide) => {
            slide.classList.remove("scale-100", "scale-70", "scale-50", "grayscale-0", "grayscale");

            if (slide.classList.contains("swiper-slide-prev")) {
              slide.classList.add("scale-70", "grayscale");
            } else if (slide.classList.contains("swiper-slide-next")) {
              slide.classList.add("scale-70", "grayscale");
            } else if (slide.classList.contains("swiper-slide-active")) {
              slide.classList.add("scale-100", "grayscale-0");
            } else {
              slide.classList.add("scale-50", "grayscale");
            }
          });
        }}
      >
        {industryIcon.map((each, index) => (
          <SwiperSlide key={index} className="transition-all duration-50 ease-">
            <div className="flex flex-col items-center justify-center">
              <div className="icon-wrapper p-10 text-5xl md:text-6xl bg-gradient-to-br from-blue-100 via-white to-blue-200 text-blue-900 rounded-full shadow-lg transition-all duration-50">
                {each.icon}
              </div>
              <div className="mt-3 text-base md:text-lg font-semibold text-gray-800 text-center">
                {each.industry}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default IndustryServe;
