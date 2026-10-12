import React, { useState } from 'react';
import { allServicesList } from '../data/allServicesData';
import { brandInfo } from '../data/siteData';
import { ArrowLeft, MessageSquare, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans">
      {/* Top Navigation Bar on Services Page */}
      <header className="sticky top-0 z-50 bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-zinc-100 text-[#172022] text-xs font-semibold tracking-wider uppercase rounded-full border border-[#DCE3E2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#174C55]" />
            <span>Back to Home</span>
          </button>

          {/* Center Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBackToHome}>
            <div className="bg-white p-1 rounded-sm border border-[#DCE3E2]">
              <img src="/logo-bg.png" alt="AMCOM Interiors" className="h-7 w-auto object-contain" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#687477] hidden sm:inline">
              SERVICES DIRECTORY
            </span>
          </div>

          {/* Right Action: Call Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Call Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Banner for Services */}
      <div className="bg-[#111618] text-white py-16 sm:py-20 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#174C55]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-3 font-semibold">
            AMCOM INTERIORS • EST. 1999
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
            ALL 19 INTERIOR SERVICES &amp; SOLUTIONS
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            From bespoke modular kitchen cabinetry to architectural ceilings, custom furniture, and turnkey building solutions in Kozhikode, Kannur, and across Kerala.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Category Filter Chips */}
        <div className="flex items-center flex-wrap gap-2 pb-8 mb-10 border-b border-[#DCE3E2]">
          <span className="text-xs font-mono text-[#687477] uppercase mr-2">Filter:</span>
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

        {/* 19 Services Grid */}
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
                      <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/70 backdrop-blur-sm text-white border border-white/20">
                        {service.number}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase bg-white/90 text-[#172022] border border-white/40">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-[#172022] tracking-tight group-hover:text-[#174C55] transition-colors mb-2">
                      {service.title}
                    </h3>
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

                  <span className="text-[10px] font-mono text-[#687477]">
                    AMCOM DIRECT
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 sm:p-12 bg-[#F1F4F2] border border-[#DCE3E2] text-center max-w-3xl mx-auto rounded-none">
          <h2 className="text-2xl sm:text-3xl font-light text-[#172022] mb-3">
            Have a custom requirement or site plan?
          </h2>
          <p className="text-sm text-[#687477] mb-6 max-w-lg mx-auto">
            Our team handles complete end-to-end site consultation, measurements, 3D visualization, and turnkey execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#174C55] text-white text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#123b42] transition-colors"
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
