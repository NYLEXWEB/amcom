import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // Position calculation helper
  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  // Mouse handlers
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !e.touches || !e.touches[0]) return;
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      setSliderPos(0);
    } else if (e.key === 'End') {
      setSliderPos(100);
    }
  };

  return (
    <section id="before-after" className="py-18 md:py-22 bg-[#F1F4F2] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DCE3E2] gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              FROM ORDINARY <br />
              <span className="text-[#174C55] font-normal">TO EXTRAORDINARY.</span>
            </h2>
          </div>

          <div className="max-w-md">

          </div>
        </div>

        {/* INTERACTIVE COMPARISON CONTAINER */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] select-none overflow-hidden border border-[#DCE3E2] shadow-sm bg-[#172022] cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="slider"
            tabIndex={0}
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Before and after transformation slider. Use left and right arrow keys to adjust."
            onKeyDown={handleKeyDown}
          >
            {/* UNDERNEATH LAYER: AFTER IMAGE (covers full container) */}
            <img
              src="/images/amcom-after.jpg"
              alt="Transformed contemporary living room interior by AMCOM Interiors"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />

            {/* TOP LAYER: BEFORE IMAGE (clipped according to sliderPos from left) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <img
                src="/images/amcom-before.jpg"
                alt="Original dated living room before AMCOM Interiors renovation"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* FLOATING LABELS */}
            {/* BEFORE Label (Left) */}
            <div
              className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-200"
              style={{ opacity: sliderPos > 12 ? 1 : 0 }}
            >
              <div className="px-3 py-1 bg-black/75 backdrop-blur-sm border border-white/20 text-white text-[11px] font-mono tracking-widest uppercase">
                BEFORE
              </div>
            </div>

            {/* AFTER Label (Right) */}
            <div
              className="absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-200"
              style={{ opacity: sliderPos < 88 ? 1 : 0 }}
            >
              <div className="px-3 py-1 bg-[#174C55]/90 backdrop-blur-sm border border-white/20 text-white text-[11px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#6E9297]" />
                <span>AFTER — AMCOM</span>
              </div>
            </div>

            {/* THIN DEEP MINERAL TEAL DIVIDER LINE */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{
                left: `${sliderPos}%`,
                transform: 'translateX(-50%)',
              }}
            >
              {/* Divider vertical bar */}
              <div className="w-[2px] h-full bg-[#174C55] shadow-[0_0_8px_rgba(23,76,85,0.6)]" />

              {/* Minimal Circular Center Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#174C55] border-2 border-[#F8F9F7] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                <ChevronsLeftRight className="w-5 h-5 text-[#F8F9F7]" />
              </div>
            </div>
          </div>

          {/* Accessibility & Interaction Helper Notes */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-1 text-xs text-[#687477]">
            <span className="font-mono">
              INTERACTION: DRAG DIVIDER OR USE KEYBOARD ARROW KEYS (← / →)
            </span>
            <span className="mt-1 sm:mt-0">
              LOCATION: ARAYIDATHUPALAM, KOZHIKODE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
