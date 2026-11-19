"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuCalendarCheck2,
  LuLayoutGrid,
  LuSun,
  LuZoomIn,
  LuChartNoAxesCombined,
  LuSparkles,
} from "react-icons/lu";

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Websites & Direct Booking",
      description:
        "We create your website, connect your booking engine and keep the guest journey simple.",
      icon: LuCalendarCheck2,
      href: "#contact",
    },
    {
      title: "OTA & Channel Management",
      description:
        "We manage supported booking channels, rates, availability, listings and promotions.",
      icon: LuLayoutGrid,
      href: "#contact",
    },
    {
      title: "Ongoing Digital Management",
      description:
        "We handle updates, content, integrations and day-to-day digital maintenance.",
      icon: LuSun,
      href: "#contact",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Get discovered through Google Search, Maps, local SEO, content and campaigns.",
      icon: LuZoomIn,
      href: "#contact",
    },
    {
      title: "Booking & Revenue Optimization",
      description:
        "Improve direct booking conversion, distribution strategy and pricing opportunities.",
      icon: LuChartNoAxesCombined,
      href: "#contact",
    },
    {
      title: "AI Visibility & Growth",
      description:
        "Discoverability audits, AI search readiness and practical growth recommendations.",
      icon: LuSparkles,
      href: "#contact",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 -left-24 w-[440px] h-[440px] rounded-full bg-[#6342FF]/[0.14] blur-[95px] z-0"
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
        className="pointer-events-none absolute bottom-12 right-8 w-[480px] h-[480px] rounded-full bg-[#78FF00]/[0.14] blur-[105px] z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-[820px] mx-auto mb-14 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="h-[2px] w-6 bg-[#78FF00] inline-block"></span>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              EVERYTHING, TAKEN CARE OF
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.14] font-normal tracking-tight mb-5">
            <span className="text-[#0F172A]">We don&apos;t just build it. </span>
            <span className="text-[#241FD9]">
              We manage it
              <br className="hidden sm:inline" /> too.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-[16px] sm:text-[18px] text-[#64748B] leading-[1.65] max-w-[680px] mx-auto font-normal">
            One partner for your website, booking channels, online visibility
            and ongoing digital work.
          </p>
        </div>

        {/* 6 Cards Grid (3 Top + 3 Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative overflow-hidden rounded-[26px] px-8 sm:px-9 py-9 sm:py-10 min-h-[290px] border transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "bg-[#78FF00] border-[#78FF00] -translate-y-2.5 shadow-[0_24px_48px_rgba(120,255,0,0.34)]"
                    : "bg-white border-[#E6ECFF] translate-y-0 shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                }`}
              >
                <div>
                  {/* Larger Icon Container */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                      isHovered
                        ? "bg-[#0F172A] shadow-md"
                        : "bg-[#EEF0FF]"
                    }`}
                  >
                    <IconComponent
                      className={`w-9 h-9 stroke-[1.75] transform transition-all duration-500 ease-out ${
                        isHovered
                          ? "text-[#78FF00] scale-125 rotate-12"
                          : "text-[#241FD9] scale-100 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0F172A] leading-[1.3] mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-5 transition-colors duration-300 ${
                      isHovered ? "text-[#0F172A]/85" : "text-[#64748B]"
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