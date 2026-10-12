import React from 'react';
import { Award, Clock, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const credentials = [
  {
    index: "01",
    tag: "HERITAGE",
    title: "25+ Years",
    subtitle: "Kerala Heritage",
    description: "Established 1999",
    icon: Award,
  },
  {
    index: "02",
    tag: "MATERIALS",
    title: "Honest Woods",
    subtitle: "Natural Materials",
    description: "Stone & Travertine",
    icon: Sparkles,
  },
  {
    index: "03",
    tag: "PORTFOLIO",
    title: "100+ Spaces",
    subtitle: "Crafted Homes",
    description: "Across Calicut & Kannur",
    icon: Compass,
  },
  {
    index: "04",
    tag: "DELIVERY",
    title: "On-Time Handover",
    subtitle: "Turnkey Execution",
    description: "Disciplined Milestones",
    icon: Clock,
  },
  {
    index: "05",
    tag: "WARRANTY",
    title: "10-Year Warranty",
    subtitle: "Quality Assurance",
    description: "Hardware & Joinery",
    icon: ShieldCheck,
  },
  {
    index: "06",
    tag: "ASSISTANCE",
    title: "Lifelong Care",
    subtitle: "Post-Handover Care",
    description: "Dedicated Studio Support",
    icon: CheckCircle2,
  },
];

export default function BrandCredentials() {
  return (
    <section className="py-16 md:py-22 bg-[#F8F9F7] border-b border-[#DCE3E2] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2 font-semibold">
            ARCHITECTURAL CREDENTIALS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#172022] tracking-[-0.03em]">
            PROFESSIONAL INTERIOR DESIGN &amp; CONSULTANCY
          </h2>
          <div className="w-12 h-[2px] bg-[#174C55] mx-auto mt-4" />
        </div>

        {/* 6 Architectural Cards Grid with Elegant Line Hover Effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {credentials.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.index}
                className="group relative bg-white rounded-xl p-5 sm:p-6 border border-[#DCE3E2] hover:border-[#174C55] transition-all duration-400 ease-out flex flex-col items-center text-center cursor-default overflow-hidden"
              >
                {/* 1. TOP HAIRLINE ACCENT (Gently glows on hover) */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-transparent group-hover:bg-[#174C55]/20 transition-colors duration-400" />

                {/* Micro Index Number */}
                <span className="text-[10px] font-mono text-[#687477]/60 group-hover:text-[#174C55] transition-colors mb-3">
                  {item.index}
                </span>

                {/* 2. ICON HOUSING (Smooth floating transition on hover) */}
                <div className="w-12 h-12 rounded-xl bg-[#F8F9F7] group-hover:bg-[#174C55] text-[#174C55] group-hover:text-white border border-[#DCE3E2] group-hover:border-[#174C55] flex items-center justify-center transition-all duration-400 ease-out group-hover:-translate-y-1">
                  <IconComponent className="w-5 h-5 transition-transform duration-400 group-hover:scale-110" />
                </div>

                {/* 3. DYNAMIC EXPANDING ARCHITECTURAL DIVIDER LINE */}
                <div className="w-4 h-[1.5px] bg-[#DCE3E2] group-hover:w-10 group-hover:bg-[#174C55] transition-all duration-400 ease-out my-3.5" />

                {/* Primary Metric / Headline */}
                <h3 className="text-xs sm:text-[13px] font-bold text-[#172022] group-hover:text-[#174C55] transition-colors leading-tight font-sans mb-1">
                  {item.title}
                </h3>

                {/* Subtitle / Details */}
                <p className="text-[11px] text-[#687477] font-medium leading-snug">
                  {item.subtitle}
                </p>

                {/* Micro Tagline */}
                <span className="text-[9px] font-mono text-[#6E9297] uppercase tracking-wider mt-1.5 leading-tight">
                  {item.description}
                </span>

                {/* 4. SIGNATURE EXPANDING BOTTOM ACCENT LINE */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2.5px] bg-[#174C55] group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
