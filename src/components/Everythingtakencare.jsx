"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Custom SVG Icons matching reference screenshots
function WebsitesBookingSvg({ className = "w-8 h-8" }) {
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
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="6.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M9.5 14.5l2 2 3.5-3.5" />
    </svg>
  );
}

function OtaChannelSvg({ className = "w-8 h-8" }) {
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
      <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="14" y="3.5" width="6.5" height="6.5" rx="1.5" />
      <rect x="3.5" y="14" width="6.5" height="6.5" rx="1.5" />
      <rect x="14" y="14" width="6.5" height="6.5" rx="1.5" />
      <line x1="10" y1="6.75" x2="14" y2="6.75" />
      <line x1="6.75" y1="10" x2="6.75" y2="14" />
      <line x1="17.25" y1="10" x2="17.25" y2="14" />
    </svg>
  );
}

function OngoingManagementSvg({ className = "w-8 h-8" }) {
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
      <circle cx="12" cy="12" r="4.5" />
      <path d="M10.2 12.1l1.2 1.2 2.4-2.4" />
      <line x1="12" y1="3" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="21" />
      <line x1="3" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="21" y2="12" />
      <line x1="5.64" y1="5.64" x2="7.05" y2="7.05" />
      <line x1="16.95" y1="16.95" x2="18.36" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="16.95" y2="7.05" />
      <line x1="7.05" y1="16.95" x2="5.64" y2="18.36" />
    </svg>
  );
}

function DigitalMarketingSeoSvg({ className = "w-8 h-8" }) {
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
      <circle cx="11" cy="11" r="6.5" />
      <line x1="20" y1="20" x2="15.8" y2="15.8" />
      <line x1="11" y1="8.5" x2="11" y2="13.5" />
      <line x1="8.5" y1="11" x2="13.5" y2="11" />
    </svg>
  );
}

// 3 Ascending Vertical Bars + Top Trend Line + Baseline (Matches screenshot)
function RevenueOptimizationSvg({ className = "w-8 h-8" }) {
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
      <line x1="4" y1="19" x2="20" y2="19" />
      <line x1="7" y1="16" x2="7" y2="12.5" />
      <line x1="12" y1="16" x2="12" y2="10.5" />
      <line x1="17" y1="16" x2="17" y2="7.5" />
      <path d="M12 7.5L17 5.5" />
    </svg>
  );
}

function AiVisibilitySvg({ className = "w-8 h-8" }) {
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
      <path d="M11 3.5l1.7 4.8L17.5 10l-4.8 1.7L11 16.5l-1.7-4.8L4.5 10l4.8-1.7L11 3.5z" />
      <path d="M17.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" />
    </svg>
  );
}

export default function ServicesSection() {
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
      title: "Websites & Direct Booking",
      description:
        "We create your website, connect your booking engine and keep the guest journey simple.",
      Icon: WebsitesBookingSvg,
      href: "#contact",
    },
    {
      title: "OTA & Channel Management",
      description:
        "We manage supported booking channels, rates, availability, listings and promotions.",
      Icon: OtaChannelSvg,
      href: "#contact",
    },
    {
      title: "Ongoing Digital Management",
      description:
        "We handle updates, content, integrations and day-to-day digital maintenance.",
      Icon: OngoingManagementSvg,
      href: "#contact",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Get discovered through Google Search, Maps, local SEO, content and campaigns.",
      Icon: DigitalMarketingSeoSvg,
      href: "#contact",
    },
    {
      title: "Booking & Revenue Optimization",
      description:
        "Improve direct booking conversion, distribution strategy and pricing opportunities.",
      Icon: RevenueOptimizationSvg,
      href: "#contact",
    },
    {
      title: "AI Visibility & Growth",
      description:
        "Discoverability audits, AI search readiness and practical growth recommendations.",
      Icon: AiVisibilitySvg,
      href: "#contact",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -left-24 w-[300px] sm:w-[440px] h-[300px] sm:h-[440px] rounded-full bg-[#6342FF]/[0.14] blur-[95px] z-0"
      />

      {/* Top-Right Decorative Concentric Ring & Dotted Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-10 right-14 w-60 h-60 rounded-full border-[24px] border-[#241FD9]/[0.04] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-32 right-28 w-44 h-44 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-8 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full bg-[#78FF00]/[0.14] blur-[105px] z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              EVERYTHING, TAKEN CARE OF
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.14] font-normal tracking-tight mb-4 sm:mb-5">
            <span className="text-[#0F172A]">We don&apos;t just build it. </span>
            <span className="text-[#241FD9]">
              We manage it too. 
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[680px] mx-auto font-normal px-2 sm:px-0">
            One partner for your website, booking channels, online visibility
            and ongoing digital work.
          </p>
        </div>

        {/* 6 Cards Grid (Responsive 1 -> 2 -> 3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service, index) => {
            const { Icon } = service;
            const isActive = isMobileView
              ? mobileActiveIndex === index
              : hoveredIndex === index;

            return (
              <div
                key={service.title}
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
                className={`relative overflow-hidden rounded-[24px] sm:rounded-[26px] px-7 sm:px-9 py-8 sm:py-10 min-h-[265px] sm:min-h-[290px] border transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-2 shadow-[0_24px_48px_rgba(120,255,0,0.34)]"
                    : "bg-white border-[#E6ECFF] translate-y-0 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                }`}
              >
                <div>
                  {/* Icon Container (Soft White-Mint Tilted Box on Hover/Scroll, Blue SVG Inside) */}
                  <div
                    className={`w-15 h-15 sm:w-16 sm:h-16 rounded-[18px] flex items-center justify-center mb-7 sm:mb-8 transform transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-[#EBFFE0] shadow-[0_12px_24px_rgba(15,23,42,0.12)] scale-110 -rotate-6"
                        : "bg-[#EEF0FF] scale-100 rotate-0"
                    }`}
                  >
                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-[#241FD9] transition-transform duration-500" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0F172A] leading-[1.3] mb-2.5 sm:mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-5 transition-colors duration-300 ${
                      isActive ? "text-[#0F172A]/85" : "text-[#64748B]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Bottom Action Link (Always Blue) */}
                <div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[14px] sm:text-[15px] font-bold text-[#241FD9] hover:text-[#1a16b0] transition-colors duration-300"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}