import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const processStepsData = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Discovery & Site Consultation",
    image: "/images/amcom-before.jpg",
    description: "We understand your space, lifestyle and requirements through in-depth site evaluation, spatial flow analysis, and family living patterns.",
    tag: "PHASE 01 • CONSULT",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Architectural 3D & Material Direction",
    image: "/images/amcom-kitchen.jpg",
    description: "We develop a design direction balancing aesthetics and functionality with precise architectural layouts, mood boards, and lighting choreography.",
    tag: "PHASE 02 • VISUALIZE",
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Turnkey Execution & Joinery",
    image: "/images/amcom-hero.jpg",
    description: "Our dedicated in-house team brings the design to life with strict attention to structural precision, honest woodwork, and MEP coordination.",
    tag: "PHASE 03 • CONSTRUCT",
  },
  {
    number: "04",
    title: "Transform",
    subtitle: "Handover of Timeless Spaces",
    image: "/images/amcom-after.jpg",
    description: "A finished interior designed to feel right, function effortlessly, and stand the test of time for decades to come in Kerala's climate.",
    tag: "PHASE 04 • DELIVER",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCE3E2] gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              THE PROCESS
            </h2>
          </div>

        </div>

        {/* 4 HORIZONTAL EXPANDING BARS (LEFT TO RIGHT ACCORDION) */}
        <div className="flex flex-col md:flex-row h-[620px] md:h-[520px] w-full gap-3 md:gap-4 select-none">
          {processStepsData.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-[#DCE3E2] shadow-sm group ${
                  isActive
                    ? 'flex-[3.5] md:flex-[3.5] h-[280px] md:h-full border-[#174C55]'
                    : 'flex-1 md:flex-1 h-[90px] md:h-full opacity-85 hover:opacity-100'
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
              >
                {/* Background Image */}
                <img
                  src={step.image}
                  alt={`${step.title} stage - AMCOM Interiors`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Dark Editorial Overlay */}
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/85 via-black/45 to-black/35'
                      : 'bg-black/55 group-hover:bg-black/45'
                  }`}
                />

                {/* Bar Content */}
                <div className="relative z-10 h-full w-full p-5 sm:p-7 md:p-8 flex flex-col justify-between">
                  {/* Top: Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`px-3 py-1 font-mono text-xs font-semibold tracking-widest transition-all ${
                        isActive
                          ? 'bg-[#174C55] text-white border border-white/20'
                          : 'bg-black/60 text-white/90 border border-white/20'
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Arrow / Detail indicator */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-black scale-100'
                          : 'bg-white/20 text-white scale-75 opacity-0 md:group-hover:opacity-100'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom: Heading + Expandable Details */}
                  <div className="mt-auto">
                    {/* Phase Tag */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-colors block mb-1 ${
                        isActive ? 'text-[#6E9297]' : 'text-white/60'
                      }`}
                    >
                      {step.tag}
                    </span>

                    {/* Main Step Heading */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-[-0.03em] leading-tight mb-2">
                      {step.title}
                    </h3>

                    {/* Subtitle / Focus (visible always or cleanly formatted) */}
                    <p
                      className={`text-xs sm:text-sm text-white/80 font-medium transition-all ${
                        isActive ? 'block mb-3' : 'hidden md:block line-clamp-1'
                      }`}
                    >
                      {step.subtitle}
                    </p>

                    {/* EXPANDABLE DETAILS (REVEALED ON HOVER / ACTIVE) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isActive
                          ? 'max-h-36 opacity-100 pt-2 border-t border-white/20'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle active border indicator at bottom */}
                <div
                  className={`absolute bottom-0 inset-x-0 h-1 bg-[#174C55] transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
