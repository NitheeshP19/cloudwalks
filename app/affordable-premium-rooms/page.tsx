import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";
import BudgetHeroSlider from "@/components/BudgetHeroSlider";

export const metadata: Metadata = {
  title: "Budget Premium Stay in Kodaikanal | Cloud Walks Home Stay",
  description: "Discover Cloud Walks' budget premium stays in Kodaikanal — cozy rooms with misty mountain views, warm wooden interiors, and premium hospitality at incredible value.",
  keywords: [
    "budget premium stay Kodaikanal",
    "affordable premium rooms Kodaikanal",
    "luxury homestay Kodaikanal budget",
    "hill view rooms Kodaikanal",
    "misty mountain rooms Kodaikanal",
    "cozy stay Kodaikanal",
  ],
  alternates: {
    canonical: "https://cloudwalks.com/affordable-premium-rooms",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/affordable-premium-rooms",
    siteName: "Cloud Walks Home Stay",
    title: "Budget Premium Stay in Kodaikanal | Cloud Walks Home Stay",
    description: "Premium comfort without the premium price. Misty views, warm rooms, and genuine highland hospitality at Cloud Walks Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/original-images/cloud%20walks%2026.jpg", width: 1200, height: 630, alt: "Budget Premium Stay in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Premium Stay in Kodaikanal | Cloud Walks",
    description: "Premium comfort without the premium price. Misty views, warm rooms, and genuine highland hospitality.",
    images: ["https://cloudwalks.com/original-images/cloud%20walks%2026.jpg"],
  },
};

const rooms = [
  {
    title: "Panoramic Valley Vista Room",
    tagline: "Wake Up To The Clouds",
    description: "A thoughtfully designed premium room opening directly to sweeping panoramic views of Kodaikanal's misty valleys and pine forest slopes. Wide French-style windows frame an ever-changing canvas of mist and greenery, while warm wooden furnishings and plush bedding create a cozy, nestled-in-nature feel at outstanding value.",
    image: "/original-images/cloud%20walks%2026.jpg",
    features: ["Panoramic valley view", "Warm wooden interiors", "Plush premium bedding", "Morning mist vistas"],
  },
  {
    title: "Pine Tree Canopy Room",
    tagline: "Surrounded By Ancient Pines",
    description: "Nestled beneath a canopy of century-old pine trees, this serene room offers filtered green light, the sound of wind through pines, and a peaceful connection to Kodaikanal's highland wilderness. Thoughtfully appointed with comfortable furniture and quality linen, it strikes the perfect balance between nature immersion and hotel-quality comfort.",
    image: "/original-images/cloud%20walks%2030.jpg",
    features: ["Pine forest canopy views", "Tranquil nature setting", "Quality cotton linen", "Peaceful highland ambience"],
  },
  {
    title: "Deluxe Bunk Bed Family Room",
    tagline: "Perfect For Families & Groups",
    description: "Generously proportioned for families and friend groups, this room features elevated bunk beds built with solid wood, comfortable lower sleeping quarters, and warm interior lighting that creates a cabin-like highland atmosphere. Every inch is designed to make family getaways feel both fun and genuinely comfortable.",
    image: "/original-images/cloud%20walks%2050.jpg",
    features: ["Solid wood bunk beds", "Spacious family layout", "Warm cabin lighting", "Ideal for groups"],
  },
  {
    title: "Cozy Wooden Attic Loft",
    tagline: "High-Altitude Rustic Retreat",
    description: "A characterful attic-style room featuring exposed wooden beams, sloping ceilings, and skylights that bring in soft natural light during the day and stargazing potential at night. The insulated pine walls keep the room cozy through cool Kodaikanal evenings, offering a genuinely unique and memorable stay experience at a great price.",
    image: "/original-images/cloud%20walks%2059.jpg",
    features: ["Exposed wooden beam ceiling", "Natural skylight", "Thermal pine insulation", "Unique attic character"],
  },
];

