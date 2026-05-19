"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const handleBookNow = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-us';
    }
  };

  return (
    <footer style={{ backgroundColor: '#080808', color: '#ffffff', position: 'relative', overflow: 'hidden' }}>

      {/* ── Decorative Background Watermark ── */}
      <div aria-hidden style={{
        position: 'absolute', bottom: '-60px', right: '-40px',
        fontFamily: 'var(--font-cinzel), serif',
        fontSize: 'clamp(80px, 14vw, 200px)',
        fontWeight: '900',
        color: 'rgba(255,255,255,0.02)',
        letterSpacing: '0.1em',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1
      }}>CLOUD WALKS</div>

      {/* ── Top gold divider ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)'
      }} />

      {/* ═══════════ PRE-FOOTER CTA BAND ═══════════ */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div>
          {/* Premium Mountain icon */}
          <svg width="38" height="26" viewBox="0 0 38 26" fill="none" style={{ marginBottom: '18px', opacity: 0.9 }}>
            <path d="M1 25L10 8L17 16L22 7L37 25H1Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
            <path d="M22 7L28 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
            <path d="M28 1L31 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          </svg>
          <h2 style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
            fontWeight: '700',
            color: '#ffffff',
            letterSpacing: '0.04em',
            margin: '0 0 12px 0',
            lineHeight: 1.2
          }}>
            Begin Your Highland Escape
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: '300',
            margin: 0,
            maxWidth: '480px',
            lineHeight: '1.7'
          }}>
            Misty mornings, candlelit dinners, and views that stay with you forever. Reserve your stay at Cloud Walks today.
          </p>
        </div>
        <button 
          onClick={handleBookNow}
          style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.78rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            color: '#080808',
            backgroundColor: '#ffffff',
            border: '1px solid #ffffff',
            padding: '1.1rem 2.8rem',
            cursor: 'pointer',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
            whiteSpace: 'nowrap',
            borderRadius: '2px'
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = 'transparent';
            el.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = '#ffffff';
            el.style.color = '#080808';
          }}
        >
          RESERVE YOUR STAY
        </button>
      </div>

      {/* ═══════════ MAIN FOOTER BODY ═══════════ */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 5% 50px 5%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '60px' }}>

          {/* ── BRAND COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', gridColumn: 'span 1' }}>
            {/* Cloud Walks Logomark SVG */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1"/>
                <path d="M9 22C9 22 10 18 14 18C14 18 13 14 17 13C21 12 22 15 22 15C22 15 24 14 26 16C28 18 27 22 27 22" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#ffffff',
                letterSpacing: '0.18em'
              }}>CLOUD WALKS</span>
            </div>

            <p style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.92rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: '1.85',
              fontWeight: '300',
              maxWidth: '300px',
              margin: 0
            }}>
              A premium sanctuary perched in the clouds of Kodaikanal. Where luxury meets nature, and every breath is mountain air.
            </p>

            {/* Star Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.9 }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginLeft: '8px', letterSpacing: '0.08em' }}>PREMIUM RATED</span>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '4px' }}>
              {[
                {
                  label: 'Instagram', href: '#',
                  icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                },
                {
                  label: 'Facebook', href: '#',
                  icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                },
                {
                  label: 'YouTube', href: '#',
                  icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
                },
              ].map(({ label, href, icon }) => (
                <a key={label} href={href} aria-label={label}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '2px', color: 'rgba(255,255,255,0.55)', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#080808'; e.currentTarget.style.borderColor = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── STAYS ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter), sans-serif', marginBottom: '10px', textTransform: 'uppercase' }}>Explore</span>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.15em', margin: 0, textTransform: 'uppercase' }}>Our Stays</h3>
            </div>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Premium Stays', href: '/premium-stays' },
                { label: 'Luxury Cottages', href: '/best-luxury-cottages-in-kodaikanal' },
                { label: 'Romantic Couples Stay', href: '/curated-romantic-rooms-for-couples-in-kodaikanal' },
                { label: 'Family Friendly Hotel', href: '/family-friendly-hotel-in-kodaikanal' },
                { label: 'Budget Queen Rooms', href: '/budget-queen-rooms-in-kodaikanal' },
                { label: 'Budget Premium Stay', href: '/affordable-premium-rooms' },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.88rem', fontWeight: '400', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.25s ease', display: 'flex', alignItems: 'center', gap: '10px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.gap = '14px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.gap = '10px'; }}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M8 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ── DISCOVER ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter), sans-serif', marginBottom: '10px', textTransform: 'uppercase' }}>Navigate</span>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.15em', margin: 0, textTransform: 'uppercase' }}>Discover</h3>
            </div>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Photo Gallery', href: '/gallery' },
                { label: 'Blog & Travel Stories', href: '/blog' },
                { label: 'Luxury Villas', href: '/luxury-villas-in-kodaikanal' },
                { label: 'Contact & Booking', href: '/#contact-us' },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.88rem', fontWeight: '400', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.25s ease', display: 'flex', alignItems: 'center', gap: '10px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.gap = '14px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.gap = '10px'; }}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 4h10M8 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Awards / Badges */}
            <div style={{ marginTop: '16px', padding: '18px 20px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.8 }}>
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.78rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 3px 0' }}>TRAVELLERS' CHOICE</p>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Top-rated Kodaikanal Stay</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── CONTACT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter), sans-serif', marginBottom: '10px', textTransform: 'uppercase' }}>Reach Us</span>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.15em', margin: 0, textTransform: 'uppercase' }}>Concierge</h3>
            </div>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.2)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Location */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.72rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 5px 0', textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.6', margin: 0 }}>Attuvampatti, Kodaikanal<br />Tamil Nadu 624101, India</p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.8 19.79 19.79 0 0 1 1.06 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.72rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 5px 0', textTransform: 'uppercase' }}>Call Us</p>
                  <a href="tel:+919487532321" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.92rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: '500', transition: 'color 0.25s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>+91 94875 32321</a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '2px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.72rem', fontWeight: '700', color: '#ffffff', letterSpacing: '0.1em', margin: '0 0 5px 0', textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:info@cloudwalks.com" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontWeight: '400', transition: 'color 0.25s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>info@cloudwalks.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ BOTTOM BAR ═══════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '28px 5%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px'
        }}>
          <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', margin: 0, fontWeight: '300', letterSpacing: '0.05em' }}>
            &copy; {new Date().getFullYear()} Cloud Walks Home Stay — Kodaikanal, Tamil Nadu, India. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Privacy Policy', 'Terms of Service'].map((label) => (
              <Link key={label} href="#"
                style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.25s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scoped hover styles ── */}
      <style>{`
        footer a, footer button { outline: none; }
      `}</style>
    </footer>
  );
}
