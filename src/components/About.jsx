import Link from "next/link";
import {
  HiCheck,
  HiArrowRight,
  HiOutlineCalendar,
  HiOutlineUsers,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { FaMountain } from "react-icons/fa";

export default function WebsiteShowcase() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#FAFBFD]">
      {/* BACKGROUND GRID & SOFT PASTEL GLOWS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(36, 31, 217, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(36, 31, 217, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top-Left Soft Lavender Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#6342FF]/[0.10] blur-[95px] z-0"
      />
      {/* Bottom-Right Soft Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-[560px] h-[560px] rounded-full bg-[#78FF00]/[0.12] blur-[110px] z-0"
      />

      {/* WIDER CONTAINER FOR FULLER SCREEN PRESENCE */}
      <div className="relative z-10 w-full max-w-[1540px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: SHIFTED MORE LEFT + ZOOM-OUT HOVER ================= */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start lg:-ml-4">
            {/* Outer Soft Periwinkle Framed Box with Zoom-Out Hover */}
            <div className="group relative w-full max-w-[660px] rounded-[36px] p-4 sm:p-6 lg:p-7 bg-gradient-to-br from-[#DCE0FF]/90 via-[#E8EBFF]/80 to-[#D5DCFF]/90 shadow-[0_24px_60px_-15px_rgba(36,31,217,0.14)] border border-white/80 transform transition-all duration-500 ease-out hover:scale-[0.96] cursor-pointer">
              
              {/* Inner White Canvas Card */}
              <div className="relative bg-white rounded-[26px] p-4 sm:p-6 lg:p-7 shadow-sm overflow-visible">
                
                {/* DESKTOP WEBSITE PREVIEW CARD */}
                <div className="w-[89%] sm:w-[87%] bg-white rounded-2xl border border-gray-100 shadow-[0_12px_35px_rgba(15,23,42,0.08)] overflow-hidden">
                  
                  {/* Mini Navbar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <FaMountain className="w-4 h-4 text-[#1E293B]" />
                      <div className="leading-none">
                        <span className="text-[10px] font-bold text-gray-900 block">
                          Alpine View
                        </span>
                        <span className="text-[6.5px] tracking-widest text-gray-400 uppercase">
                          HOTEL
                        </span>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-3.5 text-[8px] text-gray-500 font-medium">
                      <span>Rooms</span>
                      <span>Experiences</span>
                      <span>About</span>
                      <span>Contact</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[7.5px] text-gray-500 font-semibold hidden sm:inline">
                        EN ▾
                      </span>
                      <span className="bg-[#0F172A] text-white text-[8px] font-semibold px-3 py-1 rounded-full">
                        Book Now
                      </span>
                    </div>
                  </div>

                  {/* Alpine Hero Banner */}
                  <div
                    className="relative px-5 sm:px-6 py-8 sm:py-10 bg-cover bg-center text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(15, 23, 42, 0.82) 35%, rgba(15, 23, 42, 0.25) 100%), url('https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=900&q=80')",
                    }}
                  >
                    <p className="text-[7px] uppercase tracking-[0.18em] text-amber-200/90 font-semibold mb-1.5">
                      DISCOVER MEIRINGEN
                    </p>
                    <h4 className="text-[20px] sm:text-[25px] font-serif leading-[1.15] font-medium max-w-[230px] mb-2.5">
                      Your perfect stay in the Swiss Alps
                    </h4>
                    <p className="text-[8px] text-gray-200/90 max-w-[200px] leading-relaxed mb-4">
                      Comfortable rooms, breathtaking views and unforgettable experiences.
                    </p>
                    <span className="inline-flex items-center gap-1 bg-white text-gray-900 text-[8px] font-semibold px-3.5 py-1.5 rounded-full shadow">
                      Check Availability <HiArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>

                  {/* Overlapping Horizontal Search Bar */}
                  <div className="px-4 -mt-4 relative z-10">
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-2.5 grid grid-cols-4 gap-1.5 items-center text-[7.5px]">
                      <div className="flex items-center gap-1 px-1.5 py-1 border-r border-gray-100">
                        <HiOutlineCalendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <div>
                          <span className="text-gray-400 block text-[6.5px]">Check-in</span>
                          <span className="font-bold text-gray-800">12 Mar 2027</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-1 border-r border-gray-100">
                        <HiOutlineCalendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <div>
                          <span className="text-gray-400 block text-[6.5px]">Check-out</span>
                          <span className="font-bold text-gray-800">15 Mar 2027</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 px-1.5 py-1">
                        <HiOutlineUsers className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <div>
                          <span className="text-gray-400 block text-[6.5px]">Guests</span>
                          <span className="font-bold text-gray-800">2 Adults, 1 Child</span>
                        </div>
                      </div>
                      <div className="bg-[#241FD9] text-white text-center font-semibold py-2 px-2 rounded-lg text-[7.5px]">
                        Search Rooms →
                      </div>
                    </div>
                  </div>

                  {/* Our Rooms Section + Mini Calendar Overlay */}
                  <div className="p-4 pt-5 relative">
                    <p className="text-[11px] font-bold text-gray-900 mb-3">
                      Our Rooms
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {/* Room 1 */}
                      <div className="rounded-lg border border-gray-100 overflow-hidden bg-white">
                        <img
                          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=400&q=80"
                          alt="Standard Double"
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2.5">
                          <p className="text-[8.5px] font-bold text-gray-900">
                            Standard Double
                          </p>
                          <p className="text-[7px] text-gray-400">
                            From CHF 145 / night
                          </p>
                        </div>
                      </div>

                      {/* Room 2 */}
                      <div className="rounded-lg border border-gray-100 overflow-hidden bg-white">
                        <img
                          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80"
                          alt="Superior Room"
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2.5">
                          <p className="text-[8.5px] font-bold text-gray-900">
                            Superior Room
                          </p>
                          <p className="text-[7px] text-gray-400">
                            From CHF 185 / night
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating March 2027 Mini Calendar */}
                    <div className="hidden sm:block absolute right-3 top-2 bg-white rounded-xl shadow-[0_10px_28px_rgba(15,23,42,0.12)] border border-gray-100 p-3 w-[165px]">
                      <div className="flex items-center justify-between mb-1.5">
                        <HiChevronLeft className="w-3 h-3 text-gray-400" />
                        <span className="text-[8px] font-bold text-gray-800">
                          March 2027
                        </span>
                        <HiChevronRight className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="grid grid-cols-7 gap-0.5 text-center text-[6.5px] text-gray-400 mb-1">
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                        <span>S</span>
                      </div>
                      <div className="grid grid-cols-7 gap-0.5 text-center text-[7px] font-semibold text-gray-700">
                        <span className="text-gray-300">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span className="bg-[#241FD9] text-white rounded-full">12</span>
                        <span className="bg-[#241FD9]/15 text-[#241FD9] rounded">13</span>
                        <span className="bg-[#241FD9]/15 text-[#241FD9] rounded">14</span>
                        <span className="bg-[#241FD9] text-white rounded-full">15</span>
                        <span>16</span>
                        <span>17</span>
                        <span>18</span>
                        <span>19</span>
                        <span>20</span>
                        <span>21</span>
                        <span>22</span>
                        <span>23</span>
                        <span>24</span>
                        <span>25</span>
                        <span>26</span>
                        <span>27</span>
                        <span>28</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OVERLAPPING MOBILE PHONE MOCKUP (Bottom Right) */}
                <div className="hidden sm:block absolute -bottom-5 -right-3 w-[195px] bg-white rounded-[28px] border-[5px] border-[#111827] shadow-[0_22px_50px_rgba(15,23,42,0.28)] overflow-hidden transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                  {/* Notch */}
                  <div className="w-16 h-3 bg-[#111827] rounded-b-xl mx-auto"></div>

                  {/* Mobile Header Image */}
                  <div
                    className="relative h-24 bg-cover bg-center p-2.5 flex flex-col justify-between text-white -mt-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(15,23,42,0.45), rgba(15,23,42,0.7)), url('https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=500&q=80')",
                    }}
                  >
                    <div className="flex items-center justify-between text-[7px] font-bold">
                      <span>Alpine View</span>
                      <span>☰</span>
                    </div>
                    <p className="text-[8.5px] font-serif leading-tight">
                      Your perfect stay in the Swiss Alps
                    </p>
                  </div>

                  {/* Mobile Booking Form */}
                  <div className="p-2.5 space-y-1.5 bg-white text-gray-800">
                    <p className="text-[9.5px] font-bold text-gray-900">
                      Book Your Stay
                    </p>
                    <p className="text-[6.5px] text-gray-400">
                      Best Rates · Direct Booking Benefits
                    </p>

                    <div className="border border-gray-200 rounded-md px-2 py-1 flex items-center justify-between text-[7px]">
                      <span className="text-gray-400">Check-in</span>
                      <span className="font-bold">12 Mar 2027</span>
                    </div>

                    <div className="border border-gray-200 rounded-md px-2 py-1 flex items-center justify-between text-[7px]">
                      <span className="text-gray-400">Check-out</span>
                      <span className="font-bold">15 Mar 2027</span>
                    </div>

                    <div className="border border-gray-200 rounded-md px-2 py-1 flex items-center justify-between text-[7px]">
                      <span className="text-gray-400">Guests</span>
                      <span className="font-bold">2 Adults, 1 Child</span>
                    </div>

                    <div className="w-full bg-[#241FD9] text-white text-center text-[8px] font-semibold py-1.5 rounded-md">
                      Search Rooms →
                    </div>

                    {/* Mini Room Card inside Phone */}
                    <div className="pt-1 flex items-center gap-2 border-t border-gray-100">
                      <img
                        src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=200&q=80"
                        alt="Deluxe Double"
                        className="w-10 h-8 rounded object-cover"
                      />
                      <div>
                        <p className="text-[7.5px] font-bold text-gray-900">
                          Deluxe Double Room
                        </p>
                        <p className="text-[6.5px] text-gray-400">
                          CHF 145 / night
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SHIFTED MORE RIGHT & FULLER SCALE ================= */}
          <div className="lg:col-span-6 space-y-7 lg:pl-10 xl:pl-14 lg:-mr-4">
            {/* Eyebrow Tagline */}
            <div className="flex items-center gap-3.5">
              <span className="h-[2.5px] w-8 bg-[#78FF00] inline-block"></span>
              <span className="text-[13px] sm:text-[14px] font-bold tracking-[0.2em] uppercase text-[#241FD9]">
                WEBSITES THAT WORK FOR YOUR PROPERTY
              </span>
            </div>

            {/* Main Heading (Larger & Fuller Presence) */}
            <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] xl:text-[62px] leading-[1.1] font-normal tracking-tight">
              <span className="text-[#0F172A]">A better website. </span>
              <span className="text-[#241FD9]">An easier way to book.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[17px] sm:text-[19px] text-[#64748B] leading-[1.7] max-w-[600px] font-normal">
              We create your website, connect your booking journey, and keep
              everything updated. Guests get a simple experience. You get a
              digital partner who stays involved.
            </p>

            {/* Checklist Items */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                  <HiCheck className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-[16px] sm:text-[17px] font-semibold text-[#1E293B]">
                  Beautiful websites for mobile and desktop
                </span>
              </li>

              <li className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                  <HiCheck className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-[16px] sm:text-[17px] font-semibold text-[#1E293B]">
                  Booking engine integration and ongoing updates
                </span>
              </li>

              <li className="flex items-center gap-4">
                <span className="w-7 h-7 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center shrink-0">
                  <HiCheck className="w-4 h-4 stroke-[2.5]" />
                </span>
                <span className="text-[16px] sm:text-[17px] font-semibold text-[#1E293B]">
                  Help attracting guests beyond booking platforms
                </span>
              </li>
            </ul>

            {/* Green CTA Button (Extra Bold Text) */}
            <div className="pt-4">
              <Link
                href="#approach"
                className="inline-block bg-[#78FF00] hover:bg-[#6be600] text-[#0F172A] font-extrabold tracking-wide text-[16px] sm:text-[17px] px-9 py-4 rounded-xl shadow-[0_10px_25px_-5px_rgba(120,255,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(120,255,0,0.6)]"
              >
                Discover Our Approach
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}