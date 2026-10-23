import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { brandInfo } from '../data/siteData';
import { OriginalWhatsAppIcon } from '../components/Icons';

export default function Services({ onNavigateToServices }) {
  const cards = [
    {
      id: "kitchen",
      title: "KITCHEN",
      category: "Modular Kitchen Cabinets",
      image: "/images/amcom-kitchen.jpg",
    },
    {
      id: "dining",
      title: "DINING",
      category: "Dining & Crockery Units",
      image: "/hero/IMG-20261012-WA0014.jpg",
    },
    {
      id: "bedroom",
      title: "BEDROOM",
      category: "Master Bedroom Suites",
      image: "/images/amcom-bedroom.jpg",
    },
    {
      id: "living",
      title: "LIVING",
      category: "Contemporary Living Spaces",
      image: "/images/amcom-after.jpg",
    },
    {
      id: "doors-windows",
      title: "DOORS & WINDOWS",
      category: "uPVC, WPC & Aluminium Solutions",
      image: "/services/Aluminium Doors & Windows.png",
    },
  ];

  const kitchenCard = cards[0];
  const diningCard = cards[1];
  const bedroomCard = cards[2];
  const livingCard = cards[3];
  const doorsWindowsCard = cards[4];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-[#DCE3E2] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2 font-semibold">
            CAPABILITIES &amp; SPACES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-tight">
            WHAT WE DO
          </h2>
          <div className="w-12 h-[2px] bg-[#174C55] mx-auto mt-4" />
        </div>

        {/* 
          ARCHITECTURAL 5-SPACE MOSAIC GRID 
          - Row 1: KITCHEN (8 cols) + DINING (4 cols)
          - Row 2: BEDROOM (4 cols) + LIVING (4 cols) + DOORS & WINDOWS (4 cols)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch mb-10">
          
          {/* 1. KITCHEN CARD (Row 1 Left - 8 cols) */}
          <div
            onClick={onNavigateToServices}
            className="md:col-span-2 lg:col-span-8 relative aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
            role="button"
            tabIndex={0}
            aria-label="View Kitchen Services"
          >
            <img
              src={kitchenCard.image}
              alt={`${kitchenCard.category} - Modular Kitchen Design in Calicut by AMCOM Interiors`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
              <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                {kitchenCard.title}
              </h3>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {kitchenCard.category} →
              </span>
            </div>
          </div>

          {/* 2. DINING CARD (Row 1 Right - 4 cols) */}
          <div
            onClick={onNavigateToServices}
            className="md:col-span-2 lg:col-span-4 relative aspect-[16/9] sm:aspect-[16/8.5] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
            role="button"
            tabIndex={0}
            aria-label="View Dining Services"
          >
            <img
              src={diningCard.image}
              alt={`${diningCard.category} - Custom Dining & Crockery Joinery Kerala`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
              <h3 className="text-3xl sm:text-5xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                {diningCard.title}
              </h3>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {diningCard.category} →
              </span>
            </div>
          </div>

          {/* 3. BEDROOM CARD (Row 2 Left - 4 cols) */}
          <div
            onClick={onNavigateToServices}
            className="md:col-span-1 lg:col-span-4 relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
            role="button"
            tabIndex={0}
            aria-label="View Bedroom Services"
          >
            <img
              src={bedroomCard.image}
              alt={`${bedroomCard.category} - Master Bedroom Suite & Wardrobe Joinery in Kozhikode`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
              <h3 className="text-3xl sm:text-5xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                {bedroomCard.title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {bedroomCard.category} →
              </span>
            </div>
          </div>

          {/* 4. LIVING CARD (Row 2 Center - 4 cols) */}
          <div
            onClick={onNavigateToServices}
            className="md:col-span-1 lg:col-span-4 relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
            role="button"
            tabIndex={0}
            aria-label="View Living Services"
          >
            <img
              src={livingCard.image}
              alt={`${livingCard.category} - Contemporary Living Room & TV Wall Design Kerala`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
              <h3 className="text-3xl sm:text-5xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                {livingCard.title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {livingCard.category} →
              </span>
            </div>
          </div>

          {/* 5. DOORS & WINDOWS CARD (Row 2 Right - 4 cols) */}
          <div
            onClick={onNavigateToServices}
            className="md:col-span-2 lg:col-span-4 relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
            role="button"
            tabIndex={0}
            aria-label="View Doors and Windows Services"
          >
            <img
              src={doorsWindowsCard.image}
              alt={`${doorsWindowsCard.category} - Precision Architectural Openings by AMCOM Interiors`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center px-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                {doorsWindowsCard.title}
              </h3>
              <span className="text-xs font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                {doorsWindowsCard.category} →
              </span>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION: "VIEW MORE SERVICES" & "INQUIRE ON WHATSAPP" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={onNavigateToServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-[#172022] hover:bg-[#174C55] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-md group"
          >
            <span>View All 19 Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
              'Hello AMCOM Interiors, I would like to inquire about your architectural interior design services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
              <OriginalWhatsAppIcon className="w-3.5 h-3.5" />
            </div>
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
