"use client";

import { useState, useEffect, useRef } from "react";

// Custom SVG Icons matching image_0a7081.png
function BrowserCheckIcon({ className }) {
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
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9h17" />
      <circle cx="6.5" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9.5 14l1.8 1.8 3.4-3.4" />
    </svg>
  );
}

function CalendarLinesIcon({ className }) {
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
      <path d="M8.5 13.5h7" />
      <path d="M8.5 16.8h4.5" />
    </svg>
  );
}

function CareSunburstIcon({ className }) {
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
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 4.5v2.2" />
      <path d="M12 17.3v2.2" />
      <path d="M4.5 12h2.2" />
      <path d="M17.3 12h2.2" />
      <path d="M6.7 6.7l1.6 1.6" />
      <path d="M15.7 15.7l1.6 1.6" />
      <path d="M17.3 6.7l-1.6 1.6" />
      <path d="M8.3 15.7l-1.6 1.6" />
    </svg>
  );
}

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const services = [
    {
      title: "Website design that feels right",
      description:
        "Mobile-friendly property pages with clear rooms, photos and useful details.",
      icon: BrowserCheckIcon,
    },
    {
      title: "Direct booking made simple",
      description:
        "Connect a suitable booking engine and make availability easy to check.",
      icon: CalendarLinesIcon,
    },
    {
      title: "Website care after launch",
      description:
        "We manage agreed updates, content changes and practical improvements.",
      icon: CareSunburstIcon,
    },
  ];

  // Mobile & Tablet scroll detection (activates whichever card is near screen center)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      // Only trigger scroll-active state on mobile/tablet (< 1024px)
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
      {/* Decorative Background Blurs & Rings matching reference image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-24 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-[#241FD9]/[0.08] blur-[75px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-[-60px] w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#78FF00]/[0.12] blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-6 right-[8%] w-44 h-44 rounded-full border-[18px] border-[#241FD9]/[0.04]"
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
            <span className="block">A beautiful website. An easier way to book</span>
           
          </h2>

          {/* Subtitle matching image */}
          <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] leading-[1.6] max-w-[680px] mx-auto font-normal">
            Everything you need to present your property well and keep the booking journey running.
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
                {/* Smooth Blue Gradient Overlay on Hover / Scroll Active */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[linear-gradient(145deg,#2B2BF5_0%,#1D1CD6_100%)] transition-opacity duration-500 ease-out z-0 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* 3D Glossy Squircle Icon Box */}
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