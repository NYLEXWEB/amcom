import React, { useState } from 'react';
import {
  fullHomePackages,
  singleRoomPackages,
  packageComparisonTable,
  packageFaqs,
} from '../data/packagesData';
import { brandInfo } from '../data/siteData';
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Calculator,
  Layers,
  ArrowRight,
  HelpCircle,
  FileText,
  BadgeCheck,
} from 'lucide-react';

export default function PackagesPage({ onBackToHome, onNavigateToProduct }) {
  const [activeTab, setActiveTab] = useState('full-home'); // 'full-home' | 'single-room'
  const [selectedBhk, setSelectedBhk] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Estimator State
  const [calcBhk, setCalcBhk] = useState('2bhk');
  const [calcFinish, setCalcFinish] = useState('acrylic'); // 'laminate' | 'acrylic' | 'veneer'
  const [calcFalseCeiling, setCalcFalseCeiling] = useState(true);

  // Filter full home packages
  const filteredPackages = fullHomePackages.filter((pkg) => {
    if (selectedBhk === 'all') return true;
    if (selectedBhk === '1bhk') return pkg.id.includes('1bhk');
    if (selectedBhk === '2bhk') return pkg.id.includes('2bhk');
    if (selectedBhk === '3bhk') return pkg.id.includes('3bhk');
    if (selectedBhk === '4bhk') return pkg.id.includes('4bhk');
    return true;
  });

  // Calculate live estimate
  const getEstimatedPrice = () => {
    let base = 495000;
    if (calcBhk === '1bhk') base = 285000;
    if (calcBhk === '2bhk') base = 495000;
    if (calcBhk === '3bhk') base = 765000;
    if (calcBhk === '4bhk') base = 1185000;

    if (calcFinish === 'acrylic') base += base * 0.12;
    if (calcFinish === 'veneer') base += base * 0.22;
    if (calcFalseCeiling) base += calcBhk === '1bhk' ? 45000 : calcBhk === '2bhk' ? 75000 : calcBhk === '3bhk' ? 115000 : 160000;

    return Math.round(base).toLocaleString('en-IN');
  };

  const handleWhatsAppBooking = (packageName, startingPrice) => {
    const msg = encodeURIComponent(
      `Hello AMCOM Interiors, I am interested in the ${packageName} (${startingPrice}). Please share the detailed quotation, material specifications, and available consultation dates.`
    );
    window.open(`https://wa.me/${brandInfo.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans selection:bg-[#174C55] selection:text-white">
      {/* 1. TOP STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-[#111618]/95 backdrop-blur-md text-white border-b border-white/10 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#6E9297] hidden md:inline">
                OFFICIAL PACKAGES &amp; PRICING
              </span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#6E9297]" />
              <span className="hidden sm:inline">{brandInfo.primaryPhone}</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello AMCOM Interiors, I would like to enquire about your interior design packages.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. PACKAGES HERO BANNER */}
      <section className="bg-[#111618] text-white py-16 sm:py-20 px-6 sm:px-10 border-b border-white/10 relative overflow-hidden select-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#174C55]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#174C55]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] mb-4">
            <BadgeCheck className="w-4 h-4 text-[#25D366]" />
            <span>100% TRANSPARENT PRICING • NO HIDDEN COSTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight mb-4">
            CURATED INTERIOR PACKAGES
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Honest package pricing crafted with 100% genuine BWP 710 Marine Plywood, German soft-close fittings, and a strict 40-day delivery guarantee across Calicut, Kannur, and Kerala.
          </p>

          {/* Quick Trust Badges Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4 text-[#6E9297]" />
              10-Year Replacement Warranty
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Clock className="w-4 h-4 text-[#6E9297]" />
              Guaranteed 40-Day Handover
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/15">
              <Sparkles className="w-4 h-4 text-[#6E9297]" />
              Free 3D Architectural Design
            </span>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT: PACKAGE TABS & BHK SELECTOR */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Navigation Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs font-mono text-[#687477] uppercase tracking-wider mb-8" aria-label="Breadcrumb">
          <button type="button" onClick={onBackToHome} className="hover:text-[#174C55] transition-colors">
            AMCOM
          </button>
          <span>&gt;</span>
          <span className="text-[#174C55] font-semibold">Packages &amp; Pricing</span>
        </nav>

        {/* Tab Switcher: Full Home vs Single Room */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-8 border-b border-[#DCE3E2] gap-4">
          <div className="flex items-center bg-zinc-200/80 p-1.5 rounded-full border border-[#DCE3E2] w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('full-home')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'full-home'
                  ? 'bg-[#174C55] text-white shadow-sm'
                  : 'text-[#465457] hover:text-[#172022]'
              }`}
            >
              Full-Home Packages (1 / 2 / 3 / 4 BHK)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('single-room')}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === 'single-room'
                  ? 'bg-[#174C55] text-white shadow-sm'
                  : 'text-[#465457] hover:text-[#172022]'
              }`}
            >
              Single-Room Express Packages
            </button>
          </div>

          {/* If Full Home, BHK quick filter */}
          {activeTab === 'full-home' && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-mono text-[#687477] uppercase mr-1">Filter BHK:</span>
              {[
                { id: 'all', label: 'All BHK' },
                { id: '1bhk', label: '1 BHK' },
                { id: '2bhk', label: '2 BHK' },
                { id: '3bhk', label: '3 BHK' },
                { id: '4bhk', label: '4 BHK / Villa' },
              ].map((bhk) => (
                <button
                  key={bhk.id}
                  type="button"
                  onClick={() => setSelectedBhk(bhk.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedBhk === bhk.id
                      ? 'bg-[#172022] text-white'
                      : 'bg-white text-[#526366] border border-[#DCE3E2] hover:bg-zinc-100'
                  }`}
                >
                  {bhk.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 4. FULL HOME PACKAGES CARDS */}
        {activeTab === 'full-home' && (
          <div className="space-y-10 sm:space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between ${
                    pkg.popular ? 'border-[#174C55] ring-2 ring-[#174C55]/20' : 'border-[#DCE3E2]'
                  }`}
                >
                  <div>
                    {/* Card Header & Badge */}
                    <div className="p-6 sm:p-8 bg-gradient-to-b from-[#FAFBF9] to-white border-b border-[#EDF2F2]">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${pkg.badgeColor}`}
                        >
                          {pkg.badge}
                        </span>
                        <div className="text-right">
                          <span className="text-xs text-[#687477] line-through block font-mono">
                            {pkg.originalPrice}
                          </span>
                          <span className="text-2xl sm:text-3xl font-bold text-[#174C55] tracking-tight">
                            {pkg.startingPrice}
                          </span>
                          <span className="text-[11px] text-[#687477] block font-mono">
                            all-inclusive baseline*
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#172022] mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#526366] font-light leading-relaxed mb-4">
                        {pkg.tagline}
                      </p>

                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#EDF2F2] text-center text-xs">
                        <div className="bg-[#F8F9F7] p-2 rounded border border-[#EDF2F2]">
                          <span className="text-[10px] text-[#687477] uppercase block font-mono">Area</span>
                          <strong className="text-[#172022] font-semibold">{pkg.approxArea}</strong>
                        </div>
                        <div className="bg-[#F8F9F7] p-2 rounded border border-[#EDF2F2]">
                          <span className="text-[10px] text-[#687477] uppercase block font-mono">Handover</span>
                          <strong className="text-[#172022] font-semibold">{pkg.deliveryTimeline}</strong>
                        </div>
                        <div className="bg-[#F8F9F7] p-2 rounded border border-[#EDF2F2]">
                          <span className="text-[10px] text-[#687477] uppercase block font-mono">Warranty</span>
                          <strong className="text-[#172022] font-semibold">{pkg.warranty}</strong>
                        </div>
                      </div>
                    </div>

                    {/* Room by Room Inclusions Breakdown */}
                    <div className="p-6 sm:p-8 space-y-5">
                      <div className="text-xs font-mono uppercase tracking-widest text-[#6E9297] font-semibold">
                        DETAILED INCLUSIONS CHECKLIST:
                      </div>

                      {pkg.inclusions.map((roomSec, rIdx) => (
                        <div key={rIdx} className="bg-[#F8F9F7] p-4 rounded-lg border border-[#EDF2F2]">
                          <h4 className="text-xs sm:text-sm font-bold text-[#172022] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#174C55]" />
                            <span>{roomSec.room}</span>
                          </h4>
                          <ul className="space-y-1.5">
                            {roomSec.items.map((item, iIdx) => (
                              <li key={iIdx} className="text-xs text-[#526366] flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-6 sm:p-8 bg-[#FAFBF9] border-t border-[#EDF2F2] flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppBooking(pkg.name, pkg.startingPrice)}
                      className="w-full sm:flex-1 py-3 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-[#25D366]" />
                      <span>Book Package on WhatsApp</span>
                    </button>
                    <a
                      href={`tel:${brandInfo.primaryPhoneRaw}`}
                      className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-zinc-100 text-[#172022] border border-[#DCE3E2] text-xs font-semibold uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>Call Designer</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SINGLE ROOM EXPRESS PACKAGES */}
        {activeTab === 'single-room' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight mb-2">
                Need Interiors For Just One Room?
              </h3>
              <p className="text-xs sm:text-sm text-[#687477]">
                Get our standalone room packages with the same BWP 710 marine plywood quality and 10-year warranty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {singleRoomPackages.map((room) => (
                <div
                  key={room.id}
                  className="bg-white rounded-xl p-6 border border-[#DCE3E2] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#174C55] font-semibold block mb-1">
                      {room.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#172022] mb-1">
                      {room.title}
                    </h4>
                    <p className="text-xs text-[#687477] font-light mb-4">
                      {room.idealFor}
                    </p>

                    <div className="bg-[#F8F9F7] p-3 rounded-lg border border-[#EDF2F2] mb-4">
                      <span className="text-[10px] text-[#687477] uppercase block font-mono">Starting Price</span>
                      <span className="text-xl font-bold text-[#174C55]">{room.price}</span>
                      <span className="text-[11px] text-[#687477] block font-mono">
                        Handover: {room.timeline}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {room.inclusions.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#526366] flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleWhatsAppBooking(room.title, room.price)}
                    className="w-full py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all"
                  >
                    Enquire on WhatsApp
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. INTERACTIVE COST ESTIMATOR CALCULATOR */}
        <section className="mt-16 sm:mt-24 bg-white rounded-2xl p-6 sm:p-10 border border-[#DCE3E2] shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-2 text-[#174C55]">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] font-bold">
                INSTANT BUDGET ESTIMATOR
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight mb-3">
              Calculate Your Custom Interior Budget
            </h3>
            <p className="text-xs sm:text-sm text-[#687477] font-light mb-8">
              Adjust your apartment size, surface finish tier, and ceiling options to preview an instant realistic price estimate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#EDF2F2]">
              {/* BHK Choice */}
              <div>
                <label className="text-xs font-bold text-[#172022] uppercase tracking-wider block mb-2">
                  1. Home Configuration
                </label>
                <div className="space-y-2">
                  {[
                    { id: '1bhk', label: '1 BHK Apartment' },
                    { id: '2bhk', label: '2 BHK Flat / Villa' },
                    { id: '3bhk', label: '3 BHK Villa / Flat' },
                    { id: '4bhk', label: '4 BHK Luxury Villa' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCalcBhk(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                        calcBhk === item.id
                          ? 'bg-[#174C55] text-white border-[#174C55]'
                          : 'bg-[#F8F9F7] text-[#172022] border-[#DCE3E2] hover:bg-zinc-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Surface Finish Tier */}
              <div>
                <label className="text-xs font-bold text-[#172022] uppercase tracking-wider block mb-2">
                  2. Exterior Finish Quality
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'laminate', label: '1mm Matte Laminate', desc: 'Standard durable finish' },
                    { id: 'acrylic', label: 'High-Gloss Acrylic', desc: 'Sleek mirror shine' },
                    { id: 'veneer', label: 'Natural Teak Veneer / PU', desc: 'Ultra luxury organic wood' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCalcFinish(item.id)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs font-medium border transition-all ${
                        calcFinish === item.id
                          ? 'bg-[#174C55] text-white border-[#174C55]'
                          : 'bg-[#F8F9F7] text-[#172022] border-[#DCE3E2] hover:bg-zinc-100'
                      }`}
                    >
                      <span className="font-semibold block">{item.label}</span>
                      <span className={`text-[10px] ${calcFinish === item.id ? 'text-white/80' : 'text-[#687477]'}`}>
                        {item.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons & Live Calculation Box */}
              <div className="bg-[#111618] text-white rounded-xl p-6 flex flex-col justify-between border border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E9297] block mb-1">
                    ESTIMATED BUDGET
                  </span>
                  <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                    ₹{getEstimatedPrice()}*
                  </div>
                  <p className="text-[11px] text-white/60 font-light mb-4">
                    Based on 100% Calibrated BWP 710 Marine Plywood &amp; German Soft-Close Fittings.
                  </p>

                  <label className="flex items-center gap-2 cursor-pointer bg-white/10 p-2.5 rounded border border-white/15 text-xs text-white/90">
                    <input
                      type="checkbox"
                      checked={calcFalseCeiling}
                      onChange={(e) => setCalcFalseCeiling(e.target.checked)}
                      className="accent-[#174C55] rounded"
                    />
                    <span>Include False Ceiling &amp; Cove Lights</span>
                  </label>
                </div>

                <div className="pt-4 mt-4 border-t border-white/15">
                  <a
                    href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                      `Hello AMCOM, I used your package estimator for a ${calcBhk.toUpperCase()} with ${calcFinish} finish (Estimate: ₹${getEstimatedPrice()}). Please share the full itemized BOQ.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Detailed BOQ on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FULL SPECIFICATION COMPARISON MATRIX TABLE */}
        <section className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-2">
              SIDE-BY-SIDE EVALUATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight">
              Package Specification Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#687477] font-light mt-1">
              Compare materials, hardware, and coverage across all AMCOM package tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#DCE3E2] bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#111618] text-white">
                  {packageComparisonTable.columns.map((col, idx) => (
                    <th key={idx} className="p-4 font-semibold uppercase tracking-wider text-xs border-r border-white/10 last:border-none">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDF2F2]">
                {packageComparisonTable.rows.map((row, rIdx) => (
                  <tr key={rIdx} className={row.highlight ? 'bg-[#174C55]/5 font-bold' : 'hover:bg-zinc-50'}>
                    <td className="p-4 font-semibold text-[#172022] bg-[#FAFBF9] border-r border-[#EDF2F2]">
                      {row.feature}
                    </td>
                    {row.values.map((val, vIdx) => (
                      <td key={vIdx} className="p-4 text-[#526366] border-r border-[#EDF2F2] last:border-none">
                        {row.highlight ? (
                          <span className="text-sm sm:text-base font-bold text-[#174C55]">{val}</span>
                        ) : (
                          val
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. PACKAGES FAQ ACCORDION */}
        <section className="mt-16 sm:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] font-semibold block mb-2">
              QUESTIONS &amp; CLARITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#172022] tracking-tight">
              Frequently Asked Questions About Packages
            </h3>
          </div>

          <div className="space-y-3">
            {packageFaqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white rounded-lg border border-[#DCE3E2] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#172022] hover:text-[#174C55]"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#174C55] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#687477] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#526366] font-light leading-relaxed border-t border-[#EDF2F2] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. BOTTOM WHITE-GLOVE CTA */}
        <section className="mt-16 sm:mt-24 bg-gradient-to-r from-[#174C55] to-[#0E3238] rounded-2xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
              Want a Tailored Quote For Your Floor Plan?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Share your 2D CAD floor plan or schedule our engineers for a direct site visit in Kozhikode, Kannur, Malappuram or Wayanad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                'Hello AMCOM, I would like to send my floor plan and get a customized package quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#174C55] hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Send Plan on WhatsApp</span>
            </a>
            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-black/30 hover:bg-black/50 text-white text-xs font-semibold uppercase tracking-wider rounded-full border border-white/20 transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6E9297]" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}
