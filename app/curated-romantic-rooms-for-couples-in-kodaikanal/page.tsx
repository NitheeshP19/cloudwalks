import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Curated Romantic Rooms for Couples in Kodaikanal | Cloud Walks",
  description: "Discover the most exclusive, curated romantic rooms for couples in Kodaikanal. Experience intimate luxury, private balconies, and misty mountain views at Cloud Walks.",
  keywords: [
    "curated romantic rooms for couples in kodaikanal",
    "best resorts for couples in Kodaikanal",
    "honeymoon cottages Kodaikanal",
    "romantic stay in Kodaikanal",
    "private villas for couples in Kodaikanal",
    "best honeymoon destinations in South India"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/curated-romantic-rooms-for-couples-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/curated-romantic-rooms-for-couples-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Curated Romantic Rooms for Couples in Kodaikanal | Cloud Walks",
    description: "Rekindle romance in the clouds. Explore handcrafted romantic cottages designed exclusively for couples seeking a misty mountain getaway in Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg", width: 1200, height: 630, alt: "Romantic Rooms for Couples in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romantic Rooms for Couples in Kodaikanal | Cloud Walks",
    description: "Intimate luxury suites, private balconies & misty valleys. The perfect honeymoon & anniversary getaway in Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg"],
  },
};

const romanticRooms = [
  {
    title: "The Honeymoon Escape Villa",
    tagline: "Intimate Mountain Sanctuary",
    description: "Designed specifically to foster romance, this secluded villa features warm wooden interiors, ambient golden lighting, and a sweeping private balcony that opens up to the misty Kodaikanal valleys. Perfect for newlyweds or couples seeking an unforgettable anniversary retreat.",
    image: "/original-images/cloud walks 47.jpg",
    features: ["Private mountain-facing balcony", "En-suite luxury rain shower", "Romantic floral bed arrangements", "Candlelight dinner setups"],
  },
  {
    title: "Cozy Romantic Attic Suite",
    tagline: "Stargazing & Serenity",
    description: "Elevate your romantic getaway in our bespoke high-altitude attic suite. Crafted with solid pine and featuring a vintage glass skylight, this suite allows couples to sleep beneath the stars while staying perfectly insulated against the cold, misty Kodaikanal nights.",
    image: "/original-images/cloud walks 33.jpg",
    features: ["Stargazing glass skylight", "Thermal pine insulation", "Premium couples bedding", "Unobstructed valley panoramas"],
  }
];

export default function RomanticRoomsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cloud Walks Romantic Rooms Kodaikanal",
    "description": "Curated romantic rooms for couples in Kodaikanal featuring private balconies, stargazing skylights, and bespoke couples hospitality.",
    "photo": "https://cloudwalks.com/original-images/cloud%20walks%20home%20stay%2043.jpg",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kodaikanal",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    }
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-romantic-rooms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        isolation: 'isolate'
      }}>
        {/* Dynamic Image Background */}
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <Image
            src="/original-images/cloud walks home stay 43.jpg"
            alt="Romantic view in Kodaikanal at Cloud Walks"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        {/* Cinematic Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.7) 100%)',
          zIndex: -1
        }} />
        
        <div style={{ zIndex: 1, padding: '0 20px', marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              fontWeight: '600',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)'
            }}>
              LOVE IN THE CLOUDS
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', 
            fontFamily: 'var(--font-cinzel), serif', 
            fontWeight: '300', 
            letterSpacing: '0.03em', 
            color: '#ffffff',
            textShadow: '0 4px 25px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Curated Romantic Rooms <br /> 
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none', textShadow: '0 4px 25px rgba(0,0,0,0.8)' }}>For Couples</span>
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
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            An Intimate Escape Into Kodaikanal's Misty Valleys
          </p>

          <div style={{ marginTop: '3rem' }}>
            <Link href="#contact-us">
              <button className="luxury-button" style={{ padding: '1.1rem 3rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                BOOK YOUR ROMANTIC GETAWAY
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          opacity: 0.8,
          zIndex: 1
        }}>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, white)',
            animation: 'scrollLine 2s infinite'
          }}></div>
        </div>
      </section>

      {/* Introduction Text */}
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
            fontWeight: '600'
          }}>
            A Couples Sanctuary
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem'
          }}>
            THE ULTIMATE ROMANTIC EXPERIENCE
          </h2>
          
          <div style={{
            width: '60px',
            height: '1px',
            backgroundColor: 'var(--primary)',
            margin: '0 auto 2.5rem auto'
          }} />
          
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.9',
            color: '#555555',
            fontWeight: '300'
          }}>
            Escape the ordinary and celebrate your love at Cloud Walks. Ranked among the **best romantic resorts in Kodaikanal**, 
            our curated couples rooms are designed to provide absolute privacy, luxurious comfort, and breathtaking misty views. 
            Whether you are on your honeymoon, celebrating an anniversary, or simply escaping for a romantic weekend, 
            our bespoke hospitality ensures a deeply memorable romantic retreat.
          </p>
        </div>
      </section>

      {/* Romantic Rooms Showcase */}
      <section style={{ padding: '60px 5% 100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {romanticRooms.map((room, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={room.title}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  gap: '4.5rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* Image Section */}
                <div 
                  className="room-image-container"
                  style={{
                    flex: '1 1 500px',
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.2)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: '15px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }} />
                  
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="room-img"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Text Description Section */}
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
                      marginBottom: '0.5rem'
                    }}>
                      {room.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      color: '#1a1a1a',
                      fontWeight: '400',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}>
                      {room.title}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#555555',
                    fontWeight: '300'
                  }}>
                    {room.description}
                  </p>

                  {/* Highlights Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                    paddingTop: '1.5rem'
                  }}>
                    {room.features.map((feature, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          flexShrink: 0
                        }} />
                        <span style={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '0.88rem',
                          color: '#444444',
                          fontWeight: '400'
                        }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="#contact-us" style={{ display: 'inline-block' }}>
                      <button className="luxury-button" style={{ padding: '0.9rem 2.2rem', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                        REQUEST AVAILABILITY
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Frequently Asked Questions / Booking Footer */}
      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      {/* Styled Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .room-image-container img {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .room-image-container:hover img {
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
