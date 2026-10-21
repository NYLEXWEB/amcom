import React, { useState, useRef } from 'react';
import { videoList } from '../data/videosData';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function VideoSection({ onNavigateToVideos }) {
  // Show first 3 videos initially
  const featuredVideos = videoList.slice(0, 3);

  const [playingId, setPlayingId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef({});

  const handleTogglePlay = (id) => {
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

  const handleToggleMute = (e) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    Object.values(videoRefs.current).forEach((vid) => {
      if (vid) vid.muted = nextMuted;
    });
  };

  return (
    <section
      id="videos"
      className="py-16 md:py-24 bg-[#F8F9F7] text-[#172022] border-b border-[#DCE3E2]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Clean Minimal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#DCE3E2] gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6E9297] block mb-2">
              ON-SITE WALKTHROUGHS
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#172022] tracking-[-0.035em]">
              CRAFT IN MOTION
            </h2>
          </div>

          {/* Sound Toggle & View All Link */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleToggleMute}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-100 text-[#172022] text-xs font-mono uppercase tracking-wider rounded-full border border-[#DCE3E2] transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-[#687477]" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-[#174C55]" />
              )}
              <span>{isMuted ? 'Muted' : 'Sound On'}</span>
            </button>

            {onNavigateToVideos && (
              <button
                type="button"
                onClick={onNavigateToVideos}
                className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#174C55] hover:text-[#123b42] transition-colors font-medium"
              >
                <span>View All (13)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 3-Card Minimal Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredVideos.map((item) => {
            const isPlaying = playingId === item.id;

            return (
              <div key={item.id} className="group flex flex-col">
                {/* Video Frame */}
                <div
                  onClick={() => handleTogglePlay(item.id)}
                  className="relative aspect-[9/16] w-full rounded-xl overflow-hidden bg-black border border-[#DCE3E2] cursor-pointer"
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

                  {/* Minimal Play / Pause Overlay */}
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
                </div>


              </div>
            );
          })}
        </div>

        {/* Minimal Bottom CTA Button */}
        {onNavigateToVideos && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={onNavigateToVideos}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#174C55] text-[#174C55] hover:bg-[#174C55] hover:text-white text-xs font-mono uppercase tracking-wider transition-colors font-semibold"
            >
              <span>Explore All 13 Project Videos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
