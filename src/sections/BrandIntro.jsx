import React from 'react';
import { stats } from '../data/siteData';

export default function BrandIntro() {
  return (
    <section id="intro" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Large Editorial Headline */}
          <div className="lg:col-span-7">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-4">
              ARCHITECTURAL CLARITY • PURITY OF FORM
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#172022] tracking-[-0.035em] leading-[1.06]">
              INTERIORS <br />
              THAT FEEL <br />
              <span className="font-normal text-[#174C55]">LIKE HOME.</span>
            </h2>
          </div>

          {/* Right Editorial Statement & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-8">
            <p className="text-lg md:text-xl text-[#687477] font-normal leading-relaxed tracking-[-0.01em] mb-12">
              Since 1999, AMCOM Interiors has been creating thoughtful interior spaces with a focus on quality, functionality and timeless design.
            </p>

            {/* Verified Stat Row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#DCE3E2]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#174C55] tracking-[-0.03em] font-sans">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#687477] font-medium mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
