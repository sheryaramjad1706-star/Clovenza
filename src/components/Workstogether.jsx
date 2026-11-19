import Link from "next/link";

export default function CtaSection() {
  return (
    <section
      id="contact"
      className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#FCFCFE] bg-[linear-gradient(to_right,#241FD908_1px,transparent_1px),linear-gradient(to_bottom,#241FD908_1px,transparent_1px)] bg-[size:48px_48px]"
    >
      {/* Subtle Ambient Corner Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full bg-[#6342FF]/[0.10] blur-[90px] z-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-10 w-[420px] h-[420px] rounded-full bg-[#78FF00]/[0.12] blur-[100px] z-0"
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Royal Blue Rounded Banner Box */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#211CD9] px-8 sm:px-14 lg:px-20 py-14 sm:py-16 lg:py-20 shadow-[0_24px_60px_-15px_rgba(33,28,217,0.38)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left Text Content */}
          <div className="max-w-[720px]">
            {/* Eyebrow Tagline */}
            <div className="flex items-center gap-3.5 mb-6">
              <span className="h-[2px] w-7 bg-[#78FF00] inline-block"></span>
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase text-[#78FF00]">
                LET&apos;S WORK TOGETHER
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.12] font-normal tracking-tight text-white mb-5">
              Focus on your guests.
              <br />
              We&apos;ll handle the digital side.
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] sm:text-[18px] text-white/85 leading-[1.6] font-normal">
              Tell us about your property and what you need help managing.
            </p>
          </div>

          {/* Right Neon Green CTA Button */}
          <div className="shrink-0">
            <Link
              href="#contact-form"
              className="inline-block bg-[#78FF00] hover:bg-[#6be600] text-[#0F172A] font-bold text-[15px] sm:text-[16px] px-8 sm:px-9 py-4.5 sm:py-5 rounded-xl shadow-[0_12px_28px_-6px_rgba(120,255,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-6px_rgba(120,255,0,0.6)]"
            >
              Let&apos;s Discuss Your Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}