"use client";

import { useState, useEffect, useRef } from "react";

// Custom SVG Icons matching reference screenshot
function WebsiteContentSvg({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="6" y="4" width="12" height="16" rx="2" />
      <line x1="9" y1="8.5" x2="15" y2="8.5" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="15.5" x2="13" y2="15.5" />
    </svg>
  );
}

function BookingIntegrationSvg({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.5 14.5H7a2.5 2.5 0 0 1 0-5h2.5" />
      <path d="M14.5 9.5H17a2.5 2.5 0 0 1 0 5h-2.5" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <polyline points="13 10 15 12 13 14" />
    </svg>
  );
}

function TechnicalUpkeepSvg({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="3.5" />
      <line x1="12" y1="4" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="20" />
      <line x1="4" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="20" y2="12" />
      <line x1="6.35" y1="6.35" x2="7.76" y2="7.76" />
      <line x1="16.24" y1="16.24" x2="17.65" y2="17.65" />
      <line x1="17.65" y1="6.35" x2="16.24" y2="7.76" />
      <line x1="7.76" y1="16.24" x2="6.35" y2="17.65" />
    </svg>
  );
}

export default function WhatWeDo() {
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

  const services = [
    {
      title: "Website content updates",
      description:
        "Room information, policies, images and seasonal pages.",
      Icon: WebsiteContentSvg,
    },
    {
      title: "Booking integration support",
      description:
        "Agreed checks and coordination with supported booking providers.",
      Icon: BookingIntegrationSvg,
    },
    {
      title: "Technical upkeep and improvements",
      description:
        "Maintenance tasks, mobile experience and practical ongoing refinements.",
      Icon: TechnicalUpkeepSvg,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[920px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              WHAT WE DO
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.14] font-normal tracking-tight text-center text-[#0F172A] mb-4 sm:mb-5 px-2 sm:px-0">
            <span className="block">The recurring digital work, handled</span>
            <span className="block">for you.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[780px] mx-auto text-center font-normal px-2 sm:px-0">
            We take care of the details that help your online presence stay
            useful and current.
          </p>
        </div>

        {/* 3 Wider & Larger Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((item, index) => {
            const { Icon } = item;
            const isActive = isMobileView
              ? mobileActiveIndex === index
              : hoveredIndex === index;

            return (
              <div
                key={item.title}
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
                className={`relative overflow-hidden bg-white rounded-[24px] sm:rounded-[26px] p-7 sm:p-11 min-h-[265px] sm:min-h-[305px] border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "border-[#241FD9] -translate-y-2 shadow-[0_22px_45px_rgba(36,31,217,0.22)]"
                    : "border-gray-200/80 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                }`}
              >
                {/* Bottom-to-Top Sliding Blue Background Layer */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[#241FD9] transition-transform duration-500 ease-out z-0 ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  }`}
                />

                {/* Icon Container */}
                <div className="relative z-10 mb-7 sm:mb-8">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-white/15"
                        : "bg-gradient-to-br from-white to-[#EAEFFF] border border-white shadow-[0_6px_18px_rgba(36,31,217,0.07)]"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 sm:w-8 sm:h-8 transform transition-all duration-500 ease-out ${
                        isActive
                          ? "text-[#78FF00] scale-110"
                          : "text-[#241FD9] scale-100"
                      }`}
                    />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-[20px] sm:text-[23px] font-bold leading-[1.3] mb-2.5 sm:mb-3 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-[14.5px] sm:text-[16px] leading-[1.65] font-normal transition-colors duration-300 ${
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