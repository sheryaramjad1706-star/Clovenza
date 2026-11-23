"use client";

import { useState, useEffect, useRef } from "react";

export default function Thechallenge() {
  // Desktop mouse hover state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Mobile & Tablet scroll active card state
  const [mobileActiveIndex, setMobileActiveIndex] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  const cardRefs = useRef([]);

  // Detect screen size (< 1024px uses scroll activation, >= 1024px uses mouse hover)
  useEffect(() => {
    const checkViewport = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobileView(mobile);
      if (!mobile) {
        setMobileActiveIndex(null);
      }
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Scroll observer for mobile & tablet viewports
  useEffect(() => {
    if (!isMobileView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!Number.isNaN(idx)) {
              setMobileActiveIndex(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: 0.25,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [isMobileView]);

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
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-[#6342FF]/[0.12] blur-[90px] z-0"
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
        className="pointer-events-none absolute -bottom-24 right-8 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full bg-[#78FF00]/[0.14] blur-[100px] z-0"
      />

      {/* Wider Container for Increased Card Width */}
      <div className="relative z-10 w-full max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              THE CHALLENGE
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.14] font-normal tracking-tight mb-4 sm:mb-5 text-[#0F172A] px-2 sm:px-0">
            Your website is live. But the work doesn’t stop.
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[650px] mx-auto font-normal px-2 sm:px-0">
            Small updates and technical tasks can pile up while you are busy
            running your property.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {challengeCards.map((item, index) => {
            const isActive = isMobileView
              ? mobileActiveIndex === index
              : hoveredIndex === index;

            return (
              <div
                key={item.label}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                onMouseEnter={() => {
                  if (!isMobileView) setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  if (!isMobileView) setHoveredIndex(null);
                }}
                className={`relative overflow-hidden rounded-[24px] sm:rounded-[26px] px-7 sm:px-10 py-8 sm:py-11 min-h-[215px] sm:min-h-[250px] border transition-all duration-500 flex flex-col justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_22px_45px_rgba(120,255,0,0.32)]"
                    : "bg-[#F4F5FF]/90 border-[#E6E9FF] shadow-[0_8px_30px_rgba(36,31,217,0.03)]"
                }`}
              >
                {/* Top Label */}
                <span className="text-[11.5px] sm:text-[13px] font-bold tracking-[0.12em] uppercase text-[#241FD9] mb-3.5 sm:mb-4 block">
                  {item.label}
                </span>

                {/* Card Title */}
                <h3 className="text-[20px] sm:text-[23px] font-semibold leading-[1.3] mb-2.5 sm:mb-3 text-[#0F172A] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p
                  className={`text-[14.5px] sm:text-[16px] leading-[1.65] font-normal transition-colors duration-300 ${
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