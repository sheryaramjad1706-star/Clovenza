
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiX,
  HiCode,
} from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#241FD9] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">

          {/* Left: Clovenza Tech Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <HiCode className="w-10 h-10 text-white shrink-0" />

            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-bold tracking-tight text-white">
                Clovenza
              </span>

              <span className="text-[11px] font-medium text-white/85 tracking-wide mt-0.5">
                Tech
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">

            <Link
              href="#who-we-help"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Who we help
            </Link>

            <Link
              href="#services"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Services
            </Link>

            <Link
              href="#ota-management"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              OTA management
            </Link>

            <Link
              href="#calculator"
              className="text-[15px] font-semibold text-white/95 hover:text-[#7CFC00] transition-colors"
            >
              Calculator
            </Link>

          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
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
            href="#who-we-help"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#78FF00]"
          >
            Who we help
          </Link>

          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#78FF00]"
          >
            Services
          </Link>

          <Link
            href="#ota-management"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#78FF00]"
          >
            OTA management
          </Link>

          <Link
            href="#calculator"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-[#78FF00]"
          >
            Calculator
          </Link>

          <div className="pt-2">
            <Link
              href="#contact"
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
