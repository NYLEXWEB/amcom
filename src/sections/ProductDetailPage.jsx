import React, { useState, useEffect } from 'react';
import { productCategories } from '../data/productsData';
import { brandInfo } from '../data/siteData';
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  ChevronRight,
  ShieldCheck,
  Clock,
  Sparkles,
  CheckCircle2,
  Layers,
  Check,
  Send,
  Calendar,
  Compass,
} from 'lucide-react';
import { OriginalWhatsAppIcon } from '../components/Icons';

export default function ProductDetailPage({ initialCategory = 'kitchen', onBackToHome, onSelectCategory }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(initialCategory);
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientLocation, setClientLocation] = useState('Kozhikode');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategoryId(initialCategory);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [initialCategory]);

  const currentCategory =
    productCategories.find((cat) => cat.id === selectedCategoryId) ||
    productCategories[0];

  const handleCategoryChange = (id) => {
    setSelectedCategoryId(id);
    if (onSelectCategory) {
      onSelectCategory(id);
    } else {
      window.location.hash = `/products/${id}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello AMCOM Interiors, I would like to enquire about your ${currentCategory.shortTitle} interior design options and get a free estimate.`
  );
  const whatsappUrl = `https://wa.me/${brandInfo.whatsappNumber}?text=${whatsappMessage}`;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello AMCOM Interiors, my name is ${clientName} (${clientPhone}) from ${clientLocation}. I am interested in a customized ${currentCategory.shortTitle} consultation and estimate.`
    );
    window.open(`https://wa.me/${brandInfo.whatsappNumber}?text=${msg}`, '_blank');
    setShowConsultModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans selection:bg-[#174C55] selection:text-white">
      {/* 1. TOP FLOATING NAVBAR MERGED WITH HERO BANNER */}
      <header className="absolute top-0 left-0 right-0 z-50 w-full select-none pt-4 sm:pt-6 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 hover:bg-white/15 backdrop-blur-xl border border-white/25 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.35)] flex items-center justify-between gap-3 sm:gap-4 transition-all duration-300">
            
            {/* Left: Back Arrow Key Only & Logo */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={onBackToHome}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#172022] border border-white/30 flex items-center justify-center transition-all duration-200 shadow-sm shrink-0"
                aria-label="Back to Home"
                title="Back to Home"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  onBackToHome();
                }}
                className="shrink-0 flex items-center"
              >
                <div className="bg-white/95 hover:bg-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm border border-white/40 hover:scale-105 transition-all">
                  <img src="/logo-bg.png" alt="AMCOM Interiors" className="h-6 sm:h-7 md:h-7.5 w-auto object-contain" />
                </div>
              </a>
            </div>

            {/* Center: Expanded Room Categories with Clean White Theme */}
            <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2 bg-black/30 p-1 rounded-full border border-white/20">
              {productCategories.map((cat) => {
                const isActive = cat.id === currentCategory.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 xl:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-white text-[#172022] font-bold shadow-md scale-[1.02]'
                        : 'text-white/90 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {cat.navLabel}
                  </button>
                );
              })}
            </nav>

            {/* Right: WhatsApp Button Only (Phone number removed as requested) */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <OriginalWhatsAppIcon className="w-3 h-3" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Mobile / Tablet Horizontal Category Scroll Strip */}
          <div className="lg:hidden mt-2.5 px-2 overflow-x-auto scrollbar-none flex gap-2 py-1">
            {productCategories.map((cat) => {
              const isActive = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white text-[#172022] font-bold shadow-sm'
                      : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
                  }`}
                >
                  {cat.navLabel}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* 2. D'LIFE-INSPIRED HERO BANNER (MERGED WITH TOP NAVBAR) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[600px] flex items-center overflow-hidden select-none bg-black pt-28 sm:pt-36 pb-16">
        {/* Background Image */}
        <img
          src={currentCategory.heroImage}
          alt={`${currentCategory.heroTitle} - ${currentCategory.shortTitle} Design in Kozhikode Kerala by AMCOM Interiors`}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] transition-transform duration-700 ease-out hover:scale-105"
        />

        {/* Dark Vignette & Gradient Overlays Merged with Navbar */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        {/* Hero Content Overlay (Matching reference layout) */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full flex flex-col justify-center items-start z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] mb-3">
            AMCOM BESPOKE INTERIORS • CALICUT
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.15] mb-2 drop-shadow-md">
            <span className="font-semibold block">{currentCategory.heroTitle}</span>
            <span className="text-white/90 text-2xl sm:text-4xl md:text-5xl font-light">
              {currentCategory.heroSubtitle}
            </span>
          </h1>

          <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-xl font-light mt-2 mb-6 leading-relaxed hidden sm:block">
            Engineered with 100% genuine BWP 710 marine plywood, German Blum &amp; Hettich hardware, and tailored specifically to your room layout.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowConsultModal(true)}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#174C55] hover:bg-[#123b42] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Estimate
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                <OriginalWhatsAppIcon className="w-3 h-3" />
              </div>
              <span>Chat With Designer</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. BREADCRUMBS & OVERVIEW SECTION (Exactly like D'LIFE reference) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-8 border-b border-[#DCE3E2]">
        
        {/* Breadcrumb line: AMCOM > Bedroom */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-[#687477] uppercase tracking-wider mb-6" aria-label="Breadcrumb">
          <button
            type="button"
            onClick={onBackToHome}
            className="hover:text-[#174C55] transition-colors"
          >
            AMCOM
          </button>
          <span>&gt;</span>
          <span className="hover:text-[#174C55] cursor-pointer" onClick={() => handleCategoryChange(currentCategory.id)}>
            Products
          </span>
          <span>&gt;</span>
          <span className="text-[#174C55] font-semibold">{currentCategory.breadcrumb}</span>
        </nav>

        {/* Reference Title & Detailed Description */}
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-4xl font-light text-[#172022] tracking-tight mb-4">
            {currentCategory.overviewTitle}
          </h2>
          <div className="w-16 h-1 bg-[#174C55] mb-6" />
          <p className="text-sm sm:text-base text-[#465457] leading-relaxed font-light mb-6 whitespace-pre-line">
            {currentCategory.overviewText}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#687477] pt-2">
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#DCE3E2] shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#174C55]" />
              <strong>Warranty:</strong> {currentCategory.warranty}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#DCE3E2] shadow-2xs">
              <Clock className="w-4 h-4 text-[#174C55]" />
              <strong>Handover:</strong> {currentCategory.deliveryTimeline}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#174C55]/10 text-[#174C55] px-3.5 py-1.5 rounded-full border border-[#174C55]/20 font-semibold">
              <Sparkles className="w-4 h-4" />
              Starting from {currentCategory.priceStarting}
            </span>
          </div>
        </div>
      </section>

      {/* 4. 4 TRUST PILLARS STRIP */}
      <section className="bg-white border-b border-[#DCE3E2] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentCategory.highlights.map((h, i) => (
            <div key={i} className="flex flex-col border-l-2 border-[#174C55] pl-4">
              <span className="text-xs sm:text-sm font-semibold text-[#172022] uppercase tracking-wide">
                {h.label}
              </span>
              <span className="text-xs text-[#687477] mt-1 font-light">
                {h.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ROOM ELEMENTS & BESPOKE FURNITURE UNITS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-2">
              KEY ELEMENTS &amp; CUSTOM UNITS
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#172022] tracking-tight">
              What We Make For Your {currentCategory.shortTitle}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#687477] max-w-md font-light leading-relaxed">
            Every element is customized in millimeter precision to suit your room layout, storage demands, and finish preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentCategory.elements.map((elem, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden border border-[#DCE3E2] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Element Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-100">
                <img
                  src={elem.image}
                  alt={`${elem.title} - ${currentCategory.shortTitle} customized by AMCOM Interiors`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#111618]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-mono">
                  0{idx + 1}
                </div>
              </div>

              {/* Element Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#172022] mb-2 group-hover:text-[#174C55] transition-colors">
                    {elem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#465457] leading-relaxed font-light mb-4">
                    {elem.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EDF2F2] space-y-1.5">
                  {elem.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#526366]">
                      <Check className="w-3.5 h-3.5 text-[#174C55] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LAYOUTS & DESIGN CONFIGURATIONS */}
      <section className="bg-[#111618] text-white py-14 sm:py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] font-semibold block mb-2">
              LAYOUTS &amp; DESIGN OPTIONS
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight mb-4">
              Tailored Layouts For Every Floor Plan
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Whether you have a compact flat or an expansive Kerala villa, our interior architects optimize every square inch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategory.layouts.map((layout, lIdx) => (
              <div
                key={lIdx}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#6E9297] uppercase mb-2">
                    Style {lIdx + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {layout.title}
                  </h4>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                    {layout.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] text-[#6E9297] font-medium">
                  <strong>Best for:</strong> {layout.idealFor}
                </div>
              </div>
            ))}
          </div>

          {/* Finishes & Materials Strip */}
          <div className="mt-12 p-6 sm:p-8 bg-white/5 rounded-lg border border-white/10">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#6E9297]" />
              <span>Available Finishes &amp; Surface Treatments</span>
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {currentCategory.finishes.map((fin, fIdx) => (
                <span
                  key={fIdx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-light bg-white/10 text-white/90 border border-white/15"
                >
                  ✓ {fin}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* 8. ESTIMATE & CONSULTATION CTA SECTION */}
      <section className="bg-gradient-to-br from-[#174C55] to-[#0F333A] text-white py-14 sm:py-20 px-6 sm:px-10 lg:px-12 relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-mono tracking-widest uppercase">
              Free Site Survey &amp; 3D Design
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-tight leading-snug">
              Ready to Design Your <span className="font-semibold text-white">{currentCategory.shortTitle}</span>?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm max-w-xl font-light leading-relaxed">
              Book a free in-studio consultation at our Puthiyara Road studio in Kozhikode or schedule a doorstep measurement across Kerala.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShowConsultModal(true)}
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#174C55] hover:bg-zinc-100 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg transition-all"
            >
              Get Free Estimate Now
            </button>
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-black/30 hover:bg-black/50 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full border border-white/20 transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6E9297]" />
              <span>Call {brandInfo.primaryPhone}</span>
            </a>
          </div>
        </div>
      </section>



      {/* 10. FREE ESTIMATE MODAL */}
      {showConsultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative border border-[#DCE3E2]">
            <button
              type="button"
              onClick={() => setShowConsultModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-1 rounded-full text-lg font-bold"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#174C55] font-semibold block mb-1">
                AMCOM FREE ESTIMATE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#172022]">
                Customized {currentCategory.shortTitle}
              </h3>
              <p className="text-xs text-[#687477] mt-1">
                Enter your details to receive an instant quotation and 3D design schedule.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-[#172022] block mb-1 uppercase tracking-wider">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Rahul Menon"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#DCE3E2] focus:border-[#174C55] focus:outline-none bg-[#F8F9F7]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#172022] block mb-1 uppercase tracking-wider">
                  Phone / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="e.g. +91 70128 39079"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#DCE3E2] focus:border-[#174C55] focus:outline-none bg-[#F8F9F7]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#172022] block mb-1 uppercase tracking-wider">
                  Project Location (City / District)
                </label>
                <input
                  type="text"
                  required
                  value={clientLocation}
                  onChange={(e) => setClientLocation(e.target.value)}
                  placeholder="e.g. Kozhikode / Calicut / Kannur"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#DCE3E2] focus:border-[#174C55] focus:outline-none bg-[#F8F9F7]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs">
                  <OriginalWhatsAppIcon className="w-3 h-3" />
                </div>
                <span>Submit &amp; Chat on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
