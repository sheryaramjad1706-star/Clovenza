"use client";

import { useState } from "react";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";

export default function OtaManagementSection() {
  const [hoveredChannel, setHoveredChannel] = useState(null);

  const channels = [
    { name: "Booking.com", highlight: false },
    { name: "Airbnb", highlight: false },
    { name: "Expedia", highlight: false },
    { name: "Agoda", highlight: false },
    { name: "Hotels.com", highlight: true },
    { name: "Other channels", highlight: false },
  ];

  return (
    <section id="ota-management" className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#181766] via-[#1E1DA3] to-[#241FD9] text-white">
      {/* Subtle Ambient Glows to match screenshot gradient depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#0F1147]/60 blur-[100px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[520px] h-[520px] rounded-full bg-[#332EF2]/50 blur-[110px] z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow Tagline */}
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#78FF00]">
                OTA &amp; CHANNEL MANAGEMENT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] xl:text-[58px] leading-[1.12] font-normal tracking-tight text-white">
              Every booking channel.
              <br />
              Professionally managed.
            </h2>

            {/* Description Paragraph */}
            <p className="text-[16px] sm:text-[18px] text-white/85 leading-[1.68] max-w-[560px] font-normal">
              We help keep your listings accurate, availability coordinated,
              rates updated and promotions organized — without adding to your
              daily workload.
            </p>

            {/* Checklist Items */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/15 text-[#78FF00] flex items-center justify-center shrink-0">
                  <HiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-[15px] sm:text-[16px] font-medium text-white">
                  Property listings, descriptions and content
                </span>
              </li>

              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/15 text-[#78FF00] flex items-center justify-center shrink-0">
                  <HiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-[15px] sm:text-[16px] font-medium text-white">
                  Rates, availability and promotion updates
                </span>
              </li>

              <li className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-white/15 text-[#78FF00] flex items-center justify-center shrink-0">
                  <HiCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-[15px] sm:text-[16px] font-medium text-white">
                  Supported PMS and channel manager coordination
                </span>
              </li>
            </ul>

            {/* Neon Green CTA Button */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block bg-[#78FF00] hover:bg-[#6be600] text-[#0F172A] font-bold text-[15px] sm:text-[16px] px-8 py-4 rounded-xl shadow-[0_12px_28px_-6px_rgba(120,255,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-6px_rgba(120,255,0,0.6)]"
              >
                Talk About OTA Management
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: CHANNELS CARD ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[630px] bg-white rounded-[28px] p-8 sm:p-10 lg:p-11 shadow-[0_25px_70px_-15px_rgba(10,12,50,0.45)] text-[#0F172A]">
              {/* Larger Card Header */}
              <h3 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#0F172A] leading-[1.18] tracking-tight mb-3">
                Your channels, under control.
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#64748B] leading-[1.6] mb-8">
                We help manage your presence on supported accommodation
                platforms.
              </p>

              {/* 2x3 Channels Grid with Green Hover Effect */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                {channels.map((channel, index) => {
                  const isHovered = hoveredChannel === index;

                  return (
                    <div
                      key={channel.name}
                      onMouseEnter={() => setHoveredChannel(index)}
                      onMouseLeave={() => setHoveredChannel(null)}
                      className={`rounded-xl px-5 py-4 border text-[16px] sm:text-[17px] font-bold transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? "bg-[#78FF00] border-[#78FF00] text-[#0F172A] -translate-y-1 shadow-[0_12px_24px_-6px_rgba(120,255,0,0.5)]"
                          : channel.highlight
                          ? "bg-[#E9F9EE] border-[#C9F0D6] text-[#0F172A]"
                          : "bg-[#F4F5FF] border-[#E6E9FF] text-[#0F172A]"
                      }`}
                    >
                      {channel.name}
                    </div>
                  );
                })}
              </div>

              {/* Footer Disclaimer Text */}
              <p className="text-[12px] sm:text-[13px] text-[#94A3B8] leading-[1.5]">
                Channel support depends on platform access and integration
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}