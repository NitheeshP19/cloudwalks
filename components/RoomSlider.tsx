"use client";

import React, { useRef } from 'react';
import Link from 'next/link';

const rooms = [
  {
    title: "GRAND PRESIDENTIAL SUITE",
    image: "/gallery/cloud%20walks%2043.jpg"
  },
  {
    title: "DELUXE FAMILY SUITES",
    image: "/original-images/cloud%20walks%2049.jpg"
  },
  {
    title: "MASTER EXECUTIVE SUITES",
    image: "/gallery/cloud%20walks%20home%20stay%205.jpg"
  },
  {
    title: "HONEYMOON SUITE BEDROOM",
    image: "/gallery/cloud%20walks%20home%20stay%203.jpg"
  },
  {
    title: "COZY WOODEN ATTIC SUITE",
    image: "/original-images/cloud%20walks%2058.JPG"
  },
  {
    title: "DELUXE BUNK BED FAMILY ROOM",
    image: "/original-images/cloud%20walks%2050.jpg"
  },
  {
    title: "ROYAL CANOPY SUITE",
    image: "/gallery/cloud%20walks%20room%201.png"
  },
  {
    title: "PRESIDENTIAL BALCONY SUITE",
    image: "/gallery/cloud%20walks%20home%20stay%206.jpg"
  },
  {
    title: "PREMIUM ESCAPE COTTAGE",
    image: "/gallery/cloud%20walks%2032.jpg"
  },
  {
    title: "ROYAL EXECUTIVE SUITE",
    image: "/gallery/cloud%20walks%2034.jpg"
  },
  {
    title: "GRAND PRESIDENTIAL VILLA",
    image: "/gallery/cloud%20walks%20home%20stay%2043.jpg"
  },
  {
    title: "COTTAGE GARDEN VIEW",
    image: "/original-images/cloud%20walks%2023.jpg"
  },
  {
    title: "MISTY PINE FOREST",
    image: "/original-images/cloud%20walks%2025.jpg"
  },
  {
    title: "PANORAMIC VALLEY VISTA",
    image: "/original-images/cloud%20walks%2026.jpg"
  },
  {
    title: "PINE TREE CANOPIES",
    image: "/original-images/cloud%20walks%2030.jpg"
  },
  {
    title: "PREMIUM EXECUTIVE SUITE",
    image: "/original-images/cloud%20walks%2053.jpg"
  },
  {
    title: "NATURE RETREAT SUITE",
    image: "/original-images/cloud%20walks%2047.jpg"
  },
  {
    title: "COZY WOODEN ATTIC LOFT",
    image: "/original-images/cloud%20walks%2054.jpg"
  },
  {
    title: "LUXURY MOUNTAIN VIEW ROOMS",
    image: "/gallery/cloud%20walks%20room%202.png"
  },
  {
    title: "ELEGANT INTERIOR SPACES",
    image: "/gallery/cloud%20walks%2039.png"
  },
  {
    title: "PREMIUM COTTAGE SUITES",
    image: "/gallery/cloud%20walks%2040.png"
  },
  {
    title: "COZY EVENING AMBIENCE",
    image: "/gallery/cloud%20walks%20home%20stay%2014.jpg"
  },
  {
    title: "PANORAMIC BALCONY VIEWS",
    image: "/gallery/cloud%20walks%20room%201.png"
  }
];

const RoomSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 300;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="signature-rooms" style={{
      padding: '100px 5%',
      backgroundColor: '#f8f5f0', // Premium beige matching the Taj aesthetic
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '60px',
          justifyContent: 'center'
        }}>
          <div style={{ width: '60px', height: '1px', backgroundColor: '#a0a0a0' }}></div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#1a1a1a',
            textTransform: 'uppercase',
            margin: 0
          }}>
            SIGNATURE ROOMS
          </h2>
          <div style={{ width: '60px', height: '1px', backgroundColor: '#a0a0a0' }}></div>
        </div>

        {/* Slider Container with Controls */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          
          {/* Left Button */}
          <button 
            onClick={() => scroll('left')}
            className="slider-btn left-btn"
            aria-label="Previous slide"
            style={{
              position: 'absolute',
              zIndex: 10,
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '1px solid var(--primary)',
              backgroundColor: '#f8f5f0',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Slider Scroll Area */}
          <div 
            ref={sliderRef}
            className="hide-scrollbar"
            style={{
              display: 'flex',
              gap: '30px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '10px 0',
              width: '100%',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {rooms.map((room, index) => (
              <div 
                key={index} 
                style={{
                  minWidth: 'min(350px, 85vw)',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1.1', // Slightly taller than square, Taj style
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                }}>
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${room.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                
                {/* Title Below Image */}
                <h3 style={{
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-cinzel), serif',
                  color: '#666666',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  {room.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll('right')}
            className="slider-btn right-btn"
            aria-label="Next slide"
            style={{
              position: 'absolute',
              zIndex: 10,
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '1px solid var(--primary)',
              backgroundColor: '#f8f5f0',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>

        {/* View More Gallery Button */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/gallery" style={{ display: 'inline-block' }}>
            <button className="luxury-button" style={{ 
              padding: '1rem 3rem', 
              fontSize: '0.85rem',
              letterSpacing: '0.15em' 
            }}>
              VIEW MORE ON GALLERY
            </button>
          </Link>
        </div>

      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .slider-btn:hover {
          background-color: var(--primary) !important;
          color: white !important;
        }
        .slider-btn.left-btn {
          left: -20px;
        }
        .slider-btn.right-btn {
          right: -20px;
        }
        @media (max-width: 768px) {
          .slider-btn {
            width: 40px !important;
            height: 40px !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
            background-color: rgba(248, 245, 240, 0.95) !important;
          }
          .slider-btn.left-btn {
            left: 5px !important;
          }
          .slider-btn.right-btn {
            right: 5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RoomSlider;
