"use client";

import React, { useState } from 'react';

const faqData = [
  {
    question: "WHERE IS CLOUD WALKS HOMESTAY LOCATED IN KODAIKANAL?",
    answer: "Cloud Walks Homestay is perched at a premium highland location in Attuvampatti, Kodaikanal — approximately 7 km (15–20 mins) from the Kodaikanal Lake and town center. At an elevation 500 feet higher than the city, you enjoy unobstructed panoramic views of the misty pine forests and rolling hills from every suite.",
  },
  {
    question: "WHAT TYPES OF ROOMS AND COTTAGES ARE AVAILABLE AT CLOUD WALKS?",
    answer: "Cloud Walks offers a curated collection of premium rooms and luxury cottages: the Grand Presidential Villa, Luxury Family Chalet, Cozy Wooden Attic Suite, Cozy Wooden Attic Loft, Premium Escape Cottage, Cottage Garden View, Honeymoon Suite, and more. Each accommodation is uniquely designed with warm wooden interiors, premium bedding, and mountain-view balconies.",
  },
  {
    question: "IS FOOD AND BREAKFAST INCLUDED IN THE STAY?",
    answer: "Yes! Cloud Walks offers delicious home-cooked South Indian meals and continental breakfast options. Our culinary team can also curate bespoke multi-course menus, private campfire barbecues, and customized dining experiences on request — all made with fresh, locally sourced ingredients.",
  },
  {
    question: "DO THE ROOMS HAVE HEATING FOR COLD KODAIKANAL NIGHTS?",
    answer: "Absolutely. Our rooms and cottages are equipped with double-insulated walls and modern heating systems to keep you perfectly warm and cozy during cool, misty Kodaikanal nights. Select premium suites also feature custom artisan fireplaces with complimentary firewood.",
  },
  {
    question: "IS HIGH-SPEED WI-FI AVAILABLE THROUGHOUT THE PROPERTY?",
    answer: "Yes. We provide complimentary high-speed fiber-optic Wi-Fi (up to 200 Mbps) with dual backup lines across all rooms and common areas — ideal for remote work, streaming, and staying connected without disruption.",
  },
  {
    question: "HOW DO I BOOK A ROOM AT CLOUD WALKS HOMESTAY?",
    answer: "Booking is simple and instant! You can enquire or reserve your stay directly via WhatsApp by clicking the booking button on our website. Our host team responds quickly and personally to ensure your stay is curated exactly to your preferences. Advance bookings are highly recommended, especially during peak season.",
  },
  {
    question: "WHAT IS THE CHECK-IN AND CHECK-OUT TIME?",
    answer: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out can be arranged based on availability — please let us know your travel plans in advance and we will do our best to accommodate you.",
  },
  {
    question: "CAN CLOUD WALKS ACCOMMODATE LARGE FAMILIES OR GROUPS?",
    answer: "Yes! Cloud Walks is ideal for families and groups. Our Grand Presidential Villa and Luxury Family Chalet are spacious multi-room suites perfect for large families. We can also arrange interconnected rooms, group dining setups, and private campfire experiences for group bookings.",
  },
];

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* FAQ Accordion Section */}
      <section
        id="faq"
        style={{
          backgroundColor: '#ffffff',
          padding: '100px 5% 80px 5%',
          borderTop: '1px solid rgba(197, 160, 89, 0.15)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle watermark */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '11vw',
            color: 'rgba(197, 160, 89, 0.03)',
            fontWeight: '900',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          FAQ
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-cinzel), serif',
                fontSize: '0.8rem',
                letterSpacing: '0.35em',
                color: 'var(--primary)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '1.2rem',
                fontWeight: '600',
              }}
            >
              HAVE QUESTIONS?
            </span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
              <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', opacity: 0.6 }} />
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontFamily: 'var(--font-cinzel), serif',
                  fontWeight: '400',
                  letterSpacing: '0.08em',
                  color: '#111111',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', opacity: 0.6 }} />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '1rem',
                color: '#888888',
                fontWeight: '300',
                marginTop: '1.5rem',
                letterSpacing: '0.04em',
              }}
            >
              Everything you need to know before your highland escape
            </p>
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '1.8rem 0',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '2rem',
                      outline: 'none',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cinzel), serif',
                        fontSize: 'clamp(0.82rem, 1.6vw, 1rem)',
                        fontWeight: isOpen ? '500' : '400',
                        letterSpacing: '0.07em',
                        color: isOpen ? 'var(--primary)' : '#222222',
                        lineHeight: '1.6',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.question}
                    </span>

                    {/* Animated +/× icon */}
                    <span
                      style={{
                        flexShrink: 0,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: `1px solid ${isOpen ? 'var(--primary)' : 'rgba(197,160,89,0.3)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isOpen ? 'var(--primary)' : 'transparent',
                        transition: 'all 0.35s ease',
                        color: isOpen ? '#ffffff' : 'var(--primary)',
                        fontSize: '1.1rem',
                        fontWeight: '300',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    style={{
                      maxHeight: isOpen ? '400px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease',
                      paddingBottom: isOpen ? '1.8rem' : '0',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '1rem',
                        lineHeight: '1.9',
                        color: '#555555',
                        fontWeight: '300',
                        margin: 0,
                        borderLeft: '2px solid var(--primary)',
                        paddingLeft: '1.2rem',
                      }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </>
  );
};

export default HomeFAQ;
