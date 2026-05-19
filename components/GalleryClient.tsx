"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'rooms' | 'nature';
  description: string;
}

interface GalleryClientProps {
  roomsImages: GalleryImage[];
  natureImages: GalleryImage[];
}

export default function GalleryClient({ roomsImages, natureImages }: GalleryClientProps) {
  const allImages = [...roomsImages, ...natureImages];
  const [activeTab, setActiveTab] = useState<'all' | 'rooms' | 'nature'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredImages = allImages.filter(img => {
    if (activeTab === 'all') return true;
    return img.category === activeTab;
  });

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    // Find index of clicked image within the current filtered set
    setLightboxIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
  };

  const navigateLightbox = (direction: number) => {
    if (lightboxIndex === null) return;
    setIsZoomed(false);
    const total = filteredImages.length;
    const nextIndex = (lightboxIndex + direction + total) % total;
    setLightboxIndex(nextIndex);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="gallery-container">
      {/* Category Tabs */}
      <div className="filter-tabs-wrapper">
        <div className="filter-tabs">
          {[
            { id: 'all', label: 'All Masterpieces' },
            { id: 'rooms', label: 'Premium Rooms' },
            { id: 'nature', label: 'Nature & Cottage Views' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`filter-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
              {activeTab === tab.id && <span className="tab-underline" />}
            </button>
          ))}
        </div>
        <p className="gallery-stats">
          Displaying {filteredImages.length} of {allImages.length} high-resolution photographs
        </p>
      </div>

      {/* Grid Layout */}
      {activeTab === 'all' ? (
        <div className="sections-container">
          {/* Rooms Section */}
          <div className="gallery-section">
            <div className="section-header">
              <span className="section-subtitle">THE RETREAT INTERIORS</span>
              <h2 className="section-title">Premium Rooms Images</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="masonry-grid">
              {roomsImages.map((image) => {
                const globalIndex = filteredImages.findIndex(img => img.id === image.id);
                return (
                  <div 
                    key={image.id} 
                    className="gallery-card"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <div className="image-wrapper">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className={`gallery-image ${loadedImages[image.id] ? 'loaded' : ''}`}
                        onLoad={() => handleImageLoad(image.id)}
                      />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <span className="image-category">{image.category === 'rooms' ? 'Premium Room' : 'Nature View'}</span>
                          <h3 className="image-title">{image.title}</h3>
                          <p className="image-desc">{image.description}</p>
                          <span className="view-luxury-btn">EXPLORE DETAILS</span>
                        </div>
                      </div>
                      <div className="gold-frame-border"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nature Section */}
          <div className="gallery-section" style={{ marginTop: '100px' }}>
            <div className="section-header">
              <span className="section-subtitle">KODAIKANAL CLOUD WALKS</span>
              <h2 className="section-title">Nature View from Our Premium Cottages</h2>
              <div className="section-divider"></div>
            </div>

            <div className="masonry-grid">
              {natureImages.map((image) => {
                const globalIndex = filteredImages.findIndex(img => img.id === image.id);
                return (
                  <div 
                    key={image.id} 
                    className="gallery-card"
                    onClick={() => openLightbox(globalIndex)}
                  >
                    <div className="image-wrapper">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className={`gallery-image ${loadedImages[image.id] ? 'loaded' : ''}`}
                        onLoad={() => handleImageLoad(image.id)}
                      />
                      <div className="image-overlay">
                        <div className="overlay-content">
                          <span className="image-category">{image.category === 'rooms' ? 'Premium Room' : 'Nature View'}</span>
                          <h3 className="image-title">{image.title}</h3>
                          <p className="image-desc">{image.description}</p>
                          <span className="view-luxury-btn">EXPLORE DETAILS</span>
                        </div>
                      </div>
                      <div className="gold-frame-border"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Filtered Grid View */
        <div className="gallery-section" style={{ marginTop: '40px' }}>
          <div className="masonry-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <div className="image-wrapper">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`gallery-image ${loadedImages[image.id] ? 'loaded' : ''}`}
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="image-category">{image.category === 'rooms' ? 'Premium Room' : 'Nature View'}</span>
                      <h3 className="image-title">{image.title}</h3>
                      <p className="image-desc">{image.description}</p>
                      <span className="view-luxury-btn">EXPLORE DETAILS</span>
                    </div>
                  </div>
                  <div className="gold-frame-border"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-control close-btn" onClick={closeLightbox} aria-label="Close Lightbox">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button 
            className="lightbox-control prev-btn" 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
            aria-label="Previous Image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className={`lightbox-image-container ${isZoomed ? 'zoomed' : ''}`} onClick={toggleZoom}>
              <img 
                src={filteredImages[lightboxIndex].src} 
                alt={filteredImages[lightboxIndex].alt} 
                className="lightbox-img"
              />
            </div>
            
            <div className="lightbox-caption">
              <div className="caption-text">
                <span className="caption-category">
                  {filteredImages[lightboxIndex].category === 'rooms' ? 'PREMIUM ROOM INTERIOR' : 'NATURE VIEW & COTTAGES'}
                </span>
                <h2>{filteredImages[lightboxIndex].title}</h2>
                <p>{filteredImages[lightboxIndex].description}</p>
              </div>
              <div className="caption-meta">
                <span className="counter">{lightboxIndex + 1} / {filteredImages.length}</span>
                <a 
                  href={filteredImages[lightboxIndex].src} 
                  download 
                  className="download-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" style={{ marginRight: '6px' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  DOWNLOAD HD
                </a>
              </div>
            </div>
          </div>

          <button 
            className="lightbox-control next-btn" 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
            aria-label="Next Image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Embedded CSS for Gallery Layout with Modern Premium Effects */}
      <style jsx>{`
        .gallery-container {
          width: 100%;
          color: #1a1a1a;
        }

        /* Filter Tabs */
        .filter-tabs-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 50px;
          gap: 15px;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 6px;
          background: #ffffff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border: 1px solid rgba(197, 160, 89, 0.15);
          border-radius: 50px;
        }

        .filter-tab {
          position: relative;
          background: transparent;
          border: none;
          color: #666666;
          padding: 12px 28px;
          font-family: var(--font-cinzel), serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 40px;
        }

        .filter-tab:hover {
          color: #1a1a1a;
          background: rgba(197, 160, 89, 0.05);
        }

        .filter-tab.active {
          color: var(--primary);
          font-weight: 600;
        }

        .tab-underline {
          position: absolute;
          bottom: 0;
          left: 15%;
          right: 15%;
          height: 1px;
          background-color: var(--primary);
          box-shadow: 0 0 4px rgba(197, 160, 89, 0.4);
        }

        .gallery-stats {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          color: #888888;
          font-family: var(--font-inter), sans-serif;
          text-transform: uppercase;
        }

        /* Section Headings */
        .gallery-section {
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-subtitle {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          color: var(--primary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 500;
          font-family: var(--font-cinzel), serif;
          letter-spacing: 0.05em;
          color: #1a1a1a;
          margin-bottom: 20px;
        }

        .section-divider {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          margin: 0 auto;
          box-shadow: 0 0 4px rgba(197, 160, 89, 0.4);
        }

        /* Masonry Grid Layout */
        .masonry-grid {
          column-count: 3;
          column-gap: 24px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 768px) {
          .masonry-grid {
            column-count: 1;
          }
          .filter-tabs {
            flex-direction: column;
            gap: 5px;
            border-radius: 20px;
            padding: 10px;
            width: 100%;
            max-width: 320px;
          }
          .filter-tab {
            padding: 10px 20px;
            font-size: 0.75rem;
          }
          .section-title {
            font-size: 1.8rem;
          }
        }

        /* Gallery Cards & Luxury Effects */
        .gallery-card {
          break-inside: avoid;
          margin-bottom: 24px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .image-wrapper {
          position: relative;
          overflow: hidden;
          width: 100%;
          background-color: #0d0d0d;
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .gallery-image.loaded {
          opacity: 0.9;
          transform: scale(1);
        }

        /* Hover Overlay Effect */
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.4) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 28px;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 2;
        }

        .overlay-content {
          transform: translateY(20px);
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
        }

        .image-category {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: var(--primary);
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }

        .image-title {
          font-family: var(--font-playfair), serif;
          font-size: 1.25rem;
          color: white;
          margin-bottom: 8px;
          font-weight: 500;
          line-height: 1.3;
        }

        .image-desc {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 18px;
          line-height: 1.5;
          font-weight: 300;
        }

        .view-luxury-btn {
          font-family: var(--font-cinzel), serif;
          font-size: 0.65rem;
          font-weight: 600;
          color: white;
          letter-spacing: 0.15em;
          border-bottom: 1px solid var(--primary);
          padding-bottom: 4px;
          display: inline-block;
          transition: all 0.3s ease;
        }

        /* Gold Framed Border on Hover */
        .gold-frame-border {
          position: absolute;
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border: 1px solid rgba(197, 160, 89, 0.3);
          pointer-events: none;
          opacity: 0;
          transform: scale(0.96);
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }

        /* Hover Interactions */
        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.08);
          opacity: 1;
        }

        .gallery-card:hover .image-overlay {
          opacity: 1;
        }

        .gallery-card:hover .overlay-content {
          transform: translateY(0);
        }

        .gallery-card:hover .gold-frame-border {
          opacity: 1;
          transform: scale(1);
          border-color: var(--primary);
          box-shadow: inset 0 0 10px rgba(197, 160, 89, 0.1);
        }

        .gallery-card:hover .view-luxury-btn {
          color: var(--primary);
          letter-spacing: 0.22em;
          border-bottom-color: white;
        }

        /* Lightbox Modal Stylings */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(6, 6, 6, 0.96);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .lightbox-control {
          position: absolute;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          width: 54px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 10002;
        }

        .lightbox-control:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 0 15px rgba(197, 160, 89, 0.4);
          transform: scale(1.05);
        }

        .close-btn {
          top: 30px;
          right: 30px;
        }

        .prev-btn {
          left: 30px;
        }

        .next-btn {
          right: 30px;
        }

        @media (max-width: 768px) {
          .lightbox-control {
            width: 44px;
            height: 44px;
          }
          .close-btn {
            top: 20px;
            right: 20px;
          }
          .prev-btn {
            left: 15px;
          }
          .next-btn {
            right: 15px;
          }
        }

        .lightbox-content {
          width: 90%;
          max-width: 1100px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 10001;
        }

        .lightbox-image-container {
          width: 100%;
          height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-in;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .lightbox-image-container.zoomed {
          cursor: zoom-out;
        }

        .lightbox-image-container.zoomed .lightbox-img {
          transform: scale(1.5);
        }

        /* Lightbox Caption */
        .lightbox-caption {
          width: 100%;
          background: rgba(25, 25, 25, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          margin-top: 20px;
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          text-align: left;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          animation: slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .caption-text {
          flex: 1;
        }

        .caption-category {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.25em;
          display: block;
          margin-bottom: 6px;
        }

        .lightbox-caption h2 {
          font-family: var(--font-playfair), serif;
          font-size: 1.5rem;
          color: white;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .lightbox-caption p {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 300;
          line-height: 1.5;
        }

        .caption-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          min-width: 120px;
        }

        .counter {
          font-family: var(--font-cinzel), serif;
          font-size: 1rem;
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .download-link {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 16px;
          border-radius: 4px;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
        }

        .download-link:hover {
          background: white;
          color: black;
          border-color: white;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .lightbox-caption {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 20px;
            gap: 12px;
            margin-top: 15px;
          }
          .lightbox-caption h2 {
            font-size: 1.2rem;
          }
          .lightbox-caption p {
            font-size: 0.75rem;
          }
          .caption-meta {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 12px;
          }
          .lightbox-image-container {
            height: 50vh;
          }
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
