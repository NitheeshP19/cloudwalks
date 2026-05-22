"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import PreloadedImage from '@/components/PreloadedImage';
import { blogPosts } from '@/app/blog/data';

const BlogClient = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Categories extracted from posts
  const categories = ['All', 'Travel Guides', 'Honeymoon'];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  // Identify the featured post (the first one)
  const featuredPost = blogPosts[0];
  
  // Remaining posts for the grid
  const gridPosts = filteredPosts;

  return (
    <div style={{ backgroundColor: '#fdfbf7', color: '#1a1a1a', minHeight: '100vh', fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* ─── Hero Header Banner ─── */}
      {/* ─── Hero Header Banner ─── */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        isolation: 'isolate',
      }}>
        {/* Background Ambient Video & Fallback Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <PreloadedImage
            src="/gallery/cloud%20walks%20home%20stay%2043.jpg"
            alt="Misty Palani Hills Kodaikanal"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src="/kodaikanal-premium-weather.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)',
          zIndex: -1,
        }}></div>

        {/* Decorative clouds overlay */}
        <div className="floating-clouds" style={{ zIndex: 0 }} />

        {/* Content */}
        <div className="animate-fade-in-up" style={{ position: 'relative', zIndex: 1, padding: '0 20px', marginTop: '60px' }}>
          <span 
            className="animate-journal-title"
            style={{
              fontSize: '0.9rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'block',
              fontWeight: '300'
            }}
          >
            The Cloud Walks Journal
          </span>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            lineHeight: '1.1',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            marginBottom: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto 2rem auto',
          }}>
            Highland Travel <br />
            <span style={{ fontStyle: 'italic', fontWeight: '300', fontSize: '0.7em' }}>& Insights</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '650px',
            margin: '0 auto 2.5rem auto',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Deeply researched seasonal weather guides, romantic honeymoon checklists, and local sightseeing secrets.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <button 
              className="luxury-button"
              onClick={() => {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }}
            >
              READ ARTICLES
            </button>
            <Link href="/gallery">
              <button className="luxury-outline-button">
                OUR GALLERY
              </button>
            </Link>
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
          opacity: 0.8,
          zIndex: 1
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

      {/* ─── Featured Post (Only visible when 'All' is active for visual weight) ─── */}
      {activeCategory === 'All' && featuredPost && (
        <section style={{ padding: '80px 5% 40px 5%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.8rem',
              letterSpacing: '0.25em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1.5rem',
              fontWeight: '600',
            }}>
              FEATURED JOURNAL ENTRY
            </span>

            <div 
              style={{
                display: 'flex',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(197, 160, 89, 0.15)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(197, 160, 89, 0.04)',
                flexWrap: 'wrap',
              }}
              className="featured-post-container"
            >
              {/* Cover Image */}
              <div className="featured-post-image-container" style={{ flex: '1 1 600px', position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                <PreloadedImage
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                  className="card-img"
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  borderRadius: '4px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  {featuredPost.category.toUpperCase()}
                </div>
              </div>

              {/* Text Details */}
              <div className="featured-post-text-container" style={{ flex: '1 1 450px', padding: '3.5rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8rem', color: '#666666' }}>
                  <span>{featuredPost.publishedAt}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                  <span>{featuredPost.readTime}</span>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: '#1a1a1a',
                  fontWeight: '400',
                  letterSpacing: '0.01em',
                  lineHeight: '1.3',
                }}>
                  <Link href={`/blog/${featuredPost.slug}`} style={{ color: '#1a1a1a', transition: 'color 0.3s ease' }} className="title-link">
                    {featuredPost.title}
                  </Link>
                </h2>

                <p style={{
                  color: '#555555',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  fontWeight: '300',
                }}>
                  {featuredPost.description}
                </p>

                {/* Author Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', borderTop: '1px solid rgba(197, 160, 89, 0.1)', paddingTop: '1.2rem' }}>
                  <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--primary)' }}>
                    <PreloadedImage
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.85rem', color: '#1a1a1a', fontWeight: '600' }}>
                      {featuredPost.author.name}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--primary)', letterSpacing: '0.05em' }}>
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="luxury-button" style={{ padding: '0.9rem 2.2rem', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                      READ FULL ARTICLE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Filter Bar Section ─── */}
      <section style={{ padding: '40px 5% 20px 5%', borderBottom: '1px solid rgba(197, 160, 89, 0.12)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--primary)',
              fontWeight: '600',
              display: 'block',
              marginBottom: '0.4rem',
            }}>
              JOURNAL COLLECTION
            </span>
            <h3 style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '1.8rem',
              fontWeight: '400',
              color: '#1a1a1a',
              letterSpacing: '0.03em',
            }}>
              {activeCategory === 'All' ? 'All Publications' : activeCategory}
            </h3>
          </div>

          {/* Filtering buttons */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--primary)',
                    border: '1px solid var(--primary)',
                    borderRadius: '4px',
                    padding: '0.6rem 1.4rem',
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    boxShadow: isActive ? '0 4px 12px rgba(197, 160, 89, 0.2)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'rgba(197, 160, 89, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {category.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Grid List of Articles ─── */}
      <section style={{ padding: '60px 5% 100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
          }}>
            {gridPosts.map((post) => (
              <article 
                key={post.slug}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.15)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(197, 160, 89, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="article-card"
              >
                {/* Image Cover */}
                <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                  <PreloadedImage
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    borderRadius: '4px',
                  }}>
                    {post.category.toUpperCase()}
                  </div>
                </div>

                {/* Content details */}
                <div style={{ padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#666666' }}>
                    <span>{post.publishedAt}</span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--primary)' }} />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '1.25rem',
                    color: '#1a1a1a',
                    fontWeight: '500',
                    lineHeight: '1.4',
                    letterSpacing: '0.01em',
                  }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#1a1a1a', transition: 'color 0.3s ease' }} className="title-link">
                      {post.title}
                    </Link>
                  </h3>

                  <p style={{
                    color: '#666666',
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    fontWeight: '300',
                    flex: 1, // pushes footer of card to the bottom
                  }}>
                    {post.description}
                  </p>

                  {/* Card Footer: Author and Read Arrow */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(197, 160, 89, 0.1)',
                    paddingTop: '1rem',
                    marginTop: '0.5rem',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--primary)' }}>
                        <PreloadedImage
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '500', color: '#222222' }}>{post.author.name}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--primary)', fontWeight: '600', fontSize: '0.75rem', letterSpacing: '0.05em' }} className="read-more-link">
                      READ POST
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.3s ease' }}>
                        <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Experience Our Stays Showcase (Blog Funnel) ─── */}
      <section style={{
        padding: '80px 5% 100px 5%',
        backgroundColor: '#faf7f2',
        borderTop: '1px solid rgba(197, 160, 89, 0.15)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background text */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: '12vw',
          color: 'rgba(197, 160, 89, 0.02)',
          fontWeight: '900',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}>
          STAY WITH US
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.8rem',
              fontWeight: '600'
            }}>
              HIGHLAND SANCTUARIES
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '400',
              letterSpacing: '0.04em',
              color: '#1a1a1a',
              textTransform: 'uppercase'
            }}>
              Discover the Cloud Walks Collection
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--primary)', margin: '1.5rem auto 0 auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2.5rem',
          }}>
            {[
              {
                title: "Budget Premium Stay",
                tagline: "Affordable Serenity",
                description: "Experience premium double bedroom setups, en-suite modern rain showers, and cozy garden campfires tailored for pocket-friendly luxury.",
                image: "/affordable-rooms.png",
                href: "/affordable-premium-rooms"
              },
              {
                title: "Premium Stays",
                tagline: "Highland Comfort",
                description: "Delight in misty valley horizons, romantic wooden paneling, plush bedding, and refined royal canopy beds amongst the clouds.",
                image: "/original-images/cloud walks 33.jpg",
                href: "/premium-stays"
              },
              {
                title: "Luxury Cottages",
                tagline: "Ultimate Sanctuary",
                description: "Our signature high-ceilinged teakwood chalets, insulated cozy attics, private star-gazing skylights, and panoramic garden terraces.",
                image: "/original-images/cloud walks home stay 43.jpg",
                href: "/best-luxury-cottages-in-kodaikanal"
              }
            ].map((stay) => (
              <div 
                key={stay.title}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.15)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(197, 160, 89, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="stay-card"
              >
                {/* Cover Image */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <PreloadedImage
                    src={stay.image}
                    alt={stay.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="stay-card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: '15px',
                    border: '1px solid rgba(255,255,255,0.25)',
                    pointerEvents: 'none',
                    zIndex: 2,
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '2rem 1.8rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '1.2rem' }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '0.3rem'
                    }}>
                      {stay.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: '1.4rem',
                      color: '#1a1a1a',
                      fontWeight: '500',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}>
                      {stay.title}
                    </h3>
                  </div>

                  <p style={{
                    color: '#666666',
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    fontWeight: '300',
                    flex: 1,
                  }}>
                    {stay.description}
                  </p>

                  <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.12)', paddingTop: '1.2rem' }}>
                    <Link href={stay.href} style={{ display: 'block', width: '100%' }}>
                      <button 
                        className="luxury-button" 
                        style={{ width: '100%', padding: '0.8rem', fontSize: '0.7rem', letterSpacing: '0.15em' }}
                      >
                        EXPLORE RETREAT
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styled inline components */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes letterSpacingExpand {
          0% {
            letter-spacing: 0.1em;
            opacity: 0;
            filter: blur(6px);
            transform: scale(0.96);
          }
          100% {
            letter-spacing: 0.4em;
            opacity: 1;
            filter: blur(0);
            transform: scale(1);
          }
        }
        .animate-journal-title {
          animation: letterSpacingExpand 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
        }
        .stay-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 25px 50px rgba(197, 160, 89, 0.15) !important;
          border-color: rgba(197, 160, 89, 0.4) !important;
        }
        .stay-card:hover .stay-card-img {
          transform: scale(1.05) !important;
        }
        .featured-post-container:hover .card-img {
          transform: scale(1.04) !important;
        }
        .article-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 45px rgba(197, 160, 89, 0.1) !important;
          border-color: rgba(197, 160, 89, 0.4) !important;
        }
        .article-card:hover .card-img {
          transform: scale(1.05) !important;
        }
        .title-link:hover {
          color: var(--primary) !important;
        }
        .read-more-link:hover svg {
          transform: translateX(4px) !important;
        }
        @media (max-width: 767px) {
          .featured-post-container {
            flex-direction: column !important;
          }
          .featured-post-image-container {
            min-height: 250px !important;
            padding: 0 !important;
          }
          .featured-post-text-container {
            padding: 2.5rem 1.5rem !important;
            min-height: auto !important;
          }
        }
      `}} />

    </div>
  );
};

export default BlogClient;
