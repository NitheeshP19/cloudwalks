"use client";

import React from 'react';

const amenities = [
  {
    label: "Free Wi-Fi",
    sublabel: "Seamless connectivity everywhere",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        {/* Outer arc */}
        <path d="M10 28 C18 18 46 18 54 28" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        {/* Middle arc */}
        <path d="M17 36 C22 29 42 29 47 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        {/* Inner arc */}
        <path d="M24 44 C27 40 37 40 40 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
        {/* Dot */}
        <circle cx="32" cy="51" r="3.5" fill="currentColor"/>
      </svg>
    )
  },
  {
    label: "Free Breakfast",
    sublabel: "Start your day right",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M16 26 C16 46 20 48 32 48 C44 48 48 46 48 26 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M48 30 h4 c3.3 0 6 2.7 6 6 c0 3.3 -2.7 6 -6 6 h-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M12 54 h40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M24 18 C24 14 28 14 28 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M32 20 C32 16 36 16 36 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M40 18 C40 14 44 14 44 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    )
  },
  {
    label: "Free Parking",
    sublabel: "Secure on-site parking",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="14" y="24" width="36" height="20" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
        <path d="M18 24 L22 14 H42 L46 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="24" cy="34" r="3" fill="currentColor"/>
        <circle cx="40" cy="34" r="3" fill="currentColor"/>
        <path d="M8 44 h48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    )
  },
  {
    label: "Room Service",
    sublabel: "In-room premium dining",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M10 34C10 23.5 20.5 15 32 15C43.5 15 54 23.5 54 34H10Z" fill="currentColor"/>
        <rect x="8" y="34" width="48" height="4" rx="2" fill="currentColor"/>
        <circle cx="32" cy="15" r="3.5" fill="currentColor"/>
        <path d="M14 40 C12 42 10 44 14 46 C20 49 28 50 38 48 C46 46 52 43 50 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    )
  },
  {
    label: "Laundry Service",
    sublabel: "Fresh and clean garments",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M32 20 c-3 0 -5 -2 -5 -5 c0 -3 2 -5 5 -5 c3 0 5 2 5 5 c0 2 -1 4 -3 4 l-2 2 v4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M32 24 L10 38 c-1 0.6 -1 2 0 2.6 c1 0.6 3 0.6 4 0 l18 -10 l18 10 c1 0.6 3 0.6 4 0 c1 -0.6 1 -2 0 -2.6 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    )
  },
  {
    label: "Accessible",
    sublabel: "Comfort for everyone",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="28" cy="16" r="5" fill="currentColor"/>
        <path d="M28 24 v16 h12 v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M28 24 h-6 l-6 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="24" cy="44" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    )
  },
  {
    label: "24/7 Concierge",
    sublabel: "Always here when you need us",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="32" cy="18" r="10" fill="currentColor"/>
        <path d="M16 52C16 43.2 23.2 36 32 36C40.8 36 48 43.2 48 52H16Z" fill="currentColor"/>
        <path d="M20 18 C20 10 44 10 44 18" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <rect x="17" y="17" width="5" height="8" rx="2.5" fill="currentColor"/>
        <rect x="42" y="17" width="5" height="8" rx="2.5" fill="currentColor"/>
        <path d="M44 22 Q52 24 50 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="50" cy="31" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    label: "Bonfire Evenings",
    sublabel: "Magical nights under the stars",
    svg: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M32 8 C32 8 18 22 18 36 C18 44.8 24.3 52 32 52 C39.7 52 46 44.8 46 36 C46 22 32 8 32 8Z" fill="currentColor"/>
        <path d="M32 28 C32 28 25 36 25 41 C25 44.9 28.1 48 32 48 C35.9 48 39 44.9 39 41 C39 36 32 28 32 28Z" fill="white" opacity="0.25"/>
        <path d="M32 34 C30 37 29 40 31 43 C31.5 44 32 44 32 44 C34 42 35 40 33 37 Z" fill="white" opacity="0.4"/>
      </svg>
    )
  }
];

const AmenitiesSection = () => {
  return (
    <section style={{
      padding: '120px 5%',
      backgroundColor: '#fdfbf7',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Border Gradient */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.6), transparent)'
      }} />

      {/* Subtle gold glowing orbs */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 15% 30%, rgba(197,160,89,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(197,160,89,0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '90px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197,160,89,0.6)' }} />
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}>
              Uncompromising Luxury
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197,160,89,0.6)' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '300',
            letterSpacing: '0.02em',
            color: '#111',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            Every Comfort <br/>
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none' }}>Considered</span>
          </h2>
        </div>

        {/* Amenities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          justifyItems: 'center',
        }}>
          {amenities.map((item) => (
            <div
              key={item.label}
              className="amenity-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.8rem',
                textAlign: 'center',
                cursor: 'default',
                padding: '3.5rem 2rem',
                width: '100%',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(197,160,89,0.15)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(197,160,89,0.12)';
                e.currentTarget.style.borderColor = 'rgba(197,160,89,0.4)';
                const iconEl = e.currentTarget.querySelector('.amenity-icon') as HTMLElement | null;
                if (iconEl) {
                  iconEl.style.transform = 'scale(1.1)';
                  iconEl.style.color = '#fff';
                  iconEl.style.backgroundColor = 'var(--primary)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(197,160,89,0.15)';
                const iconEl = e.currentTarget.querySelector('.amenity-icon') as HTMLElement | null;
                if (iconEl) {
                  iconEl.style.transform = 'scale(1)';
                  iconEl.style.color = 'var(--primary)';
                  iconEl.style.backgroundColor = 'transparent';
                }
              }}
            >
              {/* Corner Accents */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', width: '20px', height: '20px', borderTop: '1px solid var(--primary)', borderLeft: '1px solid var(--primary)', opacity: 0.3 }} />
              <div style={{ position: 'absolute', top: '10px', right: '10px', width: '20px', height: '20px', borderTop: '1px solid var(--primary)', borderRight: '1px solid var(--primary)', opacity: 0.3 }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '20px', height: '20px', borderBottom: '1px solid var(--primary)', borderLeft: '1px solid var(--primary)', opacity: 0.3 }} />
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '20px', height: '20px', borderBottom: '1px solid var(--primary)', borderRight: '1px solid var(--primary)', opacity: 0.3 }} />

              {/* Icon container */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
              }}>
                {/* Outer decorative ring */}
                <div style={{
                  position: 'absolute',
                  inset: '-5px',
                  borderRadius: '50%',
                  border: '1px dashed rgba(197,160,89,0.4)',
                  animation: 'spin 20s linear infinite',
                }} />
                
                <div
                  className="amenity-icon"
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197,160,89,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    backgroundColor: 'transparent',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                >
                  {item.svg}
                </div>
              </div>

              {/* Label */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: '#1a1a1a',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                }}>
                  {item.label}
                </h3>
                <div style={{ width: '30px', height: '2px', backgroundColor: 'var(--primary)', margin: '0 auto 1rem auto', opacity: 0.5 }} />
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.9rem',
                  color: '#666666',
                  fontWeight: '300',
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                }}>
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      {/* Keyframes for spinning dashed border */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
};

export default AmenitiesSection;
