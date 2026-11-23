"use client";

import { useState, useEffect, useRef } from "react";

// Custom SVG Icons matching reference screenshots
function HotelsResortsSvg({ className = "w-9 h-9" }) {
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
      <path d="M5 20V8l7-3 7 3v12" />
      <line x1="3.5" y1="20" x2="20.5" y2="20" />
      <rect x="10" y="15.5" width="4" height="4.5" />
      <line x1="8" y1="10" x2="9.2" y2="10" />
      <line x1="11.4" y1="10" x2="12.6" y2="10" />
      <line x1="14.8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="12.8" x2="9.2" y2="12.8" />
      <line x1="11.4" y1="12.8" x2="12.6" y2="12.8" />
      <line x1="14.8" y1="12.8" x2="16" y2="12.8" />
    </svg>
  );
}

function GuesthousesSvg({ className = "w-9 h-9" }) {
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
      <path d="M4 11.5L12 5l8 6.5" />
      <path d="M6.5 10v10h11V10" />
      <line x1="4.5" y1="20" x2="19.5" y2="20" />
      <rect x="10.2" y="15.2" width="3.6" height="4.8" />
      <line x1="9" y1="12" x2="10.2" y2="12" />
      <line x1="13.8" y1="12" x2="15" y2="12" />
    </svg>
  );
}

function VacationRentalsSvg({ className = "w-9 h-9" }) {
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
      <path d="M6.5 12.5L12 7.5l5.5 5v7.5h-11v-7.5z" />
      <line x1="4.5" y1="20" x2="19.5" y2="20" />
      <rect x="10" y="15" width="4" height="5" />
      {/* Top 3 Accent Rays */}
      <line x1="5" y1="6.5" x2="6" y2="8.5" />
      <line x1="16.5" y1="4.5" x2="15.8" y2="6.8" />
      <line x1="19.5" y1="8.2" x2="17.5" y2="9.2" />
    </svg>
  );
}

function ServicedApartmentsSvg({ className = "w-9 h-9" }) {
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
      <rect x="6.5" y="4.5" width="11" height="15.5" rx="1" />
      <line x1="4.5" y1="20" x2="19.5" y2="20" />
      <rect x="10.5" y="16" width="3" height="4" />
      <line x1="9" y1="8" x2="10.5" y2="8" />
      <line x1="13.5" y1="8" x2="15" y2="8" />
      <line x1="9" y1="10.8" x2="10.5" y2="10.8" />
      <line x1="13.5" y1="10.8" x2="15" y2="10.8" />
      <line x1="9" y1="13.6" x2="10.5" y2="13.6" />
      <line x1="13.5" y1="13.6" x2="15" y2="13.6" />
    </svg>
  );
}

export default function WhoWeHelp() {
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

  const stayCategories = [
    {
      title: "Hotels & Resorts",
      description: "Independent hotels, boutique hotels and resorts.",
      Icon: HotelsResortsSvg,
    },
    {
      title: "Guesthouses & B&Bs",
      description: "Guesthouses, inns, hostels and bed & breakfasts.",
      Icon: GuesthousesSvg,
    },
    {
      title: "Vacation Rentals",
      description: "Airbnb-style stays, holiday homes, villas and chalets.",
      Icon: VacationRentalsSvg,
    },
    {
      title: "Serviced Apartments",
      description:
        "Apart-hotels, apartment stays and multi-property operators.",
      Icon: ServicedApartmentsSvg,
    },
  ];

  return (
    <section
      id="who-we-help"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-24 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-[#6342FF]/[0.12] blur-[90px] z-0"
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
        className="pointer-events-none absolute -bottom-24 right-8 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-[#78FF00]/[0.14] blur-[100px] z-0"
      />

      {/* Wider Container for Increased Card Width */}
      <div className="relative z-10 w-full max-w-[1620px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              WHO WE HELP
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.14] font-normal tracking-tight mb-4 sm:mb-5">
            <span className="text-[#0F172A]">Built for </span>
            <span className="text-[#241FD9]">every kind of stay.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[650px] mx-auto font-normal px-2 sm:px-0">
            Whether you manage one property or a growing portfolio, we help
            keep your online business running and bringing in guests.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stayCategories.map((item, index) => {
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
                className={`relative overflow-hidden rounded-[24px] sm:rounded-[26px] px-7 sm:px-9 py-8 sm:py-10 min-h-[255px] sm:min-h-[295px] border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-1.5 shadow-[0_22px_45px_rgba(120,255,0,0.32)]"
                    : "bg-[#F4F5FF]/90 border-[#E6E9FF] shadow-[0_8px_30px_rgba(36,31,217,0.03)]"
                }`}
              >
                {/* Icon Container (Tilts & Zooms with Soft White-Mint Box on Hover/Scroll) */}
                <div
                  className={`w-15 h-15 sm:w-16 sm:h-16 rounded-[18px] flex items-center justify-center mb-7 sm:mb-8 transform transition-all duration-500 ease-out ${
                    isActive
                      ? "bg-[#EBFFE0] shadow-[0_12px_24px_rgba(15,23,42,0.12)] scale-110 -rotate-6"
                      : "bg-[#E8ECFF] scale-100 rotate-0"
                  }`}
                >
                  <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#241FD9] transition-transform duration-500" />
                </div>

                {/* Text Content */}
                <div>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}