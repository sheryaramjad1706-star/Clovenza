"use client";

import { useState } from "react";
import {
  HiOutlineSearch,
  HiOutlineTrendingUp,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Search & Local Visibility",
      description:
        "Improve how travelers find your property on Google and local search.",
      icon: HiOutlineSearch,
    },
    {
      title: "Targeted Campaigns",
      description:
        "Reach travelers actively planning trips that fit your property and destination.",
      icon: HiOutlineTrendingUp,
    },
    {
      title: "Content & Offers",
      description:
        "Present seasonal stays, packages and reasons to book direct more clearly.",
      icon: HiOutlineSparkles,
    },
  ];

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              WHAT WE DO
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-normal tracking-tight mb-5">
            <span className="block text-[#0F172A]">Practical marketing</span>
            <span className="block text-[#241FD9]">built for hospitality.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[650px] mx-auto font-normal">
            Focused actions designed to bring more qualified traffic and stronger
            direct interest.
          </p>
        </div>

        {/* 3 Wider & Larger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden bg-white rounded-[26px] p-9 sm:p-11 min-h-[305px] border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "border-[#241FD9] -translate-y-2 shadow-[0_22px_45px_rgba(36,31,217,0.22)]"
                    : "border-gray-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                }`}
              >
                {/* Bottom-to-Top Sliding Blue Background Layer */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[#241FD9] transition-transform duration-500 ease-out z-0 ${
                    isHovered ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                {/* Icon Container */}
                <div className="relative z-10 mb-8">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isHovered ? "bg-white/15" : "bg-[#EEF0FF]"
                    }`}
                  >
                    <IconComponent
                      className={`w-7 h-7 sm:w-8 sm:h-8 stroke-[2] transform transition-all duration-500 ease-out ${
                        isHovered
                          ? "text-[#78FF00] scale-115 rotate-12"
                          : "text-[#241FD9] scale-100 rotate-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-[21px] sm:text-[23px] font-bold leading-[1.3] mb-3 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[15px] sm:text-[16px] leading-[1.65] font-normal transition-colors duration-300 ${
                      isHovered ? "text-white/85" : "text-[#64748B]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}