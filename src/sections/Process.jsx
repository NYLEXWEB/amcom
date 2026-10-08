import React from 'react';
import { processSteps } from '../data/siteData';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              05 / METHODOLOGY
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              THE PROCESS
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#687477] font-normal leading-relaxed">
            A disciplined, four-phase delivery framework honed across 25+ years of architectural execution in Kerala.
          </p>
        </div>

        {/* Clean Horizontal Timeline on Desktop / Stacked Vertically on Mobile */}
        <div className="relative">
          {/* Continuous horizontal timeline line (desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-[#DCE3E2] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="group flex flex-col pt-0 lg:pt-0"
              >
                {/* Node indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-none bg-[#F1F4F2] border border-[#DCE3E2] group-hover:border-[#174C55] group-hover:bg-[#174C55] transition-all duration-300 flex items-center justify-center">
                    <span className="font-mono text-sm tracking-wider text-[#172022] group-hover:text-[#F8F9F7] font-semibold transition-colors">
                      {step.number}
                    </span>
                  </div>
                  {/* Subtle mobile connection line */}
                  <div className="lg:hidden flex-1 h-[1px] bg-[#DCE3E2]" />
                </div>

                {/* Step Details */}
                <div className="border-t border-transparent pt-2">
                  <h3 className="text-2xl font-light text-[#172022] tracking-[-0.02em] mb-3 group-hover:text-[#174C55] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#687477] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
