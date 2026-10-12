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
      {/* 1. TOP STICKY NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-[#111618]/95 backdrop-blur-md text-white border-b border-white/10 py-3 sm:py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Back & Brand */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase rounded-full border border-white/20 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#6E9297]" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </button>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
              }}
              className="flex items-center gap-2"
            >
              <div className="bg-white/95 p-1 rounded-sm shadow-sm border border-white/30">
                <img src="/logo-bg.png" alt="AMCOM Interiors" className="h-6 sm:h-7 w-auto object-contain" />
              </div>
            </a>
          </div>

          {/* Quick Room Category Switcher Dropdown / Pills */}
          <div className="hidden lg:flex items-center space-x-1 bg-black/40 p-1 rounded-full border border-white/15">
            {productCategories.map((cat) => {
              const isActive = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-[#174C55] text-white shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.navLabel}
                </button>
              );
            })}
          </div>

          {/* Right Action: Call & Estimate CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#6E9297]" />
              <span className="hidden md:inline">{brandInfo.primaryPhone}</span>
              <span className="md:hidden">Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Category Scroll Strip */}
        <div className="lg:hidden mt-2 pt-2 border-t border-white/10 px-4 overflow-x-auto scrollbar-none flex gap-2">
          {productCategories.map((cat) => {
            const isActive = cat.id === currentCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#174C55] text-white font-bold'
                    : 'bg-white/10 text-white/75 hover:bg-white/20'
                }`}
              >
                {cat.navLabel}
              </button>
            );
          })}
        </div>
      </header>

      {/* 2. D'LIFE-INSPIRED HERO BANNER */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] overflow-hidden select-none bg-black">
        {/* Background Image */}
        <img
          src={currentCategory.heroImage}
          alt={currentCategory.heroTitle}
          className="w-full h-full object-cover object-center filter brightness-[0.82] transition-transform duration-700 ease-out hover:scale-105"
        />

        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Hero Content Overlay (Matching reference layout) */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col justify-center items-start z-10">
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
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full border border-white/30 transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Chat With Designer</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Badges on Right Side (Reference Inspired) */}
        <div className="hidden md:flex flex-col gap-2 absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:pr-4 transition-all"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
              WhatsApp
            </span>
          </a>
          <button
            type="button"
            onClick={() => setShowConsultModal(true)}
            className="group flex items-center gap-2 bg-[#174C55] text-white p-3 rounded-full shadow-lg hover:pr-4 transition-all"
            title="Request Free Estimate"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
              Free Estimate
            </span>
          </button>
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
                  alt={elem.title}
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

      {/* 7. REAL AMCOM CRAFT GALLERY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-1">
              REAL PROJECT SHOWCASE
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight">
              Executed {currentCategory.shortTitle} Projects in Kerala
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentCategory.gallery.map((item, gIdx) => (
            <div
              key={gIdx}
              className="group relative rounded-lg overflow-hidden h-64 bg-zinc-200 border border-[#DCE3E2] shadow-xs"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase text-[#6E9297] block">
                  AMCOM CALICUT
                </span>
                <p className="text-xs sm:text-sm font-semibold tracking-wide leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
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

      {/* 9. EXPLORE OTHER PRODUCT CATEGORIES BOTTOM SWITCHER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 border-t border-[#DCE3E2]">
        <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#687477] mb-6 text-center font-semibold">
          EXPLORE OTHER ROOM CATEGORIES
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {productCategories.map((cat) => {
            const isActive = cat.id === currentCategory.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`p-3.5 sm:p-4 rounded-lg border text-center transition-all ${
                  isActive
                    ? 'bg-[#174C55] text-white border-[#174C55] shadow-sm'
                    : 'bg-white hover:bg-zinc-100 text-[#172022] border-[#DCE3E2]'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold block mb-1">
                  {cat.navLabel}
                </span>
                <span className={`text-[10px] block ${isActive ? 'text-white/70' : 'text-[#687477]'}`}>
                  From {cat.priceStarting}
                </span>
              </button>
            );
          })}
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
                  placeholder="e.g. +91 94474 15588"
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
                className="w-full py-3 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit &amp; Chat on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
