import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Services({ onNavigateToServices }) {
  const cards = [
    {
      id: "kitchen",
      title: "KITCHEN",
      category: "Modular Kitchen Cabinets",
      image: "/images/amcom-kitchen.jpg",
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
      id: "dining",
      title: "DINING",
      category: "Dining & Crockery Units",
      image: "/hero/IMG-20261012-WA0014.jpg",
    },
  ];

  const kitchenCard = cards[0];
  const bedroomCard = cards[1];
  const livingCard = cards[2];
  const diningCard = cards[3];

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
          ASYMMETRICAL 4-IMAGE MOSAIC GRID 
          Exact layout from the reference screenshot:
          - Left Column (8 cols): Top = KITCHEN, Bottom = BEDROOM & LIVING side-by-side
          - Right Column (4 cols): DINING (tall vertical block spanning both rows)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch mb-10">
          
          {/* LEFT 8 COLUMNS: Kitchen on top, Bedroom & Living below */}
          <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
            
            {/* 1. KITCHEN CARD (Top Wide Block) */}
            <div
              onClick={onNavigateToServices}
              className="relative aspect-[16/9] sm:aspect-[16/8.5] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
              role="button"
              tabIndex={0}
              aria-label="View Kitchen Services"
            >
              <img
                src={kitchenCard.image}
                alt={kitchenCard.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

              {/* Centered Large Bold Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                  {kitchenCard.title}
                </h3>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {kitchenCard.category} →
                </span>
              </div>
            </div>

            {/* BOTTOM ROW: BEDROOM & LIVING SIDE-BY-SIDE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
              
              {/* 2. BEDROOM CARD */}
              <div
                onClick={onNavigateToServices}
                className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
                role="button"
                tabIndex={0}
                aria-label="View Bedroom Services"
              >
                <img
                  src={bedroomCard.image}
                  alt={bedroomCard.title}
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

              {/* 3. LIVING CARD */}
              <div
                onClick={onNavigateToServices}
                className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
                role="button"
                tabIndex={0}
                aria-label="View Living Services"
              >
                <img
                  src={livingCard.image}
                  alt={livingCard.title}
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

            </div>

          </div>

          {/* RIGHT 4 COLUMNS: DINING CARD (Spans Full Height) */}
          <div className="lg:col-span-4 h-full">
            <div
              onClick={onNavigateToServices}
              className="relative h-full min-h-[340px] sm:min-h-[460px] overflow-hidden bg-zinc-900 group cursor-pointer shadow-md"
              role="button"
              tabIndex={0}
              aria-label="View Dining Services"
            >
              <img
                src={diningCard.image}
                alt={diningCard.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center">
                <h3 className="text-4xl sm:text-6xl font-bold tracking-wider text-white group-hover:text-[#6E9297] transition-colors duration-300 drop-shadow-md">
                  {diningCard.title}
                </h3>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {diningCard.category} →
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ACTION: "VIEW MORE SERVICES" BUTTON */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onNavigateToServices}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#172022] hover:bg-[#174C55] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-md group"
          >
            <span>View All 19 Services</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
