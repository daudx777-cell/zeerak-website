"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface SystemItem {
  id: string;
  index: string;
  title: string;
  description: string;
  scopeTags: string[];
  deliverable: string;
}

const SYSTEMS: SystemItem[] = [
  {
    id: "system-01",
    index: "01",
    title: "Fire Fighting Equipment",
    description:
      "Supply, installation, and refilling of all types of fire extinguishers, with practical on-site support to help organizations select suitable equipment for their premises.",
    scopeTags: [
      "All Extinguisher Types",
      "On-Site Installation",
      "Cylinder Refilling",
      "Premises Selection Advisory",
    ],
    deliverable: "Site Hazard Matching & Periodic Refill Schedule",
  },
  {
    id: "system-02",
    index: "02",
    title: "Fire Alarm Systems",
    description:
      "Supply, installation, testing, and maintenance activities for all types of fire alarm systems, supporting early warning and emergency readiness across industrial and commercial facilities.",
    scopeTags: [
      "Conventional & Addressable",
      "System Installation",
      "Signal & Detector Testing",
      "Preventive Maintenance",
    ],
    deliverable: "Early Warning & Electrical Diagram Compliance",
  },
  {
    id: "system-03",
    index: "03",
    title: "Personal Protective Equipment (PPEs)",
    description:
      "Supply of all types of workplace PPEs paired with certified third-party inspection services to support employee protection, operational safety, and regulatory audit requirements.",
    scopeTags: [
      "Full Industrial PPE Supply",
      "3rd-Party Quality Inspections",
      "Workplace Safety Compliance",
      "ISO 45001 & HSE Support",
    ],
    deliverable: "Verified PPE Inspection & Audit Documentation",
  },
  {
    id: "system-04",
    index: "04",
    title: "Fire Hydrant Systems",
    description:
      "Complete supply, installation, and maintenance activities for industrial fire hydrant systems, helping high-occupancy and manufacturing sites maintain full water-supply readiness for fire emergencies.",
    scopeTags: [
      "Hydrant Supply & Piping",
      "Hydraulic Calculation",
      "Hydrant Drawing",
      "Pressure & Valve Maintenance",
    ],
    deliverable: "High-Pressure Emergency Water Readiness",
  },
];

