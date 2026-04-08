'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { reviews, type Review } from '@/data/reviews';

const AUTO_ADVANCE_MS = 6000;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 sm:w-5 sm:h-5 ${star <= rating ? 'text-gold' : 'text-cream-dark'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: Review['source'] }) {
  const styles: Record<Review['source'], string> = {
    TripAdvisor: 'bg-[#00AA6C]/10 text-[#00AA6C]',
    Yelp: 'bg-[#D32323]/10 text-[#D32323]',
    Google: 'bg-[#4285F4]/10 text-[#4285F4]',
    'The New Yorker': 'bg-charcoal/10 text-charcoal',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${styles[source]}`}>
      {source}
    </span>
  );
}

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      {/* Slide viewport */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {reviews.map((review, i) => (
            <div
              key={`${review.author}-${i}`}
              className="w-full shrink-0 px-1 sm:px-2"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${reviews.length}`}
              aria-hidden={i !== activeIndex}
            >
              <a
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl p-6 sm:p-10 border border-cream-dark shadow-sm hover:shadow-xl hover:shadow-maroon/5 hover:border-maroon/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <StarRating rating={review.rating} />
                  <SourceBadge source={review.source} />
                </div>

                {review.title && (
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-maroon-dark mb-3 leading-tight">
                    {review.title}
                  </h3>
                )}

                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gold/30 mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>

                <p className="text-warm-gray text-sm sm:text-base leading-relaxed italic mb-5 sm:mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-maroon/10 to-crimson/10 flex items-center justify-center">
                      <span className="text-sm sm:text-base font-bold text-maroon">
                        {review.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-charcoal">{review.author}</p>
                      <p className="text-xs text-warm-gray-light">
                        Read on {review.source}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-crimson group-hover:underline hidden sm:inline-flex items-center gap-1">
                    View source
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous review"
        className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-cream-dark shadow-md flex items-center justify-center text-maroon hover:bg-maroon hover:text-white hover:border-maroon transition-all z-10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next review"
        className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-cream-dark shadow-md flex items-center justify-center text-maroon hover:bg-maroon hover:text-white hover:border-maroon transition-all z-10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to review ${i + 1}`}
            aria-current={i === activeIndex}
            className={`transition-all rounded-full ${
              i === activeIndex
                ? 'w-8 h-2 bg-crimson'
                : 'w-2 h-2 bg-warm-gray-light/40 hover:bg-warm-gray-light'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
