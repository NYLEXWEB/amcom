import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const heroSlides = [
  {
    image: "/hero/IMG-20261012-WA0011.jpg",
    tagline: "AMCOM INTERIORS • EST. 1999",
    line1: "Crafting Timeless",
    line2: "Interiors.",
    buttonText: "Explore Our Work",
  },
  {
    image: "/hero/IMG-20261012-WA0014.jpg",
    tagline: "ARCHITECTURAL SPACES • KERALA",
    line1: "Quiet Luxury in",
    line2: "Every Detail.",
    buttonText: "View Selected Spaces",
  },
  {
    image: "/hero/IMG-20261012-WA0042.jpg",
    tagline: "TURNKEY EXECUTION • CALICUT",
    line1: "Form, Function &",
    line2: "Enduring Craft.",
    buttonText: "Discover Projects",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-switch slide every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[580px] max-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#111618] select-none"
    >
      {/* 1. BACKGROUND SLIDESHOW WITH SMOOTH CROSSFADE & KEN BURNS ZOOM */}
      {heroSlides.map((slide, idx) => {
        const isActive = currentIndex === idx;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              isActive
                ? 'opacity-100 scale-105 z-0'
                : 'opacity-0 scale-100 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt="AMCOM Interiors Architectural Project"
              className="w-full h-full object-cover object-center"
            />
          </div>
        );
      })}

      {/* 2. REFINED ARCHITECTURAL OVERLAY (PRESERVES IMAGE CLARITY & TEXT CONTRAST) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/40 z-10 pointer-events-none" />

      {/* Top spacer for header */}
      <div className="h-20 sm:h-24 shrink-0" />

      {/* 3. DYNAMIC CONTENT: HEADING & NEW PREMIUM BUTTON (NO DESCRIPTION) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 my-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          
          {/* Animated Slide Content Box */}
          <div
            key={currentIndex}
            className="transition-all duration-700 transform animate-fade-in"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 mb-3 sm:mb-5 text-white/90 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#6E9297] rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase">
                {currentSlide.tagline}
              </span>
            </div>

            {/* Large Bold Architectural Headline (No description) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] text-white leading-[1.05] mb-6 sm:mb-8 uppercase break-words">
              {currentSlide.line1} <br />
              <span className="font-light italic font-serif text-[#F8F9F7]/95">
                {currentSlide.line2}
              </span>
            </h1>

            {/* NEW PREMIUM ARCHITECTURAL BUTTON */}
            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-[#174C55] hover:bg-[#123b42] text-white rounded-full transition-all duration-300 group shadow-[0_10px_30px_rgba(23,76,85,0.45)] border border-white/30 backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase font-mono">
                  {currentSlide.buttonText}
                </span>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white text-white group-hover:text-[#174C55] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-sm shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM BAR: LOCATION TAGS, SLIDE INDICATORS & SCROLL LINK */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 pb-5 sm:pb-8 shrink-0 flex items-center justify-between border-t border-white/20 pt-4 gap-2">
        
        {/* Left: Location Micro-Tags */}
        <div className="flex items-center gap-2 sm:gap-4 text-white/75 text-[9px] sm:text-xs tracking-widest font-light font-mono truncate">
          <span>KOZHIKODE</span>
          <span className="w-1 h-1 bg-white/40 hidden sm:inline" />
          <span className="hidden sm:inline">CALICUT</span>
          <span className="w-1 h-1 bg-white/40" />
          <span>KERALA</span>
        </div>

        {/* Center: Interactive 3-Slide Progress Indicators */}
        <div className="flex items-center gap-2 shrink-0">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 sm:w-8 bg-white'
                  : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Right: Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer shrink-0"
        >
          <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-white/60 group-hover:text-white transition-colors hidden sm:inline">
            SCROLL
          </span>
          <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
            <ArrowDown className="w-3 h-3 text-white animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
