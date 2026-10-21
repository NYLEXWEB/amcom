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
  MapPin,
  MessageSquare,
  Phone,
  Search,
  CheckCircle2,
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
    <div className="min-h-screen bg-[#F8F9F7] text-[#172022] font-sans antialiased selection:bg-[#174C55] selection:text-[#F8F9F7]">
      {/* Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F8F9F7]/95 backdrop-blur-md border-b border-[#DCE3E2] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-zinc-100 text-[#172022] text-xs font-semibold tracking-wider uppercase rounded-full border border-[#DCE3E2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#174C55]" />
            <span>Back to Home</span>
          </button>

          {/* Center Brand Logo */}
          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={onBackToHome}
          >
            <div className="bg-white p-1 rounded-sm border border-[#DCE3E2]">
              <img
                src="/logo-bg.png"
                alt="AMCOM Interiors"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#687477] hidden sm:inline">
              ON-SITE ARCHIVE (13)
            </span>
          </div>

          {/* Right Action: Sound & Direct Call */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              onClick={handleToggleGlobalMute}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-100 text-[#172022] rounded-full text-xs font-mono uppercase tracking-wider border border-[#DCE3E2] transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-[#687477]" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#174C55]" />
              )}
              <span className="hidden sm:inline">
                {isMuted ? 'Muted' : 'Sound On'}
              </span>
            </button>

            <a
              href={`tel:${brandInfo.primaryPhoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold tracking-wider uppercase rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Studio</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10 sm:py-16">
        {/* Page Title */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297] block mb-2">
            ON-SITE VIDEO ARCHIVES
          </span>
          <h1 className="text-3xl sm:text-5xl font-light tracking-[-0.035em] text-[#172022] mb-3">
            THE CRAFT ARCHIVE
          </h1>
          <p className="text-sm sm:text-base text-[#687477] leading-relaxed font-normal">
            13 unedited project reels and client handovers executed by AMCOM Interiors across Kozhikode, Calicut, Kannur, and Kerala.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#DCE3E2]">
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
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors border flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#174C55] text-white border-[#174C55]'
                      : 'bg-white text-[#687477] border-[#DCE3E2] hover:text-[#172022] hover:border-[#172022]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-zinc-100 text-[#687477]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#687477]" />
            <input
              type="text"
              placeholder="Search by area or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#DCE3E2] rounded-full pl-10 pr-4 py-2 text-xs text-[#172022] placeholder-[#687477] focus:outline-none focus:border-[#174C55]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#687477] hover:text-[#172022]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredVideos.map((item) => {
            const isPlaying = playingId === item.id;

            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-xl border border-[#DCE3E2] overflow-hidden"
              >
                {/* Video Frame */}
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
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Play / Pause Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-white/95 text-[#172022] border border-[#DCE3E2] transition-all duration-300 ${
                        isPlaying
                          ? 'opacity-0 group-hover:opacity-90 scale-90'
                          : 'opacity-90 group-hover:scale-105'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Expand Lightbox Button */}
                  <button
                    type="button"
                    onClick={(e) => openLightbox(item, e)}
                    title="Open full view"
                    className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Details */}
                <div className="p-3.5 flex flex-col justify-between flex-1">


                  {/* WhatsApp Direct Link */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-[#687477]">
                      {item.duration}
                    </span>

                    <a
                      href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hello AMCOM Interiors, I would like to consult about "${item.title}" (${item.location}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#174C55] hover:text-[#123b42] font-semibold"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Consult</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* LIGHTBOX THEATER MODAL (Clean Light / Dark Overlay) */}
      {lightboxVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white border border-[#DCE3E2] rounded-2xl max-w-3xl w-full overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-3 right-3 z-40 p-2 rounded-full bg-white/80 hover:bg-white text-[#172022] border border-[#DCE3E2] transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left: Video */}
            <div className="md:w-3/5 bg-black relative flex items-center justify-center aspect-[9/16] md:aspect-auto max-h-[500px]">
              <video
                ref={lightboxVideoRef}
                src={lightboxVideo.src}
                autoPlay
                loop
                playsInline
                muted={lightboxMuted}
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between bg-black/60 px-3 py-2 rounded-full">
                <button
                  type="button"
                  onClick={toggleLightboxPlay}
                  className="p-1 text-white hover:text-zinc-200"
                >
                  {lightboxPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleLightboxMute}
                  className="p-1 text-white hover:text-zinc-200"
                >
                  {lightboxMuted ? (
                    <VolumeX className="w-4 h-4 text-rose-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Right: Info */}
            <div className="md:w-2/5 p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E9297] block mb-1">
                  {lightboxVideo.category}
                </span>
                <h2 className="text-lg font-medium text-[#172022] mb-1">
                  {lightboxVideo.title}
                </h2>
                <p className="text-xs font-mono text-[#687477] mb-4">
                  {lightboxVideo.location}
                </p>
                <p className="text-xs text-[#687477] leading-relaxed mb-4">
                  {lightboxVideo.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {lightboxVideo.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#172022]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#174C55]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCE3E2]">
                <a
                  href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hello AMCOM Interiors, I would like to discuss "${lightboxVideo.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#174C55] hover:bg-[#123b42] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
