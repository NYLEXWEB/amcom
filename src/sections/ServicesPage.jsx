import React, { useState } from 'react';
import { allServicesList } from '../data/allServicesData';
import { brandInfo } from '../data/siteData';
import { ArrowLeft, MessageSquare, Phone, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServicesPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Kitchen & Dining',
    'Living Spaces',
    'Private Suites',
    'Storage Solutions',
    'Doors & Windows',
    'Architectural Finishes',
    'Civil & Structural',
  ];

  const filteredServices = allServicesList.filter((s) => {
    if (activeCategory === 'ALL') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
      
      {/* 1. TOP STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] py-3.5 sm:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Back to Home Button */}
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white hover:bg-zinc-100 text-[#172022] text-xs font-semibold tracking-wider uppercase rounded-full border border-[#DCE3E2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#174C55]" />
            <span>Back to Home</span>
          </button>

          {/* Center Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBackToHome}>
            <div className=" p-1 sm:p-1.5 rounded-sm ">
              <img src="/logo-bg.png" alt="AMCOM Interiors" className="h-8 sm:h-12 w-auto object-contain" />
            </div>
            <span className="text-[11px] font-mono tracking-widest text-[#687477] hidden md:inline uppercase">
              WHAT WE DO
            </span>
          </div>

          {/* Right Action: Call Us */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

        </div>
      </header>

      {/* 
        2. HERO BANNER INSPIRED BY REFERENCE SCREENSHOT:
        Large architectural background image + bold white headline
        "Long-lasting Home Interiors / Tailored to Fulfill Your Needs"
      */}
      <div className="relative h-[420px] sm:h-[480px] md:h-[540px] w-full flex items-center justify-center overflow-hidden bg-[#111618]">
        {/* Architectural Background Image */}
        <img
          src="/hero/IMG-20261012-WA0014.jpg"
          alt="AMCOM Interiors Architectural Living and Dining"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />

        {/* Ambient Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
            Long-lasting Home Interiors <br />
            <span className="font-light italic font-serif text-[#F8F9F7]/95">
              Tailored to Fulfill Your Needs
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-xl mx-auto font-light leading-relaxed">
            Custom-made residential and commercial interior spaces designed and constructed to endure Kerala's climate and everyday lifestyle rituals.
          </p>
        </div>
      </div>

      {/* 
        3. EDITORIAL SECTION INSPIRED BY REFERENCE SCREENSHOT:
        "Custom-Made Home Interiors" + Deep Narrative
      */}


      {/* 
        4. COMPLETE 19-SERVICES ARCHITECTURAL DIRECTORY
      */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-[#DCE3E2] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2 font-semibold">
              COMPLETE CAPABILITIES DIRECTORY
            </span>
            <h3 className="text-2xl sm:text-4xl font-light text-[#172022] tracking-tight">
              ALL 19 INTERIOR SERVICES &amp; SOLUTIONS
            </h3>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center flex-wrap gap-2 pb-8 mb-10 border-b border-[#DCE3E2]">
          <span className="text-xs font-mono text-[#687477] uppercase mr-2 font-semibold">Filter:</span>
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[#174C55] text-white shadow-sm'
                    : 'bg-white text-[#172022] border border-[#DCE3E2] hover:bg-zinc-100'
                }`}
              >
                {cat === 'ALL' ? 'All Services (19)' : cat}
              </button>
            );
          })}
        </div>

        {/* 19 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const waLink = `https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
              `Hello AMCOM Interiors, I would like to inquire about ${service.title}.`
            )}`;

            return (
              <div
                key={service.id}
                className="bg-white border border-[#DCE3E2] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/75 backdrop-blur-sm text-white border border-white/20">
                        {service.number}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-6">
                    <h4 className="text-xl font-light text-[#172022] tracking-tight group-hover:text-[#174C55] transition-colors mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#687477] font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action: WhatsApp Inquiry */}
                <div className="px-6 pb-6 pt-3 border-t border-[#DCE3E2]/60 mt-auto flex items-center justify-between">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#174C55] hover:text-[#123b42] group/btn"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. BOTTOM CONSULTATION BANNER */}
        <div className="mt-16 p-8 sm:p-12 bg-white border border-[#DCE3E2] shadow-sm text-center max-w-3xl mx-auto rounded-none">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2 font-semibold">
            START YOUR TRANSFORMATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-light text-[#172022] mb-3">
            Have a custom requirement or floor plan?
          </h3>
          <p className="text-sm text-[#687477] mb-6 max-w-lg mx-auto">
            Our team handles complete end-to-end site consultation, measurements, 3D visualization, and turnkey execution throughout Kozhikode, Kannur, and Kerala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#174C55] text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#123b42] transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onBackToHome}
              className="px-6 py-3 bg-white text-[#172022] border border-[#DCE3E2] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-zinc-100 transition-colors"
            >
              Return to Home Page
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#DCE3E2] py-8 text-center text-xs text-[#687477] font-mono">
        <p>© 2026 AMCOM Interiors. All rights reserved. Kozhikode, Kerala.</p>
      </footer>
    </div>
  );
}
