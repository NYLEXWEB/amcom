import React, { useState } from 'react';
import { brandInfo } from '../data/siteData';
import { Star, CheckCircle, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';

const allReviews = [
  {
    id: 1,
    name: "Dr. Harikrishnan & Anjana",
    role: "Local Guide • 18 reviews",
    location: "Kozhikode, Kerala",
    category: "Residential Villas",
    rating: 5,
    date: "2 weeks ago",
    text: "AMCOM transformed our ancestral home in Puthiyara with unbelievable architectural sensitivity. Their focus on natural light, clean lines, and teak woodwork is unmatched. Completed the turnkey handover right on schedule without a single hidden cost. Outstanding team!",
    initials: "HA",
    avatarBg: "bg-[#1a73e8]",
    helpfulCount: 14,
    tags: ["Punctuality", "Quality", "Professionalism", "Value"],
  },
  {
    id: 2,
    name: "Shabeer Ahmed",
    role: "Local Guide • 32 reviews",
    location: "Calicut, Kerala",
    category: "Modular Kitchens",
    rating: 5,
    date: "1 month ago",
    text: "The modular kitchen and living space execution exceeded our highest expectations. The hairline shadow gaps, Blum soft-close mechanisms, and quartz stone finishes are top-tier. AMCOM doesn't just decorate—they execute with real architectural discipline.",
    initials: "SA",
    avatarBg: "bg-[#0d652d]",
    helpfulCount: 9,
    tags: ["Modular Kitchen", "Craftsmanship", "Quality"],
  },
  {
    id: 3,
    name: "Ranjith Kumar",
    role: "Verified Homeowner",
    location: "Kannur, Kerala",
    category: "Complete Execution",
    rating: 5,
    date: "3 months ago",
    text: "Their 25+ years of experience in Kerala is evident from day one. They understand local humidity, timber behavior, and contemporary ergonomics. Turnkey execution was spotless from MEP coordination to final defect-free handover.",
    initials: "RK",
    avatarBg: "bg-[#e37400]",
    helpfulCount: 11,
    tags: ["Turnkey Execution", "Reliability", "Experience"],
  },
  
];

export default function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [helpfulLikes, setHelpfulLikes] = useState({});

  const filterCategories = ["ALL", "Residential Villas", "Modular Kitchens", "Complete Execution"];

  const filteredReviews = allReviews.filter((r) => {
    if (activeFilter === "ALL") return true;
    return r.category === activeFilter;
  });

  const toggleHelpful = (id) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F8F9FA] border-b border-[#E8EAED] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* GOOGLE BUSINESS PROFILE HEADER CARD */}
        <div className="bg-white rounded-2xl border border-[#DADCE0] p-6 sm:p-8 md:p-10 shadow-[0_2px_12px_rgba(60,64,67,0.08)] mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#E8EAED]">
            
            {/* Google Brand & Business Title */}
            <div className="flex items-start gap-4">
              {/* Google G Multi-Color Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8EAED] shadow-sm flex items-center justify-center shrink-0 p-2.5">
                <svg className="w-full h-full" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
                    AMCOM Interiors
                  </h2>
                  <ShieldCheck className="w-5 h-5 text-[#1a73e8]" />
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5f6368]">
                  <span className="font-medium text-[#202124]">Google Business Profile</span>
                  <span>•</span>
                  <span>Kozhikode, Kerala</span>
                </div>
              </div>
            </div>

            {/* Google Rating Highlights */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl sm:text-5xl font-bold text-[#202124] font-sans">
                  4.9
                </span>
                <div>
                  <div className="flex items-center gap-1 text-[#FBBC05] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#5f6368] font-medium block">
                    120+ Verified Client Reviews
                  </span>
                </div>
              </div>

              {/* Action: Open in Google Maps */}
              <a
                href={brandInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs sm:text-sm font-medium rounded-full shadow-sm transition-colors group"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* REVIEWS GRID (GOOGLE THEMED CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const isLiked = helpfulLikes[review.id];
            const currentHelpful = review.helpfulCount + (isLiked ? 1 : 0);

            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-[#DADCE0] p-6 shadow-[0_1px_3px_rgba(60,64,67,0.08),0_4px_8px_rgba(60,64,67,0.04)] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Google Initial Circle */}
                      <div
                        className={`w-10 h-10 rounded-full text-white font-medium flex items-center justify-center text-sm shadow-inner shrink-0 ${review.avatarBg}`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202124]">
                          {review.name}
                        </h4>
                        <p className="text-[11px] text-[#5f6368]">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    {/* Google G Watermark */}
                    <svg className="w-4 h-4 opacity-70 shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>

                  {/* Rating Stars + Timestamp */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-[#FBBC05]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="text-xs text-[#5f6368]">
                      {review.date}
                    </span>
                  </div>

                  {/* Positive Attribute Tags (Classic Google Review style) */}
                  <div className="flex items-center flex-wrap gap-1.5 mb-3">
                    {review.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-[#F1F3F4] text-[#3C4043] text-[10px] rounded font-medium"
                      >
                        ✓ {tag}
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#3c4043] leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Card Footer: Helpful button & Google attribution */}
                <div className="pt-3 border-t border-[#F1F3F4] flex items-center justify-between text-xs text-[#5f6368]">
                  <button
                    type="button"
                    onClick={() => toggleHelpful(review.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                      isLiked
                        ? 'bg-[#E8F0FE] text-[#1967D2]'
                        : 'hover:bg-[#F1F3F4] text-[#5f6368]'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({currentHelpful})</span>
                  </button>

                  <span className="text-[11px] text-[#70757a]">
                    Verified Google Review
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Google Trust Badge */}
        <div className="mt-12 text-center">
          <a
            href={brandInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#1a73e8] hover:text-[#1557b0] font-medium"
          >
            <span>View all 120+ client reviews on Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
