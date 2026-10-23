import React, { useState, useEffect, useRef } from 'react';
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
    buttonText: "Explore Our Work",
  },
  {
    image: "/hero/IMG-20261012-WA0042.jpg",
    tagline: "TURNKEY EXECUTION • CALICUT",
    line1: "Form, Function &",
    line2: "Enduring Craft.",
    buttonText: "Discover Services",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Preload all hero images on initial render to prevent decoding lag
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Snappy, faster image switching (3000ms interval) with smooth progress bar
  useEffect(() => {
    const slideDuration = 3000;
    const updateFreq = 50;
    const step = (updateFreq / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => {
            setPrevIndex(curr);
            return (curr + 1) % heroSlides.length;
          });
          return 0;
        }
        return prev + step;
      });
    }, updateFreq);

    return () => clearInterval(timer);
  }, []);

  const handleManualSlide = (idx) => {
    if (idx === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(idx);
    setProgress(0);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[620px] max-h-screen w-full flex flex-col justify-between overflow-hidden select-none bg-[#1a2225]"
    >
      {/* 
        1. SEAMLESS ZERO-BLACKNESS CROSSFADE SLIDESHOW
        The outgoing image stays 100% visible at z-10 while incoming fades in at z-20.
        Eliminates any black flash or gap between transitions.
      */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, idx) => {
          const isCurrent = currentIndex === idx;
          const isPrev = prevIndex === idx;

          // Layering: Current slide on top (z-20), previous underneath (z-10)
          let layerClass = 'z-0 opacity-0 pointer-events-none';
          if (isCurrent) {
            layerClass = 'z-20 opacity-100';
          } else if (isPrev) {
            layerClass = 'z-10 opacity-100';
          }

          return (
            <div
              key={slide.image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-600 ease-out ${layerClass}`}
            >
              <img
                src={slide.image}
                alt={`${slide.tagline} - ${slide.line1} ${slide.line2} by AMCOM Interiors Kozhikode`}
                className={`w-full h-full object-cover object-center transition-transform duration-6000 ease-out ${
                  isCurrent ? 'scale-105' : 'scale-100'
                }`}
                loading="eager"
              />
            </div>
          );
        })}
      </div>

      {/* 
        2. CLEAN LIGHTING: REMOVED HEAVY BLACK SHADE
        The heavy black overlay has been removed to preserve natural photo clarity and colors.
        Only gentle directional left feathering protects headline contrast.
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/70 via-black/25 to-transparent z-20 pointer-events-none" />

      {/* Top spacer for merged header */}
      <div className="h-20 sm:h-24 shrink-0" />

      {/* 3. DYNAMIC HERO CONTENT: HEADLINE & TIMELESS ARCHITECTURAL BUTTON */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 my-auto">
        <div className="max-w-3xl lg:max-w-4xl">
          
          {/* Animated Slide Content Box */}
          <div
            key={currentIndex}
            className="transition-all duration-500 transform animate-fade-in"
          >

            {/* Large Bold Architectural Headline with crisp drop shadow */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.035em] text-white leading-[1.06] mb-6 sm:mb-8 uppercase break-words drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              {currentSlide.line1} <br />
              <span className="font-light italic font-serif text-[#F8F9F7] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                {currentSlide.line2}
              </span>
            </h1>

            {/* PREMIUM ARCHITECTURAL ACTION BUTTON (Clean Monochrome Luxury) */}
            <div>
              <a
                href="/services"
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-zinc-100 text-[#172022] rounded-full transition-all duration-300 group shadow-[0_12px_35px_rgba(0,0,0,0.45)] border border-white/40 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono text-[#172022]">
                  {currentSlide.buttonText}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#172022] text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shadow-sm shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM BAR: LOCATION TAGS, INTERACTIVE TIMER BARS & SCROLL LINK */}
      <div className="relative z-30 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 pb-5 sm:pb-7 shrink-0 flex items-center justify-between border-t border-white/20 pt-4 gap-2">
        
        {/* Left: Location Micro-Tags */}
        <div className="flex items-center gap-2 sm:gap-4 text-white/90 text-[10px] sm:text-xs tracking-widest font-mono truncate drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          <span>KOZHIKODE</span>
          <span className="w-1 h-1 bg-white/60 hidden sm:inline rounded-full" />
          <span className="hidden sm:inline">CALICUT</span>
          <span className="w-1 h-1 bg-white/60 rounded-full" />
          <span>KERALA</span>
        </div>

        {/* Center: Interactive 3-Slide Progress Indicators with live timer fill */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {heroSlides.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleManualSlide(idx)}
                className="group relative h-2 w-10 sm:w-14 rounded-full bg-white/25 overflow-hidden transition-all duration-300 hover:bg-white/40 cursor-pointer p-0"
                aria-label={`Jump to slide ${idx + 1}`}
              >
                {isActive ? (
                  <div
                    className="h-full bg-white rounded-full transition-all duration-75 ease-linear shadow-sm"
                    style={{ width: `${progress}%` }}
                  />
                ) : (
                  <div className="h-full w-0 bg-transparent rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right: Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group cursor-pointer shrink-0 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        >
          <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-white/80 group-hover:text-white transition-colors hidden sm:inline">
            SCROLL
          </span>
          <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white transition-colors bg-black/20 backdrop-blur-sm">
            <ArrowDown className="w-3 h-3 text-white animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
