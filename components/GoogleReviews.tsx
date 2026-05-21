"use client";

import React, { useRef } from 'react';

const reviews = [
  {
    name: "Sathish Kumar",
    avatar: "S",
    color: "#4285F4",
    rating: 5,
    date: "2 weeks ago",
    text: "Amazing stay at Cloud Walks! The view is breathtaking and the luxury cottage was extremely comfortable. Highly recommended for a peaceful getaway.",
  },
  {
    name: "Priya Sharma",
    avatar: "P",
    color: "#0F9D58",
    rating: 5,
    date: "1 month ago",
    text: "The best homestay in the region. Hospitality is top-notch, and the rooms feel very premium. The evening mist is magical.",
  },
  {
    name: "Anand R",
    avatar: "A",
    color: "#DB4437",
    rating: 5,
    date: "3 months ago",
    text: "Beautiful location, serene environment, and excellent service. A perfect getaway from the city hustle. Will definitely visit again!",
  },
  {
    name: "Karthik Nair",
    avatar: "K",
    color: "#F4B400",
    rating: 5,
    date: "4 months ago",
    text: "Loved the aesthetic and the premium feel of the property. The staff was very accommodating and the food was delicious. 5 stars all the way.",
  },
  {
    name: "Rahul Verma",
    avatar: "R",
    color: "#4285F4",
    rating: 5,
    date: "5 months ago",
    text: "Incredible experience. The panoramic views from the balcony are simply unmatched. A true luxury experience in the hills.",
  },
  {
    name: "Meera Menon",
    avatar: "M",
    color: "#DB4437",
    rating: 5,
    date: "6 months ago",
    text: "Everything about Cloud Walks is exceptional. The wooden attic suites are incredibly cozy and the sunrise view from the bed is to die for.",
  },
  {
    name: "Arjun Reddy",
    avatar: "A",
    color: "#0F9D58",
    rating: 5,
    date: "8 months ago",
    text: "A 5-star experience from start to finish. The premium cottages are super spacious and well-maintained. The best place to relax in nature.",
  },
  {
    name: "Sneha Patil",
    avatar: "S",
    color: "#F4B400",
    rating: 5,
    date: "8 months ago",
    text: "We booked the Deluxe Family Suite and it was perfect for us. Great amenities, clean bathrooms, and the location is just stunning.",
  },
  {
    name: "Vikram Singh",
    avatar: "V",
    color: "#4285F4",
    rating: 5,
    date: "9 months ago",
    text: "What a phenomenal stay! If you're looking for luxury combined with a rustic mountain feel, Cloud Walks is the place. Excellent property.",
  },
  {
    name: "Nandini Iyer",
    avatar: "N",
    color: "#DB4437",
    rating: 5,
    date: "10 months ago",
    text: "Top-tier hospitality! The caretaker ensured all our needs were met. The food tasted exactly like home but with a gourmet touch.",
  },
  {
    name: "Dev Patel",
    avatar: "D",
    color: "#0F9D58",
    rating: 5,
    date: "11 months ago",
    text: "Breathtaking is an understatement. Walking out onto the balcony with a cup of coffee while the mist rolls in is a memory I will cherish forever.",
  },
  {
    name: "Divya Krishnan",
    avatar: "D",
    color: "#F4B400",
    rating: 5,
    date: "1 year ago",
    text: "Absolutely stunning homestay! We loved the architecture and the way they've blended luxury with nature. Definitely coming back next season.",
  }
];

// Star SVG for 5-star rating
const StarRating = () => (
  <div style={{ display: 'flex', gap: '2px', margin: '8px 0' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ))}
  </div>
);

// Google Icon SVG
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const GoogleReviews = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 350 : 280;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reviews" style={{
      padding: '80px 5%',
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#a0a0a0' }}></div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '400',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              textTransform: 'uppercase',
              margin: 0
            }}>
              GUEST EXPERIENCES
            </h2>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#a0a0a0' }}></div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <GoogleIcon />
            <span style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '1rem', color: '#555' }}>
              <strong>4.9 / 5</strong> rating on Google Maps
            </span>
          </div>
        </div>

        {/* Slider Container */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          
          <button 
            onClick={() => scroll('left')}
            className="review-slider-btn review-left-btn"
            aria-label="Previous review"
            style={{
              position: 'absolute',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #e0e0e0',
              backgroundColor: '#ffffff',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Slider Scroll Area */}
          <div 
            ref={sliderRef}
            className="review-hide-scrollbar"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              padding: '20px 0',
              width: '100%',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {reviews.map((review, index) => (
              <div 
                key={index} 
                style={{
                  minWidth: '320px',
                  maxWidth: '350px',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'center',
                  backgroundColor: '#fbfbfb',
                  borderRadius: '12px',
                  padding: '25px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.04)',
                  border: '1px solid #f0f0f0',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* User Info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: review.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    fontFamily: 'var(--font-inter), sans-serif'
                  }}>
                    {review.avatar}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#222', fontFamily: 'var(--font-inter), sans-serif', fontWeight: '600' }}>
                      {review.name}
                    </h4>
                    <span style={{ fontSize: '0.85rem', color: '#777', fontFamily: 'var(--font-inter), sans-serif' }}>
                      {review.date}
                    </span>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <GoogleIcon />
                  </div>
                </div>

                {/* Rating */}
                <StarRating />

                {/* Review Text */}
                <p style={{
                  margin: '10px 0 0 0',
                  fontSize: '0.95rem',
                  color: '#444',
                  lineHeight: '1.6',
                  fontFamily: 'var(--font-inter), sans-serif',
                  flexGrow: 1
                }}>
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="review-slider-btn review-right-btn"
            aria-label="Next review"
            style={{
              position: 'absolute',
              zIndex: 10,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #e0e0e0',
              backgroundColor: '#ffffff',
              color: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        </div>
      </div>

      <style jsx global>{`
        .review-hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .review-hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .review-slider-btn:hover {
          background-color: #f0f0f0 !important;
        }
        .review-left-btn {
          left: -20px;
        }
        .review-right-btn {
          right: -20px;
        }
        @media (max-width: 768px) {
          .review-slider-btn {
            display: none !important; /* Hide buttons on mobile, allow swipe */
          }
        }
      `}</style>
    </section>
  );
};

export default GoogleReviews;
