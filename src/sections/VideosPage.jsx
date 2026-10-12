import React, { useState, useRef, useEffect } from 'react';
import { videoList, videoCategories } from '../data/videosData';
import { brandInfo } from '../data/siteData';
import {
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  Sparkles,
  MapPin,
  MessageSquare,
  Phone,
  Film,
  Search,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';

export default function VideosPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [lightboxPlaying, setLightboxPlaying] = useState(true);
  const [lightboxMuted, setLightboxMuted] = useState(false);

  const videoRefs = useRef({});
  const lightboxVideoRef = useRef(null);

  // Filtered videos
  const filteredVideos = videoList.filter((item) => {
    const matchesCategory =
      activeCategory === 'ALL' || item.tag === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleTogglePlay = (id, e) => {
    if (e) e.stopPropagation();
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause currently playing video
      if (playingId && videoRefs.current[playingId]) {
        videoRefs.current[playingId].pause();
      }
      video.play().catch(() => {});
      setPlayingId(id);
    }
  };

  const handleToggleGlobalMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.muted = nextMuted;
    });
  };

  const openLightbox = (video, e) => {
    if (e) e.stopPropagation();
    // Pause any playing grid video
    if (playingId && videoRefs.current[playingId]) {
      videoRefs.current[playingId].pause();
      setPlayingId(null);
    }
    setLightboxVideo(video);
    setLightboxPlaying(true);
    setLightboxMuted(false);
  };

  const closeLightbox = () => {
    if (lightboxVideoRef.current) {
      lightboxVideoRef.current.pause();
    }
    setLightboxVideo(null);
  };

  const toggleLightboxPlay = () => {
    if (!lightboxVideoRef.current) return;
    if (lightboxPlaying) {
      lightboxVideoRef.current.pause();
      setLightboxPlaying(false);
    } else {
      lightboxVideoRef.current.play().catch(() => {});
      setLightboxPlaying(true);
    }
  };

  const toggleLightboxMute = () => {
    if (!lightboxVideoRef.current) return;
    const next = !lightboxMuted;
    lightboxVideoRef.current.muted = next;
    setLightboxMuted(next);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1315] text-[#F8F9F7] font-sans antialiased selection:bg-[#174C55] selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-[#174C55]/12 rounded-full blur-[160px]" />
        <div className="absolute top-2/3 right-1/4 w-[500px] h-[500px] bg-[#6E9297]/10 rounded-full blur-[140px]" />
      </div>

      {/* Sticky Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#0E1315]/90 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/5 hover:bg-white/15 text-white text-xs font-semibold tracking-wider uppercase rounded-full border border-white/15 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 text-[#6E9297] group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Center Brand Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={onBackToHome}
          >
            <div className="bg-white/95 p-1 sm:p-1.5 rounded-sm border border-white/20">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6E9297]">
                ON-SITE VIDEO ARCHIVE
              </span>
              <span className="text-xs font-semibold text-white tracking-wider">
                13 REAL SITE REELS
              </span>
            </div>
          </div>

          {/* Right Action: Sound & Direct Call */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleToggleGlobalMute}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-mono uppercase tracking-wider border border-white/20 transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span className="hidden sm:inline">
                {isMuted ? 'Muted' : 'Sound On'}
              </span>
            </button>

            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors border border-white/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* Page Title & Mission Strip */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#174C55]/25 border border-[#174C55]/50 rounded-full mb-4">
            <Film className="w-3.5 h-3.5 text-[#6E9297]" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A3C8CE]">
              ON-SITE CRAFT ARCHIVES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[-0.035em] text-white mb-4">
            THE CRAFT ARCHIVE IN MOTION
          </h1>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
            Explore all 13 on-site project reels and client handovers executed by AMCOM Interiors.
            From double-height living rooms in Kozhikode to bespoke modular kitchens and turnkey suites across Kerala—all unedited real site reality.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl font-light text-white font-mono">13</div>
              <div className="text-[11px] font-mono text-[#6E9297] uppercase tracking-wider">
                Project Reels
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-white font-mono">100%</div>
              <div className="text-[11px] font-mono text-[#6E9297] uppercase tracking-wider">
                Real Site Craft
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-white font-mono">25+</div>
              <div className="text-[11px] font-mono text-[#6E9297] uppercase tracking-wider">
                Years Legacy
              </div>
            </div>
            <div>
              <div className="text-2xl font-light text-white font-mono">0%</div>
              <div className="text-[11px] font-mono text-[#6E9297] uppercase tracking-wider">
                3D Renders
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {videoCategories.map((cat) => {
              const count =
                cat === 'ALL'
                  ? videoList.length
                  : videoList.filter((v) => v.tag === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-200 border flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#174C55] text-white border-white/30 shadow-lg shadow-[#174C55]/30'
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search by area or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#174C55] focus:ring-1 focus:ring-[#174C55] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Video Reel Cards Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
            <Film className="w-10 h-10 text-white/30 mx-auto mb-3" />
            <p className="text-white/70 text-sm font-mono uppercase tracking-wider">
              No project videos found matching your filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('ALL');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#174C55] text-white text-xs font-mono uppercase tracking-wider rounded-full hover:bg-[#123b42] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredVideos.map((item, index) => {
              const isPlaying = playingId === item.id;
              const whatsappProjectUrl = `https://wa.me/${
                brandInfo.whatsappNumber
              }?text=${encodeURIComponent(
                `Hello AMCOM Interiors, I was viewing your on-site reel "${item.title}" (${item.location}). I would like to discuss a similar project.`
              )}`;

              return (
                <div
                  key={item.id}
                  className="group relative bg-[#13191B] rounded-2xl overflow-hidden border border-white/10 hover:border-[#174C55] transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#174C55]/20"
                >
                  {/* Top Video Container (9:16 Aspect Ratio) */}
                  <div
                    onClick={(e) => handleTogglePlay(item.id, e)}
                    className="relative aspect-[9/16] w-full overflow-hidden bg-black cursor-pointer select-none"
                  >
                    <video
                      ref={(el) => (videoRefs.current[item.id] = el)}
                      src={item.src}
                      loop
                      playsInline
                      muted={isMuted}
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Layer */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 transition-opacity duration-300 ${
                        isPlaying ? 'opacity-35 hover:opacity-70' : 'opacity-70'
                      }`}
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider uppercase text-[#A3C8CE]">
                        {item.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80">
                        <MapPin className="w-2.5 h-2.5 text-[#6E9297]" />
                        <span>{item.location.split(',')[0]}</span>
                      </span>
                    </div>

                    {/* Center Animated Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border ${
                          isPlaying
                            ? 'bg-black/60 text-white border-white/30 opacity-0 group-hover:opacity-100 scale-90'
                            : 'bg-white/95 text-black border-white shadow-2xl scale-100 opacity-90 group-hover:scale-110'
                        }`}
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-white text-white" />
                        ) : (
                          <Play className="w-5 h-5 fill-black text-black ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Quick Lightbox Expand Action */}
                    <button
                      type="button"
                      onClick={(e) => openLightbox(item, e)}
                      title="Open full player"
                      className="absolute bottom-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-[#174C55] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Bottom Metadata inside video frame */}
                    <div className="absolute bottom-3 left-3 right-12 z-20 pointer-events-none">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E9297] block mb-0.5">
                        {item.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-medium text-white tracking-tight leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Description & Actions (below video container) */}
                  <div className="p-4 bg-[#111618] border-t border-white/10 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[12px] text-white/65 leading-relaxed line-clamp-2 mb-3">
                        {item.description}
                      </p>

                      {/* Specs Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.specs.slice(0, 2).map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#174C55]" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: WhatsApp + Status */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-white/40">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isPlaying
                              ? 'bg-emerald-400 animate-pulse'
                              : 'bg-white/20'
                          }`}
                        />
                        <span>{isPlaying ? 'ACTIVE' : `REEL #${index + 1}`}</span>
                      </span>

                      <a
                        href={whatsappProjectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 hover:bg-[#25D366] text-white/80 hover:text-white rounded-full text-[11px] font-mono tracking-wider transition-colors border border-white/10 hover:border-transparent"
                      >
                        <MessageSquare className="w-3 h-3 text-emerald-400 group-hover:text-white" />
                        <span>Consult</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Studio Consultation Banner */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#174C55]/40 via-[#111618] to-[#174C55]/30 border border-[#174C55]/50 relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3C8CE] block mb-2">
              LOOKING TO BUILD OR RENOVATE?
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
              Bring AMCOM's On-Site Craftsmanship to Your Residence
            </h2>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Every video in this archive represents a home delivered to perfection in Kerala.
              Visit our studio at Puthiyara Rd, Calicut or schedule an on-site consultation.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${brandInfo.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#174C55]" />
                <span>Call {brandInfo.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello AMCOM Interiors, I would like to schedule a site consultation for my residence.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider rounded-full transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* LIGHTBOX THEATER MODAL */}
      {lightboxVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-[#111618] border border-white/20 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-200"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Video Player */}
            <div className="md:w-3/5 bg-black relative flex items-center justify-center aspect-[9/16] md:aspect-auto max-h-[500px] md:max-h-[640px]">
              <video
                ref={lightboxVideoRef}
                src={lightboxVideo.src}
                autoPlay
                loop
                playsInline
                muted={lightboxMuted}
                className="w-full h-full object-contain"
              />

              {/* Player Overlay Controls */}
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
                <button
                  type="button"
                  onClick={toggleLightboxPlay}
                  className="p-1 text-white hover:text-[#6E9297] transition-colors"
                >
                  {lightboxPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleLightboxMute}
                    className="p-1 text-white hover:text-[#6E9297] transition-colors"
                  >
                    {lightboxMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                    )}
                  </button>
                  <span className="text-[11px] font-mono text-white/60">
                    {lightboxMuted ? 'Muted' : 'Audio On'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Metadata & Inquiries */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#13191B]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#174C55]/30 text-[#A3C8CE] border border-[#174C55]/60 text-[10px] font-mono uppercase tracking-wider">
                    {lightboxVideo.tag}
                  </span>
                  <span className="text-[10px] font-mono text-white/50">
                    {lightboxVideo.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-2">
                  {lightboxVideo.title}
                </h2>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#6E9297] mb-5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{lightboxVideo.location}</span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-6">
                  {lightboxVideo.description}
                </p>

                {/* Craft Specs */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white/50 block">
                    Execution Details:
                  </span>
                  {lightboxVideo.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-white/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-6 border-t border-white/10 space-y-2.5">
                <a
                  href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hello AMCOM Interiors, I am interested in the execution shown in "${lightboxVideo.title}" (${lightboxVideo.location}). Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  href={`tel:${brandInfo.primaryPhoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded-full transition-colors border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6E9297]" />
                  <span>Call {brandInfo.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
