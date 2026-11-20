"use client";

import { useState } from "react";

export default function Thechallenge() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const challengeCards = [
    {
      label: "01 / THE CHALLENGE",
      title: "Always something to update",
      description:
        "Room photos, amenities, policies and offers keep changing.",
    },
    {
      label: "02 / THE CHALLENGE",
      title: "Booking links need attention",
      description:
        "Outdated links or broken buttons can make bookings harder.",
    },
    {
      label: "03 / THE CHALLENGE",
      title: "Too much technical work",
      description:
        "Keeping your site in shape takes time you would rather spend with guests.",
    },
  ];

  return (
    <section
      id="the-challenge"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
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
              THE CHALLENGE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-normal tracking-tight mb-5 text-[#0F172A]">
            Your website is live. But the work doesn’t stop.
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[650px] mx-auto font-normal">
            Small updates and technical tasks can pile up while you are busy running your property.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {challengeCards.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden rounded-[26px] px-8 sm:px-10 py-10 sm:py-11 min-h-[250px] border transition-all duration-500 flex flex-col justify-center cursor-pointer ${
                  isHovered
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_22px_45px_rgba(120,255,0,0.32)]"
                    : "bg-[#F4F5FF]/90 border-[#E6E9FF] shadow-[0_8px_30px_rgba(36,31,217,0.03)]"
                }`}
              >
                {/* Top Label */}
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase text-[#241FD9] mb-4 block">
                  {item.label}
                </span>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}