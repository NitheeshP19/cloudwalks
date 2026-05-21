"use client";

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface PreloadedImageProps extends Omit<ImageProps, 'onLoad' | 'onLoadingComplete'> {
  containerStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

export default function PreloadedImage({
  src,
  alt,
  fill,
  width,
  height,
  priority,
  style,
  containerStyle,
  wrapperClassName,
  className,
  sizes,
  ...rest
}: PreloadedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRenderPreloader, setShouldRenderPreloader] = useState(true);

  // Clean transition hook
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShouldRenderPreloader(false);
      }, 800); // match standard fade-out transition duration
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Determine wrapping container style based on layout mode
  const isFill = !!fill;
  
  const containerStyles: React.CSSProperties = {
    position: isFill ? 'absolute' : 'relative',
    inset: isFill ? 0 : undefined,
    width: isFill ? '100%' : width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
    height: isFill ? '100%' : height ? (typeof height === 'number' ? `${height}px` : height) : 'auto',
    overflow: 'hidden',
    display: isFill ? 'block' : 'inline-block',
    ...containerStyle,
  };

  return (
    <div style={containerStyles} className={wrapperClassName}>
      {/* Target Image with luxury fade-in transition */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        }}
        onLoad={handleLoad}
        className={className}
        {...rest}
      />

      {/* Premium Preloader Overlay */}
      {shouldRenderPreloader && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, #ffffff 0%, #f2efe7 100%)',
            opacity: isLoaded ? 0 : 1,
            transform: isLoaded ? 'scale(1.03)' : 'scale(1)',
            transition: 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            pointerEvents: 'none',
          }}
        >
          {/* Debossed Logo with Premium pulse/breathing animation */}
          <div
            className="premium-preloader-pulse"
            style={{
              position: 'relative',
              width: '80px',
              height: '80px', // Flexible square container, object-fit contain handles the exact ratio
              opacity: 0.85,
              mixBlendMode: 'multiply', // Seamlessly blends white backgrounds into the gradient
            }}
          >
            <Image
              src="/logo.png" // Using logo.png (71KB) instead of preloader.png (899KB) for instant loading
              alt="Loading..."
              fill
              sizes="80px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
