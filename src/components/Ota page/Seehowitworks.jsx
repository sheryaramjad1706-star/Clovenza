"use client";

import { useState } from "react";
import { HiCheck } from "react-icons/hi";

export default function SeeHowItWorks() {
  const [activeTab, setActiveTab] = useState("build-interest");

  const tabsData = {
    "get-discovered": {
      label: "Get discovered",
      cardHeading: "Help travelers find your property",
      rows: [
        {
          title: "Search visibility",
          subtitle: "Show up when guests search your area",
          badge: "Optimized",
        },
        {
          title: "Local Google profile",
          subtitle: "Accurate details, photos and maps",
          badge: "Updated",
        },
        {
          title: "Destination reach",
          subtitle: "Targeted visibility for active planners",
          badge: "Active",
        },
      ],
    },
    "build-interest": {
      label: "Build interest",
      cardHeading: "Help guests choose your stay",
      rows: [
        {
          title: "Property content",
          subtitle: "Show what makes you special",
          badge: "Refined",
        },
        {
          title: "Seasonal campaigns",
          subtitle: "Relevant guests and offers",
          badge: "Planned",
        },
        {
          title: "Room information",
          subtitle: "Confident decisions",
          badge: "Clear",
        },
      ],
    },
    "get-bookings": {
      label: "Get bookings",
      cardHeading: "Turn interested visitors into guests",
      rows: [
        {
          title: "Direct booking path",
          subtitle: "Simple steps from room view to checkout",
          badge: "Streamlined",
        },
        {
          title: "Clear rate offers",
          subtitle: "Highlight direct stay benefits",
          badge: "Aligned",
        },
        {
          title: "Mobile experience",
          subtitle: "Smooth booking on every screen",
          badge: "Ready",
        },
      ],
    },
  };

  const leftHighlights = [
    "Help the right travelers find you",
    "Give guests reasons to choose you",
    "Make their next step clear",
  ];

  const currentTab = tabsData[activeTab];

  return (
    <section className="relative w-full py-28 lg:py-36 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Top-Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 -left-24 w-[450px] h-[450px] rounded-full bg-[#6342FF]/[0.14] blur-[85px] z-0"
      />

      {/* Top-Right Concentric Circle Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-14 right-24 w-52 h-52 rounded-full border-[24px] border-[#241FD9]/[0.05] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-6 w-[480px] h-[480px] rounded-full bg-[#78FF00]/[0.16] blur-[100px] z-0"
      />

      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT COLUMN (Balanced with Larger Right Card) */}
          <div className="lg:col-span-5 space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#78FF00] inline-block"></span>
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#241FD9]">
                SEE HOW IT WORKS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[42px] sm:text-[52px] lg:text-[62px] font-normal text-[#1E2532] leading-[1.08] tracking-tight">
              From the first search to the booking button.
            </h2>

            {/* Subtitle */}
            <p className="text-[17px] sm:text-[19px] text-[#64748B] leading-[1.65] font-normal">
              Explore the three moments we improve in the guest journey.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-3">
              {leftHighlights.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#E6F9E8] text-[#18A538] flex items-center justify-center shrink-0">
                    <HiCheck className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span className="text-[17px] sm:text-[18px] font-semibold text-[#1E2532]">
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

          {/* RIGHT COLUMN: LARGER INTERACTIVE CARD */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-[780px] bg-[#F4F5FF] rounded-[34px] p-6 sm:p-9 border border-[#E6E9FF] shadow-[0_24px_65px_rgba(36,31,217,0.08)]">
              {/* Top Tabs Switcher */}
              <div className="grid grid-cols-3 gap-2.5 bg-[#ECEEFF] p-2 rounded-2xl mb-7">
                {Object.entries(tabsData).map(([key, tab]) => {
                  const isActive = activeTab === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveTab(key)}
                      className={`py-3.5 px-4 sm:px-6 rounded-xl text-[14px] sm:text-[16px] font-semibold transition-all duration-200 cursor-pointer ${
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
              <div className="bg-white rounded-[24px] p-7 sm:p-10 border border-[#E6E9FF]/80 shadow-[0_6px_25px_rgba(15,23,42,0.03)]">
                {/* Card Header */}
                <h3 className="text-[22px] sm:text-[26px] font-normal text-[#1E2532] pb-6 border-b border-gray-100">
                  {currentTab.cardHeading}
                </h3>

                {/* Rows List */}
                <div className="divide-y divide-gray-100">
                  {currentTab.rows.map((row) => (
                    <div
                      key={row.title}
                      className="py-6 flex items-center justify-between gap-4"
                    >
                      <div>
                        <h4 className="text-[16px] sm:text-[18px] font-bold text-[#1E2532]">
                          {row.title}
                        </h4>
                        <p className="text-[14px] sm:text-[15px] text-[#64748B] mt-1">
                          {row.subtitle}
                        </p>
                      </div>

                      <span className="px-5 py-2 rounded-full bg-[#E6F9E8] text-[#18A538] text-[13px] sm:text-[14px] font-semibold shrink-0">
                        {row.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Disclaimer */}
              <p className="mt-6 px-1 text-[13px] sm:text-[14px] text-[#64748B]">
                Examples only. Actual work depends on your property and agreed scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}