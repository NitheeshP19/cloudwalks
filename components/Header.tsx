"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'BUDGET PREMIUM STAY', href: '/affordable-premium-rooms' },
  { label: 'BUDGET QUEEN ROOMS', href: '/budget-queen-rooms-in-kodaikanal' },
  { label: 'PREMIUM STAYS', href: '/premium-stays' },
  { label: 'LUXURY COTTAGES', href: '/best-luxury-cottages-in-kodaikanal' },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkHero = pathname === '/' || pathname === '/best-luxury-cottages-in-kodaikanal' || pathname === '/affordable-premium-rooms' || pathname === '/premium-stays' || pathname === '/blog' || pathname === '/curated-romantic-rooms-for-couples-in-kodaikanal' || pathname === '/budget-friendly-premium-wood-house-stay-in-kodaikanal' || pathname === '/family-friendly-hotel-in-kodaikanal' || pathname === '/luxury-villas-in-kodaikanal' || pathname === '/gallery' || pathname === '/budget-queen-rooms-in-kodaikanal' || pathname === '/contact';
  const themeColor = isScrolled ? '#1a1a1a' : (isDarkHero ? '#ffffff' : 'var(--primary)');


  const handleBookNow = () => {
    const el = document.getElementById('contact-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <>
      {/* ─── Main Sticky Navbar ─── */}
      <header
        className="sticky-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          paddingLeft: '4%',
          paddingRight: '4%',
          paddingTop: isScrolled ? '1rem' : '2rem',
          paddingBottom: isScrolled ? '1rem' : '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isScrolled ? '#ffffff' : 'transparent',
          borderBottom: isScrolled ? '1px solid rgba(197, 160, 89, 0.15)' : 'none',
          boxShadow: isScrolled ? '0 4px 24px rgba(197, 160, 89, 0.05)' : 'none',
          transition: 'all 0.4s ease-in-out',
        }}
      >
        {/* Brand Logo */}
        <div className="brand-logo" style={{ fontSize: '1.3rem', fontWeight: '700', letterSpacing: '4px', fontFamily: 'var(--font-cinzel), serif' }}>
          <Link href="/" style={{ color: themeColor, transition: 'color 0.4s ease-in-out' }}>
            CLOUD WALKS
          </Link>
        </div>

        {/* Desktop Navigation Menu (Taj Style Inline Links) */}
        <nav className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {['HOME', 'ROOMS', 'GALLERY', 'BLOG', 'CONTACT'].map((item) => {
            if (item === 'ROOMS') {
              return (
                <div 
                  key={item}
                  className="nav-dropdown-container"
                  style={{
                    position: 'relative',
                    padding: '10px 0',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      letterSpacing: '0.15em',
                      color: themeColor,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    ROOMS
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.3s ease', marginTop: '1px' }}>
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  
                  {/* Dropdown Menu */}
                  <div 
                    className="nav-dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(10px)',
                      backgroundColor: '#FFFDF9',
                      border: '1px solid rgba(197, 160, 89, 0.18)',
                      borderRadius: '8px',
                      padding: '0.8rem 0',
                      minWidth: '240px',
                      boxShadow: '0 10px 30px rgba(197, 160, 89, 0.1)',
                      opacity: 0,
                      visibility: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 1000,
                    }}
                  >
                    <Link
                      href="/curated-romantic-rooms-for-couples-in-kodaikanal"
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.5rem',
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        color: '#222222',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      className="dropdown-item"
                    >
                      Romantic Couples Stay
                    </Link>
                    <Link
                      href="/budget-queen-rooms-in-kodaikanal"
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.5rem',
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        color: '#222222',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      className="dropdown-item"
                    >
                      Budget Queen Rooms
                    </Link>
                    <Link
                      href="/family-friendly-hotel-in-kodaikanal"
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.5rem',
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        color: '#222222',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      className="dropdown-item"
                    >
                      Family Friendly Hotel
                    </Link>
                    <Link
                      href="/luxury-villas-in-kodaikanal"
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.5rem',
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        color: '#222222',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      className="dropdown-item"
                    >
                      Luxury Villas
                    </Link>
                    <Link
                      href="/budget-friendly-premium-wood-house-stay-in-kodaikanal"
                      style={{
                        display: 'block',
                        padding: '0.7rem 1.5rem',
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        color: '#222222',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                      className="dropdown-item"
                    >
                      Premium Wood House
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item}
                href={
                  item === 'HOME'
                    ? '/'
                    : item === 'GALLERY'
                      ? '/gallery'
                      : item === 'BLOG'
                        ? '/blog'
                        : item === 'CONTACT'
                          ? '/contact'
                          : `#${item.toLowerCase()}`
                }
                style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: themeColor,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '4px 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = themeColor;
                }}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        {/* Right side controls */}
        <div className="right-controls" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <button 
            className="luxury-button book-now-btn" 
            onClick={handleBookNow}
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.7rem' }}
          >
            BOOK NOW
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '28px',
              height: '18px',
              padding: 0,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '100%',
                height: '2px',
                backgroundColor: themeColor,
                borderRadius: '2px',
                transition: 'background-color 0.3s ease',
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* ─── Dark Backdrop ─── */}
      <div
        onClick={() => setIsMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(10, 10, 10, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 1000,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.4s ease',
        }}
      />

      {/* ─── Taj-Style Side Panel (Right Side Slide-In) ─── */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(420px, 90vw)',
          height: '100vh',
          backgroundColor: '#FFFDF9', // Luxury warm ivory cream background
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s cubic-bezier(0.77, 0, 0.175, 1)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.08)',
          overflowY: 'auto',
        }}
      >
        {/* Panel Header — Logo + LOGIN / CLOSE */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2.5rem 2rem 2rem 2rem',
          borderBottom: '1px solid rgba(197, 160, 89, 0.18)',
        }}>
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-font-cinzel), serif',
              fontSize: '1.2rem',
              fontWeight: '700',
              letterSpacing: '3px',
              color: 'var(--primary)',
            }}
          >
            CLOUD WALKS
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {/* X Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0)'}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <line x1="2" y1="2" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="18" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links (Exactly like Taj Hotels Drawer styling) */}
        <nav style={{ padding: '1.5rem 0', flex: 1 }}>
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.2rem 2.5rem',
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '0.85rem',
                letterSpacing: '0.15em',
                fontWeight: '600',
                color: 'var(--primary)',
                borderBottom: '1px solid rgba(197, 160, 89, 0.08)',
                transition: 'all 0.3s ease',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(30px)',
                transitionDelay: isMenuOpen ? `${index * 0.04}s` : '0s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.05)';
                e.currentTarget.style.paddingLeft = '3rem';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.paddingLeft = '2.5rem';
              }}
            >
              <span>{link.label}</span>
              {/* Elegant minimal gold right chevron arrow */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
                <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* Panel Footer */}
        <div style={{
          padding: '2rem 2.5rem',
          borderTop: '1px solid rgba(197, 160, 89, 0.15)',
          backgroundColor: 'rgba(197, 160, 89, 0.02)',
        }}>
          <button 
            className="luxury-button" 
            onClick={handleBookNow}
            style={{ width: '100%', fontSize: '0.75rem', padding: '0.9rem', letterSpacing: '0.15em' }}
          >
            BOOK YOUR STAY
          </button>
        </div>
      </div>

      {/* Responsive Inline Navigation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-dropdown-container:hover .nav-dropdown-menu {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        .dropdown-banner:hover .dropdown-banner-img {
          transform: scale(1.08) !important;
        }
        .nav-dropdown-container:hover svg {
          transform: rotate(180deg) !important;
          color: var(--primary) !important;
        }
        .nav-dropdown-container:hover span {
          color: var(--primary) !important;
        }
        .dropdown-item {
          transition: all 0.25s ease !important;
        }
        .dropdown-item:hover {
          background-color: rgba(197, 160, 89, 0.08) !important;
          color: var(--primary) !important;
          padding-left: 1.8rem !important;
        }
        @media (max-width: 991px) {
          .desktop-nav {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .sticky-header {
            padding-top: 0.8rem !important;
            padding-bottom: 0.8rem !important;
            padding-left: 5% !important;
            padding-right: 5% !important;
          }
          .right-controls {
            gap: 1.2rem !important;
          }
        }
        @media (max-width: 480px) {
          .sticky-header {
            padding-left: 4% !important;
            padding-right: 4% !important;
          }
          .brand-logo {
            font-size: 1.05rem !important;
            letter-spacing: 2px !important;
          }
          .right-controls {
            gap: 0.8rem !important;
          }
          .book-now-btn {
            padding: 0.45rem 0.9rem !important;
            font-size: 0.65rem !important;
          }
        }
      `}} />
    </>
  );
};

export default Header;
