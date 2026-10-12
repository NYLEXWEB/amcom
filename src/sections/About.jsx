import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles, 
  Award, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Default sound is ON as requested
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Initial state: do not play immediately on page load
    video.pause();
    video.muted = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User reached About / video section: play video!
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                })
                .catch(() => {
                  // If browser autoplay policy requires mute on initial programmatic trigger
                  video.muted = true;
                  setIsMuted(true);
                  video.play()
                    .then(() => setIsPlaying(true))
                    .catch(() => {});
                });
            }
          } else {
            // User scrolled away from About section: pause video
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the video container is visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
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

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2] relative overflow-hidden">
      {/* Background Architectural Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-6 border-x border-black">
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
          <div className="border-r border-black h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Main Split Grid: Minimal Copy + Layered Architectural Video Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Minimal, Punchy Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#174C55]/10 border border-[#174C55]/20 rounded-full mb-3.5 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#174C55]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#174C55] font-semibold">
                TIMELESS ARCHITECTURAL INTERIORS
              </span>
            </div>

            {/* Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#172022] tracking-[-0.03em] leading-[1.12] mb-6">
              ABOUT <span className="font-normal text-[#174C55]">US</span> 
            </h2>

            {/* Concise, Refined Description */}
            <p className="text-base sm:text-lg text-[#687477] font-normal leading-relaxed mb-6">
              Founded in 1999 in Kozhikode, AMCOM Interiors unites architectural sensibility with hands-on construction mastery. We build spaces defined by quiet proportions, honest textures, and enduring Kerala living rituals.
            </p>

            {/* Micro Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8 pt-2 border-t border-[#DCE3E2]/60">
              <div className="flex items-center gap-2 text-xs font-mono text-[#172022]">
                <ShieldCheck className="w-4 h-4 text-[#174C55]" />
                <span>Turnkey Accountability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#172022]">
                <Compass className="w-4 h-4 text-[#174C55]" />
                <span>Bespoke Kerala Joinery</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-4 pl-6 sm:pl-7 pr-2.5 py-2.5 bg-[#172022] hover:bg-[#174C55] text-white rounded-full transition-all duration-300 group shadow-lg border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#174C55]"
              >
                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  Explore Signature Spaces
                </span>
                <div className="w-8 h-8 rounded-full bg-white text-[#172022] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-[#172022]" />
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Architectural Video Player */}
          <div className="lg:col-span-7 relative">
            
            {/* Primary Video Container */}
            <div 
              ref={containerRef}
              onClick={togglePlay}
              className="relative aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/10] overflow-hidden rounded-xl bg-[#0F1719] border border-[#DCE3E2] shadow-2xl group cursor-pointer"
            >
              {/* HTML5 Video: Plays when scrolled into view, defaults to sound on */}
              <video
                ref={videoRef}
                src="/about/VID-20261012-WA0062.mp4"
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Subtle Ambient Vignettes for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Top Floating Bar: Live Tag + Audio Mute/Unmute */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="uppercase">STUDIO WALKTHROUGH</span>
                </div>

                {/* Sound Toggle Button (Clickable, Default Sound On) */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="pointer-events-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/65 hover:bg-black/90 backdrop-blur-md border border-white/25 text-white text-[11px] font-mono tracking-wider transition-all duration-200 cursor-pointer shadow-md"
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                  title={isMuted ? "Turn Sound On" : "Mute Sound"}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-[#6E9297]" />
                      <span className="uppercase text-[10px] text-white/80">SOUND OFF</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#25D366] animate-pulse" />
                      <span className="uppercase text-[10px] text-[#25D366] font-semibold">SOUND ON</span>
                    </>
                  )}
                </button>
              </div>

              {/* Center Play/Pause Indicator (Shows when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-10 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/95 text-[#172022] flex items-center justify-center shadow-2xl pl-1 transform scale-100 hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current" />
                  </div>
                </div>
              )}

              {/* Bottom Subtle Tap Hint */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                  {isPlaying ? 'Click to Pause' : 'Click to Play'}
                </span>
              </div>
            </div>

            {/* Overlapping Floating Frosted Card (Architectural Heritage) */}
            <div className="sm:absolute -bottom-8 -left-6 sm:max-w-xs w-full mt-6 sm:mt-0 p-5 bg-white/95 backdrop-blur-md border border-[#DCE3E2] rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-1 z-30">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-md bg-[#174C55] text-white flex items-center justify-center text-xs font-mono font-bold shadow-sm">
                  25+
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#172022] tracking-wide uppercase">
                    Years of Heritage
                  </h4>
                  <span className="text-[10px] font-mono text-[#6E9297]">
                    ESTABLISHED 1999 • KERALA
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#687477] leading-relaxed">
                Every detail is engineered with local Kerala materials, structural precision, and architectural discipline.
              </p>
            </div>

            {/* Secondary Accent Detail Badge (Top-Right Floating) */}
            <div className="hidden md:flex absolute -top-5 -right-5 items-center gap-2 px-3.5 py-2 bg-white/95 backdrop-blur-md border border-[#DCE3E2] rounded-lg shadow-lg z-20">
              <Sparkles className="w-3.5 h-3.5 text-[#174C55]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#172022] font-medium">
                100% Real Execution
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


