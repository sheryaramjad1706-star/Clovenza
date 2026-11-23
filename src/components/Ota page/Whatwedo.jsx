"use client";

import { useState, useEffect, useRef } from "react";

// Custom SVG Icons matching image_09089b.png & image_090c21.png
function ListingDocIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M8 9h8" />
      <path d="M8 12.5h8" />
      <path d="M8 16h5" />
    </svg>
  );
}

function CalendarCheckIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3.2v3.6" />
      <path d="M16 3.2v3.6" />
      <path d="M3.5 9.8h17" />
      <path d="M9.2 14.8l2 2 3.8-3.8" />
    </svg>
  );
}

function MegaphoneIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 5.5L7.5 9H4.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3l7.5 3.5V5.5z" />
      <path d="M6.5 15l1.2 4h2.3l-1-4" />
      <path d="M18.5 9v6" />
    </svg>
  );
}

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Listings that look their best",
      description:
        "Property content, photos, descriptions and amenities kept up to date.",
      icon: ListingDocIcon,
    },
    {
      title: "Rates and availability",
      description:
        "Updates and coordination with supported booking tools.",
      icon: CalendarCheckIcon,
    },
    {
      title: "Promotions and channel care",
      description:
        "Planned offers, listing checks and ongoing improvements.",
      icon: MegaphoneIcon,
    },
  ];

  // Mobile & Tablet on-screen scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      // Only activate scroll-based state on mobile/tablet (< 1024px)
      if (window.innerWidth >= 1024) {
        setMobileActiveIndex(null);
        return;
      }

      const viewportCenter = window.innerHeight * 0.52;
      let closestIndex = null;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const isVisible =
          rect.top < window.innerHeight * 0.85 &&
          rect.bottom > window.innerHeight * 0.15;

        if (isVisible) {
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - cardCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = idx;
          }
        }
      });

      setMobileActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FAF9FF] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:44px_44px]">
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] rounded-full bg-[#6342FF]/[0.12] blur-[90px] z-0"
      />

      {/* Top-Right Decorative Concentric Ring & Dotted Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute -top-10 right-12 w-56 h-56 rounded-full border-[22px] border-[#241FD9]/[0.04] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-24 right-28 w-44 h-44 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-6 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#78FF00]/[0.13] blur-[95px] z-0"
      />

      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              WHAT WE DO
            </span>
          </div>

          {/* Main Heading matching image */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.13] font-normal tracking-tight text-[#0F172A] mb-4 sm:mb-5">
            <span className="block">Your booking channels, properly</span>
            <span className="block">looked after.</span>
          </h2>

          {/* Subtitle matching image */}
          <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] leading-[1.6] max-w-[650px] mx-auto font-normal">
            Clear, practical support for the platforms relevant to your property.
          </p>
        </div>

        {/* 3 Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            const isActive =
              hoveredIndex === index || mobileActiveIndex === index;

            return (
              <div
                key={item.title}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  setMobileActiveIndex((prev) => (prev === index ? null : index))
                }
                className={`relative overflow-hidden rounded-[26px] p-7 sm:p-9 lg:p-10 min-h-[285px] sm:min-h-[315px] border transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-[#2222E6] border-[#2222E6] -translate-y-2 shadow-[0_24px_48px_rgba(34,34,230,0.28)]"
                    : "bg-white border-[#E6E8F2] shadow-[0_8px_28px_rgba(15,23,42,0.03)]"
                }`}
              >
                {/* Smooth Blue Gradient Layer on Hover / Scroll Active */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[linear-gradient(145deg,#2B2BF5_0%,#1D1CD6_100%)] transition-opacity duration-500 ease-out z-0 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* 3D Glossy Squircle Icon Box matching image_090c21.png */}
                <div className="relative z-10 mb-8">
                  <div
                    className={`w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[20px] flex items-center justify-center transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.82)_0%,rgba(147,165,255,0.38)_42%,rgba(49,54,235,0.45)_100%)] border border-white/40 shadow-[0_14px_26px_rgba(11,14,128,0.35),inset_0_2px_6px_rgba(255,255,255,0.75)] -rotate-6 scale-105"
                        : "bg-[radial-gradient(circle_at_28%_22%,#FFFFFF_0%,#EEF1FF_65%,#E3E8FF_100%)] border border-[#E5E9FF] shadow-[0_6px_16px_rgba(36,31,217,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)] rotate-0 scale-100"
                    }`}
                  >
                    <IconComponent
                      className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-500 ${
                        isActive ? "text-white" : "text-[#241FD9]"
                      }`}
                    />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-[20px] sm:text-[22px] lg:text-[23px] font-medium leading-[1.3] mb-3 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[14.5px] sm:text-[15.5px] leading-[1.65] font-normal transition-colors duration-300 ${
                      isActive ? "text-white/90" : "text-[#64748B]"
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