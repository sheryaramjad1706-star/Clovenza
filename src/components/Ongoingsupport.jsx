"use client";

import { useState, useEffect, useRef } from "react";

export default function ProcessSection() {
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

  const steps = [
    {
      step: "01 / START",
      title: "Understand your property",
      description:
        "We review your goals, existing website, booking platforms and opportunities.",
    },
    {
      step: "02 / MANAGE",
      title: "Build & take care of it",
      description:
        "We set up what you need and manage the agreed digital services.",
    },
    {
      step: "03 / GROW",
      title: "Keep improving",
      description:
        "We monitor performance, refine your presence and support growth over time.",
    },
  ];

  return (
    <section
      id="approach"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-14 -left-24 w-[280px] sm:w-[440px] h-[280px] sm:h-[440px] rounded-full bg-[#6342FF]/[0.14] blur-[95px] z-0"
      />

      {/* Top-Right Decorative Concentric Ring & Dotted Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-12 right-14 w-60 h-60 rounded-full border-[24px] border-[#241FD9]/[0.04] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-32 right-28 w-44 h-44 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-36 right-4 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full bg-[#78FF00]/[0.14] blur-[105px] z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              SIMPLE, ONGOING SUPPORT
            </span>
          </div>

          {/* Main Two-Tone Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.14] font-normal tracking-tight px-2 sm:px-0">
            <span className="text-[#0F172A]">We set it up. </span>
            <span className="text-[#241FD9]">Then we stay involved.</span>
          </h2>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {steps.map((item, index) => {
            const isActive = isMobileView
              ? mobileActiveIndex === index
              : hoveredIndex === index;

            return (
              <div
                key={item.step}
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
                className={`rounded-[24px] sm:rounded-[26px] px-7 sm:px-9 py-8 sm:py-11 min-h-[215px] sm:min-h-[245px] border transition-all duration-300 ease-out flex flex-col justify-center cursor-pointer ${
                  isActive
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_20px_42px_rgba(120,255,0,0.32)]"
                    : "bg-white/95 border-[#E6ECFF] translate-y-0 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                }`}
              >
                {/* Step Number Tag */}
                <span
                  className={`text-[12px] sm:text-[14px] font-bold tracking-[0.12em] uppercase mb-4 sm:mb-5 block transition-colors duration-300 ${
                    isActive ? "text-[#0F172A]" : "text-[#241FD9]"
                  }`}
                >
                  {item.step}
                </span>

                {/* Card Title */}
                <h3 className="text-[20px] sm:text-[23px] font-semibold text-[#0F172A] leading-[1.3] mb-2.5 sm:mb-3">
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