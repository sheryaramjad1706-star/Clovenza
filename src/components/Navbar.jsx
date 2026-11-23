"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiChevronDown } from "react-icons/hi";

const serviceItems = [
  {
    name: "Digital Marketing & Revenue Growth",
    href: "/digital-marketing-revenue-growth",
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
    href: "/website-direct-booking",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  // Close desktop dropdown & mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-[#241FD9] text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Left: Clouvenza Tech Logo */}
          <Link
            href="/"
            onClick={() => {
              setServicesOpen(false);
              setIsOpen(false);
            }}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <img
              src="/clouvenza logo.png"
              alt="Clouvenza Tech Logo"
              className="h-24 lg:h-28 w-auto object-contain scale-150 lg:scale-[1.75] origin-left"
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link
              href="/#who-we-help"
              onClick={() => setServicesOpen(false)}
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Who we help
            </Link>

            {/* Services Hover Dropdown (Desktop) */}
            <div
              className="relative py-2"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/#services"
                onClick={() => setServicesOpen(false)}
                aria-expanded={servicesOpen}
                className={`flex items-center gap-1.5 py-2 text-[15px] font-semibold transition-colors cursor-pointer focus:outline-none ${
                  servicesOpen
                    ? "text-[#7CFC00]"
                    : "text-white/95 hover:text-[#7CFC00]"
                }`}
              >
                <span>Services</span>
                <HiChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#7CFC00]" : ""
                  }`}
                />
              </Link>

              {/* Desktop Dropdown Menu with Hover Bridge */}
              <div
                className={`absolute left-0 top-full pt-3 w-80 z-50 transition-all duration-200 ease-out ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 visible pointer-events-auto"
                    : "opacity-0 translate-y-2 invisible pointer-events-none"
                }`}
              >
                <div className="bg-[#1c17bd] rounded-xl shadow-2xl border border-white/15 overflow-hidden">
                  <div className="py-2">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#1712a1] hover:text-[#7CFC00] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#ota-management"
              onClick={() => setServicesOpen(false)}
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              OTA management
            </Link>

            <Link
              href="/#calculator"
              onClick={() => setServicesOpen(false)}
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Calculator
            </Link>
          </nav>

          {/* Right: Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/#contact"
              onClick={() => setServicesOpen(false)}
              className="bg-[#78FF00] hover:bg-[#6be600] text-[#111827] font-bold text-[15px] px-7 py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile & Tablet Animated Rounded Box Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="relative w-11 h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/25 flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
            >
              <div className="relative w-5 h-4 flex items-center justify-center">
                {/* Top Line */}
                <span
                  className={`absolute block h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  }`}
                />
                {/* Middle Line */}
                <span
                  className={`absolute block h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                {/* Bottom Line */}
                <span
                  className={`absolute block h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Mega Menu (All Links & Sub-Menus Visible) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#1e19b8] border-t border-white/10 shadow-2xl ${
          isOpen
            ? "max-h-[85vh] opacity-100 visible"
            : "max-h-0 opacity-0 invisible border-t-0"
        }`}
      >
        <div className="px-4 sm:px-6 pt-4 pb-6 space-y-2 overflow-y-auto max-h-[calc(85vh-1rem)]">
          <Link
            href="/#who-we-help"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base font-semibold text-white hover:text-[#7CFC00] transition-colors"
          >
            Who we help
          </Link>

          {/* Services Section with All Sub-Menus Directly Shown */}
          <div className="py-1">
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-[#7CFC00]"
            >
              Services
            </Link>

            <div className="pl-4 mt-1 mb-2 space-y-1.5 border-l-2 border-[#7CFC00]/50">
              {serviceItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-sm font-semibold text-white/90 hover:text-[#7CFC00] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#ota-management"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base font-semibold text-white hover:text-[#7CFC00] transition-colors"
          >
            OTA management
          </Link>

          <Link
            href="/#calculator"
            onClick={() => setIsOpen(false)}
            className="block py-2.5 text-base font-semibold text-white hover:text-[#7CFC00] transition-colors"
          >
            Calculator
          </Link>

          <div className="pt-3">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#78FF00] hover:bg-[#6be600] text-[#111827] font-bold text-base px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}