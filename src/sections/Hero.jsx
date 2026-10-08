import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#172022]"
    >
      {/* 1. HERO BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-100"
        poster="/images/amcom-hero.jpg"
      >
        <source src="/hero/flow-5ec0a798-5ad4-4af7-9c4f--erasio.mp4" type="video/mp4" />
        {/* Fallback if browser doesn't play video */}
        Your browser does not support the video tag.
      </video>

      {/* 2. SUBTLE ARCHITECTURAL OVERLAY (CLEAN, NO HEAVY BLACK FADE) */}
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Top spacer for floating navbar */}
      <div className="h-20 sm:h-24 shrink-0" />

      {/* 3. HERO MAIN CONTENT (CENTERED & FITTED PERFECTLY IN ONE SCREEN) */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 my-auto">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 mb-4 sm:mb-5 text-white/95 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#6E9297] rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase">
              AMCOM INTERIORS • EST. 1999
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#F8F9F7] leading-[1.08] mb-4 sm:mb-5">
            Crafting Timeless Interiors <br />
            <span className="font-normal italic font-serif tracking-normal text-[#F8F9F7]/95">
              Since 1999.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base md:text-lg text-[#F8F9F7]/90 font-light leading-relaxed max-w-xl mb-6 sm:mb-8 tracking-[-0.01em]">
            Thoughtfully designed interiors where architecture, functionality and timeless aesthetics come together. Serving Kozhikode, Kannur, and across Kerala.
          </p>

          {/* SINGLE ROUNDED BLACK CTA BUTTON: "Explore Our Work" WITH ROUNDED ARROW */}
          <div>
            <a
              href="#projects"
              className="inline-flex items-center gap-4 pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 bg-black hover:bg-[#172022] text-white rounded-full transition-all duration-300 group shadow-xl border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="text-xs sm:text-sm font-medium tracking-wide">
                Explore Our Work
              </span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#172022] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                <ArrowRight className="w-4 h-4 text-[#172022]" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 4. BOTTOM BAR: LOCATION TAG & SCROLL INDICATOR */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 pb-6 sm:pb-8 shrink-0 flex items-end justify-between border-t border-white/15 pt-4">
        {/* Location micro-tag */}
        <div className="flex items-center gap-3 sm:gap-6 text-white/75 text-[10px] sm:text-xs tracking-widest font-light font-mono">
          <span>KOZHIKODE</span>
          <span className="w-1 h-1 bg-white/40" />
          <span>CALICUT</span>
          <span className="w-1 h-1 bg-white/40" />
          <span>KANNUR</span>
          <span className="w-1 h-1 bg-white/40" />
          <span>KERALA</span>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          aria-label="Scroll down to about section"
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer"
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
