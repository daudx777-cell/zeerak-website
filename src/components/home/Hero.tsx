import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFFFF] border-b border-[#DDE2EA] flex flex-col justify-between min-h-[calc(100vh-80px)]">
      {/* Main 12-Column Swiss Grid Container */}
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 flex-grow">
        {/* Left Column: lg:col-span-7 (Pure White Dominant Surface) */}
        <div className="lg:col-span-7 px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#DDE2EA]">
          {/* Headline (H1): Starts IMMEDIATELY without any top eyebrow badge */}
          <h1 className="font-hero text-[44px] sm:text-[64px] lg:text-[88px] text-[#14213A]">
            Safety,
            <br />
            made dependable.
          </h1>

          {/* Lead Paragraph */}
          <p className="font-lead text-[18px] lg:text-[20px] text-[#56627A] mt-6 max-w-[580px]">
            Fire fighting equipment, fire alarm systems, PPE third-party inspections, and hydrant installations engineered to protect people, property, and audit compliance across Pakistan.
          </p>

          {/* Dual CTA Action Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA Button */}
            <Link
              href="#contact"
              className="group h-14 px-8 bg-[#D4141C] hover:bg-[#A80E15] text-white font-['Figtree'] font-semibold text-[16px] flex items-center justify-center gap-2.5 transition-colors duration-150 border-0"
            >
              <span>Request a site survey</span>
              <svg
                className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-150"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* WhatsApp Direct Engineering Consultation Button */}
            <a
              href="https://wa.me/923703241640?text=Hello%20Zeerak%20Services%2C%20we%20would%20like%20to%20inquire%20about%20fire%20safety%20systems%20and%20a%20site%20survey."
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-7 bg-[#FFFFFF] border border-[#14213A] text-[#14213A] hover:bg-[#14213A] hover:text-white font-['Figtree'] font-semibold text-[16px] flex items-center justify-center gap-2.5 transition-colors duration-150"
            >
              <svg
                className="w-[18px] h-[18px] fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.07 16.29C4.24 14.97 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.7C14.15 13.94 13.68 14.5 13.53 14.66C13.39 14.83 13.25 14.85 13 14.73C12.75 14.6 11.95 14.34 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.47 11.54 9.6 11.4 9.73 11.28C9.84 11.17 9.98 10.99 10.1 10.84C10.23 10.7 10.27 10.6 10.35 10.43C10.43 10.27 10.39 10.13 10.33 10.01C10.27 9.88 9.79 8.71 9.59 8.23C9.4 7.76 9.2 7.82 9.06 7.82H8.6C8.44 7.82 8.18 7.88 7.95 8.13C7.73 8.37 7.1 8.96 7.1 10.16C7.1 11.36 7.97 12.52 8.1 12.69C8.22 12.85 9.83 15.33 12.3 16.39C12.89 16.64 13.35 16.79 13.7 16.91C14.3 17.09 14.84 17.07 15.28 17C15.77 16.93 16.78 16.39 16.99 15.8C17.2 15.2 17.2 14.69 17.14 14.58C17.07 14.48 16.81 14.42 16.56 14.39Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: lg:col-span-5 (Awwwards Architectural Showcase — Hidden on Mobile/Tablet) */}
        <div className="hidden lg:flex lg:col-span-5 relative flex-col justify-between border-l border-[#DDE2EA] bg-[#F3F5F8] overflow-hidden">
          {/* Subtle Architectural Grid Backdrop (Two-Tone Depth Plane Split at 35%) */}
          <div
            className="absolute inset-y-0 left-0 w-[35%] bg-[#FFFFFF] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-y-0 left-[35%] border-l border-[#DDE2EA] pointer-events-none"
            aria-hidden="true"
          />

          {/* Center-Stage Tall Architectural Hardware Viewport */}
          <div className="relative z-10 flex-grow flex items-center justify-center px-10 xl:px-14 pt-10 pb-6">
            <div className="w-full max-w-[420px] h-[460px] xl:h-[500px] relative overflow-hidden bg-[#14213A] arch-frame rounded-t-[220px] rounded-b-none border border-[#DDE2EA]">
              <Image
                src="/images/hero-alarm-bell-arch.jpg"
                alt="Close-up architectural photograph of industrial fire alarm bell with conduit pipe and control panel"
                fill
                priority
                sizes="420px"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>

          {/* Minimalist Bottom Architectural Baseline */}
          <div className="relative z-10 w-full px-10 xl:px-14 py-5 border-t border-[#DDE2EA] bg-[#FFFFFF]/90 flex items-center justify-between">
            <span className="font-['Figtree'] font-medium text-[13px] text-[#56627A]">
              01 Fire Fighting &nbsp;•&nbsp; 02 Fire Alarm &nbsp;•&nbsp; 03 PPE &nbsp;•&nbsp; 04 Hydrant
            </span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4141C] shrink-0" aria-hidden="true" />
              <span className="font-['Figtree'] font-semibold text-[13px] text-[#14213A]">
                ISO 45001 Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Operational Proof Bar */}
      <div className="w-full bg-[#14213A] text-white border-t border-[#DDE2EA]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 items-center font-['Figtree'] text-[14px] font-medium">
          {/* Left Cell */}
          <div className="text-white">
            Est. 2010 — Karachi, Pakistan
          </div>

          {/* Center Cell */}
          <div className="md:text-center text-[#DDE2EA]">
            Reliable products. Professional installation. Responsible maintenance.
          </div>

          {/* Right Cell */}
          <div className="md:text-right text-white flex items-center justify-start md:justify-end gap-1">
            <span>Pakistan-wide support ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
