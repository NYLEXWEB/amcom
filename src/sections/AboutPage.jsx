import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContactIsland from '../components/FloatingContactIsland';
import { brandInfo, stats } from '../data/siteData';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Compass,
  CheckCircle2,
  Phone,
  MessageSquare,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  Clock,
  Hammer,
  Maximize2
} from 'lucide-react';
import { OriginalWhatsAppIcon } from '../components/Icons';

export default function AboutPage({ onBackToHome }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const milestones = [
    {
      year: '1999',
      title: 'Foundation in Kozhikode',
      desc: 'Established as an artisanal joinery and bespoke woodworking studio in Calicut with a vision for uncompromising quality.',
    },
    {
      year: '2008',
      title: 'Modular Precision Workshop',
      desc: 'Adopted European CNC calibration and PUR edge-banding technology to produce moisture-resistant modular kitchens tailored to Kerala’s climate.',
    },
    {
      year: '2016',
      title: 'Full Turnkey Execution',
      desc: 'Expanded into complete architectural interior solutions covering civil, MEP, lighting, acoustic paneling, and custom luxury furnishings.',
    },
    {
      year: '2024+',
      title: '100+ Homes & Modern Era',
      desc: 'A 25+ year legacy crafting bespoke residential and commercial spaces across Kozhikode, Kannur, Wayanad, and Malappuram.',
    },
  ];

  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#174C55]" />,
      title: '710 BWP Marine-Grade Plywood',
      desc: 'Every carcass, cabinet, and wardrobe is crafted exclusively from 100% boiling-water-proof calibrated marine plywood for total termite & moisture protection.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#174C55]" />,
      title: 'Blum & Häfele Precision Hardware',
      desc: 'Certified Austrian Blum and German Häfele soft-close runners, hydraulic lift-ups, and hinges with up to 5-year official warranty.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#174C55]" />,
      title: 'Quiet Kerala Architectural Sensibility',
      desc: 'Designs that breathe with natural ventilation, generous daylight, warm tactile woods, and serene, uncluttered proportions.',
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#174C55]" />,
      title: 'Direct In-House Execution',
      desc: 'Zero subcontracting friction. From 3D architectural blueprinting to on-site installation, your home is managed by our dedicated project engineers.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-white flex flex-col">
      {/* 1. Header with Light Theme for Page Mode */}
      <Header variant="light" currentHash="#/about" />

      {/* 2. Page Sub-Bar with Quick Breadcrumb and Back Button */}
      <div className="bg-white/80 border-b border-[#E9EEEC] sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#174C55] hover:text-[#123b42] uppercase tracking-wider py-1 px-3 rounded-full hover:bg-[#F1F6F6] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#687477]">
            <span>AMCOM</span>
            <span>/</span>
            <span className="text-[#174C55] font-bold">ABOUT OUR STUDIO</span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden border-b border-[#DCE3E2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
            
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#174C55]/10 border border-[#174C55]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#174C55]" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold">
                  ESTABLISHED 1999 • KOZHIKODE, KERALA
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#172022] tracking-[-0.03em] leading-[1.08] mb-6">
                Crafting Timeless <br />
                <span className="font-normal text-[#174C55]">Architectural Interiors</span> <br />
                For Over 25 Years.
              </h1>

              <p className="text-base sm:text-lg text-[#556366] font-normal leading-relaxed mb-8">
                At AMCOM Interiors, we balance architectural discipline with genuine craftsmanship. Founded in Kozhikode in 1999, we design and deliver tailor-made residential spaces, modular kitchens, and turnkey homes that age with poise and understated grace.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  <OriginalWhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Consult an Architect</span>
                </a>

                <a
                  href="#/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-[#172022] border border-[#DCE3E2] text-xs font-semibold uppercase tracking-wider shadow-sm transition-all"
                >
                  <span>Explore Completed Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#174C55]" />
                </a>
              </div>
            </div>

            {/* KEY CREDENTIAL STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-[#DCE3E2]">
              <div className="bg-white p-5 rounded-2xl border border-[#DCE3E2] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light text-[#174C55] block mb-1">25+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#687477]">Years of Excellence</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#DCE3E2] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light text-[#174C55] block mb-1">100+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#687477]">Completed Residences</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#DCE3E2] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light text-[#174C55] block mb-1">45 Days</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#687477]">Guaranteed Handover</span>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#DCE3E2] shadow-xs">
                <span className="text-3xl sm:text-4xl font-light text-[#174C55] block mb-1">5 Years</span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#687477]">Hardware Warranty</span>
              </div>
            </div>

          </div>
        </section>

        {/* ON-SITE ARCHITECTURAL SHOWREEL VIDEO */}
        <section className="py-16 md:py-24 bg-[#0E1315] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#6E9297] font-semibold block mb-2">
                  FACTORY & ON-SITE FOOTAGE
                </span>
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
                  Real Craftsmanship. In Motion.
                </h2>
              </div>
              <p className="text-sm text-white/70 max-w-md font-light leading-relaxed">
                Take an unfiltered look inside our Calicut modular facility and finished project installations across Kerala.
              </p>
            </div>

            <div
              onClick={togglePlay}
              className="relative aspect-video rounded-3xl overflow-hidden bg-black/80 border border-white/15 shadow-2xl cursor-pointer group"
            >
              <video
                ref={videoRef}
                src="/about/VID-20261012-WA0062.mp4"
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

              {/* Video Floating Controls */}
              <div className="absolute top-5 right-5 z-20">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs font-mono tracking-wider transition-all"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-[#6E9297]" />
                      <span className="text-[10px] uppercase text-white/80">Sound Off</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-[#25D366] animate-pulse" />
                      <span className="text-[10px] uppercase text-[#25D366] font-semibold">Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Play / Pause Center Icon */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10">
                  <div className="w-20 h-20 rounded-full bg-white text-[#172022] flex items-center justify-center shadow-2xl pl-1">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/70 pointer-events-none">
                <span>AMCOM WORKSHOP & RESIDENTIAL PORTFOLIO</span>
                <span className="hidden sm:inline">CLICK ANYWHERE TO {isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE PILLARS OF CRAFTSMANSHIP */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block mb-2">
              WHY DISTINGUISHED HOMEOWNERS CHOOSE AMCOM
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#172022] tracking-tight">
              Engineering Built For A Lifetime
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className="bg-white p-8 rounded-3xl border border-[#DCE3E2] shadow-xs hover:border-[#174C55]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F1F6F6] flex items-center justify-center mb-6">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#172022] mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-[#556366] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* THE 25-YEAR TIMELINE JOURNEY */}
        <section className="py-16 sm:py-24 bg-white border-y border-[#DCE3E2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#174C55] font-semibold block mb-2">
                OUR MILESTONES
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#172022] tracking-tight">
                A 25-Year Tradition of Craft
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={m.year}
                  className="relative p-6 rounded-2xl bg-[#F8F9F7] border border-[#E9EEEC] flex flex-col justify-between"
                >
                  <div className="text-3xl font-light text-[#174C55] font-mono mb-4">
                    {m.year}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-[#172022] mb-2">
                      {m.title}
                    </h4>
                    <p className="text-xs text-[#556366] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM STUDIO CTA */}
        <section className="py-16 sm:py-20 bg-[#174C55] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/70 font-semibold block mb-3">
              BEGIN YOUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6">
              Ready to Design Your Signature Home?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              Schedule a private design consultation at our Kozhikode studio or invite our lead architects for a site inspection.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(brandInfo.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
              >
                <OriginalWhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${brandInfo.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#174C55] hover:bg-zinc-100 text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
              >
                <Phone className="w-4 h-4 stroke-[2.4]" />
                <span>Call {brandInfo.primaryPhone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Floating Contact Island */}
      <FloatingContactIsland />
    </div>
  );
}
