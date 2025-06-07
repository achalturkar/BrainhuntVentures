// components/TestimonialSlider.jsx
"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Line from "../Line/Line";

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
    <section className=" py-12 px-4  text-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          What client say about us        </h2>
          <Line/>
        <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
          We serve a wide range of industries with customized recruitment and staffing solutions that align the right talent with business needs
        </p>
      </div>
      

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
      breakpoints={{
        0: {
          slidesPerView: 1, // for mobile screens
        },
        768: {
          slidesPerView: 1, 
        },
      }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            {/* <div className="bg-blue-300 p-6 rounded-xl max-w-xl"> */}
              <div className="bg-blue-100 max-w-xl mx-auto p-8 rounded-xl shadow-lg mt-2">
                <p className="italic text-gray-700 mb-4">"{t.comment}"</p>
                <h4 className="font-bold text-blue-800">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.profession}</span>
              </div>
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
