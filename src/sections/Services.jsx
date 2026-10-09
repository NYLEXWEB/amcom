import React, { useState } from 'react';
import { brandInfo } from '../data/siteData';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const servicesData = [
  {
    number: "01",
    title: "Residential Interiors",
    image: "/images/amcom-hero.jpg",
    description: "Tailored luxury living spaces designed with quiet architectural proportion, natural Kerala timber, ambient illumination, and intuitive spatial flow.",
    features: ["Custom living areas", "High-ceiling architectural lighting", "Teak & microcement palettes", "Indoor-outdoor connectivity"],
  },
  {
    number: "02",
    title: "Modular Kitchens",
    image: "/images/amcom-kitchen.jpg",
    description: "Contemporary precision kitchens balancing ergonomic functionality, handleless porcelain cabinetry, quartz countertops, and clean architectural lines.",
    features: ["Quartz & granite worktops", "Blum soft-close hardware", "Integrated appliances", "Courtyard breakfast counters"],
  },
  {
    number: "03",
    title: "Bedroom Interiors",
    image: "/images/amcom-bedroom.jpg",
    description: "Tranquil private sanctuaries featuring integrated fluted headboards, tactile acoustic warmth, concealed cove illumination, and minimal nightstands.",
    features: ["Walk-in wardrobes", "Acoustic wood slat walls", "Concealed LED mood lighting", "Platform bed frames"],
  },
  {
    number: "04",
    title: "Living Spaces",
    image: "/images/amcom-after.jpg",
    description: "Expansive social zones crafted with bespoke furniture, balanced architectural volumes, travertine floor finishes, and cohesive spatial rhythm.",
    features: ["Floating media consoles", "Travertine stone flooring", "Bespoke linen sofas", "Architectural ceiling coves"],
  },
  {
    number: "05",
    title: "Office Interiors",
    image: "/images/amcom-hero.jpg",
    description: "Refined commercial and executive workspaces engineered for productivity, focus, acoustic isolation, and enduring professional distinction.",
    features: ["Executive suites", "Acoustic wall paneling", "Ergonomic executive desks", "Conference room joinery"],
  },
  {
    number: "06",
    title: "Complete Interior Execution",
    image: "/images/amcom-after.jpg",
    description: "End-to-end turnkey realization from initial architectural concept, 3D detailing, and material curation to meticulous on-site construction.",
    features: ["Civil alterations & layout", "Full MEP coordination", "Turnkey on-site carpentry", "Defect-free final handover"],
  },
];

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeService = servicesData[selectedIndex];
  const whatsappServiceLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
    `Hello AMCOM Interiors, I would like to inquire about ${activeService.title}.`
  )}`;

  return (
    <section id="services" className="py-16 md:py-20 bg-black text-[#F8F9F7] border-b border-white/10 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#174C55]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-white/15 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light text-white tracking-[-0.035em]">
              WHAT WE DO
            </h2>
          </div>

        </div>

        {/* 2-Column Layout: Left (Service Headings List) | Right (Interactive Image & Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT SIDE: Headings Only List */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {servicesData.map((service, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={service.number}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left py-5 sm:py-6 px-2 flex items-center justify-between transition-all duration-300 group focus:outline-none ${
                    isSelected
                      ? 'bg-white/5 pl-4 sm:pl-6 text-white'
                      : 'text-white/45 hover:text-white/90 hover:pl-3'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-xs sm:text-sm tracking-wider transition-colors ${
                        isSelected ? 'text-[#6E9297] font-semibold' : 'text-white/30'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl font-light tracking-[-0.02em] transition-all ${
                        isSelected ? 'text-white font-normal' : ''
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Active Indicator Chevron / Dot */}
                  <div className="flex items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#174C55] text-white scale-100 opacity-100'
                          : 'opacity-0 scale-75 group-hover:opacity-40 group-hover:scale-90 text-white/50'
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Interactive Image & Description */}
          <div className="lg:col-span-7 bg-[#111618] border border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-2xl">
            {/* Image Container with Smooth Switch Animation */}
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/10 mb-6 group">
              <img
                key={activeService.number}
                src={activeService.image}
                alt={`${activeService.title} by AMCOM Interiors`}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 animate-fade-in"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-widest uppercase">
                {activeService.number} • {activeService.title}
              </div>

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Description & Details Row Below Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-light text-white tracking-[-0.02em]">
                  {activeService.title}
                </h4>
        
              </div>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                {activeService.description}
              </p>

              {/* Feature Tags Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6E9297] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Quick WhatsApp Action Button */}
              <div className="pt-4 flex items-center justify-between">
                <a
                  href={whatsappServiceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-medium tracking-wide rounded-full transition-colors group"
                >
                  <span>Enquire about {activeService.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

            
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
