import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden">
      {/* Background Architectural Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-6 border-x border-black">
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Top Minimal Editorial Tag */}
       

        {/* Main Split Grid: Minimal Copy + Layered Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Minimal, Punchy Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono tracking-widest uppercase text-[#174C55] font-semibold mb-3">
              TIMELESS ARCHITECTURAL INTERIORS
            </span>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.03em] leading-[1.12] mb-6">
              ABOUT <span></span>
              <span className="font-normal text-[#174C55]">US</span> 
            </h2>

            {/* Concise, Refined Description (No Long Dense Paragraphs) */}
            <p className="text-base sm:text-lg text-[#687477] font-normal leading-relaxed mb-8">
              Founded in 1999 in Kozhikode, AMCOM Interiors unites architectural sensibility with hands-on construction mastery. We build spaces defined by quiet proportions, honest textures, and enduring Kerala living rituals.
            </p>

            {/* Clean Action Link */}
            <div>
            <a
              href="#projects"
              className="inline-flex items-center gap-4 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 bg-black hover:bg-[#172022] text-white rounded-full transition-all duration-300 group shadow-xl border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Explore Signature Spaces
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#172022] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                <ArrowRight className="w-4 h-4 text-[#172022]" />
              </div>
            </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Architectural Visual Gallery */}
          <div className="lg:col-span-7 relative">
            {/* Primary Large Image Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#F1F4F2] border border-[#DCE3E2] shadow-md group">
              <img
                src="/images/amcom-kitchen.jpg"
                alt="Contemporary AMCOM modular kitchen with natural teak and courtyard view"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />


              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Secondary Floating Frosted Card (Overlapping for Premium Editorial Depth) */}
            <div className="sm:absolute -bottom-8 -left-6 sm:max-w-xs w-full mt-6 sm:mt-0 p-5 bg-white/95 backdrop-blur-md border border-[#DCE3E2] shadow-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-none bg-[#174C55] text-white flex items-center justify-center text-xs font-mono font-bold">
                  25+
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#172022] tracking-wide uppercase">
                    Years of Heritage
                  </h4>
                  <span className="text-[10px] font-mono text-[#6E9297]">
                    ESTABLISHED 1999
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#687477] leading-relaxed">
                Every detail is engineered with local Kerala materials, structural precision, and architectural discipline.
              </p>
            </div>

            {/* Secondary Overlapping Small Photo (Desktop Only) */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-36 h-44 overflow-hidden border-2 border-white shadow-lg bg-[#F8F9F7] group">
              <img
                src="/images/amcom-bedroom.jpg"
                alt="AMCOM interior bedroom detailing"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
