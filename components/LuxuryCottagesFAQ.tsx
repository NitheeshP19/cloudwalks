"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "WHAT IS THE BEST WAY TO REACH CLOUD WALKS FROM THE KODAIKANAL LAKE OR TOWN CENTER?",
    answer: "Cloud Walks is nestled in a tranquil highland sanctuary, approximately 15 to 20 minutes (7 km) by car from the Kodaikanal Lake and town center. We can gladly arrange a luxury private car pick-up or drop-off from the town center, Kodaikanal Road railway station, or Madurai Airport upon request."
  },
  {
    question: "ARE THE LUXURY COTTAGES EQUIPPED WITH HEATERS OR FIREPLACES FOR COLD NIGHTS?",
    answer: "Yes, all our luxury cottages are fully equipped with double-insulated walls and high-end heating systems. Select premium cottages, including the Grand Presidential Villa and Luxury Family Chalet, feature custom artisan copper fireplaces with complimentary wood bundles to keep you perfectly warm and cozy."
  },
  {
    question: "IS HIGH-SPEED INTERNET AVAILABLE FOR WORK-FROM-HILLS OR REMOTE WORKING?",
    answer: "Absolutely. We provide complimentary high-speed fiber-optic Wi-Fi (up to 200 Mbps) with dual back-up lines across all our cottages and common grounds. This ensures seamless video conferencing, fast streaming, and absolute connectivity for your remote work sessions."
  },
  {
    question: "CAN WE REQUEST PRIVATE CHEF SERVICES OR CUSTOMIZED MEALS?",
    answer: "Yes. Our expert culinary masters can curate bespoke multi-course menus featuring local organic garden harvests, gourmet continental dishes, and rich traditional South Indian delicacies. Private chef bookings for customized cottage dining or private campfire barbecues can be arranged when reserving your stay."
  },
  {
    question: "ARE YOUR LUXURY COTTAGES PET-FRIENDLY?",
    answer: "To preserve our pristine eco-sanctuary, the tranquility of the mountain surroundings, and high-altitude comfort for all our guests, pets are generally not permitted inside our suites. Please get in touch with our concierge team if you have specific service animal requirements."
  },
  {
    question: "WHAT IS THE CHECK-IN AND CHECK-OUT POLICY, AND CAN WE REQUEST AN EARLY ARRIVAL?",
    answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to room availability and can be requested in advance. We always do our absolute best to align with your travel plans so you can start walking in the clouds as soon as you arrive."
  }
];

const LuxuryCottagesFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* ── FAQ Section ── */}
      <section style={{ 
        backgroundColor: '#ffffff', 
        padding: '100px 5% 80px 5%',
        borderTop: '1px solid rgba(197, 160, 89, 0.15)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Section Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', opacity: 0.7 }} />
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '400',
              letterSpacing: '0.15em',
              color: '#111111',
              textAlign: 'center',
              margin: 0
            }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', opacity: 0.7 }} />
          </div>

          {/* FAQ Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index}
                  style={{
                    borderBottom: '1px solid #eaeaea',
                    padding: '1.8rem 0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '2rem',
                      outline: 'none'
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                      fontWeight: isOpen ? '500' : '400',
                      letterSpacing: '0.08em',
                      color: isOpen ? 'var(--primary)' : '#222222',
                      lineHeight: '1.6',
                      transition: 'color 0.3s ease'
                    }}>
                      {item.question}
                    </span>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: '300',
                      color: isOpen ? 'var(--primary)' : '#888888',
                      transition: 'transform 0.4s ease, color 0.3s ease',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      display: 'inline-block',
                      lineHeight: '1',
                      minWidth: '24px',
                      textAlign: 'center'
                    }}>
                      +
                    </span>
                  </button>

                  <div style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease',
                    marginTop: isOpen ? '1.2rem' : '0'
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '1.02rem',
                      lineHeight: '1.9',
                      color: '#555555',
                      fontWeight: '300',
                      margin: 0
                    }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Reviews & Booking Form Section (aria-hidden on reviews for SEO safety) ── */}
      <section style={{
        backgroundColor: '#fdfbf7',
        padding: '100px 5% 110px 5%',
        borderTop: '1px solid rgba(197, 160, 89, 0.12)',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1250px', margin: '0 auto' }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4rem'
          }}>

            {/* Top: Google Reviews — full width */}
            <div style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              {/* Section Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontWeight: '400',
                  letterSpacing: '0.15em',
                  color: '#111111',
                  margin: 0
                }}>
                  WHAT OUR GUESTS SAY
                </h2>
                <div style={{ flexGrow: 1, height: '1px', backgroundColor: 'var(--primary)', opacity: 0.4 }} />
              </div>

              {/* Google rating badge */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '2.5rem'
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#fbbc04" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#111111',
                  letterSpacing: '0.05em'
                }}>4.5</span>
                <span style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.88rem',
                  color: '#888',
                  fontWeight: '300',
                  letterSpacing: '0.05em'
                }}>· 444 Google Reviews</span>
              </div>

              {/* Marquee Row 1 — scrolls left */}
              <div aria-hidden="true" style={{ overflow: 'hidden', marginBottom: '1.5rem', position: 'relative' }}>
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  width: 'max-content',
                  animation: 'marquee-left 40s linear infinite',
                }}>
                  {[
                    { name: 'Arun Sankar', stars: 5, text: 'Cloudwalks Homestay truly lives up to its name with an awesome ambience and breathtaking views. One of the best parts is the terrace — you can literally see clouds floating by.', badge: 'Local Guide' },
                    { name: 'Anirudh P', stars: 5, text: 'We stayed here for 2 nights and the experience was very good. The property is very beautiful especially the interiors. The aesthetics are amazing.', badge: 'Local Guide' },
                    { name: 'Aravind B', stars: 5, text: 'My stay at Cloudwalks Homestay was excellent. The facilities, cleanliness, and overall comfort were top-notch. The environment was calm and relaxing.', badge: 'Local Guide' },
                    { name: 'Abhishek Habib', stars: 5, text: 'These people are extremely polite, fun loving and very respectful. I ended up staying here for 2 days after just visiting for a meal!', badge: 'Local Guide' },
                    { name: 'Mukundan Balaji', stars: 5, text: 'One of the best homestays I have ever been to. The host is really understanding and caring, the staff is helpful and warm, and the rooms have intricate beautiful decorations.', badge: 'Local Guide' },
                    { name: 'Bilawal Siddiq', stars: 5, text: 'An amazing place to stay with a very warm host and delicious food. Truly the best hospitality. Highly recommended!' },
                    { name: 'Avinash Krishnaji', stars: 5, text: 'Amazing room with some amazing views. Food was pretty good. The Sunrise Room had an unobstructed partial view of the Kodaikanal lake and the town.', badge: 'Local Guide' },
                    { name: 'Prasanth', stars: 5, text: 'Friendly owner. Rooms are spacious and were maintained clean. Staff were attentive. Breakfast buffet is also great. Best home stay.', badge: 'Local Guide' },
                    { name: 'Shameel Shemo', stars: 5, text: 'This place has a very beautiful view from balcony and a beautiful garden with variety of plants. The owner is very friendly and the food is delicious.', badge: 'Local Guide' },
                    { name: 'Sashank Srikanth', stars: 5, text: 'I stayed here for a couple of nights. The hosts and staff are very warm and welcoming. Food was great, lovely views from all directions. Highly recommended.', badge: 'Local Guide' },
                    // Duplicate for seamless loop
                    { name: 'Arun Sankar', stars: 5, text: 'Cloudwalks Homestay truly lives up to its name with an awesome ambience and breathtaking views. One of the best parts is the terrace — you can literally see clouds floating by.', badge: 'Local Guide' },
                    { name: 'Anirudh P', stars: 5, text: 'We stayed here for 2 nights and the experience was very good. The property is very beautiful especially the interiors. The aesthetics are amazing.', badge: 'Local Guide' },
                    { name: 'Aravind B', stars: 5, text: 'My stay at Cloudwalks Homestay was excellent. The facilities, cleanliness, and overall comfort were top-notch. The environment was calm and relaxing.', badge: 'Local Guide' },
                    { name: 'Abhishek Habib', stars: 5, text: 'These people are extremely polite, fun loving and very respectful. I ended up staying here for 2 days after just visiting for a meal!', badge: 'Local Guide' },
                    { name: 'Mukundan Balaji', stars: 5, text: 'One of the best homestays I have ever been to. The host is really understanding and caring, the staff is helpful and warm, and the rooms have intricate beautiful decorations.', badge: 'Local Guide' },
                  ].map((review, i) => (
                    <div key={i} style={{
                      flexShrink: 0,
                      width: '300px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(197, 160, 89, 0.18)',
                      borderRadius: '12px',
                      padding: '1.4rem 1.6rem',
                      boxShadow: '0 4px 20px rgba(197,160,89,0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                        <div style={{
                          width: '34px', height: '34px', borderRadius: '50%',
                          backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', color: '#fff',
                          fontFamily: 'var(--font-cinzel), serif', fontSize: '0.9rem', fontWeight: '600', flexShrink: 0
                        }}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.8rem', color: '#111', fontWeight: '500', letterSpacing: '0.04em' }}>{review.name}</div>
                          {review.badge && <div style={{ fontSize: '0.68rem', color: '#888', fontFamily: 'var(--font-inter), sans-serif' }}>{review.badge}</div>}
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                          {Array.from({ length: review.stars }).map((_, si) => (
                            <span key={si} style={{ color: '#fbbc04', fontSize: '0.8rem' }}>★</span>
                          ))}
                        </div>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', lineHeight: '1.6', color: '#555', fontWeight: '300', margin: 0 }}>
                        &quot;{review.text}&quot;
                      </p>
                      <div style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        <span style={{ fontSize: '0.68rem', color: '#aaa', fontFamily: 'var(--font-inter), sans-serif' }}>Google Review</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marquee Row 2 — scrolls right */}
              <div aria-hidden="true" style={{ overflow: 'hidden', position: 'relative' }}>
                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  width: 'max-content',
                  animation: 'marquee-right 45s linear infinite',
                }}>
                  {[
                    { name: 'Ajay Raja', stars: 5, text: 'The elevation was 500 feet higher than Kodaikanal city which offers breathtaking city & mountain views from the room balcony! The room was more spacious.', badge: 'Local Guide' },
                    { name: 'Vishwa Chandra Rao', stars: 5, text: 'Wonderful host by Nalini mam & Rajesh sir. One should definitely visit this property in November & December month if you are a misty lover.', badge: 'Local Guide' },
                    { name: 'Rafi Nazar', stars: 5, text: 'One of the best stays during our one-week Kodaikanal trip. Cloud Walks stood out for its clean, spacious rooms and stunning views. The owner is incredibly friendly.', badge: 'Local Guide' },
                    { name: 'Pooja Dasgupta', stars: 5, text: 'Had a wonderful experience staying here. Madam is very friendly and rooms are outstanding. They speak of detailed luxury in a homely environment. Food is good.', badge: 'Local Guide' },
                    { name: 'Keerthana B', stars: 5, text: 'We stayed at Cloud Walks for 3N/4D, service was excellent. View from the room was beyond words to explain. Staff were so kind and respectful.', badge: 'Local Guide' },
                    { name: 'Tinyy Tale', stars: 5, text: 'Our recent friends vacation was an absolute blast. Every interaction was met with warmth and genuine helpfulness, making the stay truly special.' },
                    { name: 'Swithin Boldwin', stars: 5, text: 'Full stars because of its scenic location, the clean rooms, fabulous service and a long menu filled with delicious delicacies. Spectacular view from the top.' },
                    { name: 'Harikrishnan N Menon', stars: 4, text: 'Best stay you will ever get in Kodai. The view is breathtaking and the hospitality is unmatched. A truly unforgettable experience.', badge: 'Local Guide' },
                    { name: 'apellantmani', stars: 4, text: 'This was a family stay that we had booked and we got the best rooms at the place. The owners were quite welcome and Rajesh was especially helpful.' },
                    { name: 'Avinash Krishnaji', stars: 5, text: 'Food was pretty good. Rooms were pretty spacious — the Sunrise Room had an unobstructed partial view of the Kodaikanal lake. A good view of sunrise.', badge: 'Local Guide' },
                    // Duplicate for seamless loop
                    { name: 'Ajay Raja', stars: 5, text: 'The elevation was 500 feet higher than Kodaikanal city which offers breathtaking city & mountain views from the room balcony! The room was more spacious.', badge: 'Local Guide' },
                    { name: 'Vishwa Chandra Rao', stars: 5, text: 'Wonderful host by Nalini mam & Rajesh sir. One should definitely visit this property in November & December month if you are a misty lover.', badge: 'Local Guide' },
                    { name: 'Rafi Nazar', stars: 5, text: 'One of the best stays during our one-week Kodaikanal trip. Cloud Walks stood out for its clean, spacious rooms and stunning views. The owner is incredibly friendly.', badge: 'Local Guide' },
                    { name: 'Pooja Dasgupta', stars: 5, text: 'Had a wonderful experience staying here. Madam is very friendly and rooms are outstanding. They speak of detailed luxury in a homely environment. Food is good.', badge: 'Local Guide' },
                    { name: 'Keerthana B', stars: 5, text: 'We stayed at Cloud Walks for 3N/4D, service was excellent. View from the room was beyond words to explain. Staff were so kind and respectful.', badge: 'Local Guide' },
                  ].map((review, i) => (
                    <div key={i} style={{
                      flexShrink: 0,
                      width: '300px',
                      backgroundColor: '#ffffff',
                      border: '1px solid rgba(197, 160, 89, 0.18)',
                      borderRadius: '12px',
                      padding: '1.4rem 1.6rem',
                      boxShadow: '0 4px 20px rgba(197,160,89,0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.8rem' }}>
                        <div style={{
                          width: '34px', height: '34px', borderRadius: '50%',
                          backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center',
                          justifyContent: 'center', color: '#fff',
                          fontFamily: 'var(--font-cinzel), serif', fontSize: '0.9rem', fontWeight: '600', flexShrink: 0
                        }}>
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '0.8rem', color: '#111', fontWeight: '500', letterSpacing: '0.04em' }}>{review.name}</div>
                          {review.badge && <div style={{ fontSize: '0.68rem', color: '#888', fontFamily: 'var(--font-inter), sans-serif' }}>{review.badge}</div>}
                        </div>
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
                          {Array.from({ length: review.stars }).map((_, si) => (
                            <span key={si} style={{ color: '#fbbc04', fontSize: '0.8rem' }}>★</span>
                          ))}
                        </div>
                      </div>
                      <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem', lineHeight: '1.6', color: '#555', fontWeight: '300', margin: 0 }}>
                        &quot;{review.text}&quot;
                      </p>
                      <div style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        <span style={{ fontSize: '0.68rem', color: '#aaa', fontFamily: 'var(--font-inter), sans-serif' }}>Google Review</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



          </div>

        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}} />
      </section>


    </>
  );
};

export default LuxuryCottagesFAQ;


