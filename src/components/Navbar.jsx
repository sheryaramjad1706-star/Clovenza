"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiCode,
  HiChevronDown,
} from "react-icons/hi";

const serviceItems = [
  {
    name: "Digital Marketing & Revenue Growth",
    href: "digital-marketing-revenue-growth",
  },
  {
    name: "Ongoing Digital Management",
    href: "/ongoing-digital-management",
  },
  {
    name: "OTA & Channel Management",
    href: "/ota-channel-management",
  },
  {
    name: "Website & Direct Booking",
    href: "/#website-direct-booking",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#241FD9] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">

          {/* Left: Clovenza Tech Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <HiCode className="w-10 h-10 text-white shrink-0" />

            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-bold tracking-tight text-white">
                Clouvenza
              </span>

              <span className="text-[11px] font-medium text-white/85 tracking-wide mt-0.5">
                Tech
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">

            <Link
              href="/#who-we-help"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Who we help
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div className="relative group py-8">
              <Link
                href="/#services"
                className="flex items-center gap-1 text-[15px] font-semibold text-white/95 group-hover:text-[#7CFC00] transition-colors"
              >
                <span>Services</span>
                <HiChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full w-80 bg-[#1c17bd] shadow-xl border-t border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-6 py-4 text-[15px] font-semibold text-white hover:bg-[#1712a1] hover:text-[#7CFC00] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#ota-management"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              OTA management
            </Link>

            <Link
              href="/#calculator"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Calculator
            </Link>

          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              className="bg-[#78FF00] hover:bg-[#6be600] text-[#111827] font-bold text-[15px] px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#78FF00] focus:outline-none p-2 transition-colors"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiX className="h-7 w-7" />
              ) : (
                <HiOutlineMenuAlt3 className="h-7 w-7" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e19b8] px-6 pt-3 pb-6 space-y-3 border-t border-white/10">

          <Link
            href="/#who-we-help"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#7CFC00]"
          >
            Who we help
          </Link>

          {/* Services Accordion (Mobile) */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-white hover:text-[#7CFC00]"
            >
              <span>Services</span>
              <HiChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 mt-1 space-y-2 border-l-2 border-white/20">
                {serviceItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="block py-2 text-sm font-semibold text-white/90 hover:text-[#7CFC00]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#ota-management"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#7CFC00]"
          >
            OTA management
          </Link>

          <Link
            href="/#calculator"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#7CFC00]"
          >
            Calculator
          </Link>

          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#78FF00] text-[#111827] font-bold text-base px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Let's Talk
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}