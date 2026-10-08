import React from 'react';
import { brandInfo } from '../data/siteData';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

const reviewsData = [
  {
    name: "Dr. Harikrishnan & Anjana",
    location: "Kozhikode, Kerala",
    project: "Ancestral Villa Renovation",
    rating: 5,
    date: "2 months ago",
    text: "AMCOM transformed our ancestral home in Kozhikode with unbelievable architectural sensitivity. Their focus on natural light, clean lines, and teak woodwork is unmatched. True professionals who respect time and budget.",
    initials: "HA",
    color: "bg-[#174C55]",
  },
  {
    name: "Shabeer Ahmed",
    location: "Calicut, Kerala",
    project: "Modular Kitchen & Living Space",
    rating: 5,
    date: "3 months ago",
    text: "The modular kitchen and living space execution exceeded our expectations. The hairline shadow gaps, drawer mechanisms, and stone finishes are top-tier. AMCOM doesn't just decorate—they execute like architects.",
    initials: "SA",
    color: "bg-[#172022]",
  },
  {
    name: "Ranjith Kumar",
    location: "Kannur, Kerala",
    project: "Complete Residential Interior",
    rating: 5,
    date: "5 months ago",
    text: "Their 25+ years of experience in Kerala is evident from day one. They understand humidity, local timber, and contemporary ergonomics. Turnkey execution was spotless from MEP coordination to final handover.",
    initials: "RK",
    color: "bg-[#6E9297]",
  },
  {
    name: "Fathima & Niyas",
    location: "Arayidathupalam, Calicut",
    project: "Contemporary Apartment Interior",
    rating: 5,
    date: "6 months ago",
    text: "Finding a design firm in Calicut that doesn't push gaudy gold and artificial decor was refreshing. AMCOM created a calm, timeless home we genuinely love coming back to every day. Highly recommended!",
    initials: "FN",
    color: "bg-[#174C55]",
  },
];

export default function GoogleReviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#F8F9F7] border-b border-[#DCE3E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-16 border-b border-[#DCE3E2] gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6E9297]">
                06 / CLIENT REVIEWS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#172022] tracking-[-0.035em]">
              GOOGLE REVIEWS
            </h2>
          </div>

          {/* Google Summary Badge */}
          <div className="flex items-center gap-4 bg-[#F1F4F2] border border-[#DCE3E2] p-4">
            {/* Google Colorful G Icon */}
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
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

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold text-[#172022] font-mono">4.9</span>
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#687477]">
                Verified Google Business Reviews
              </span>
            </div>

            <a
              href={brandInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-1.5 bg-[#174C55] text-[#F8F9F7] text-xs font-mono uppercase tracking-wider hover:bg-[#123b42] transition-colors flex items-center gap-1.5"
            >
              <span>Verify</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((review, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F8F9F7] border border-[#DCE3E2] hover:border-[#174C55] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-none text-white font-mono font-medium flex items-center justify-center text-sm ${review.color}`}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-medium text-[#172022]">
                          {review.name}
                        </h4>
                        <CheckCircle className="w-3.5 h-3.5 text-[#174C55]" />
                      </div>
                      <p className="text-xs text-[#687477]">{review.location}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#687477]/80">
                    {review.date}
                  </span>
                </div>

                {/* Stars & Project Tag */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE3E2]/60">
                  <div className="flex items-center text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E9297]">
                    {review.project}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#172022]/85 leading-relaxed font-normal">
                  "{review.text}"
                </p>
              </div>

              {/* Card Footer: Google verified attribution */}
              <div className="mt-6 pt-4 border-t border-[#DCE3E2]/60 flex items-center justify-between text-xs text-[#687477]">
                <span className="text-[11px] font-mono text-[#687477]">
                  Posted on Google
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#174C55] font-semibold">
                  Verified Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
