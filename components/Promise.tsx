"use client";

import React from 'react';

const promises = [
  {
    num: "01",
    title: "Uncompromising Safety",
    description: "Your peace of mind is our highest priority. Featuring round-the-clock secured perimeters, private keyless entryways, fully vetted professional staff, and medical-grade sanitization protocols for a pristine, secure sanctuary.",
    image: "/gallery/cloud%20walks%20home%20stay%2013.jpg"
  },
  {
    num: "02",
    title: "Assured Premium Services",
    description: "Experience hospitality crafted exclusively around you. Enjoy a dedicated 24/7 host concierge, bespoke farm-to-table culinary services curated by private chefs, premium high-thread linens, and tailormade mountain experiences.",
    image: "/gallery/cloud%20walks%2034.jpg"
  },
  {
    num: "03",
    title: "Seamless Modern Comfort",
    description: "Indulge in wild, untouched nature without losing connection. Fully equipped with high-speed fiber internet, premium designer bath amenities, smart room controls, and redundant power backup systems.",
    image: "/gallery/cloud%20walks%20room%201.png"
  }
];

const PromiseSection = () => {
  return (
    <section id="our-promise" style={{
      padding: '120px 5%',
      backgroundColor: '#f8f5f0', // Luxury off-white / sand-beige tone
      color: '#1a1a1a', // Elegant dark text
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background visual accent */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,160,89,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.85rem',
            letterSpacing: '0.3em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            THE CLOUD WALKS STANDARD
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            color: '#1a1a1a'
          }}>
            OUR SOLEMN PROMISE
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--primary)',
            margin: '0 auto 2.5rem auto',
            boxShadow: '0 0 4px rgba(197, 160, 89, 0.4)'
          }} />
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: '1.8',
            color: '#555555',
            maxWidth: '750px',
            margin: '0 auto',
            fontWeight: '300'
          }}>
            At Cloud Walks, we believe luxury lies in the details. We promise a harmonious blend of elite hospitality, absolute privacy, and meticulous care, nestled within the majestic hills of Kodaikanal.
          </p>
        </div>

        {/* Promise Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          justifyContent: 'center'
        }}>
          {promises.map((promise) => (
            <div
              key={promise.title}
              style={{
                position: 'relative',
                height: '480px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                cursor: 'pointer',
                border: '1px solid rgba(197, 160, 89, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(197, 160, 89, 0.25)';
                const img = e.currentTarget.querySelector('.promise-img') as HTMLDivElement | null;
                if (img) img.style.transform = 'scale(1.08)';
                const overlay = e.currentTarget.querySelector('.promise-overlay') as HTMLDivElement | null;
                if (overlay) overlay.style.background = 'linear-gradient(to bottom, rgba(10, 10, 10, 0.2) 0%, rgba(10, 10, 10, 0.92) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.15)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                const img = e.currentTarget.querySelector('.promise-img') as HTMLDivElement | null;
                if (img) img.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.promise-overlay') as HTMLDivElement | null;
                if (overlay) overlay.style.background = 'linear-gradient(to bottom, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.85) 100%)';
              }}
            >
              {/* Background image container */}
              <div
                className="promise-img"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${promise.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  zIndex: 0
                }}
              />

              {/* Glassmorphic dark gradient overlay */}
              <div
                className="promise-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.85) 100%)',
                  transition: 'background 0.4s ease',
                  zIndex: 1
                }}
              />

              {/* Card content wrapper */}
              <div style={{
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '3rem 2.5rem',
                zIndex: 2,
                color: '#ffffff'
              }}>
                {/* Giant watermarked number */}
                <span style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2.5rem',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '4.5rem',
                  fontWeight: '900',
                  color: 'rgba(255, 255, 255, 0.08)',
                  lineHeight: '1',
                  userSelect: 'none'
                }}>
                  {promise.num}
                </span>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-cinzel), serif',
                  color: 'var(--primary)',
                  letterSpacing: '0.05em',
                  marginBottom: '1.2rem',
                  textTransform: 'uppercase',
                }}>
                  {promise.title}
                </h3>
                
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontWeight: '300',
                }}>
                  {promise.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PromiseSection;
