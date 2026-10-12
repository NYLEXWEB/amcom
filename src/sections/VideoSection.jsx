import React, { useState, useRef, useEffect } from 'react';
import { videoList } from '../data/videosData';
import { brandInfo } from '../data/siteData';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  Sparkles,
  MapPin,
  Film,
  X,
  MessageSquare,
  Phone,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export default function VideoSection({ onNavigateToVideos }) {
  // Show first 3 videos initially on the home page as requested
  const featuredVideos = videoList.slice(0, 3);

  const [playingId, setPlayingId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progresses, setProgresses] = useState({});
  const [lightboxVideo, setLightboxVideo] = useState(null);
  const [lightboxPlaying, setLightboxPlaying] = useState(true);
  const [lightboxMuted, setLightboxMuted] = useState(false);

  const videoRefs = useRef({});
  const lightboxRef = useRef(null);

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

  const handleToggleMute = (e) => {
    if (e) e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.muted = nextMuted;
    });
  };

  const handleTimeUpdate = (id) => {
    const video = videoRefs.current[id];
    if (video && video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      setProgresses((prev) => ({ ...prev, [id]: pct }));
    }
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
    if (lightboxRef.current) {
      lightboxRef.current.pause();
    }
    setLightboxVideo(null);
  };

  return (
    <section
      id="videos"
      className="py-24 sm:py-32 bg-[#0C1113] text-[#F8F9F7] border-b border-white/10 relative overflow-hidden select-none"
    >
      {/* Cinematic ambient glow backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#174C55]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#6E9297]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle architectural vertical lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex justify-between max-w-7xl mx-auto px-6">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 mb-14 border-b border-white/10 gap-8">
          <div>
            {/* Monospace Pill Beacon */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#A3C8CE]">
                ON-SITE CRAFT IN MOTION
              </span>
              <span className="text-white/30">•</span>
              <span className="text-[10px] font-mono uppercase text-white/60">
                LIVE SITE DOCUMENTATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-[-0.035em] leading-[1.15]">
              AUTHENTIC SITE FOOTAGE, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C7DADB] to-[#6E9297] font-normal">
                UNCOMPROMISED REALITY.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/65 font-normal leading-relaxed">
              Step directly inside our ongoing sites and finished residences across Calicut and Kerala.
              Zero renders—pure woodwork execution, cove illumination, and bespoke turnkey perfection.
            </p>
          </div>

          {/* Sound Toggle & Archive Counter */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={handleToggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-mono tracking-wider uppercase border border-white/20 transition-all duration-300 group"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              )}
              <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
              {!isMuted && (
                <span className="flex items-center gap-0.5 ml-1">
                  <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce" />
                  <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                </span>
              )}
            </button>

            {/* Total Badge */}
            <div className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/60">
              <span className="text-white font-medium">3</span> OF{' '}
              <span className="text-[#6E9297] font-medium">13</span> REELS
            </div>
          </div>
        </div>

        {/* 3 FEATURED SHOWCASE CARDS (Initially 3 videos on Home Page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredVideos.map((item, idx) => {
            const isPlaying = playingId === item.id;
            const progress = progresses[item.id] || 0;
            const whatsappProjectUrl = `https://wa.me/${
              brandInfo.whatsappNumber
            }?text=${encodeURIComponent(
              `Hello AMCOM Interiors, I saw your on-site reel "${item.title}" (${item.location}). I would like to consult for my home.`
            )}`;

            return (
              <div
                key={item.id}
                className="group relative bg-[#12181A] rounded-2xl overflow-hidden border border-white/15 hover:border-[#174C55] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(23,76,85,0.35)] flex flex-col justify-between"
              >
                {/* 9:16 Video Player Box */}
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
                    onTimeUpdate={() => handleTimeUpdate(item.id)}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay for contrast */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40 transition-opacity duration-300 ${
                      isPlaying ? 'opacity-40 hover:opacity-75' : 'opacity-70'
                    }`}
                  />

                  {/* Top Floating Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-wider uppercase text-[#A3C8CE]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#174C55]" />
                      {item.tag}
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80">
                      <MapPin className="w-2.5 h-2.5 text-[#6E9297]" />
                      <span>{item.location.split(',')[0]}</span>
                    </span>
                  </div>

                  {/* Animated Center Play/Pause Ring */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border ${
                        isPlaying
                          ? 'bg-black/60 text-white border-white/30 opacity-0 group-hover:opacity-100 scale-90'
                          : 'bg-white/95 text-black border-white shadow-2xl scale-100 opacity-95 group-hover:scale-110'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-white text-white" />
                      ) : (
                        <Play className="w-6 h-6 fill-black text-black ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Lightbox Trigger Button */}
                  <button
                    type="button"
                    onClick={(e) => openLightbox(item, e)}
                    title="Watch in Theater Mode"
                    className="absolute bottom-3.5 right-3.5 z-30 p-2.5 rounded-full bg-black/70 hover:bg-[#174C55] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 group/btn"
                  >
                    <Maximize2 className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
                  </button>

                  {/* Bottom Text inside video container */}
                  <div className="absolute bottom-3.5 left-3.5 right-14 z-20 pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E9297] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium text-white tracking-tight leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Progress Line */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-white/15 z-30">
                    <div
                      className="h-full bg-gradient-to-r from-[#174C55] to-emerald-400 transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Bottom Bar: Status + Quick WhatsApp Inquiry */}
                <div className="p-4 bg-[#0F1416] border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isPlaying
                          ? 'bg-emerald-400 animate-pulse'
                          : 'bg-white/30'
                      }`}
                    />
                    <span className="text-[11px] font-mono text-white/60">
                      {isPlaying ? 'PLAYING ON-SITE' : 'TAP TO PLAY'}
                    </span>
                  </div>

                  <a
                    href={whatsappProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-[#25D366] text-white/80 hover:text-white rounded-full text-[11px] font-mono tracking-wider transition-colors border border-white/10 hover:border-transparent group/wa"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-400 group-hover/wa:text-white" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM VIEW MORE ARCHITECTURAL ACTION BAR */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141C1E] via-[#101517] to-[#141C1E] border border-white/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#174C55]/20 border border-[#174C55]/40 flex items-center justify-center shrink-0 text-[#6E9297]">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297]">
                  FULL STUDIO ARCHIVE
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#174C55]/40 text-[#A3C8CE] border border-[#174C55]/60">
                  13 VIDEOS AVAILABLE
                </span>
              </div>
              <p className="text-sm text-white/80 max-w-xl font-normal leading-relaxed">
                Discover the remaining 10 project reels featuring luxury dining spaces, walk-in closets, cantilevered staircases, and complete villa handovers.
              </p>
            </div>
          </div>

          {/* VIEW MORE BUTTON */}
          <button
            type="button"
            onClick={onNavigateToVideos}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#174C55] hover:bg-[#123b42] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full border border-white/25 shadow-xl hover:shadow-[#174C55]/50 transition-all duration-300 group cursor-pointer"
          >
            <span>VIEW ALL 13 PROJECT VIDEOS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

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
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Video Player */}
            <div className="md:w-3/5 bg-black relative flex items-center justify-center aspect-[9/16] md:aspect-auto max-h-[500px] md:max-h-[640px]">
              <video
                ref={lightboxRef}
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
                  onClick={() => {
                    if (!lightboxRef.current) return;
                    if (lightboxPlaying) {
                      lightboxRef.current.pause();
                      setLightboxPlaying(false);
                    } else {
                      lightboxRef.current.play().catch(() => {});
                      setLightboxPlaying(true);
                    }
                  }}
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
                    onClick={() => {
                      if (!lightboxRef.current) return;
                      const next = !lightboxMuted;
                      lightboxRef.current.muted = next;
                      setLightboxMuted(next);
                    }}
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

            {/* Right: Architectural Details */}
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
                    Execution Highlights:
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

              {/* Direct Actions */}
              <div className="pt-6 border-t border-white/10 space-y-2.5">
                <a
                  href={`https://wa.me/${brandInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Hello AMCOM Interiors, I saw the on-site video "${lightboxVideo.title}" (${lightboxVideo.location}). Please provide information regarding this finish.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    closeLightbox();
                    if (onNavigateToVideos) onNavigateToVideos();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider rounded-full transition-colors border border-white/15"
                >
                  <span>Explore Full Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
