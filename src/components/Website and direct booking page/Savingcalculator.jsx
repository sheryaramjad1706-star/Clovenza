"use client";

import { useState } from "react";
import Link from "next/link";

export default function SavingsCalculator() {
  const [currency, setCurrency] = useState("CHF");
  const [monthlyBookings, setMonthlyBookings] = useState(150);
  const [avgBookingValue, setAvgBookingValue] = useState(520);
  const [otaCommission, setOtaCommission] = useState(14);
  const [shiftedPercentage, setShiftedPercentage] = useState(50);

  const currencies = [
    { id: "CHF", label: "CHF", prefix: "CHF " },
    { id: "EUR", label: "EUR", prefix: "EUR " },
    { id: "USD", label: "USD $", prefix: "$ " },
  ];

  const activeCurrency =
    currencies.find((c) => c.id === currency) || currencies[0];

  const directBookingsPerMonth = Math.round(
    (monthlyBookings * shiftedPercentage) / 100
  );
  const monthlySavings = Math.round(
    directBookingsPerMonth * avgBookingValue * (otaCommission / 100)
  );
  const annualSavings = monthlySavings * 12;

  const formatNumber = (num) => num.toLocaleString("en-US");

  const bookingsPercent = ((monthlyBookings - 10) / (500 - 10)) * 100;
  const valuePercent = ((avgBookingValue - 50) / (1000 - 50)) * 100;
  const commissionPercent = ((otaCommission - 5) / (30 - 5)) * 100;
  const shiftedPercent = ((shiftedPercentage - 5) / (100 - 5)) * 100;

  return (
    <section
      id="calculator"
      className="relative w-full py-28 lg:py-36 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-28 -left-24 w-[500px] h-[500px] rounded-full bg-[#6342FF]/[0.14] blur-[100px] z-0"
      />

      {/* Top-Right Decorative Concentric Ring & Dotted Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-10 right-14 w-64 h-64 rounded-full border-[26px] border-[#241FD9]/[0.04] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute top-32 right-28 w-48 h-48 bg-[radial-gradient(#241FD922_1.5px,transparent_1.5px)] [background-size:14px_14px] z-0"
      />

      {/* Bottom-Right Soft Mint Green Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-6 w-[520px] h-[520px] rounded-full bg-[#78FF00]/[0.14] blur-[110px] z-0"
      />

      {/* Wider Full-Screen Container */}
      <div className="relative z-10 w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center max-w-[900px] mx-auto mb-16 lg:mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3.5 mb-6">
            <span className="h-[2.5px] w-7 bg-[#78FF00] inline-block"></span>
            <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.22em] uppercase text-[#241FD9]">
              INTERACTIVE SAVINGS CALCULATOR
            </span>
          </div>

          {/* Larger Main Heading */}
          <h2 className="text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.12] font-normal tracking-tight mb-6">
            <span className="text-[#0F172A]">What could </span>
            <span className="text-[#241FD9]">more direct bookings</span>
            <br className="hidden sm:inline" />
            <span className="text-[#0F172A]"> save you?</span>
          </h2>

          {/* Larger Subtitle */}
          <p className="text-[17px] sm:text-[20px] text-[#64748B] leading-[1.65] max-w-[740px] mx-auto font-normal">
            Adjust the numbers to estimate OTA commissions you could avoid by
            converting some bookings into direct reservations.
          </p>
        </div>

        {/* Two-Card Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 xl:gap-14 items-stretch">
          {/* ================= LEFT CARD: CONTROLS & SLIDERS ================= */}
          <div className="lg:col-span-6 bg-[#F6F7FF]/95 rounded-[32px] p-8 sm:p-11 lg:p-12 xl:p-14 border border-[#E6E9FF] shadow-[0_14px_45px_rgba(36,31,217,0.05)] flex flex-col justify-between">
            {/* Currency Switcher Tabs */}
            <div className="grid grid-cols-3 gap-4 mb-11">
              {currencies.map((item) => {
                const isActive = currency === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrency(item.id)}
                    className={`py-4 px-5 rounded-2xl text-[16px] sm:text-[18px] font-extrabold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#241FD9] text-white shadow-[0_10px_24px_-4px_rgba(36,31,217,0.45)]"
                        : "bg-white text-[#0F172A] border border-[#E2E8F0] hover:border-[#241FD9]/40"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Sliders List (Bolder Labels & Values) */}
            <div className="space-y-9 sm:space-y-10">
              {/* Slider 1: Monthly OTA bookings */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <label
                    htmlFor="monthly-bookings"
                    className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
                  >
                    Monthly OTA bookings
                  </label>
                  <span className="text-[17px] sm:text-[18px] font-extrabold text-[#0F172A]">
                    {monthlyBookings}
                  </span>
                </div>
                <input
                  id="monthly-bookings"
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={monthlyBookings}
                  onChange={(e) => setMonthlyBookings(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #3B36F4 0%, #3B36F4 ${bookingsPercent}%, #E2E8F0 ${bookingsPercent}%, #E2E8F0 100%)`,
                  }}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#3B36F4]"
                />
              </div>

              {/* Slider 2: Average booking value */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <label
                    htmlFor="avg-booking-value"
                    className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
                  >
                    Average booking value
                  </label>
                  <span className="text-[17px] sm:text-[18px] font-extrabold text-[#0F172A]">
                    {activeCurrency.prefix}
                    {formatNumber(avgBookingValue)}
                  </span>
                </div>
                <input
                  id="avg-booking-value"
                  type="range"
                  min={50}
                  max={1000}
                  step={10}
                  value={avgBookingValue}
                  onChange={(e) => setAvgBookingValue(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #3B36F4 0%, #3B36F4 ${valuePercent}%, #E2E8F0 ${valuePercent}%, #E2E8F0 100%)`,
                  }}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#3B36F4]"
                />
              </div>

              {/* Slider 3: OTA commission */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <label
                    htmlFor="ota-commission"
                    className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
                  >
                    OTA commission
                  </label>
                  <span className="text-[17px] sm:text-[18px] font-extrabold text-[#0F172A]">
                    {otaCommission}%
                  </span>
                </div>
                <input
                  id="ota-commission"
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={otaCommission}
                  onChange={(e) => setOtaCommission(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #3B36F4 0%, #3B36F4 ${commissionPercent}%, #E2E8F0 ${commissionPercent}%, #E2E8F0 100%)`,
                  }}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#3B36F4]"
                />
              </div>

              {/* Slider 4: Bookings shifted to direct */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <label
                    htmlFor="shifted-direct"
                    className="text-[16px] sm:text-[17px] font-bold text-[#0F172A]"
                  >
                    Bookings shifted to direct
                  </label>
                  <span className="text-[17px] sm:text-[18px] font-extrabold text-[#0F172A]">
                    {shiftedPercentage}%
                  </span>
                </div>
                <input
                  id="shifted-direct"
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={shiftedPercentage}
                  onChange={(e) => setShiftedPercentage(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #3B36F4 0%, #3B36F4 ${shiftedPercent}%, #E2E8F0 ${shiftedPercent}%, #E2E8F0 100%)`,
                  }}
                  className="w-full h-2.5 rounded-lg appearance-none cursor-pointer accent-[#3B36F4]"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD: ROYAL BLUE RESULTS PANEL ================= */}
          <div className="lg:col-span-6 bg-[#1C18D4] rounded-[32px] p-9 sm:p-12 lg:p-12 xl:p-14 text-white shadow-[0_26px_65px_-15px_rgba(28,24,212,0.48)] flex flex-col justify-between">
            <div>
              {/* Top Label (Bolder) */}
              <p className="text-[16px] sm:text-[17px] text-white/95 font-semibold mb-4">
                Estimated annual commission savings
              </p>

              {/* Extra Large Neon Green Annual Savings Figure */}
              <div className="text-[50px] sm:text-[62px] lg:text-[68px] xl:text-[74px] font-extrabold text-[#78FF00] leading-[1.06] tracking-tight mb-11">
                {activeCurrency.prefix}
                {formatNumber(annualSavings)}
              </div>

              {/* Monthly Savings & Direct Bookings Row */}
              <div className="grid grid-cols-2 gap-8 mb-11">
                <div>
                  <p className="text-[15px] sm:text-[16px] text-white/90 font-semibold mb-2">
                    Monthly savings
                  </p>
                  <p className="text-[28px] sm:text-[32px] lg:text-[34px] font-extrabold text-white leading-tight">
                    {activeCurrency.prefix}
                    {formatNumber(monthlySavings)}
                  </p>
                </div>

                <div>
                  <p className="text-[15px] sm:text-[16px] text-white/90 font-semibold mb-2">
                    Direct bookings / month
                  </p>
                  <p className="text-[28px] sm:text-[32px] lg:text-[34px] font-extrabold text-white leading-tight">
                    {formatNumber(directBookingsPerMonth)}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Disclaimer & Full-Width Neon Green CTA Button */}
            <div>
              <p className="text-[13px] sm:text-[14px] text-white/85 font-medium leading-[1.65] mb-7">
                Illustrative commission savings before payment, marketing and
                booking-system costs. Switching currency changes the
                denomination, not the exchange rate.
              </p>

              <Link
                href="#contact"
                className="block w-full text-center bg-[#78FF00] hover:bg-[#6be600] text-[#0F172A] font-extrabold text-[16px] sm:text-[18px] py-4.5 sm:py-5 px-7 rounded-2xl shadow-[0_14px_30px_-6px_rgba(120,255,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-6px_rgba(120,255,0,0.6)]"
              >
                Plan My Direct Booking Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}