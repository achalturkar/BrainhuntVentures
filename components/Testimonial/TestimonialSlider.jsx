// components/TestimonialSlider.jsx
"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
 
  {
    comment:
      "BrainHunt has been instrumental in helping us close critical IT positions quickly. Their team truly understands the tech landscape and delivers quality candidates every time.",
    name: "Priya Sharma",
    profession: "HR Manager, SoftCore Technologies",
  },
  {
    comment:
      "We were looking for a reliable staffing partner who could handle both IT and non-IT roles. BrainHunt exceeded our expectations by providing well-screened profiles and timely support.",
    name: "Rohit Mehta",
    profession: "Talent Acquisition Lead, FinEdge Corp",
  },
  {
    comment:
      "From contract staffing to full-time hires, BrainHunt has always provided us with top-notch service. Their understanding of business needs and quick turnaround sets them apart.",
    name: "Sneha Patel",
    profession: "HR Business Partner, Innovatech Solutions",
  },
  {
    comment:
      "BrainHunt has helped us scale our teams efficiently. Their proactive approach, consistent communication, and strong candidate pool have made them a trusted recruitment partner.",
    name: "Amit Khurana",
    profession: "Senior HR Executive, AlphaSys Pvt. Ltd.",
  },
];


export default function TestimonialSlider() {
  return (
    <section className="bg-blue-50 py-12 px-4 text-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-semibold  mb-2">
          What Client Say About Us
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          0: {
            slidesPerView: 1, // for mobile screens
          },
          768: {
            slidesPerView: 2, 
          },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white max-w-xl mx-auto p-8 rounded-xl shadow-lg mt-2">
              <p className="italic text-gray-700 mb-4">"{t.comment}"</p>
              <h4 className="font-bold text-blue-800">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.profession}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
