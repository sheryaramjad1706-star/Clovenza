"use client";

import { useState } from "react";
import { LuHotel, LuHouse, LuTrees, LuBuilding2 } from "react-icons/lu";

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stayCategories = [
    {
      title: "Hotels & Resorts",
      description: "Independent hotels, boutique hotels and resorts.",
      icon: LuHotel,
    },
    {
      title: "Guesthouses & B&Bs",
      description: "Guesthouses, inns, hostels and bed & breakfasts.",
      icon: LuHouse,
    },
    {
      title: "Vacation Rentals",
      description: "Airbnb-style stays, holiday homes, villas and chalets.",
      icon: LuTrees,
    },
    {
      title: "Serviced Apartments",
      description:
        "Apart-hotels, apartment stays and multi-property operators.",
      icon: LuBuilding2,
    },
  ];

  return (
    <section id="who-we-help" className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 w-[420px] h-[420px] rounded-full bg-[#6342FF]/[0.12] blur-[90px] z-0"
      />

      {/* Top-Right Decorative Concentric Ring & Dotted Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute -top-12 right-12 w-56 h-56 rounded-full border-[22px] border-[#241FD9]/[0.04] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-28 right-28 w-44 h-44 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-8 w-[460px] h-[460px] rounded-full bg-[#78FF00]/[0.14] blur-[100px] z-0"
      />

      {/* Wider Container for Increased Card Width */}
      <div className="relative z-10 w-full max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              WHO WE HELP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-normal tracking-tight mb-5">
            <span className="text-[#0F172A]">Built for </span>
            <span className="text-[#241FD9]">every kind of stay.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[650px] mx-auto font-normal">
            Whether you manage one property or a growing portfolio, we help
            keep your online business running and bringing in guests.
          </p>
        </div>

        {/* 4 Cards Grid (Wider Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stayCategories.map((item, index) => {
            const IconComponent = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden rounded-[26px] px-8 sm:px-9 py-10 min-h-[295px] border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_22px_45px_rgba(120,255,0,0.32)]"
                    : "bg-[#F4F5FF]/90 border-[#E6E9FF] shadow-[0_8px_30px_rgba(36,31,217,0.03)]"
                }`}
              >
                {/* Large Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                    isHovered
                      ? "bg-[#0F172A] shadow-md"
                      : "bg-[#E8ECFF]"
                  }`}
                >
                  <IconComponent
                    className={`w-9 h-9 stroke-[1.75] transform transition-all duration-500 ease-out ${
                      isHovered
                        ? "text-[#78FF00] scale-125 rotate-12"
                        : "text-[#241FD9] scale-100 rotate-0"
                    }`}
                  />
                </div>

                {/* Text Content */}
                <div>
                  {/* Card Title */}
                  <h3 className="text-[21px] sm:text-[23px] font-semibold leading-[1.3] mb-3 text-[#0F172A] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-[15px] sm:text-[16px] leading-[1.65] font-normal transition-colors duration-300 ${
                      isHovered ? "text-[#0F172A]/85" : "text-[#64748B]"
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