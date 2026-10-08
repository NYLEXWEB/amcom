import React, { useState } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      label: "Spatial Clarity",
      desc: "Balancing volume, natural daylight, and unhurried movement.",
      tag: "ARCHITECTURE",
    },
    {
      label: "Material Honesty",
      desc: "Authentic teak timber, honed travertine stone, and lime-wash plaster.",
      tag: "MATERIALITY",
    },
    {
      label: "Turnkey Execution",
      desc: "Direct in-house craftspeople from civil alterations to final millwork.",
      tag: "CONSTRUCTION",
    },
  ];

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
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#DCE3E2]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#174C55] rounded-full animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297]">
              01 / ABOUT THE STUDIO
            </span>
          </div>
          <span className="text-xs font-mono tracking-widest text-[#687477]">
            KOZHIKODE • SINCE 1999
          </span>
        </div>

        {/* Main Split Grid: Minimal Copy + Layered Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Minimal, Punchy Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-mono tracking-widest uppercase text-[#174C55] font-semibold mb-3">
              TIMELESS ARCHITECTURAL INTERIORS
            </span>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.03em] leading-[1.12] mb-6">
              Thoughtful Design. <br />
              <span className="font-normal text-[#174C55]">Turnkey Precision.</span> <br />
              Crafted to Endure.
            </h2>

            {/* Concise, Refined Description (No Long Dense Paragraphs) */}
            <p className="text-base sm:text-lg text-[#687477] font-normal leading-relaxed mb-8">
              Founded in 1999 in Kozhikode, AMCOM Interiors unites architectural sensibility with hands-on construction mastery. We build spaces defined by quiet proportions, honest textures, and enduring Kerala living rituals.
            </p>

            {/* Interactive Pillar Highlights with Subtle Micro-Animations */}
            <div className="space-y-3 mb-10">
              {pillars.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`p-4 border transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? 'bg-white border-[#174C55] shadow-sm translate-x-1.5'
                      : 'bg-transparent border-[#DCE3E2] hover:border-[#6E9297]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-[#172022]">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-[#6E9297] uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#687477] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Clean Action Link */}
            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.15em] font-semibold text-[#174C55] hover:text-[#123b42] group"
              >
                <span>Explore Signature Spaces</span>
                <div className="w-7 h-7 rounded-full bg-[#174C55]/10 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#174C55]" />
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
              
              {/* Subtle top-right badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-white/90 backdrop-blur-sm border border-white/60 text-[10px] font-mono tracking-widest uppercase text-[#172022]">
                AMCOM CRAFT • 2024
              </div>

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
