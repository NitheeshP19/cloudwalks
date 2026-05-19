"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  "/gallery/cloud%20walks%2025.jpg",
  "/gallery/cloud%20walks%20home%20stay%2043.jpg",
  "/gallery/cloud%20walks%20room%201.png",
  "/gallery/cloud%20walks%20home%20stay%203.jpg",
  "/gallery/cloud%20walks%2023.jpg",
  "/affordable-rooms.png",
];

const altTexts = [
  "Premium stay misty valley view - Cloud Walks Kodaikanal",
  "Cloud Walks premium suite interior - Kodaikanal",
  "Luxury room with scenic view - Cloud Walks",
  "Honeymoon suite bedroom - Cloud Walks Premium Stay",
  "Garden cottage view - Cloud Walks Kodaikanal",
  "Affordable luxury rooms - Cloud Walks Homestay",
];

const PremiumHeroSlider = () => {
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

export default PremiumHeroSlider;
