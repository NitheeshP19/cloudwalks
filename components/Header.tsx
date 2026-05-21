"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const roomLinks = [
  { label: 'Romantic Couples Stay', href: '/curated-romantic-rooms-for-couples-in-kodaikanal' },
  { label: 'Budget Premium Stay', href: '/affordable-premium-rooms' },
  { label: 'Budget Queen Rooms', href: '/budget-queen-rooms-in-kodaikanal' },
  { label: 'Premium Stays', href: '/premium-stays' },
  { label: 'Luxury Cottages', href: '/best-luxury-cottages-in-kodaikanal' },
  { label: 'Family Friendly Hotel', href: '/family-friendly-hotel-in-kodaikanal' },
  { label: 'Luxury Villas', href: '/luxury-villas-in-kodaikanal' },
  { label: 'Premium Wood House', href: '/budget-friendly-premium-wood-house-stay-in-kodaikanal' },
];

const desktopLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ROOMS', href: '#', children: roomLinks },
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

const drawerLinks = [
  { label: 'HOME', href: '/' },
  ...roomLinks.map((link) => ({ label: link.label.toUpperCase(), href: link.href })),
  { label: 'GALLERY', href: '/gallery' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT US', href: '/contact' },
];



const darkHeroRoutes = new Set([
  '/',
  '/best-luxury-cottages-in-kodaikanal',
  '/affordable-premium-rooms',
  '/premium-stays',
  '/blog',
  '/curated-romantic-rooms-for-couples-in-kodaikanal',
  '/budget-friendly-premium-wood-house-stay-in-kodaikanal',
  '/family-friendly-hotel-in-kodaikanal',
  '/luxury-villas-in-kodaikanal',
  '/budget-queen-rooms-in-kodaikanal',
  '/contact',
]);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hasDarkHero = darkHeroRoutes.has(pathname);
  const isTransparent = hasDarkHero && !isScrolled;
  const navColor = isTransparent ? '#ffffff' : '#203040';
  const logoFilter = isTransparent ? 'none' : 'invert(1)';

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
      <header
        className="sticky-header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          height: isScrolled ? '60px' : '68px',
          padding: '0 2%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isTransparent
            ? 'linear-gradient(to bottom, rgba(9, 24, 39, 0.72) 0%, rgba(9, 24, 39, 0.28) 58%, rgba(9, 24, 39, 0) 100%)'
            : '#ffffff',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(197, 160, 89, 0.18)',
          boxShadow: isTransparent ? 'none' : '0 6px 24px rgba(23, 35, 46, 0.06)',
          transition: 'height 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="left-group" style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
          <Link
            href="/"
            className="brand-logo"
            aria-label="Cloud Walks home"
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}
          >
            <Image
              src="/logo.png"
              alt="Cloud Walks"
              width={76}
              height={76}
              priority
              style={{
                width: isScrolled ? '64px' : '76px',
                height: isScrolled ? '64px' : '76px',
                objectFit: 'contain',
                filter: logoFilter,
                transition: 'width 0.3s ease, height 0.3s ease, filter 0.3s ease',
              }}
            />
          </Link>
        </div>

        <nav className="desktop-nav" aria-label="Primary navigation" style={{ 
          position: 'absolute', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1.85rem' 
        }}>
            {desktopLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="nav-dropdown-container">
                    <button
                      type="button"
                      className="desktop-nav-link rooms-trigger"
                      style={{ color: navColor }}
                    >
                      {link.label}
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>

                    <div className="nav-dropdown-menu">
                      {link.children.map((child) => (
                        <Link key={child.href} href={child.href} className="dropdown-item">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`desktop-nav-link${isActive(link.href) ? ' active' : ''}`}
                  style={{ color: navColor }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

        <div className="right-controls" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem', flexShrink: 0 }}>
          <div className="desktop-socials" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://www.instagram.com/cloudwalks_homestay?igsh=MTd4ZGN0aHp6dGloaw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: navColor, transition: 'transform 0.3s', display: 'flex' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/2165946173420371/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: navColor, transition: 'transform 0.3s', display: 'flex' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
          <button className="taj-book-btn" onClick={handleBookNow}>
            BOOK A STAY
          </button>

          <button className="mobile-book-btn" onClick={handleBookNow}>
            BOOK STAY
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>



      <div
        onClick={() => setIsMenuOpen(false)}
        className="nav-backdrop"
        style={{
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
        }}
      />

      <aside
        className="side-panel"
        aria-hidden={!isMenuOpen}
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="side-panel-header">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cloud Walks home"
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Image
              src="/logo.png"
              alt="Cloud Walks"
              width={64}
              height={64}
              style={{
                width: '64px',
                height: '64px',
                objectFit: 'contain',
                filter: 'invert(1)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ 
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '1.05rem',
                color: 'var(--primary)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                lineHeight: 1.2
              }}>
                CLOUD WALKS
              </span>
              <span style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '0.65rem',
                color: '#666',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}>
                Home Stay
              </span>
            </div>
          </Link>

          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="close-menu-btn"
            type="button"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="side-panel-nav" aria-label="Menu navigation">
          {drawerLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(26px)',
                transitionDelay: isMenuOpen ? `${index * 0.035}s` : '0s',
              }}
            >
              <span>{link.label}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        <div className="side-panel-footer">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <a href="https://www.instagram.com/cloudwalks_homestay?igsh=MTd4ZGN0aHp6dGloaw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: 'var(--primary)', padding: '8px', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '4px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/2165946173420371/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: 'var(--primary)', padding: '8px', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '4px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
          <button className="luxury-button" onClick={handleBookNow}>
            BOOK YOUR STAY
          </button>
        </div>
      </aside>

      <style dangerouslySetInnerHTML={{
        __html: `
          .desktop-nav-link {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 0.38rem;
            border: 0;
            background: transparent;
            padding: 0.35rem 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.84rem;
            font-weight: 500;
            line-height: 1;
            letter-spacing: 0.055em;
            text-transform: uppercase;
            white-space: nowrap;
            cursor: pointer;
            transition: color 0.25s ease;
          }

          .desktop-nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: -0.75rem;
            height: 2px;
            background: var(--primary);
            opacity: 0;
            transform: scaleX(0.45);
            transition: opacity 0.25s ease, transform 0.25s ease;
          }

          .desktop-nav-link:hover,
          .desktop-nav-link.active,
          .nav-dropdown-container:hover .rooms-trigger {
            color: var(--primary) !important;
          }

          .desktop-nav-link:hover::after,
          .desktop-nav-link.active::after,
          .nav-dropdown-container:hover .rooms-trigger::after {
            opacity: 1;
            transform: scaleX(1);
          }

          .nav-dropdown-container {
            position: relative;
            display: flex;
            align-items: center;
            padding: 1.8rem 0;
          }

          .nav-dropdown-container:hover .nav-dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
          }

          .nav-dropdown-container:hover .rooms-trigger svg {
            transform: rotate(180deg);
          }

          .rooms-trigger svg {
            transition: transform 0.25s ease;
          }

          .nav-dropdown-menu {
            position: absolute;
            top: calc(100% - 0.4rem);
            left: 50%;
            z-index: 1000;
            min-width: 272px;
            padding: 0.65rem 0;
            border: 1px solid rgba(197, 160, 89, 0.2);
            background: #fffdf9;
            box-shadow: 0 18px 38px rgba(18, 31, 42, 0.13);
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateX(-50%) translateY(12px);
            transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
          }

          .dropdown-item {
            display: block;
            padding: 0.78rem 1.35rem;
            color: #203040;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.76rem;
            font-weight: 600;
            letter-spacing: 0.075em;
            text-transform: uppercase;
            transition: background-color 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
          }

          .dropdown-item:hover {
            padding-left: 1.65rem;
            color: var(--primary);
            background: rgba(197, 160, 89, 0.08);
          }

          .taj-book-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 156px;
            height: 44px;
            border: 0;
            border-radius: 0;
            background: #bd953b;
            color: #ffffff;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.09em;
            text-transform: uppercase;
            cursor: pointer;
            transition: background-color 0.25s ease, transform 0.25s ease;
          }

          .taj-book-btn:hover {
            background: #a77f30;
            transform: translateY(-1px);
          }

          .mobile-menu-btn {
            display: none;
            width: 38px;
            height: 38px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 6px;
            border: 0;
            background: transparent;
            color: var(--primary);
            cursor: pointer;
            padding: 0;
          }

          .mobile-menu-btn span {
            display: block;
            width: 28px;
            height: 1.5px;
            background: currentColor;
          }

          .mobile-book-btn {
            display: none;
            align-items: center;
            justify-content: center;
            height: 34px;
            padding: 0 12px;
            background: var(--primary);
            color: #ffffff;
            border: none;
            border-radius: 2px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            cursor: pointer;
            box-shadow: 0 4px 10px rgba(197, 160, 89, 0.2);
          }



          .nav-backdrop {
            position: fixed;
            inset: 0;
            z-index: 1000;
            background: rgba(10, 10, 10, 0.42);
            backdrop-filter: blur(4px);
            transition: opacity 0.35s ease, visibility 0.35s ease;
          }

          .side-panel {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 1001;
            width: min(420px, 90vw);
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            background: #fffdf9;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.08);
            transition: transform 0.48s cubic-bezier(0.77, 0, 0.175, 1);
          }

          .side-panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2rem;
            border-bottom: 1px solid rgba(197, 160, 89, 0.18);
          }

          .close-menu-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: transparent;
            color: var(--primary);
            cursor: pointer;
            padding: 0.35rem;
            transition: transform 0.25s ease;
          }

          .close-menu-btn:hover {
            transform: rotate(90deg);
          }

          .side-panel-nav {
            flex: 1;
            padding: 1rem 0;
          }

          .side-panel-nav a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.08rem 2.35rem;
            border-bottom: 1px solid rgba(197, 160, 89, 0.08);
            color: var(--primary);
            font-family: var(--font-cinzel), serif;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.13em;
            transition: transform 0.28s ease, opacity 0.28s ease, background-color 0.25s ease, padding-left 0.25s ease;
          }

          .side-panel-nav a:hover {
            padding-left: 2.75rem;
            background: rgba(197, 160, 89, 0.06);
          }

          .side-panel-footer {
            padding: 2rem 2.35rem;
            border-top: 1px solid rgba(197, 160, 89, 0.15);
            background: rgba(197, 160, 89, 0.03);
          }

          .side-panel-footer .luxury-button {
            width: 100%;
            padding: 0.95rem;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
          }

          @media (max-width: 1180px) {
            .desktop-nav {
              gap: 1.2rem !important;
            }

            .desktop-nav-link {
              font-size: 0.76rem;
              letter-spacing: 0.045em;
            }

            .taj-book-btn {
              min-width: 138px;
              padding: 0 1rem;
            }
          }

          @media (max-width: 991px) {
            .sticky-header {
              height: 60px !important;
              padding: 0 4% !important;
              background: #ffffff !important;
              border-bottom: 1px solid rgba(197, 160, 89, 0.18) !important;
              box-shadow: none !important;
            }

            .left-group {
              gap: 0 !important;
            }

            .brand-logo img {
              width: 52px !important;
              height: 52px !important;
              filter: invert(1) !important;
            }

            .desktop-nav,
            .desktop-socials,
            .taj-book-btn {
              display: none !important;
            }

            .mobile-menu-btn,
            .mobile-book-btn {
              display: inline-flex !important;
            }


          }

          @media (max-width: 520px) {
            .sticky-header {
              padding: 0 4% !important;
            }

            .brand-logo img {
              width: 48px !important;
              height: 48px !important;
            }

            .side-panel-header {
              padding: 1.5rem 1.6rem;
            }

            .side-panel-nav a {
              padding-left: 1.7rem;
              padding-right: 1.7rem;
              font-size: 0.74rem;
            }

            .side-panel-nav a:hover {
              padding-left: 2rem;
            }

            .side-panel-footer {
              padding: 1.6rem;
            }
          }
        `,
      }} />
    </>
  );
};

export default Header;
