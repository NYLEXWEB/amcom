import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const galleryRow1 = [
  {
    title: "Double-Height Living Pavilion",
    category: "Residential Architecture",
    location: "Kozhikode",
    image: "/images/amcom-hero.jpg",
  },
  {
    title: "Minimal Porcelain Kitchen",
    category: "Modular Joinery",
    location: "Calicut",
    image: "/images/amcom-kitchen.jpg",
  },
  {
    title: "Travertine Wall & Media Unit",
    category: "Contemporary Living",
    location: "Arayidathupalam",
    image: "/images/amcom-after.jpg",
  },
  {
    title: "Teak Headboard Master Suite",
    category: "Private Residence",
    location: "Kannur",
    image: "/images/amcom-bedroom.jpg",
  },
];

const galleryRow2 = [
  {
    title: "Courtyard Integrated Kitchen",
    category: "Modular Architecture",
    location: "Kozhikode",
    image: "/images/amcom-kitchen.jpg",
  },
  {
    title: "Serene Linen Sanctuary",
    category: "Bedroom Interior",
    location: "Kannur",
    image: "/images/amcom-bedroom.jpg",
  },
  {
    title: "Full Home Architectural Renovation",
    category: "Turnkey Execution",
    location: "Calicut",
    image: "/images/amcom-after.jpg",
  },
  {
    title: "Sun-Drenched Garden Living",
    category: "Luxury Residential",
    location: "Kozhikode",
    image: "/images/amcom-hero.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3">
              04 / VISUAL ARCHIVE
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              CURATED GALLERY
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#687477] font-normal leading-relaxed">
            Hover over any space to pause the stream and inspect details. Continuous architectural perspectives from across Kerala.
          </p>
        </div>
      </div>

      {/* DUAL CONTINUOUS AUTO-SCROLLING MARQUEE CONTAINER */}
      <div className="space-y-6 select-none">
        
        {/* ROW 1: AUTO SCROLLS FROM LEFT TO RIGHT */}
        <div className="overflow-hidden relative w-full">
          {/* Subtle side fade overlays */}
          <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[#0000] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-[#0000] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-ltr gap-5 sm:gap-6 py-2">
            {[...galleryRow1, ...galleryRow1, ...galleryRow1].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-[300px] sm:w-[380px] md:w-[420px] h-[210px] sm:h-[260px] relative rounded-none overflow-hidden border border-[#DCE3E2] shadow-sm bg-[#172022] group shrink-0 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-sm text-white/90 border border-white/15">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E9297] block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-light text-white tracking-[-0.01em]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: AUTO SCROLLS FROM RIGHT TO LEFT */}
        <div className="overflow-hidden relative w-full">
          {/* Subtle side fade overlays */}
          <div className="absolute left-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-r from-[#0000] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 sm:w-24 bg-gradient-to-l from-[#0000] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-rtl gap-5 sm:gap-6 py-2">
            {[...galleryRow2, ...galleryRow2, ...galleryRow2].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-[300px] sm:w-[380px] md:w-[420px] h-[210px] sm:h-[260px] relative rounded-none overflow-hidden border border-[#DCE3E2] shadow-sm bg-[#172022] group shrink-0 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating Architectural Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/60 backdrop-blur-sm text-white/90 border border-white/15">
                    {item.location}
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E9297] block mb-0.5">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-light text-white tracking-[-0.01em]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
