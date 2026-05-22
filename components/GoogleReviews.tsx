"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';

const reviews = [
  {
    name: "Sathish Kumar",
    avatar: "S",
    color: "#4285F4",
    rating: 5,
    date: "2 weeks ago",
    text: "Amazing stay at Cloud Walks! The view is breathtaking and the luxury cottage was extremely comfortable. Highly recommended for a peaceful getaway.",
    stay: "Luxury Cottage",
  },
  {
    name: "Priya Sharma",
    avatar: "P",
    color: "#0F9D58",
    rating: 5,
    date: "1 month ago",
    text: "The best homestay in the region. Hospitality is top-notch, and the rooms feel very premium. The evening mist is magical.",
    stay: "Premium Suite",
  },
  {
    name: "Anand R",
    avatar: "A",
    color: "#DB4437",
    rating: 5,
    date: "3 months ago",
    text: "Beautiful location, serene environment, and excellent service. A perfect getaway from the city hustle. Will definitely visit again!",
    stay: "Budget Premium",
  },
  {
    name: "Karthik Nair",
    avatar: "K",
    color: "#c5a059",
    rating: 5,
    date: "4 months ago",
    text: "Loved the aesthetic and the premium feel of the property. The staff was very accommodating and the food was delicious. 5 stars all the way.",
    stay: "Luxury Cottage",
  },
  {
    name: "Rahul Verma",
    avatar: "R",
    color: "#4285F4",
    rating: 5,
    date: "5 months ago",
    text: "Incredible experience. The panoramic views from the balcony are simply unmatched. A true luxury experience in the hills.",
    stay: "Premium Suite",
  },
  {
    name: "Meera Menon",
    avatar: "M",
    color: "#DB4437",
    rating: 5,
    date: "6 months ago",
    text: "Everything about Cloud Walks is exceptional. The wooden attic suites are incredibly cozy and the sunrise view from the bed is to die for.",
    stay: "Luxury Cottage",
  },
  {
    name: "Arjun Reddy",
    avatar: "A",
    color: "#0F9D58",
    rating: 5,
    date: "8 months ago",
    text: "A 5-star experience from start to finish. The premium cottages are super spacious and well-maintained. The best place to relax in nature.",
    stay: "Budget Premium",
  },
  {
    name: "Sneha Patil",
    avatar: "S",
    color: "#c5a059",
    rating: 5,
    date: "8 months ago",
    text: "We booked the Deluxe Family Suite and it was perfect for us. Great amenities, clean bathrooms, and the location is just stunning.",
    stay: "Premium Suite",
  },
  {
    name: "Vikram Singh",
    avatar: "V",
    color: "#4285F4",
    rating: 5,
    date: "9 months ago",
    text: "What a phenomenal stay! If you're looking for luxury combined with a rustic mountain feel, Cloud Walks is the place. Excellent property.",
    stay: "Luxury Cottage",
  },
  {
    name: "Nandini Iyer",
    avatar: "N",
    color: "#DB4437",
    rating: 5,
    date: "10 months ago",
    text: "Top-tier hospitality! The caretaker ensured all our needs were met. The food tasted exactly like home but with a gourmet touch.",
    stay: "Budget Premium",
  },
  {
    name: "Dev Patel",
    avatar: "D",
    color: "#0F9D58",
    rating: 5,
    date: "11 months ago",
    text: "Breathtaking is an understatement. Walking out onto the balcony with a cup of coffee while the mist rolls in is a memory I will cherish forever.",
    stay: "Premium Suite",
  },
  {
    name: "Divya Krishnan",
    avatar: "D",
    color: "#c5a059",
    rating: 5,
    date: "1 year ago",
    text: "Absolutely stunning homestay! We loved the architecture and the way they've blended luxury with nature. Definitely coming back next season.",
    stay: "Luxury Cottage",
  },
];

