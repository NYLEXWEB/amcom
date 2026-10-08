import React from 'react';
import { services } from '../data/siteData';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              02 / CAPABILITIES & EXPERTISE
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              WHAT WE DO
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#687477] font-normal leading-relaxed">
            Delivering holistic interior solutions from initial spatial planning to final architectural execution across Kerala.
          </p>
        </div>

        {/* Architectural Editorial Grid (avoiding generic rounded cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DCE3E2]">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative p-8 sm:p-10 border-r border-b border-[#DCE3E2] bg-[#F8F9F7] hover:bg-[#F1F4F2] transition-colors duration-300 flex flex-col justify-between min-h-[320px]"
            >
              {/* Top Row: Index number & Subtle arrow indicator */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm tracking-wider text-[#6E9297] font-medium group-hover:text-[#174C55] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-[#DCE3E2] flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-[#174C55] group-hover:bg-[#174C55] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-light text-[#172022] tracking-[-0.02em] mb-4 group-hover:text-[#174C55] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#687477] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Architectural details row */}
              <div className="pt-4 border-t border-[#DCE3E2]/60 mt-auto">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#687477]/80 block">
                  {service.details}
                </span>
              </div>

              {/* Accent corner indicator */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#174C55] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
