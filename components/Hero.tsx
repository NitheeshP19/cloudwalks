"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <section style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100%', 
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src="/cloudwalks.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
        zIndex: 0
      }}></div>

      {/* Content */}
      <div className="animate-fade-in-up" style={{ zIndex: 1, padding: '0 20px' }}>
        <span style={{ 
          fontSize: '0.9rem', 
          letterSpacing: '0.4em', 
          textTransform: 'uppercase', 
          marginBottom: '1rem', 
          display: 'block',
          fontWeight: '300'
        }}>
          Experience the Extraordinary
        </span>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 8vw, 6rem)', 
          lineHeight: '1', 
          marginBottom: '2rem',
          maxWidth: '900px'
        }}>
          Cloud Walks <br />
          <span style={{ fontStyle: 'italic', fontWeight: '300', fontSize: '0.7em' }}>Luxury Redefined</span>
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button 
            className="luxury-button"
            onClick={() => {
              const el = document.getElementById('signature-rooms');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            EXPLORE RESORT
          </button>
          <button 
            className="luxury-outline-button"
            onClick={() => {
              const el = document.getElementById('our-promise');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            OUR STORY
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        opacity: 0.8
      }}>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, white)',
          animation: 'scrollLine 2s infinite'
        }}></div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
