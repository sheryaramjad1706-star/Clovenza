"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HiOutlineCheckCircle,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiChevronLeft,
  HiChevronRight,
  HiArrowRight,
  HiMenu,
  HiOutlineUsers,
} from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";

// Custom SVG Icons matching reference screenshots
function WebsiteBrowserSvg({ className = "w-7 h-7" }) {
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

function OtaChannelsSvg({ className = "w-7 h-7" }) {
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

function LookAfterSvg({ className = "w-7 h-7" }) {
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

function GrowthChartSvg({ className = "w-7 h-7" }) {
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
      <polyline points="4 14 9 9 13 13 20 6" />
      <polyline points="15 6 20 6 20 11" />
      <line x1="4" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export default function Hero() {
  // Desktop mouse hover state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Mobile/Tablet scroll active card state
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

  const features = [
    {
      number: "01",
      title: "We build your website",
      description:
        "Beautiful, mobile-first pages with a smoother booking journey that feels trustworthy and easy to use.",
      badge: "Direct booking ready",
      Icon: WebsiteBrowserSvg,
      iconColor: "text-[#241FD9]",
      dotColor: "bg-[#241FD9]",
      badgeTextColor: "text-[#241FD9]",
      badgeBg: "bg-[#241FD9]/[0.07]",
      numBg: "bg-[#241FD9]/[0.07]",
      numText: "text-[#241FD9]",
    },
    {
      number: "02",
      title: "We manage your OTAs",
      description:
        "Listings, rates, promotions and availability are kept organized across the channels your guests already use.",
      badge: "Multi-channel support",
      Icon: OtaChannelsSvg,
      iconColor: "text-[#6342FF]",
      dotColor: "bg-[#6342FF]",
      badgeTextColor: "text-[#6342FF]",
      badgeBg: "bg-[#6342FF]/[0.07]",
      numBg: "bg-[#6342FF]/[0.07]",
      numText: "text-[#6342FF]",
    },
    {
      number: "03",
      title: "We look after it",
      description:
        "Updates, integrations and day-to-day digital upkeep are handled for you, so nothing important gets missed.",
      badge: "Always up to date",
      Icon: LookAfterSvg,
      iconColor: "text-[#241FD9]",
      dotColor: "bg-[#241FD9]",
      badgeTextColor: "text-[#241FD9]",
      badgeBg: "bg-[#241FD9]/[0.07]",
      numBg: "bg-[#241FD9]/[0.07]",
      numText: "text-[#241FD9]",
    },
    {
      number: "04",
      title: "We help you grow",
      description:
        "Improve visibility, attract more relevant travelers and create more opportunities for direct reservations.",
      badge: "Visibility & growth",
      Icon: GrowthChartSvg,
      iconColor: "text-[#241FD9]",
      dotColor: "bg-[#241FD9]",
      badgeTextColor: "text-[#241FD9]",
      badgeBg: "bg-[#241FD9]/[0.07]",
      numBg: "bg-[#241FD9]/[0.07]",
      numText: "text-[#241FD9]",
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* HERO SECTION */}
      <section className="w-full min-h-0 lg:min-h-[920px] pt-12 pb-36 sm:pt-16 sm:pb-44 md:pt-[65px] md:pb-[240px] lg:pb-[260px] bg-[#241FD9] text-white overflow-hidden flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="md:col-span-6 space-y-6 sm:space-y-8 z-10 md:-translate-x-1">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 sm:w-8 bg-[#78FF00] inline-block shrink-0"></span>
                <span className="text-[11px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase text-[#78FF00]">
                  YOUR HOSPITALITY DIGITAL PARTNER
                </span>
              </div>

              <h1 className="text-[38px] sm:text-[52px] md:text-[46px] lg:text-[70px] xl:text-[86px] font-normal leading-[1.05] tracking-tight">
                <span className="block text-white">We Build.</span>
                <span className="block text-white">We Manage.</span>
                <span className="block text-[#78FF00]">You Grow.</span>
              </h1>

              <p className="text-[15px] sm:text-[18px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-white/90 leading-[1.6] max-w-[580px] font-normal">
                From hotels and guesthouses to vacation rentals, we create and
                manage your website, direct bookings, OTA listings and digital
                marketing — so you can focus on your guests.
              </p>

              <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4 lg:gap-5 pt-1 sm:pt-2">
                <Link
                  href="#contact"
                  className="text-center inline-block bg-[#78FF00] hover:bg-[#6be600] text-[#111827] font-bold text-[14px] sm:text-[16px] px-6 sm:px-7 lg:px-9 py-3.5 lg:py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl active:translate-y-0"
                >
                  Grow Your Property
                </Link>

                <Link
                  href="#services"
                  className="text-center inline-block bg-white hover:bg-gray-100 text-[#111827] font-bold text-[14px] sm:text-[16px] px-6 sm:px-7 lg:px-9 py-3.5 lg:py-4 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl active:translate-y-0"
                >
                  Explore Services
                </Link>
              </div>

              <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[12px] sm:text-[14px] lg:text-[15px] text-white/85 font-normal">
                <span>Hotels</span>
                <span className="text-white/40">·</span>
                <span>Guesthouses</span>
                <span className="text-white/40">·</span>
                <span>Airbnb-style stays</span>
                <span className="text-white/40">·</span>
                <span>Vacation rentals</span>
                <span className="text-white/40">·</span>
                <span>Serviced apartments</span>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-6 relative flex justify-center md:justify-end md:translate-x-1 lg:translate-x-2 pb-6 sm:pb-10 md:pb-0">
              <div className="relative w-full max-w-[680px] bg-white/95 rounded-2xl sm:rounded-3xl p-2.5 sm:p-5 lg:p-7 shadow-2xl transform -rotate-1 sm:-rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 shadow-md text-gray-900">
                  <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-gray-100 bg-gray-50/70">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></span>
                    </div>

                    <div className="hidden sm:flex items-center gap-3 lg:gap-5 text-[9px] lg:text-[11px] text-gray-500 font-medium">
                      <span>Home</span>
                      <span>Rooms</span>
                      <span>Experiences</span>
                      <span>Gallery</span>
                      <span>Contact</span>
                    </div>

                    <span className="bg-gray-900 text-white text-[9px] lg:text-[10px] font-semibold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full">
                      Book Now
                    </span>
                  </div>

                  <div
                    className="relative p-3 sm:p-6 lg:p-8 bg-cover bg-center text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(15, 23, 42, 0.78), rgba(15, 23, 42, 0.35)), url('https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=900&q=80')",
                    }}
                  >
                    <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center">
                      <div className="col-span-7 space-y-2 sm:space-y-2.5">
                        <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-amber-200/90 font-semibold">
                          A STAY AMIDST
                        </p>

                        <h3 className="text-[16px] sm:text-[24px] lg:text-[28px] font-serif leading-tight font-semibold">
                          Mountains and Memories
                        </h3>

                        <p className="text-[9px] sm:text-[11px] text-gray-200 leading-relaxed">
                          Elegant rooms, breathtaking views and unforgettable experiences.
                        </p>

                        <div className="pt-1 sm:pt-1.5">
                          <span className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-[9px] sm:text-[10px] font-semibold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full">
                            Explore Rooms <HiArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      <div className="col-span-5 bg-white text-gray-800 rounded-xl p-2 sm:p-3.5 shadow-lg space-y-2 sm:space-y-2.5">
                        <p className="text-[9px] sm:text-[12px] font-bold text-gray-900">
                          Book Your Stay
                        </p>

                        <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[7px] sm:text-[9px]">
                          <div className="border border-gray-200 rounded-md p-1 sm:p-2">
                            <span className="text-gray-400 block">Check-in</span>
                            <span className="font-semibold">12 Nov 2026</span>
                          </div>

                          <div className="border border-gray-200 rounded-md p-1 sm:p-2">
                            <span className="text-gray-400 block">Check-out</span>
                            <span className="font-semibold">15 Nov 2026</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-1 sm:gap-2 text-[7px] sm:text-[9px]">
                          <div className="border border-gray-200 rounded-md p-1 sm:p-2 font-medium">
                            2 Adults
                          </div>

                          <div className="border border-gray-200 rounded-md p-1 sm:p-2 font-medium">
                            0 Children
                          </div>
                        </div>

                        <div className="w-full bg-[#241FD9] text-white text-center text-[8px] sm:text-[10px] font-semibold py-1.5 sm:py-2 rounded-md">
                          Check Availability →
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 px-3 sm:px-5 py-3 sm:py-3.5 border-b border-gray-100 text-[8px] sm:text-[9px] text-gray-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <HiOutlineCheckCircle className="text-[#241FD9] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Best Rate Guarantee</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <HiOutlineCalendar className="text-[#241FD9] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Free Cancellation</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <HiOutlineSparkles className="text-[#241FD9] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Breakfast Included</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <HiOutlineShieldCheck className="text-[#241FD9] w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Secure Booking</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-5 space-y-3 bg-white">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[12px] sm:text-[14px] font-bold text-gray-900">
                        Our Rooms
                      </h4>

                      <span className="text-[9px] sm:text-[10px] text-[#241FD9] font-semibold">
                        View All →
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="rounded-xl overflow-hidden border border-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=400&q=80"
                          alt="Deluxe Room"
                          className="h-14 sm:h-20 w-full object-cover"
                        />

                        <div className="p-1.5 sm:p-2">
                          <p className="text-[9px] sm:text-[10px] font-bold">Deluxe Room</p>
                          <p className="text-[7px] sm:text-[9px] text-gray-400">From CHF 150 / night</p>
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80"
                          alt="Triple Room"
                          className="h-14 sm:h-20 w-full object-cover"
                        />

                        <div className="p-1.5 sm:p-2">
                          <p className="text-[9px] sm:text-[10px] font-bold">Triple Room</p>
                          <p className="text-[7px] sm:text-[9px] text-gray-400">From CHF 190 / night</p>
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=400&q=80"
                          alt="Family Room"
                          className="h-14 sm:h-20 w-full object-cover"
                        />

                        <div className="p-1.5 sm:p-2">
                          <p className="text-[9px] sm:text-[10px] font-bold">Family Room</p>
                          <p className="text-[7px] sm:text-[9px] text-gray-400">From CHF 225 / night</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating November 2026 Calendar Card */}
                <div className="hidden sm:block absolute -bottom-10 -left-3 lg:-left-8 bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-100 p-3.5 lg:p-4 w-[215px] lg:w-[240px] transform rotate-2">
                  <div className="flex items-center justify-between mb-2.5">
                    <HiChevronLeft className="w-4 h-4 text-gray-400" />
                    <span className="text-[11px] font-bold text-gray-900">
                      November 2026
                    </span>
                    <HiChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-gray-400 font-medium mb-1">
                    <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-semibold text-gray-700">
                    <span className="text-gray-300">26</span>
                    <span className="text-gray-300">27</span>
                    <span className="text-gray-300">28</span>
                    <span className="text-gray-300">29</span>
                    <span className="text-gray-300">30</span>
                    <span className="text-gray-300">31</span>
                    <span>1</span>

                    <span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                    <span>9</span><span>10</span><span>11</span>

                    <span className="bg-[#241FD9] text-white rounded-l py-0.5">12</span>
                    <span className="bg-[#241FD9] text-white py-0.5">13</span>
                    <span className="bg-[#241FD9] text-white py-0.5">14</span>
                    <span className="bg-[#241FD9] text-white rounded-r py-0.5">15</span>

                    <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
                    <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
                  </div>
                </div>

                {/* Floating Mobile Phone Preview Card */}
                <div className="hidden sm:block absolute -bottom-12 -right-2 lg:-right-6 bg-white text-gray-900 rounded-[24px] lg:rounded-[26px] shadow-2xl border-[4px] lg:border-[5px] border-gray-900 w-[170px] lg:w-[190px] overflow-hidden transform rotate-6">
                  <div className="flex items-center justify-between px-3.5 py-2 border-b border-gray-100">
                    <span className="text-[10px] font-bold tracking-tight">AlpineVista</span>
                    <HiMenu className="w-3.5 h-3.5 text-gray-600" />
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=400&q=80"
                    alt="Double Room Mobile"
                    className="h-20 lg:h-24 w-full object-cover"
                  />

                  <div className="p-2.5 lg:p-3 space-y-1.5 lg:space-y-2">
                    <p className="text-[11px] font-bold">Double Room</p>
                    <p className="text-[8px] text-gray-500 leading-tight">
                      Comfortable and modern room with mountain view.
                    </p>

                    <div className="flex items-center gap-2 text-[8px] text-gray-600 pt-0.5">
                      <span className="flex items-center gap-1">
                        <HiOutlineUsers className="w-3 h-3" /> 2 Guests
                      </span>
                      <span className="flex items-center gap-1">
                        <IoBedOutline className="w-3 h-3" /> 1 Double Bed
                      </span>
                    </div>

                    <div className="pt-0.5 flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-gray-900">
                        CHF 150 <span className="text-[8px] font-normal text-gray-400">/ night</span>
                      </span>
                    </div>

                    <div className="w-full bg-[#241FD9] text-white text-center text-[9px] font-semibold py-1.5 lg:py-2 rounded-lg">
                      Book Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAPPING 4-CARDS SECTION (DESKTOP HOVER + MOBILE/TABLET SCROLL EVENT) */}
      <section className="relative z-20 -mt-20 sm:-mt-28 md:-mt-36 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-8">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[0_25px_70px_-15px_rgba(15,23,42,0.12)] border border-gray-100/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {features.map((item, index) => {
                const { Icon } = item;
                const isHovered = isMobileView
                  ? mobileActiveIndex === index
                  : hoveredIndex === index;

                return (
                  <div
                    key={item.number}
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
                    className={`relative overflow-hidden bg-white rounded-[20px] sm:rounded-[24px] px-6 sm:px-7 py-7 sm:py-9 min-h-[330px] sm:min-h-[395px] border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                      isHovered
                        ? "border-[#241FD9] -translate-y-1.5 shadow-xl"
                        : "border-[#E6ECFF]"
                    }`}
                  >
                    {/* Bottom-to-Top Sliding Blue Background Layer */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-br from-[#3B28FF] via-[#241FD9] to-[#1A13B8] transition-transform duration-500 ease-out z-0 ${
                        isHovered ? "translate-y-0" : "translate-y-full"
                      }`}
                    ></span>

                    {/* Card Top Content */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-7 sm:mb-8">
                        {/* Icon Container (Zooms Out/Scales & Tilts with Glossy Gradient on Hover/Scroll) */}
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] flex items-center justify-center border transform transition-all duration-500 ease-out ${
                            isHovered
                              ? "bg-gradient-to-br from-white/45 via-white/20 to-white/5 border-white/35 backdrop-blur-md shadow-[inset_0_2px_12px_rgba(255,255,255,0.65),0_12px_24px_rgba(15,10,130,0.35)] scale-115 -rotate-6"
                              : "bg-[#F4F7FF] border-white shadow-[0_10px_25px_rgba(36,31,217,0.08)] scale-100 rotate-0"
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300 ${
                              isHovered ? "text-white" : item.iconColor
                            }`}
                          />
                        </div>

                        <span
                          className={`w-9 h-9 rounded-full text-[12px] font-bold flex items-center justify-center border transition-all duration-300 ${
                            isHovered
                              ? "bg-white/15 border-white/25 text-white"
                              : `${item.numBg} border-transparent ${item.numText}`
                          }`}
                        >
                          {item.number}
                        </span>
                      </div>

                      <h3
                        className={`text-[20px] sm:text-[22px] font-semibold leading-[1.25] mb-3.5 sm:mb-4 transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-[#111827]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-[14px] sm:text-[15px] leading-[1.65] mb-6 sm:mb-8 transition-colors duration-300 ${
                          isHovered ? "text-white/90" : "text-gray-500"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Status Pill (Turns Neon Green on Active/Hover) */}
                    <div className="relative z-10 pt-2">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 ${
                          isHovered
                            ? "bg-[#78FF00] text-[#111827] shadow-md"
                            : `${item.badgeBg} ${item.badgeTextColor}`
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            isHovered ? "bg-[#111827]" : item.dotColor
                          }`}
                        ></span>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}