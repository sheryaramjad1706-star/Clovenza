"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Can you manage a website you did not build?",
      answer:
        "Yes, in many cases we can. Before we start, we review how your existing site is built, where it is hosted and what access is available so we can confirm what ongoing updates and upkeep we can safely handle.",
    },
    {
      question: "Can you make changes to photos and content?",
      answer:
        "Yes. You can send us updated room photos, seasonal offers, policy changes or general text edits, and we will format and publish them cleanly across your site.",
    },
    {
      question: "What if the booking engine has a problem?",
      answer:
        "We check your booking links, buttons and website integration to identify whether the issue is on your site or with the booking provider. If it is on the provider side, we help coordinate with their support team so it gets resolved smoothly.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-24 w-[440px] h-[440px] rounded-full bg-[#6342FF]/[0.15] blur-[85px] z-0"
      />

      {/* Top-Right Concentric Ring & Dotted Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-12 right-24 w-52 h-52 rounded-full border-[24px] border-[#241FD9]/[0.05] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-28 right-24 w-48 h-48 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-12 w-[480px] h-[480px] rounded-full bg-[#78FF00]/[0.15] blur-[95px] z-0"
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#241FD9]">
                GOOD TO KNOW
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[40px] sm:text-[50px] lg:text-[56px] font-normal text-[#1E2532] leading-[1.1] tracking-tight max-w-[440px]">
              Simple answers. No jargon.
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[17px] text-[#64748B] leading-[1.6] font-normal max-w-[400px]">
              The details are tailored to your property and existing setup.
            </p>
          </div>

          {/* RIGHT COLUMN: ACCORDION FAQS */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-gray-200/80 border-b border-gray-200/80">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question} className="py-6 sm:py-7">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer"
                    >
                      <span className="text-[17px] sm:text-[19px] font-bold text-[#1E2532] group-hover:text-[#241FD9] transition-colors">
                        {item.question}
                      </span>

                      <span className="text-[#241FD9] shrink-0">
                        <HiPlus
                          className={`w-5 h-5 stroke-[2.5] transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-4"
                          : "grid-rows-[0fr] opacity-0 pt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[15px] sm:text-[16px] text-[#64748B] leading-[1.7] pr-8">
                          {item.answer}
                        </p>
                      </div>
                    </div>
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