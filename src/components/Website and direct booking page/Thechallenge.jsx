"use client";

import { useState, useEffect, useRef } from "react";

export default function WhoWeHelp() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const challengeCards = [
    {
      label: "01 / THE CHALLENGE",
      title: "Your website feels outdated",
      description:
        "An old or confusing website can make a great property look less trustworthy.",
    },
    {
      label: "02 / THE CHALLENGE",
      title: "Booking is too complicated",
      description:
        "Visitors may leave if rates, rooms and availability are difficult to check.",
    },
    {
      label: "03 / THE CHALLENGE",
      title: "Updates take too much effort",
      description:
        "Keeping photos, seasonal offers and room details current requires ongoing attention.",
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
    <section
      id="who-we-help"
      className="relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#6342FF]/[0.12] blur-[90px] z-0"
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
        className="pointer-events-none absolute -bottom-24 right-8 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#78FF00]/[0.14] blur-[100px] z-0"
      />

      {/* Responsive Container */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              THE CHALLENGE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.13] font-normal tracking-tight text-[#0F172A] mb-4 sm:mb-5">
            <span className="block">
              Your guests are searching. Can they book you easily?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[17px] lg:text-[18px] text-[#64748B] leading-[1.6] max-w-[680px] mx-auto font-normal">
            A good-looking site only helps when it gives guests a clear reason
            and a simple way to reserve.
          </p>
        </div>

        {/* 3 Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {challengeCards.map((item, index) => {
            const isActive =
              hoveredIndex === index || mobileActiveIndex === index;

            return (
              <div
                key={item.label}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() =>
                  setMobileActiveIndex((prev) => (prev === index ? null : index))
                }
                className={`relative overflow-hidden rounded-[26px] px-7 sm:px-9 lg:px-10 py-9 sm:py-11 min-h-[235px] sm:min-h-[260px] border transition-all duration-500 ease-out flex flex-col justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_22px_45px_rgba(120,255,0,0.32)]"
                    : "bg-white border-[#E6E9FF] shadow-[0_8px_30px_rgba(36,31,217,0.03)]"
                }`}
              >
                {/* Top Label */}
                <span className="text-[11.5px] sm:text-[13px] font-bold tracking-[0.12em] uppercase text-[#241FD9] mb-4 block">
                  {item.label}
                </span>

                {/* Card Title */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[23px] font-medium leading-[1.3] mb-3 text-[#0F172A] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p
                  className={`text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] font-normal transition-colors duration-300 ${
                    isActive ? "text-[#0F172A]/85" : "text-[#64748B]"
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