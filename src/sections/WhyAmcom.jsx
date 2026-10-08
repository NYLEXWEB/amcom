import React from 'react';
import { whyAmcomPoints } from '../data/siteData';
import { Check } from 'lucide-react';

export default function WhyAmcom() {
  return (
    <section className="py-24 md:py-32 bg-[#F1F4F2] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              06 / STUDIO PRINCIPLES
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              WHY AMCOM
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#687477] font-normal leading-relaxed">
            Honest architectural integrity, verifiable longevity, and local mastery without artificial exaggeration.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyAmcomPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F8F9F7] border border-[#DCE3E2] hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-none bg-[#F1F4F2] border border-[#DCE3E2] flex items-center justify-center text-[#174C55] mb-6">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-light text-[#172022] tracking-[-0.02em] mb-1">
                  {point.title}
                </h3>
                <span className="text-xs font-mono tracking-wider text-[#6E9297] uppercase block mb-4">
                  {point.subtitle}
                </span>
                <p className="text-sm text-[#687477] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DCE3E2]/60">
                <span className="text-[10px] font-mono tracking-widest text-[#687477]/70 uppercase">
                  AMCOM GUARANTEE • 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
