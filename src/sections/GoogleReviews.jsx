import React, { useState } from 'react';
import { brandInfo } from '../data/siteData';
import { Star, ThumbsUp, CheckCircle2, PenLine, ExternalLink } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Dr. Harikrishnan & Anjana",
    role: "Local Guide • 18 reviews",
    location: "Kozhikode",
    rating: 5,
    date: "2 weeks ago",
    text: "AMCOM transformed our residence in Puthiyara with incredible architectural sensitivity. Outstanding teak woodwork, seamless natural light, and handed over right on schedule.",
    initials: "H",
    avatarBg: "bg-[#1a73e8]",
    helpfulCount: 14,
  },
  {
    id: 2,
    name: "Shabeer Ahmed",
    role: "Local Guide • 32 reviews",
    location: "Calicut",
    rating: 5,
    date: "1 month ago",
    text: "The modular kitchen and living execution exceeded our expectations. The hairline shadow gaps, Blum soft-close fittings, and quartz finishes are truly top-tier.",
    initials: "S",
    avatarBg: "bg-[#0d652d]",
    helpfulCount: 9,
  },
  {
    id: 3,
    name: "Ranjith Kumar",
    role: "Verified Homeowner",
    location: "Kannur",
    rating: 5,
    date: "3 months ago",
    text: "Their 25+ years of experience in Kerala shows in every detail. Flawless turnkey execution from 3D planning through to a defect-free handover.",
    initials: "R",
    avatarBg: "bg-[#e37400]",
    helpfulCount: 11,
  },
];

export default function GoogleReviews() {
  const [helpfulLikes, setHelpfulLikes] = useState({});

  const toggleHelpful = (id) => {
    setHelpfulLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="reviews" className="py-16 md:py-20 bg-[#F8F9FA] border-b border-[#E8EAED] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* GOOGLE BUSINESS PROFILE HEADER CARD */}
        <div className="bg-white rounded-2xl border border-[#DADCE0] p-6 sm:p-8 mb-10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left: Google G Logo & Business Info */}
            <div className="flex items-center gap-4">
              {/* Official Google 4-Color Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-[#E8EAED] flex items-center justify-center shrink-0 p-2.5">
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
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-bold text-[#202124]">
                    AMCOM Interiors
                  </h2>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1a73e8] bg-[#E8F0FE] px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <p className="text-xs text-[#5f6368] mt-0.5">
                  Google Business Profile • Kozhikode, Kerala
                </p>
              </div>
            </div>

            {/* Right: 4.9 Rating & Google Action */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-[#202124] font-sans">
                  4.9
                </span>
                <div>
                  <div className="flex items-center gap-0.5 text-[#FBBC05] mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#5f6368] font-medium">
                    120+ Google Reviews
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={brandInfo.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F8F9FA] text-[#1a73e8] border border-[#DADCE0] hover:border-[#1a73e8] text-xs font-medium rounded-full shadow-sm hover:shadow transition-all"
                >
                  <PenLine className="w-3.5 h-3.5 text-[#1a73e8]" />
                  <span>Write a review</span>
                </a>

                <a
                  href={brandInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-medium rounded-full transition-colors"
                >
                  <span>View on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 AUTHENTIC GOOGLE THEMED REVIEW CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsData.map((review) => {
            const isLiked = helpfulLikes[review.id];
            const currentHelpful = review.helpfulCount + (isLiked ? 1 : 0);

            return (
              <div
                key={review.id}
                className="group relative bg-white rounded-2xl border border-[#DADCE0] hover:border-[#4285F4] p-6 transition-all duration-300 ease-out hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Google 4-Color Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      {/* Avatar with Google Verified badge */}
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full text-white font-semibold flex items-center justify-center text-sm ${review.avatarBg}`}
                        >
                          {review.initials}
                        </div>
                        {/* Mini G badge */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-[#E8EAED] flex items-center justify-center p-0.5">
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

                    <span className="text-[11px] text-[#70757a]">
                      {review.date}
                    </span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-[#FBBC05] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>

                  {/* Clean Concise Review Quote */}
                  <p className="text-xs sm:text-[13px] text-[#3c4043] leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Footer: Helpful button & Google attribution */}
                <div className="pt-3 border-t border-[#F1F3F4] flex items-center justify-between text-xs text-[#5f6368]">
                  <button
                    type="button"
                    onClick={() => toggleHelpful(review.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      isLiked
                        ? 'bg-[#E8F0FE] text-[#1967D2]'
                        : 'hover:bg-[#F1F3F4] text-[#5f6368]'
                    }`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({currentHelpful})</span>
                  </button>

                  <span className="text-[11px] text-[#70757a] font-medium">
                    Google Review
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
