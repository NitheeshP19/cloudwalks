"use client";

import React, { useState, useEffect } from 'react';
import PreloadedImage from '@/components/PreloadedImage';

const images = [
  "/gallery/cloud walks room 2.png",
  "/original-images/cloud walks 26.jpg",
  "/original-images/cloud walks 58.JPG",
  "/original-images/cloud walks 61.jpg",
];

const altTexts = [
  "Premium Budget Queen Room at Cloud Walks Kodaikanal",
  "Misty valley ridge view from Cloud Walks Budget Queen Room",
  "Solid timber vaulted ceiling inside Budget Queen Suite Kodaikanal",
  "High altitude balcony sunrise at Cloud Walks Budget Queen Rooms",
];

const BudgetQueenHeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: -1 }}>
      {images.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: index === currentIndex ? 2 : 1,
          }}
        >
          <PreloadedImage
            src={src}
            alt={altTexts[index]}
            fill
            priority={index === 0}
            quality={95}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}

      {/* Slide Dot Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px',
        zIndex: 10,
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? '30px' : '10px',
              height: '10px',
              borderRadius: '5px',
              backgroundColor: index === currentIndex ? 'var(--primary)' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetQueenHeroSlider;
