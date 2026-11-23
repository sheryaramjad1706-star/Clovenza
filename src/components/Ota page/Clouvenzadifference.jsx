"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClovenzaDifference() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const steps = [
    {
      number: "01",
      title: "We review your channels",
      description:
        "Understand your accounts, rate rules and property setup.",
    },
    {
      number: "02",
      title: "We organise and improve",
      description:
        "Agree on listing, pricing and availability responsibilities.",
    },
    {
      number: "03",
      title: "We stay involved",
      description:
        "Provide ongoing updates and optimisation support.",
    },
  ];

  return (
    <section className="relative w-full py-28 lg:py-36 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Top-Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -left-24 w-[480px] h-[480px] rounded-full bg-[#6342FF]/[0.14] blur-[90px] z-0"
      />

      {/* Top-Right Concentric Circle Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-14 right-24 w-56 h-56 rounded-full border-[24px] border-[#241FD9]/[0.05] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-8 w-[500px] h-[500px] rounded-full bg-[#78FF00]/[0.16] blur-[100px] z-0"
      />

      <div className="relative z-10 w-full max-w-[1620px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3.5">
              <span className="h-[2px] w-8 bg-[#78FF00] inline-block"></span>
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#241FD9]">
                THE CLOUVENZA DIFFERENCE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[44px] sm:text-[54px] lg:text-[64px] font-normal text-[#1E2532] leading-[1.08] tracking-tight">
              We don’t just set up listings. We keep managing them.
            </h2>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[19px] text-[#64748B] leading-[1.65] max-w-[580px] font-normal">
              You get a reliable partner to help maintain your online distribution and coordinate the recurring work across supported channels.
            </p>

            {/* CTA Button (Moves Up on Hover) */}
            <div className="pt-4">
              <Link
                href="/#contact"
                className="inline-block bg-[#78FF00] hover:bg-[#6be600] text-[#111827] font-bold text-[16px] sm:text-[17px] px-9 py-4.5 rounded-xl shadow-[0_10px_25px_rgba(120,255,0,0.28)] transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_35px_rgba(120,255,0,0.4)] active:translate-y-0"
              >
                Discuss My Growth
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: LARGER 3 STEP CARDS */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7">
              {steps.map((step, index) => {
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`bg-white rounded-[28px] px-7 sm:px-9 py-11 sm:py-13 min-h-[395px] border-2 transition-all duration-300 flex flex-col justify-start cursor-pointer ${
                      isHovered
                        ? "border-[#78FF00] -translate-y-2.5 shadow-[0_22px_45px_rgba(120,255,0,0.22)]"
                        : "border-gray-100 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    {/* Step Number */}
                    <span className="text-[34px] sm:text-[38px] font-bold text-[#241FD9] leading-none mb-6 block">
                      {step.number}
                    </span>

                    {/* Card Title */}
                    <h3 className="text-[21px] sm:text-[23px] font-semibold text-[#1E2532] leading-[1.3] mb-4">
                      {step.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[15px] sm:text-[16px] text-[#64748B] leading-[1.65] font-normal">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}