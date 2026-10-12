import React from 'react';
import { fullHomePackages } from '../data/packagesData';
import { brandInfo } from '../data/siteData';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function PackagesSection({ onNavigateToPackages }) {
  // Show top 3 packages on home page: 1 BHK, 2 BHK (Popular), 3 BHK
  const previewPackages = fullHomePackages.slice(0, 3);

  return (
    <section id="packages" className="py-16 md:py-22 bg-[#F8F9F7] border-b border-[#DCE3E2] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Clean Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 sm:mb-12 border-b border-[#DCE3E2] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-2">
              TRANSPARENT ESTIMATES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              INTERIOR PACKAGES &amp; PRICING
            </h2>
          </div>
        </div>

        {/* 3 Package Cards Grid with Top Images & Minimal Clean Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {previewPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DCE3E2] hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between"
              >
                {/* 1. TOP IMAGE ON EACH CARD */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F1F4F2]">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[10px] font-mono uppercase tracking-wider text-[#172022] font-semibold border border-[#DCE3E2]">
                      {pkg.homeType}
                    </span>
                  </div>

                  {isPopular && (
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full bg-[#174C55] text-white text-[10px] font-mono uppercase tracking-widest font-semibold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. MINIMAL CLEAN CONTENT */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-medium text-[#172022] tracking-tight mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#687477] font-normal leading-relaxed mb-4">
                      {pkg.roomSummary}
                    </p>

                    {/* Pricing Strip */}
                    <div className="pt-3 pb-3 border-t border-[#EDF2F2] flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-[#687477] uppercase block mb-0.5">
                          Starting Price
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#174C55] tracking-tight">
                            {pkg.startingPrice}
                          </span>
                          <span className="text-xs text-[#828E90] line-through font-mono">
                            {pkg.originalPrice}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#687477] bg-[#F8F9F7] px-2.5 py-1 rounded-full border border-[#DCE3E2]">
                        {pkg.deliveryTimeline}
                      </span>
                    </div>

                    {/* Key Compact Inclusions */}
                    <div className="space-y-1.5 py-3 border-t border-[#EDF2F2]">
                      <div className="flex items-center gap-2 text-xs text-[#465457]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55] shrink-0" />
                        <span>100% Genuine BWP 710 Marine Plywood</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#465457]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55] shrink-0" />
                        <span>Hettich Soft-Close Hardware</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#465457]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55] shrink-0" />
                        <span>10-Year Replacement Warranty</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. CLEAN SINGLE ACTION BUTTON */}
                  <div className="pt-4 border-t border-[#EDF2F2]">
                    <button
                      type="button"
                      onClick={onNavigateToPackages}
                      className="w-full py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>View Package Details &amp; BOQ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
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
