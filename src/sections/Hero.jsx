import React from 'react';
import { brandInfo } from '../data/siteData';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#172022]"
    >
      {/* FULL-BLEED HERO BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 scale-100 ease-out"
        style={{
          backgroundImage: "url('/images/amcom-hero.jpg')",
          backgroundPosition: 'center 45%',
        }}
        role="img"
        aria-label="Contemporary Kerala residential interior living room designed by AMCOM Interiors"
      />

      {/* 1. HORIZONTAL LIGHT BLACK FADE (LEFT TO RIGHT) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 via-45% to-black/15 pointer-events-none" />

      {/* 2. SUBTLE TOP GRADIENT FOR UNSCROLLED NAVBAR READABILITY */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* 3. SUBTLE BOTTOM FADE FOR SMOOTH TRANSITION TO NEXT SECTION */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#172022]/80 to-transparent pointer-events-none" />

      {/* Subtle architectural grid lines (very faint) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
          <div className="border-r border-white/20 h-full" />
          <div className="border-r border-white/20 h-full hidden md:block" />
          <div className="border-r border-white/20 h-full hidden md:block" />
          <div className="h-full" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10 lg:px-12 pt-28 pb-20 md:py-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Overline Badge */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/15 mb-6 text-white/90">
            <span className="w-1.5 h-1.5 bg-[#6E9297] rounded-none animate-pulse" />
            <span className="text-[11px] md:text-xs font-mono tracking-[0.25em] uppercase text-white/90">
              AMCOM INTERIORS • EST. 1999
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.035em] text-[#F8F9F7] leading-[1.08] mb-6">
            Crafting Timeless Interiors <br />
            <span className="font-normal italic font-serif tracking-normal text-[#F8F9F7]/95">
              Since 1999.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#F8F9F7]/85 font-light leading-relaxed max-w-2xl mb-10 tracking-[-0.01em]">
            Thoughtfully designed interiors where architecture, functionality and timeless aesthetics come together. Serving Kozhikode, Kannur, and across Kerala.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F8F9F7] text-[#172022] text-sm font-medium tracking-wide hover:bg-white hover:shadow-lg transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-[#174C55] transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#174C55] text-[#F8F9F7] border border-white/20 text-sm font-medium tracking-wide hover:bg-[#123b42] transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6E9297]"
            >
              <MessageSquare className="w-4 h-4 text-[#6E9297]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Location micro-tag */}
          <div className="mt-12 pt-6 border-t border-white/15 flex items-center gap-6 text-white/70 text-xs tracking-wider font-light">
            <span>KOZHIKODE</span>
            <span className="w-1 h-1 bg-white/40" />
            <span>CALICUT</span>
            <span className="w-1 h-1 bg-white/40" />
            <span>KANNUR</span>
            <span className="w-1 h-1 bg-white/40" />
            <span>KERALA</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-white/60 group-hover:text-white transition-colors">
          SCROLL
        </span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-white animate-pulse" />
        </div>
      </a>
    </section>
  );
}
