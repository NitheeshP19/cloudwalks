"use client";

import React, { useState, useEffect } from 'react';
import PreloadedImage from '@/components/PreloadedImage';

const images = [
  "/gallery/cloud%20walks%20room%202.png",
  "/original-images/cloud%20walks%2034.jpg",
  "/original-images/cloud%20walks%2053.jpg"
];

const LuxuryHeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
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
          <PreloadedImage
            src={src}
            alt="Luxury Cottage View"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};

export default LuxuryHeroSlider;
