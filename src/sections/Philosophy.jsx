import React, { useState } from 'react';
import { philosophyPillars } from '../data/siteData';

export default function Philosophy() {
  const [activeKeyword, setActiveKeyword] = useState(0);

  return (
    <section className="py-24 md:py-36 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#DCE3E2]">
          <span className="text-xs font-mono tracking-[0.25em] text-[#6E9297] uppercase">
            07 / DESIGN PHILOSOPHY
          </span>
          <span className="text-xs font-mono tracking-widest text-[#687477]">
            EDITORIAL ARCHIVE
          </span>
        </div>

        {/* Large Typography Architectural Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Interactive Keyword Stacks */}
          <div className="lg:col-span-7 flex flex-col space-y-2 sm:space-y-4">
            {philosophyPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                onMouseEnter={() => setActiveKeyword(idx)}
                onClick={() => setActiveKeyword(idx)}
                className="group cursor-pointer py-3 border-b border-[#DCE3E2] transition-all duration-300 flex items-baseline justify-between"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="font-mono text-xs sm:text-sm text-[#6E9297]">
                    0{idx + 1}
                  </span>
                  <h3
                    className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.04em] transition-all duration-300 ${
                      activeKeyword === idx
                        ? 'text-[#174C55] translate-x-3 font-normal'
                        : 'text-[#172022]/70 group-hover:text-[#172022] group-hover:translate-x-1'
                    }`}
                  >
                    {pillar.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#687477] tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline">
                  {pillar.subtitle}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Editorial Focus Card (Magazine style) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 bg-[#F1F4F2] border border-[#DCE3E2] min-h-[380px] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-2">
                  PILLAR 0{activeKeyword + 1} • {philosophyPillars[activeKeyword].title}
                </span>
                <h4 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-[-0.02em] mb-6">
                  {philosophyPillars[activeKeyword].subtitle}
                </h4>
                <p className="text-base text-[#687477] leading-relaxed">
                  {philosophyPillars[activeKeyword].description}
                </p>
              </div>

              <div className="pt-8 border-t border-[#DCE3E2] mt-8 flex items-center justify-between text-xs text-[#687477] font-mono">
                <span>AMCOM DISCIPLINE</span>
                <span className="text-[#174C55] font-semibold">1999 — PRESENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
