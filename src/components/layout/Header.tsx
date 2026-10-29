"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Compliance & audits", href: "#compliance" },
  { label: "Industries & clients", href: "#clients" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-[#FFFFFF] border-b border-[#DDE2EA]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">
        {/* Left Cell: Brand Logo & Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4141C]"
          aria-label="ZEERAK SERVICES — Home"
        >
          {/* Sharp square Signal Red icon block */}
          <div className="w-10 h-10 bg-[#D4141C] flex items-center justify-center shrink-0">
            {/* Crisp white geometric shield-and-flame SVG */}
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2ZM12 18.5C9.5 17.2 8 14.5 8 12C8 9.8 9.5 8 12 6C14.5 8 16 9.8 16 12C16 14.5 14.5 17.2 12 18.5ZM12 15C13.1 15 14 14.1 14 13C14 11.5 12 9.5 12 9.5C12 9.5 10 11.5 10 13C10 14.1 10.9 15 12 15Z" />
            </svg>
          </div>

          {/* Brand Wordmark in Archivo */}
          <div className="flex items-baseline text-[18px] tracking-[0.04em] font-['Archivo'] font-extrabold select-none">
            <span
              className="text-[#D4141C]"
              style={{ fontVariationSettings: "'wdth' 105, 'wght' 800" }}
            >
              ZEERAK
            </span>
            <span
              className="text-[#14213A] ml-1.5"
              style={{ fontVariationSettings: "'wdth' 105, 'wght' 800" }}
            >
              SERVICES
            </span>
          </div>
        </Link>

        {/* Center Cell: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-9 h-full"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative h-full flex items-center font-['Figtree'] font-semibold text-[16px] text-[#14213A] hover:text-[#D4141C] transition-colors duration-150 group"
            >
              <span>{item.label}</span>
              {/* 2px bottom bar indicator on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4141C] scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
            </Link>
          ))}
        </nav>

        {/* Right Cell: Desktop Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="#contact"
            className="h-12 px-6 bg-[#14213A] text-white font-['Figtree'] font-semibold text-[16px] flex items-center justify-center hover:bg-[#D4141C] transition-colors duration-150 border-0"
          >
            Request a site survey
          </Link>
        </div>

        {/* Mobile Mechanical Menu Toggle (< 1024px) */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="w-12 h-12 flex flex-col items-center justify-center gap-1.5 border border-[#DDE2EA] bg-white text-[#14213A] hover:bg-[#F3F5F8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4141C]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {/* Custom 2-line architectural hamburger that transforms into an X */}
            <span
              className={`block w-5 h-[2px] bg-[#14213A] transition-all duration-200 ${
                mobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#14213A] transition-all duration-200 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Flat Dropdown Panel (< 1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b border-[#DDE2EA] shadow-none">
          <nav aria-label="Mobile Navigation" className="flex flex-col">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="py-4 px-6 text-[#14213A] hover:text-[#D4141C] hover:bg-[#F3F5F8] font-['Figtree'] font-semibold text-[16px] border-b border-[#DDE2EA] transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Actions Container */}
            <div className="p-6 flex flex-col gap-3 bg-[#F3F5F8]">
              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full h-12 bg-[#14213A] text-white font-['Figtree'] font-semibold text-[16px] flex items-center justify-center hover:bg-[#D4141C] transition-colors"
              >
                Request a site survey
              </Link>

              <a
                href="https://wa.me/923703241640?text=Hello%20Zeerak%20Services%2C%20we%20would%20like%20to%20inquire%20about%20fire%20safety%20systems%20and%20a%20site%20survey."
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full h-12 bg-white border border-[#14213A] text-[#14213A] font-['Figtree'] font-semibold text-[16px] flex items-center justify-center gap-2 hover:bg-[#14213A] hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.07 16.29C4.24 14.97 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.27 15.09 13.67 14.86 13.58C14.64 13.5 14.47 13.46 14.31 13.7C14.15 13.94 13.68 14.5 13.53 14.66C13.39 14.83 13.25 14.85 13 14.73C12.75 14.6 11.95 14.34 11 13.5C10.26 12.84 9.76 12.03 9.62 11.78C9.47 11.54 9.6 11.4 9.73 11.28C9.84 11.17 9.98 10.99 10.1 10.84C10.23 10.7 10.27 10.6 10.35 10.43C10.43 10.27 10.39 10.13 10.33 10.01C10.27 9.88 9.79 8.71 9.59 8.23C9.4 7.76 9.2 7.82 9.06 7.82H8.6C8.44 7.82 8.18 7.88 7.95 8.13C7.73 8.37 7.1 8.96 7.1 10.16C7.1 11.36 7.97 12.52 8.1 12.69C8.22 12.85 9.83 15.33 12.3 16.39C12.89 16.64 13.35 16.79 13.7 16.91C14.3 17.09 14.84 17.07 15.28 17C15.77 16.93 16.78 16.39 16.99 15.8C17.2 15.2 17.2 14.69 17.14 14.58C17.07 14.48 16.81 14.42 16.56 14.39Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