export default function CoreSystems() {
  const [revealedRows, setRevealedRows] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Viewport Entry Observer (reveals row with blueprint line draw & mechanical rise)
  useEffect(() => {
    const entryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute("data-index");
            if (indexStr !== null) {
              const idx = parseInt(indexStr, 10);
              setRevealedRows((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    // 2. Active Scroll Reading Zone Observer (syncs activeIndex on scroll)
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexStr = entry.target.getAttribute("data-index");
            if (indexStr !== null) {
              setActiveIndex(parseInt(indexStr, 10));
            }
          }
        });
      },
      { rootMargin: "-25% 0px -45% 0px" }
    );

    rowRefs.current.forEach((el) => {
      if (el) {
        entryObserver.observe(el);
        activeObserver.observe(el);
      }
    });

    return () => {
      entryObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  const scrollToSystem = (index: number) => {
    const target = rowRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="services" className="w-full bg-[#FFFFFF] border-b border-[#DDE2EA]">
      {/* 12-Column Swiss Grid Container */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: lg:col-span-5 (Sticky Architectural Anchor on Desktop) */}
        <div className="lg:col-span-5 bg-[#F3F5F8] border-b lg:border-b-0 lg:border-r border-[#DDE2EA] p-6 sm:p-10 lg:p-14">
          <div className="lg:sticky lg:top-28 flex flex-col justify-between lg:min-h-[calc(100vh-160px)]">
            {/* Top Block */}
            <div>
              {/* Technical Index Header */}
              <div className="pb-4 mb-6 border-b border-[#DDE2EA] flex items-center justify-between font-['Figtree'] text-[14px] font-medium text-[#56627A]">
                <span>Core Fire Protection Systems</span>
                <span className="font-mono">01 — 04</span>
              </div>

              {/* Section Heading (H2) */}
              <h2
                className="font-['Archivo'] font-bold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-0.015em] text-[#14213A]"
                style={{ fontVariationSettings: "'wdth' 105, 'wght' 700" }}
              >
                Engineered for everyday readiness.
              </h2>

              {/* Lead Paragraph */}
              <p className="mt-5 font-['Figtree'] text-[18px] lg:text-[20px] text-[#56627A] leading-[1.5]">
                We supply, install, test, and maintain complete workplace fire
                protection systems across Pakistan — built to protect lives,
                property, and HSE audit compliance.
              </p>
            </div>

            {/* Middle Scroll-Synced Active System Readout (Desktop Only) */}
            <div className="hidden lg:block my-10 pt-6 border-t border-[#DDE2EA]">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#56627A] mb-3">
                <span>System Matrix Index</span>
                <span>Active: 0{activeIndex + 1}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {SYSTEMS.map((system, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={system.id}
                      type="button"
                      onClick={() => scrollToSystem(idx)}
                      className="text-left group cursor-pointer focus:outline-none"
                      aria-label={`Jump to system ${system.index}: ${system.title}`}
                    >
                      <span
                        className={`block font-['Archivo'] text-[14px] font-bold transition-colors duration-200 ${
                          isActive
                            ? "text-[#D4141C]"
                            : "text-[#56627A] group-hover:text-[#14213A]"
                        }`}
                      >
                        {system.index}
                      </span>
                      {/* 2px bottom line that fills with Signal Red when active */}
                      <span
                        className={`block h-[2px] mt-1.5 transition-colors duration-200 ${
                          isActive
                            ? "bg-[#D4141C]"
                            : "bg-[#DDE2EA] group-hover:bg-[#56627A]"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Philosophy & CTA Block */}
            <div className="pt-6 border-t border-[#DDE2EA]">
              <blockquote className="font-['Figtree'] text-[15px] text-[#14213A] font-medium leading-[1.5] mb-6">
                &ldquo;Safety is not just equipment — it is preparation,
                service, and the confidence to respond.&rdquo;
              </blockquote>

              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#14213A] text-white hover:bg-[#D4141C] transition-colors duration-150 px-7 h-13 py-3.5 font-['Figtree'] text-[16px] font-semibold rounded-none border-0 group"
              >
                <span>Request a site survey</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-150">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: lg:col-span-7 (The 01–04 Scroll-Triggered System Ledger) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] divide-y divide-[#DDE2EA]">
          {SYSTEMS.map((system, idx) => {
            const isRevealed = revealedRows[idx];
            const isActive = activeIndex === idx;

            return (
              <div
                key={system.id}
                id={system.id}
                data-index={idx}
                ref={(el) => {
                  rowRefs.current[idx] = el;
                }}
                className={`relative group p-6 sm:p-10 lg:p-12 transition-colors duration-300 ${
                  isActive
                    ? "bg-[#FFFFFF]"
                    : "bg-[#FFFFFF] hover:bg-[#F3F5F8]/50"
                }`}
              >
                {/* Top Animated Blueprint Hairline */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[1px] bg-[#DDE2EA] origin-left transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isRevealed ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />

                {/* Left Active Scroll Indicator Bar (4px Signal Red) */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#D4141C] origin-top transition-transform duration-300 ${
                    isActive ? "scale-y-100" : "scale-y-0"
                  }`}
                  aria-hidden="true"
                />

                {/* Mechanical Content Rise Wrapper */}
                <div
                  className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {/* Row Header Grid */}
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    {/* Left: Index + System Title */}
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-['Archivo'] text-[28px] sm:text-[36px] font-extrabold transition-colors duration-200 select-none ${
                          isActive
                            ? "text-[#D4141C]"
                            : "text-[#56627A] group-hover:text-[#D4141C]"
                        }`}
                        style={{
                          fontVariationSettings: "'wdth' 112, 'wght' 800",
                        }}
                      >
                        {system.index}
                      </span>
                      <h3
                        className="font-['Archivo'] font-bold text-[24px] sm:text-[32px] leading-[1.15] text-[#14213A]"
                        style={{
                          fontVariationSettings: "'wdth' 100, 'wght' 700",
                        }}
                      >
                        {system.title}
                      </h3>
                    </div>

                    {/* Right: Signature Extending Arrow */}
                    <div
                      className={`flex items-center transition-colors duration-200 ${
                        isActive
                          ? "text-[#D4141C]"
                          : "text-[#56627A] group-hover:text-[#D4141C]"
                      }`}
                      aria-hidden="true"
                    >
                      <span
                        className={`block h-[2px] bg-current transition-all duration-300 ${
                          isActive ? "w-12" : "w-5 group-hover:w-12"
                        }`}
                      />
                      <svg
                        className="w-3.5 h-3.5 -ml-1 text-current stroke-current"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 1.5L7.5 6L3 10.5"
                          strokeWidth="2"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Row Body: Indented on tablet/desktop */}
                  <div className="pl-0 sm:pl-[52px] lg:pl-[60px]">
                    {/* Main Description */}
                    <p className="font-['Figtree'] text-[16px] lg:text-[17px] text-[#14213A] leading-[1.65] max-w-[620px]">
                      {system.description}
                    </p>

                    {/* Execution Scope Grid (4 Technical Cells) */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-[#DDE2EA]">
                      {system.scopeTags.map((tag) => (
                        <div
                          key={tag}
                          className="border-r border-b border-[#DDE2EA] px-3 py-2.5 bg-[#F3F5F8] group-hover:bg-[#FFFFFF] font-['Figtree'] text-[13px] font-medium text-[#56627A] transition-colors"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Technical Readiness Bar */}
                    <div className="mt-5 pt-4 border-t border-[#DDE2EA] flex flex-wrap items-center justify-between gap-2 text-[14px] font-['Figtree']">
                      <div className="text-[#56627A] font-medium">
                        Operational Standard:{" "}
                        <span className="text-[#14213A] font-semibold">
                          {system.deliverable}
                        </span>
                      </div>
                      <Link
                        href="#contact"
                        className="text-[#D4141C] hover:text-[#A80E15] font-semibold inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Inquire for site survey</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
