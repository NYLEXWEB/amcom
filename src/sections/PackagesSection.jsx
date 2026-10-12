import React from 'react';
import { fullHomePackages } from '../data/packagesData';
import { brandInfo } from '../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  BadgePercent,
} from 'lucide-react';

export default function PackagesSection({ onNavigateToPackages }) {
  // Show top 3 packages on home page: 1 BHK, 2 BHK (Popular), 3 BHK
  const previewPackages = fullHomePackages.slice(0, 3);

  const handleWhatsAppInquiry = (pkgName, price) => {
    const msg = encodeURIComponent(
      `Hello AMCOM Interiors, I saw the ${pkgName} (${price}) on your website. I would like to get more details and a custom estimate.`
    );
    window.open(`https://wa.me/${brandInfo.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F2F4F1] border-b border-[#DCE3E2] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#174C55]/10 border border-[#174C55]/20 text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold mb-3">
              <BadgePercent className="w-3.5 h-3.5" />
              <span>TRANSPARENT VALUE • ZERO HIDDEN SURPRISES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-tight leading-tight">
              Curated Interior Packages &amp; Pricing
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#526366] font-light mt-3 leading-relaxed">
              Precision factory-crafted joinery made with 100% genuine BWP 710 Marine Plywood, German soft-close fittings, and guaranteed 40-day handover in Kerala.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onNavigateToPackages}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all group"
            >
              <span>Explore All Packages &amp; BOQ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {previewPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 relative border ${
                  isPopular
                    ? 'border-[#174C55] shadow-xl ring-2 ring-[#174C55]/20 -translate-y-1'
                    : 'border-[#DCE3E2] shadow-xs hover:shadow-md'
                }`}
              >
                {/* Popular Highlight Tag */}
                {isPopular && (
                  <div className="bg-[#174C55] text-white text-[10px] font-mono uppercase tracking-widest text-center py-1.5 font-bold">
                    ★ MOST POPULAR HOMEOWNER CHOICE
                  </div>
                )}

                <div>
                  {/* Top Details */}
                  <div className="p-6 sm:p-7 border-b border-[#EDF2F2] bg-gradient-to-b from-[#FAFBF9] to-white">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold mb-2 border ${pkg.badgeColor}`}
                    >
                      {pkg.homeType}
                    </span>
                    <h3 className="text-xl font-bold text-[#172022] mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#687477] font-light leading-relaxed mb-4">
                      {pkg.tagline}
                    </p>

                    <div className="pt-3 border-t border-[#EDF2F2] flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-[#687477] block uppercase font-mono">
                          Starting At
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-bold text-[#174C55] tracking-tight">
                            {pkg.startingPrice}
                          </span>
                          <span className="text-xs text-[#828E90] line-through font-mono">
                            {pkg.originalPrice}
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-[#687477]">
                        {pkg.deliveryTimeline}
                      </span>
                    </div>
                  </div>

                  {/* Summary Scope */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="text-[11px] font-mono text-[#6E9297] uppercase tracking-wider font-semibold">
                      KEY ROOM INCLUSIONS:
                    </div>

                    <div className="space-y-2.5">
                      {pkg.inclusions.slice(0, 3).map((roomItem, rIdx) => (
                        <div key={rIdx} className="text-xs text-[#465457]">
                          <strong className="text-[#172022] block font-semibold mb-1">
                            • {roomItem.room}:
                          </strong>
                          <span className="text-[#687477] pl-3 block text-[11px] leading-relaxed">
                            {roomItem.items[0]} &amp; {roomItem.items[1]}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#EDF2F2] flex items-center justify-between text-[11px] text-[#687477] font-mono">
                      <span>✓ 10-Yr Warranty</span>
                      <span>✓ Free 3D VR</span>
                      <span>✓ No Hidden Cost</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="p-6 sm:p-7 bg-[#FAFBF9] border-t border-[#EDF2F2] flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleWhatsAppInquiry(pkg.name, pkg.startingPrice)}
                    className="w-full py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Get Package Estimate</span>
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToPackages}
                    className="w-full py-2 bg-transparent hover:bg-zinc-100 text-[#172022] text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors text-center"
                  >
                    View All Details &amp; BOQ &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Strip: 4 BHK / Villa Custom Mention */}
        <div className="mt-10 p-6 bg-white rounded-xl border border-[#DCE3E2] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#174C55]/10 flex items-center justify-center text-[#174C55] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold text-[#172022]">
                Building a 4 BHK Villa or Duplex in Kerala?
              </h4>
              <p className="text-xs text-[#687477] font-light">
                Explore our signature villa turnkey package starting at ₹11.85 Lakhs with double-height wall paneling &amp; island show kitchens.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onNavigateToPackages}
            className="shrink-0 px-5 py-2.5 bg-white hover:bg-zinc-100 text-[#174C55] border border-[#174C55] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
          >
            See 4 BHK Villa Package
          </button>
        </div>

      </div>
    </section>
  );
}
