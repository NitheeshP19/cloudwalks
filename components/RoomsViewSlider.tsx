"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import PreloadedImage from '@/components/PreloadedImage';

const slides = [
  { src: '/original-images/cloud walks 42.jpg', alt: 'Breathtaking mountain view from Cloud Walks rooms' },
  { src: '/original-images/cloud walks 44.jpg', alt: 'Lush highland valley view from Cloud Walks' },
  { src: '/original-images/cloud walks 41.jpg', alt: 'Misty Kodaikanal view from room windows' },
  { src: '/original-images/cloud walks 39.png', alt: 'Premium suite panoramic view Cloud Walks' },
  { src: '/original-images/cloud walks 38.png', alt: 'Serene morning view from Cloud Walks balcony' },
  { src: '/original-images/cloud walks 37.jpg', alt: 'Cloud-kissed valley landscape Kodaikanal' },
  { src: '/original-images/cloud walks 36.jpg', alt: 'Pine forest mist view Cloud Walks Kodaikanal' },
  { src: '/original-images/cloud walks 33.jpg', alt: 'Romantic evening view from Cloud Walks rooms' },
  { src: '/original-images/cloud walks 28.jpg', alt: 'Stunning sunrise over Kodaikanal valley' },
  { src: '/original-images/cloud walks 27.jpg', alt: 'Golden hour highland scenery Cloud Walks' },
  { src: '/original-images/cloud walks 22.jpg', alt: 'Peaceful natural surroundings Cloud Walks' },
  { src: '/original-images/cloud walks 20.jpg', alt: 'Verdant garden view from Cloud Walks terrace' },
  { src: '/gallery/cloud walks night view.jpg', alt: 'Magical night view from Cloud Walks Kodaikanal' },
  { src: '/gallery/cloud walks room 1.png', alt: 'Elegant premium room interior Cloud Walks' },
  { src: '/gallery/cloud walks home stay 17.jpg', alt: 'Luxury hospitality at Cloud Walks Kodaikanal' },
];

const RoomsViewSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setPrev(current);
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setIsTransitioning(false);
    }, 900);
  }, [current, isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const goToPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  const startAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 4500);
  }, [next]);

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAuto]);

  const handleDotClick = (idx: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    goTo(idx);
    startAuto();
  };

  const handleArrow = (fn: () => void) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    fn();
    startAuto();
  };

  return (
    <section style={{
      backgroundColor: '#080808',
      padding: '100px 0 80px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.2rem' }}>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, #C5A059)' }} />
          <span style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            color: '#C5A059',
            textTransform: 'uppercase',
            fontWeight: '600',
          }}>
            CURATED VISTAS
          </span>
          <div style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, #C5A059)' }} />
        </div>
        <h2 style={{
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: '300',
          letterSpacing: '0.06em',
          color: '#ffffff',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          The Beautiful View From Our Rooms
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '1rem',
          fontWeight: '300',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          Every window frames a painting. Every morning reveals a new masterpiece.
        </p>
      </div>

      {/* Slider Stage */}
      <div
        style={{
          position: 'relative',
          width: 'calc(100% - 40px)',
          maxWidth: '460px',
          margin: '0 auto',
          aspectRatio: '9/16',
          borderRadius: '16px',
          border: '1px solid rgba(197, 160, 89, 0.25)',
          overflow: 'hidden',
          userSelect: 'none',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
        }}
      >
        {/* Outgoing slide (fades out) */}
        {prev !== null && (
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0,
            transition: 'opacity 0.9s ease',
            zIndex: 1,
          }}>
            <PreloadedImage
              src={slides[prev].src}
              alt={slides[prev].alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
        )}

        {/* Active slide (fades in) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: isTransitioning ? 0 : 1,
          transition: 'opacity 0.9s ease',
          zIndex: 2,
        }}>
          <PreloadedImage
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={current === 0}
            sizes="100vw"
          />
          {/* Luxury vignette overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }} />
          {/* Bottom gradient for dots */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
            zIndex: 3,
            pointerEvents: 'none',
          }} />
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => handleArrow(goToPrev)}
          aria-label="Previous view"
          style={{
            position: 'absolute',
            left: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '52px',
            height: '52px',
            border: '1px solid rgba(197,160,89,0.6)',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: '#C5A059',
          }}
          className="slider-arrow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => handleArrow(next)}
          aria-label="Next view"
          style={{
            position: 'absolute',
            right: '24px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '52px',
            height: '52px',
            border: '1px solid rgba(197,160,89,0.6)',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            color: '#C5A059',
          }}
          className="slider-arrow"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Slide counter */}
        <div style={{
          position: 'absolute',
          top: '24px',
          right: '28px',
          zIndex: 10,
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.7)',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>

        {/* Dot Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === current ? '28px' : '8px',
                height: '4px',
                borderRadius: '2px',
                backgroundColor: idx === current ? '#C5A059' : 'rgba(255,255,255,0.35)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div style={{
        maxWidth: '460px',
        margin: '1.5rem auto 0 auto',
        padding: '0 20px',
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }} className="thumb-strip">
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Select view ${idx + 1}`}
            style={{
              flex: '0 0 80px',
              height: '54px',
              position: 'relative',
              borderRadius: '4px',
              overflow: 'hidden',
              border: idx === current ? '2px solid #C5A059' : '2px solid transparent',
              cursor: 'pointer',
              padding: 0,
              opacity: idx === current ? 1 : 0.5,
              transition: 'all 0.4s ease',
            }}
            className="thumb-btn"
          >
            <PreloadedImage
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="80px"
            />
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .slider-arrow:hover {
          background-color: rgba(197, 160, 89, 0.25) !important;
          border-color: #C5A059 !important;
          transform: translateY(-50%) scale(1.08) !important;
        }
        .thumb-strip::-webkit-scrollbar { display: none; }
        .thumb-btn:hover {
          opacity: 1 !important;
          border-color: rgba(197, 160, 89, 0.6) !important;
        }
        @media (max-width: 768px) {
          .slider-arrow { width: 40px !important; height: 40px !important; left: 12px !important; }
          .slider-arrow:last-of-type { right: 12px !important; left: auto !important; }
          .thumb-strip { gap: 5px !important; }
          .thumb-btn { flex: 0 0 60px !important; height: 40px !important; }
        }
      `}} />
    </section>
  );
};

export default RoomsViewSlider;
