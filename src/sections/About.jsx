import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  const pillars = [
    { title: "Residential Interiors", desc: "Private villas, apartments, and heritage renovations." },
    { title: "Commercial & Office", desc: "Executive suites, boutique workspaces, and reception spaces." },
    { title: "Modular Solutions", desc: "Engineered kitchens, bespoke wardrobes, and vanity units." },
    { title: "Interior Execution", desc: "Direct turnkey craftsmanship, civil coordination, and finishes." },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F1F4F2] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Index Header */}
        <div className="flex items-center justify-between pb-6 mb-16 border-b border-[#DCE3E2]">
          <span className="text-xs font-mono tracking-[0.25em] text-[#6E9297] uppercase">
            01 / ABOUT THE STUDIO
          </span>
          <span className="text-xs font-mono tracking-widest text-[#687477]">
            KOZHIKODE • SINCE 1999
          </span>
        </div>

        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left: Large Typography */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.03em] leading-[1.12]">
              Crafting spaces <br />
              with architectural discipline and quiet elegance.
            </h2>
            <div className="w-12 h-[2px] bg-[#174C55] mt-8" />
          </div>

          {/* Right: Narrative Paragraph */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <p className="text-xl md:text-2xl text-[#172022] font-normal leading-relaxed tracking-[-0.015em] mb-8">
              "AMCOM Interiors brings together design thinking, practical execution and attention to detail to create interiors that are made to last."
            </p>
            <p className="text-base md:text-lg text-[#687477] font-normal leading-relaxed">
              Founded over 25 years ago in Kozhikode, our practice bridges the delicate gap between high-level architectural design and boots-on-the-ground construction reality. We believe that true luxury does not shout; it is revealed in the honesty of natural materials, the precision of a hairline shadow gap, and how a room catches the morning Kerala light.
            </p>

            {/* Disciplines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8 border-t border-[#DCE3E2]">
              {pillars.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-1.5 bg-[#174C55] rounded-none group-hover:bg-[#6E9297] transition-colors" />
                    <h4 className="text-sm font-semibold tracking-wide text-[#172022] uppercase">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#687477] pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle Architectural Image Feature (Image 05 subtle integration) */}
        <div className="relative overflow-hidden bg-[#F8F9F7] border border-[#DCE3E2]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-7 aspect-[16/9] md:aspect-auto md:h-[420px] relative overflow-hidden">
              <img
                src="/images/amcom-bedroom.jpg"
                alt="AMCOM Interiors refined bedroom design in Kerala"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
            <div className="md:col-span-5 p-8 md:p-12">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-2">
                STUDIO PERSPECTIVE
              </span>
              <h3 className="text-2xl font-light text-[#172022] tracking-[-0.02em] mb-4">
                Architecture from the inside out.
              </h3>
              <p className="text-sm text-[#687477] leading-relaxed mb-6">
                Every space begins with spatial understanding. Rather than imposing ornamental decor, we curate proportional volumes, tactile textures, and balanced daylight to build enduring emotional warmth.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold text-[#174C55] hover:text-[#123b42] group"
              >
                <span>View Private Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