const StarRating = ({ count = 5 }: { count?: number }) => (
  <div style={{ display: 'flex', gap: '3px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#c5a059">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const GoogleReviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const CARD_WIDTH_MOBILE = 300;
  const CARD_GAP = 20;

  const getCardWidth = useCallback(() => {
    if (typeof window === 'undefined') return CARD_WIDTH_MOBILE;
    return window.innerWidth > 768 ? 380 : CARD_WIDTH_MOBILE;
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (!sliderRef.current) return;
    const clamped = Math.max(0, Math.min(index, reviews.length - 1));
    const card = sliderRef.current.children[clamped] as HTMLElement;
    if (card) {
      const containerWidth = sliderRef.current.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollLeft = card.offsetLeft - (containerWidth - cardWidth) / 2;
      sliderRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
    setActiveIndex(clamped);
  }, []);

  const scroll = useCallback((direction: 'left' | 'right') => {
    const next = direction === 'right'
      ? Math.min(activeIndex + 1, reviews.length - 1)
      : Math.max(activeIndex - 1, 0);
    scrollToIndex(next);
  }, [activeIndex, scrollToIndex]);

  // Auto-scroll
  useEffect(() => {
    if (isHovered) return;
    autoScrollRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = prev + 1 >= reviews.length ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, 10000);
    return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
  }, [isHovered, scrollToIndex]);

  // Sync dot indicator with scroll position
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const handleScroll = () => {
      const cardW = getCardWidth() + CARD_GAP;
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIndex(Math.max(0, Math.min(idx, reviews.length - 1)));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [getCardWidth]);

  return (
    <section
      id="reviews"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '90px 0 80px 0',
        background: 'linear-gradient(160deg, #0f0e0d 0%, #1a1714 50%, #0f0e0d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80vw', height: '50vw', maxWidth: '900px', maxHeight: '500px',
        background: 'radial-gradient(ellipse, rgba(197,160,89,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Decorative large quote */}
      <div style={{
        position: 'absolute', top: '5%', right: '5%',
        fontFamily: 'Georgia, serif', fontSize: 'clamp(140px, 20vw, 280px)',
        color: 'rgba(197,160,89,0.04)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        fontWeight: '700',
      }}>
        &ldquo;
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', padding: '0 5%', marginBottom: '50px' }}>
          <span style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.72rem', letterSpacing: '0.35em',
            color: '#c5a059', textTransform: 'uppercase',
            fontWeight: '600', display: 'block', marginBottom: '1rem',
          }}>
            Voices of Our Guests
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '300', letterSpacing: '0.08em',
            color: '#ffffff', textTransform: 'uppercase',
            margin: '0 0 1.5rem 0', lineHeight: '1.2',
          }}>
            Guest Experiences
          </h2>

          {/* Gold divider line */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '1.5rem' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, transparent, #c5a059)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c5a059' }} />
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to left, transparent, #c5a059)' }} />
          </div>

          {/* Rating badge */}
          <div className="gr-rating-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            backgroundColor: 'rgba(197,160,89,0.08)',
            border: '1px solid rgba(197,160,89,0.25)',
            borderRadius: '50px', padding: '10px 20px',
          }}>
            <GoogleIcon />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.1rem', color: '#c5a059', fontWeight: '600' }}>4.9</span>
                <StarRating />
              </div>
              <span style={{ fontSize: '0.72rem', color: '#888', letterSpacing: '0.05em', fontFamily: 'var(--font-inter), sans-serif' }}>
                Verified Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* ── Nav Arrows Desktop ── */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => scroll('left')}
            className="gr-arrow-btn gr-arrow-left"
            aria-label="Previous review"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* ── Slider Track ── */}
          <div
            ref={sliderRef}
            className="gr-slider"
            style={{
              display: 'flex',
              gap: `${CARD_GAP}px`,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '30px 5% 40px 5%',
              width: '100%',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`gr-card${isActive ? ' gr-card-active' : ''}`}
                  onClick={() => scrollToIndex(index)}
                  style={{
                    minWidth: 'clamp(280px, 80vw, 380px)',
                    maxWidth: '380px',
                    flex: '0 0 auto',
                    scrollSnapAlign: 'center',
                    background: isActive
                      ? 'linear-gradient(145deg, rgba(197,160,89,0.12) 0%, rgba(255,255,255,0.06) 100%)'
                      : 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    padding: '28px 26px 26px 26px',
                    border: isActive
                      ? '1px solid rgba(197,160,89,0.4)'
                      : '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
                    transform: isActive ? 'scale(1.02) translateY(-4px)' : 'scale(1)',
                    boxShadow: isActive
                      ? '0 20px 60px rgba(197,160,89,0.12), 0 0 0 1px rgba(197,160,89,0.2)'
                      : '0 4px 20px rgba(0,0,0,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Card shimmer highlight */}
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #c5a059, transparent)',
                    }} />
                  )}

                  {/* Decorative quote icon inside card */}
                  <div style={{
                    position: 'absolute', bottom: '20px', right: '20px',
                    fontFamily: 'Georgia, serif', fontSize: '72px',
                    color: isActive ? 'rgba(197,160,89,0.08)' : 'rgba(255,255,255,0.04)',
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                    transition: 'color 0.4s ease',
                  }}>
                    &rdquo;
                  </div>

                  {/* User Info Row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Avatar */}
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '50%',
                      background: `linear-gradient(135deg, ${review.color}cc, ${review.color}88)`,
                      color: 'white', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '1.1rem',
                      fontWeight: '700', fontFamily: 'var(--font-cinzel), serif',
                      flexShrink: 0,
                      border: isActive ? '2px solid rgba(197,160,89,0.5)' : '2px solid rgba(255,255,255,0.1)',
                      transition: 'border 0.4s ease',
                      boxShadow: isActive ? `0 0 15px ${review.color}40` : 'none',
                    }}>
                      {review.avatar}
                    </div>

                    {/* Name & date */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{
                        margin: 0, fontSize: '0.95rem', color: '#ffffff',
                        fontFamily: 'var(--font-cinzel), serif', fontWeight: '500',
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}>
                        {review.name}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.03em' }}>
                        {review.date}
                      </span>
                    </div>

                    {/* Google icon */}
                    <div style={{ flexShrink: 0, opacity: 0.85 }}>
                      <GoogleIcon />
                    </div>
                  </div>

                  {/* Stay type pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <StarRating />
                    <span style={{
                      fontSize: '0.65rem', fontFamily: 'var(--font-cinzel), serif',
                      color: '#c5a059', letterSpacing: '0.1em',
                      textTransform: 'uppercase', fontWeight: '600',
                      backgroundColor: 'rgba(197,160,89,0.1)',
                      border: '1px solid rgba(197,160,89,0.2)',
                      padding: '3px 10px', borderRadius: '50px',
                    }}>
                      {review.stay}
                    </span>
                  </div>

                  {/* Review text */}
                  <p style={{
                    margin: 0, fontSize: '0.9rem', color: isActive ? '#d4d4d4' : '#888',
                    lineHeight: '1.7', fontFamily: 'var(--font-inter), sans-serif',
                    fontWeight: '300', flex: 1,
                    transition: 'color 0.4s ease',
                    fontStyle: 'italic',
                  }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="gr-arrow-btn gr-arrow-right"
            aria-label="Next review"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* ── Dot Indicators (Mobile-first) ── */}
        <div className="gr-dots" style={{
          display: 'flex', justifyContent: 'center', gap: '8px',
          padding: '0 5% 10px 5%',
        }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`gr-dot${i === activeIndex ? ' gr-dot-active' : ''}`}
            />
          ))}
        </div>

        {/* ── Swipe hint on mobile ── */}
        <p className="gr-swipe-hint" style={{
          textAlign: 'center', fontSize: '0.7rem',
          color: 'rgba(197,160,89,0.5)', letterSpacing: '0.1em',
          fontFamily: 'var(--font-cinzel), serif', marginTop: '8px',
          textTransform: 'uppercase',
        }}>
          Swipe to Explore
        </p>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gr-slider::-webkit-scrollbar { display: none; }
        .gr-slider { -ms-overflow-style: none; scrollbar-width: none; }

        /* Arrow buttons */
        .gr-arrow-btn {
          position: absolute;
          z-index: 10;
          width: 46px; height: 46px;
          border-radius: 50%;
          border: 1px solid rgba(197,160,89,0.3);
          background: rgba(15,14,13,0.85);
          backdrop-filter: blur(10px);
          color: #c5a059;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0,0,0,0.35);
          flex-shrink: 0;
        }
        .gr-arrow-btn:hover {
          background: rgba(197,160,89,0.15) !important;
          border-color: rgba(197,160,89,0.6) !important;
          box-shadow: 0 0 20px rgba(197,160,89,0.2) !important;
          transform: scale(1.08) !important;
        }
        .gr-arrow-left { left: 10px; }
        .gr-arrow-right { right: 10px; }

        /* Dot indicators */
        .gr-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(197,160,89,0.25);
          border: none; cursor: pointer; padding: 0;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .gr-dot-active {
          width: 24px !important;
          border-radius: 6px !important;
          background: #c5a059 !important;
          box-shadow: 0 0 10px rgba(197,160,89,0.5) !important;
        }

        /* Swipe hint: only show on mobile */
        .gr-swipe-hint { display: none; }

        /* Rating badge shimmer */
        .gr-rating-badge {
          position: relative; overflow: hidden;
        }
        .gr-rating-badge::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(197,160,89,0.06) 50%, transparent 100%);
          animation: gr-shimmer 3.5s ease infinite;
        }
        @keyframes gr-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @media (max-width: 768px) {
          .gr-arrow-btn { display: none !important; }
          .gr-swipe-hint { display: block !important; }
          .gr-dot { width: 5px; height: 5px; }
          .gr-dot-active { width: 18px !important; }
          .gr-dots { padding-bottom: 4px; }
        }

        @media (max-width: 480px) {
          .gr-dots { gap: 6px; }
        }
      `}} />
    </section>
  );
};

export default GoogleReviews;
