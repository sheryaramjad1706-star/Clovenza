"use client";

import { useState } from "react";
import { HiCheck } from "react-icons/hi";

export default function SeeHowItWorks() {
  const [activeTab, setActiveTab] = useState("desktop");

  const tabsData = {
    desktop: {
      label: "Desktop",
      cardHeading: "Explore your property",
      rows: [
        {
          title: "Discover your rooms",
          subtitle: "Photos and details that build confidence",
          badge: "Easy",
        },
        {
          title: "Choose your dates",
          subtitle: "Example: 12–15 March 2027",
          badge: "Clear",
        },
        {
          title: "Book directly",
          subtitle: "Booking engine connection",
          badge: "Simple",
        },
      ],
    },
    mobile: {
      label: "Mobile",
      cardHeading: "Book smoothly on any phone",
      rows: [
        {
          title: "Fast mobile pages",
          subtitle: "Quick loading and clean layout on smaller screens",
          badge: "Fast",
        },
        {
          title: "Thumb-friendly dates",
          subtitle: "Simple date selection without pinching or zooming",
          badge: "Smooth",
        },
        {
          title: "Direct mobile checkout",
          subtitle: "Clear booking button always within reach",
          badge: "Ready",
        },
      ],
    },
    "ongoing-care": {
      label: "Ongoing care",
      cardHeading: "Keep your website fresh after launch",
      rows: [
        {
          title: "Content & photo updates",
          subtitle: "Seasonal visuals, room details and policies kept current",
          badge: "Updated",
        },
        {
          title: "Booking flow checks",
          subtitle: "Ensure links, forms and booking engine stay connected",
          badge: "Checked",
        },
        {
          title: "Practical improvements",
          subtitle: "Ongoing refinements based on guest needs",
          badge: "Active",
        },
      ],
    },
  };

  const leftHighlights = [
    "Clear information and property photos",
    "Easy availability and date selection",
    "A straightforward way to book",
  ];

  const currentTab = tabsData[activeTab];

  return (
    <section className="relative w-full py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Top-Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 -left-24 w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#6342FF]/[0.14] blur-[85px] z-0"
      />

      {/* Top-Right Concentric Circle Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-14 right-24 w-52 h-52 rounded-full border-[24px] border-[#241FD9]/[0.05] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-6 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#78FF00]/[0.16] blur-[100px] z-0"
      />

      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#78FF00] inline-block"></span>
              <span className="text-[12px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#241FD9]">
                SEE HOW IT WORKS
              </span>
            </div>

            {/* Main Heading matching image */}
            <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-normal text-[#1E2532] leading-[1.08] tracking-tight">
              See the booking experience through your guest’s eyes.
            </h2>

            {/* Subtitle matching image */}
            <p className="text-[16px] sm:text-[19px] text-[#64748B] leading-[1.65] font-normal">
              From finding a room to choosing dates, the next step should always feel obvious.
            </p>

            {/* Checklist matching image */}
            <div className="space-y-4 pt-2 sm:pt-3">
              {leftHighlights.map((item) => (
                <div key={item} className="flex items-center gap-3.5 sm:gap-4">
                  <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E6F9E8] text-[#18A538] flex items-center justify-center shrink-0">
                    <HiCheck className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span className="text-[15.5px] sm:text-[18px] font-semibold text-[#1E2532]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <p className="pt-2 text-[14px] sm:text-[15px] text-[#64748B] font-normal">
              Interactive demonstration — not a live client system.
            </p>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CARD */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[780px] bg-[#F4F5FF] rounded-[28px] sm:rounded-[34px] p-5 sm:p-9 border border-[#E6E9FF] shadow-[0_24px_65px_rgba(36,31,217,0.08)]">
              {/* Top Tabs Switcher */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 bg-[#ECEEFF] p-1.5 sm:p-2 rounded-2xl mb-6 sm:mb-7">
                {Object.entries(tabsData).map(([key, tab]) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={`py-3 sm:py-3.5 px-2 sm:px-6 rounded-xl text-[13px] sm:text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#241FD9] text-white shadow-md"
                          : "text-[#475569] hover:text-[#1E2532]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Inner White Card */}
              <div className="bg-white rounded-[22px] sm:rounded-[24px] p-6 sm:p-10 border border-[#E6E9FF]/80 shadow-[0_6px_25px_rgba(15,23,42,0.03)]">
                {/* Card Header */}
                <h3 className="text-[20px] sm:text-[26px] font-normal text-[#1E2532] pb-5 sm:pb-6 border-b border-gray-100">
                  {currentTab.cardHeading}
                </h3>

                {/* Rows List */}
                <div className="divide-y divide-gray-100">
                  {currentTab.rows.map((row) => (
                    <div
                      key={row.title}
                      className="py-5 sm:py-6 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="text-[15.5px] sm:text-[18px] font-bold text-[#1E2532]">
                          {row.title}
                        </h4>
                        <p className="text-[13.5px] sm:text-[15px] text-[#64748B] mt-1">
                          {row.subtitle}
                        </p>
                      </div>

                      <span className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#E6F9E8] text-[#18A538] text-[12.5px] sm:text-[14px] font-semibold shrink-0">
                        {row.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Disclaimer */}
              <p className="mt-5 sm:mt-6 px-1 text-[13px] sm:text-[14px] text-[#64748B]">
                Examples only. Actual work depends on your property and agreed scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}