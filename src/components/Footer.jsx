import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0E0E2C] text-white py-28 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Side: Logo + Tagline */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex items-center gap-2.5 w-fit">
            {/* Custom Geometric CV Icon */}
            <svg
              width="38"
              height="32"
              viewBox="0 0 42 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M19 6H9C5.68629 6 3 8.68629 3 12V22C3 25.3137 5.68629 28 9 28H16"
                stroke="white"
                strokeWidth="4.2"
                strokeLinecap="round"
              />
              <path
                d="M15 15L22 27L35 6"
                stroke="white"
                strokeWidth="4.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex flex-col leading-none">
              <span className="text-[22px] font-bold tracking-tight text-white">
                Clovenza
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-medium text-white/85 tracking-wide">
                  Tech
                </span>
                {/* Subtle horizontal line next to Tech as seen in screenshot */}
                <span className="h-[1px] w-14 bg-white/25 inline-block"></span>
              </div>
            </div>
          </Link>

          <p className="text-[14px] text-[#9CA3AF] font-normal">
            We Build. We Manage. You Grow.
          </p>
        </div>

        {/* Right Side: Description Text */}
        <div className="md:text-right">
          <p className="text-[14px] text-[#9CA3AF] font-normal leading-relaxed">
            Digital growth and management for accommodation businesses. Website mockups are illustrative.
          </p>
        </div>

      </div>
    </footer>
  );
}