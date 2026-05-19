"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "/original-images/cloud%20walks%2026.jpg",
  "/original-images/cloud%20walks%2030.jpg",
  "/original-images/cloud%20walks%2050.jpg",
  "/original-images/cloud%20walks%2059.jpg",
];

const altTexts = [
  "Panoramic valley view room - Cloud Walks Budget Premium Stay",
  "Pine tree canopy room - Cloud Walks Kodaikanal",
  "Deluxe bunk bed family room - Cloud Walks Homestay",
  "Cozy wooden attic loft - Cloud Walks Budget Premium Stay",
];

const BudgetHeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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
            transition: 'opacity 1.8s ease-in-out',
            zIndex: index === currentIndex ? 2 : 1,
          }}
        >
          <Image
            src={src}
            alt={altTexts[index]}
            fill
            priority={index === 0}
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        bottom: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 10,
      }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: index === currentIndex ? '28px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: index === currentIndex ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BudgetHeroSlider;