export default function AffordableRoomsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cloud Walks Budget Premium Stay Kodaikanal",
    "description": "Premium budget rooms in Kodaikanal with misty mountain views, wooden interiors, and warm highland hospitality.",
    "photo": "https://cloudwalks.com/original-images/cloud%20walks%2026.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kodaikanal",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India",
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4",
    },
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-budget-rooms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Section — full-screen image with overlay text */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <BudgetHeroSlider />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 100%)',
          zIndex: 0,
        }} />

        <div style={{ zIndex: 1, padding: '0 20px', marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.8)' }} />
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              fontWeight: '600',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}>
              EXCEPTIONAL VALUE
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.8)' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '300',
            letterSpacing: '0.03em',
            color: '#ffffff',
            textShadow: '0 4px 25px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            Budget Premium Stay <br />
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textShadow: '0 4px 25px rgba(0,0,0,0.8)' }}>in Kodaikanal</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            letterSpacing: '0.15em',
            fontWeight: '300',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '800px',
            margin: '0 auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}>
            Premium comfort, misty mountain views, and genuine highland warmth
          </p>
        </div>
      </section>

      {/* Curated Intro Section */}
      <section style={{ padding: '80px 5% 40px 5%', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
            fontWeight: '600',
          }}>
            A Highland Retreat For Every Budget
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem',
          }}>
            THE CLOUD WALKS PREMIUM ROOM COLLECTION
          </h2>

          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--primary)',
            margin: '0 auto 2.5rem auto',
          }} />

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.9',
            color: '#555555',
            fontWeight: '300',
          }}>
            Nestled in the high slopes of Kodaikanal, Cloud Walks offers a selection of beautifully appointed
            premium rooms that deliver the essence of highland luxury without the extravagant price. Each room is
            designed with warm natural wood, quality bedding, and thoughtful details — framed by misty pine forests
            and panoramic valley views that make waking up here a genuinely extraordinary experience.
          </p>
        </div>
      </section>

      {/* Rooms Showcase — alternating image-text layout */}
      <section style={{ padding: '60px 5% 100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>

          {rooms.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.title}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '4.5rem',
                  flexWrap: 'wrap',
                }}
              >
                {/* Image */}
                <div
                  className="cottage-image-container"
                  style={{
                    flex: '1 1 500px',
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                  }}
                >
                  {/* Decorative inner border */}
                  <div style={{
                    position: 'absolute',
                    inset: '15px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }} />
                  <PreloadedImage
                    src={room.image}
                    alt={room.title}
                    fill
                    className="cottage-img"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.2em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}>
                      {room.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      color: '#1a1a1a',
                      fontWeight: '400',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                    }}>
                      {room.title}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#555555',
                    fontWeight: '300',
                  }}>
                    {room.description}
                  </p>

                  {/* Feature highlights grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                    paddingTop: '1.5rem',
                  }}>
                    {room.features.map((feature, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '0.88rem',
                          color: '#444444',
                          fontWeight: '400',
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="#contact-us" style={{ display: 'inline-block' }}>
                      <button className="luxury-button" style={{ padding: '0.9rem 2.2rem', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                        INQUIRE ABOUT THIS ROOM
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mid-page Banner */}
      <section style={{
        position: 'relative',
        padding: '100px 5%',
        backgroundColor: '#f8f5f0',
        borderTop: '1px solid rgba(197, 160, 89, 0.15)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
        overflow: 'hidden',
      }}>
        {/* Background watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-cinzel), serif',
          fontSize: '12vw',
          color: 'rgba(197, 160, 89, 0.03)',
          fontWeight: '900',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}>
          CLOUD WALKS
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            color: '#1a1a1a',
            fontWeight: '400',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}>
            Premium Comfort, Genuine Value
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#666666',
            fontWeight: '300',
            marginBottom: '3rem',
          }}>
            Our budget premium rooms in Kodaikanal are thoughtfully appointed with quality cotton bedding,
            warm timber interiors, complimentary high-speed Wi-Fi, and hot water. Wake up to highland mist
            rolling over pine forests and enjoy home-cooked South Indian breakfasts prepared with fresh
            local ingredients — all at a price that makes the extraordinary feel accessible.
          </p>

          <Link href="#contact-us" style={{ display: 'inline-block' }}>
            <button className="luxury-button" style={{ padding: '1.2rem 3.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
              RESERVE YOUR ROOM
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section (reusing the luxury cottages FAQ component) */}
      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      {/* Hover animations & responsive styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cottage-image-container img {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .cottage-image-container:hover img {
          transform: scale(1.06) !important;
        }
        @media (max-width: 991px) {
          section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
        }
      `}} />
    </main>
  );
}
