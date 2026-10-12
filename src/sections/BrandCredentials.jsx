import React from 'react';
import { Award, Clock, ShieldCheck, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

const credentials = [
  {
    number: "SINCE",
    highlight: "1999",
    title: "25+ Years",
    subtitle: "Kerala Heritage",
    icon: Award,
  },
  {
    number: "PREMIUM",
    highlight: "Materials",
    title: "Honest Woods",
    subtitle: "Stone & Travertine",
    icon: Sparkles,
  },
  {
    number: "100+",
    highlight: "Spaces",
    title: "Crafted Homes",
    subtitle: "Across Calicut & Kannur",
    icon: Compass,
  },
  {
    number: "ON-TIME",
    highlight: "Handover",
    title: "Disciplined",
    subtitle: "Turnkey Execution",
    icon: Clock,
  },
  {
    number: "QUALITY",
    highlight: "Assurance",
    title: "10-Year",
    subtitle: "Hardware & Joinery",
    icon: ShieldCheck,
  },
  {
    number: "LIFELONG",
    highlight: "Support",
    title: "Post-Handover",
    subtitle: "Client Care",
    icon: CheckCircle2,
  },
];

export default function BrandCredentials() {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2 font-semibold">
            ARCHITECTURAL CREDENTIALS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#172022] tracking-[-0.02em]">
            PROFESSIONAL INTERIOR DESIGN &amp; CONSTRUCTION
          </h2>
          <div className="w-10 h-[2px] bg-[#174C55] mx-auto mt-4" />
        </div>

        {/* 6 Circular / Architectural Trust Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-6 lg:gap-8 items-center justify-center">
          {credentials.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center cursor-default"
              >
                {/* Circular Badge Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white border border-[#DCE3E2] shadow-sm flex flex-col items-center justify-center p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-[#174C55] group-hover:shadow-md">
                  
                  {/* Subtle top icon accent */}
                  <div className="w-6 h-6 rounded-full bg-[#F1F4F2] group-hover:bg-[#174C55] group-hover:text-white text-[#174C55] flex items-center justify-center mb-1.5 transition-colors duration-300">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>

                  {/* Primary Highlight Text */}
                  <span className="text-xs sm:text-[13px] font-bold tracking-tight text-[#172022] group-hover:text-[#174C55] transition-colors leading-tight font-sans">
                    {item.number}
                  </span>
                  
                  <span className="text-[11px] sm:text-xs font-semibold text-[#174C55] tracking-tight leading-tight mb-0.5">
                    {item.highlight}
                  </span>

                  {/* Secondary descriptor */}
                  <span className="text-[9px] font-mono text-[#687477] uppercase tracking-wider leading-snug">
                    {item.subtitle}
                  </span>

                  {/* Subtle rotating glow border on hover */}
                  <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-[#174C55]/30 transition-all pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
