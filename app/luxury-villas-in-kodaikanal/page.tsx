import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Best Luxury Villas in Kodaikanal | Cloud Walks",
  description: "Indulge in ultimate elegance at the finest luxury villas in Kodaikanal. Experience panoramic valley views, private wooden decks, artisan fireplaces, and premium hospitality at Cloud Walks.",
  keywords: [
    "luxury villas in Kodaikanal",
    "best private villas in Kodaikanal",
    "premium villa stays Kodaikanal",
    "luxury homestay Kodaikanal",
    "family villas Kodaikanal",
    "misty mountain cottages South India"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/luxury-villas-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/luxury-villas-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Best Luxury Villas in Kodaikanal | Cloud Walks",
    description: "Step into a world of high-altitude luxury. Premium private wood villas with private decks, artisan fireplaces, and unmatched views in Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png", width: 1200, height: 630, alt: "Luxury Villas in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Villas in Kodaikanal | Cloud Walks",
    description: "Premium private villas with panoramic decks, artisan fireplaces & unmatched valley views above the clouds of Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png"],
  },
};

const luxuryVillas = [
  {
    title: "The Imperial Grand Villa",
    tagline: "Bespoke Splendor & Panoramic Decks",
    description: "Our crowning achievement in luxury living, the Imperial Grand Villa features massive window panels that draw the floating mountain clouds right to your feet. Crafted with solid timber, high-safety architectural glass, and a gorgeous private lounge with double-height ceilings, this villa defines the peak of luxury accommodation in Kodaikanal.",
    image: "/gallery/cloud walks 40.png",
    features: ["Massive panoramic valley deck", "Double-height artisan ceiling", "Bespoke handcrafted woodwork", "Private en-suite copper fireplace"],
  },
  {
    title: "The Misty Ridge Sanctuary",
    tagline: "Private Seclusion Above the Clouds",
    description: "Nestled at the highest point of our estate, the Misty Ridge Sanctuary offers unmatched privacy for family getaways or executive retreats. With its custom warm timber walls, ambient golden glow lighting, cozy reading alcoves, and a private mountain-facing terrace, this sanctuary wraps you in absolute comfort and elegance.",
    image: "/gallery/cloud walks room 1.png",
    features: ["Ultra-private viewing balcony", "Premium master suites & bedding", "Cozy wooden structural logs", "In-room custom dining setup"],
  }
];

const experienceHighlights = [
  {
    src: "/gallery/cloud walks 43.jpg",
    title: "Premium Villa Architecture",
    caption: "High-altitude wooden chalets designed to insulate perfectly against the cold mountain air."
  },
  {
    src: "/gallery/cloud walks home stay 14.jpg",
    title: "Warm Log Cabin Lounge",
    caption: "Relax by the warm amber fireside with comfortable sofas and spectacular valley outlooks."
  },
  {
    src: "/gallery/cloud walks home stay 13.jpg",
    title: "Intricate Wooden Bedrooms",
    caption: "Sleep in deep, luxurious comfort surrounded by natural pine fragrances and custom layouts."
  },
  {
    src: "/gallery/cloud walks 31.jpg",
    title: "Misty Sunrise Balcony",
    caption: "Sip your morning brew as the golden sunlight pierces the dense valley fog."
  },
  {
    src: "/gallery/cloud walks home stay 16.jpg",
    title: "Lush Estate Walkways",
    caption: "Stroll through pristine, beautifully landscaped walkways filled with Kodaikanal flora."
  },
  {
    src: "/gallery/cloud walks home stay 5.jpg",
    title: "Magnificent Main Chalet",
    caption: "A premium resort structure embodying royal hill-station heritage and absolute class."
  }
];

export default function LuxuryVillasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Cloud Walks Luxury Villas Kodaikanal",
    "description": "Indulge in high-altitude elegance at the finest luxury villas in Kodaikanal. Features premium private wood chalets, artisan fireplaces, and sweeping mountain panoramas.",
    "photo": "https://cloudwalks.com/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Attuvampatti",
      "addressLocality": "Kodaikanal",
      "addressRegion": "Tamil Nadu",
      "postalCode": "624101",
      "addressCountry": "India"
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Private Valley Decks",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Artisan Fireplaces",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed Fiber Wi-Fi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Eco-Landscaped Gardens",
        "value": "true"
      }
    ]
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-luxury-villas"
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
          <PreloadedImage
            src="/gallery/cloud walks and home stay kodaikanal.png"
            alt="Luxury Villas in Kodaikanal - Breathtaking panoramic exterior of Cloud Walks estate"
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
              MOUNTAIN ELEGANCE
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
            Luxury Villas <br /> 
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none', textShadow: '0 4px 25px rgba(0,0,0,0.8)' }}>In Kodaikanal</span>
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
            Indulge in Exquisite Privacy, Artisan Craftsmanship & Majestic Cloudscapes
          </p>

          <div style={{ marginTop: '3rem' }}>
            <Link href="#contact-us">
              <button className="luxury-button" style={{ padding: '1.1rem 3rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                RESERVE YOUR PRIVATE CHALET
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

      {/* Introduction Section */}
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
            An Elite Mountain Haven
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem'
          }}>
            UNMATCHED PRIVATE VILLA SPLENDOR
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
            Escape to the ultimate height of comfort at Cloud Walks, widely recognized for offering the finest 
            **luxury villas in Kodaikanal**. Situated 500 feet higher than Kodaikanal town, our properties provide 
            an exclusive, tranquil environment where mist and clouds float by your window. Combining the rich, rustic 
            allure of fine pine logs with high-end designer amenities, en-suite artisan fireplaces, massive valley-view decks, 
            and personalized five-star hospitality, we craft a mountain getaway that is simply exceptional.
          </p>
        </div>
      </section>

      {/* Villa Showcase (Rooms) */}
      <section style={{ padding: '60px 5% 80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {luxuryVillas.map((room, index) => {
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
                  
                  <PreloadedImage
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

      {/* Experience Gallery Section */}
      <section style={{ padding: '80px 5% 100px 5%', backgroundColor: '#FAF7F0', borderTop: '1px solid rgba(197, 160, 89, 0.12)', borderBottom: '1px solid rgba(197, 160, 89, 0.12)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              High-Altitude Haven
            </span>
            <h2 style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#1a1a1a',
              fontWeight: '400',
              letterSpacing: '0.05em'
            }}>
              THE LUXURY VILLA EXPERIENCE
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', margin: '1.5rem auto 0 auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {experienceHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="gallery-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.18)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(197, 160, 89, 0.04)',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden' }}>
                  <PreloadedImage 
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    className="gallery-card-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)',
                    zIndex: 1
                  }} />
                </div>
                <div style={{ padding: '2rem 1.8rem' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '1.15rem',
                    letterSpacing: '0.05em',
                    color: '#111111',
                    marginBottom: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.92rem',
                    lineHeight: '1.7',
                    color: '#666666',
                    fontWeight: '300',
                    margin: 0
                  }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms slider and FAQ */}
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
        .gallery-card:hover {
          transform: translateY(-8px);
          boxShadow: 0 25px 50px rgba(197, 160, 89, 0.09);
          border-color: var(--primary);
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.05);
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
