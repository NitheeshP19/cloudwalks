import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Family Friendly Hotel in Kodaikanal | Premium Stay | Cloud Walks",
  description: "Experience the ultimate family friendly hotel in Kodaikanal. Cloud Walks offers spacious wooden family cottages, child-friendly play gardens, artisan fireplaces, and breathtaking misty valley views.",
  keywords: [
    "family friendly hotel in Kodaikanal",
    "best resorts for family in Kodaikanal",
    "family cottages in Kodaikanal",
    "kid friendly stays Kodaikanal",
    "spacious rooms for family in Kodaikanal",
    "luxury family suites South India"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/family-friendly-hotel-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/family-friendly-hotel-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Best Family Friendly Hotel in Kodaikanal | Cloud Walks",
    description: "Build beautiful family memories high in the hills. Handcrafted family villas and premium child-friendly cottages designed for multi-generational comfort.",
    images: [{ url: "https://cloudwalks.com/original-images/cloud%20walks%2056.jpg", width: 1200, height: 630, alt: "Family Friendly Hotel in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Family Friendly Hotel in Kodaikanal | Cloud Walks",
    description: "Spacious family cottages, kid-friendly gardens & misty valley views. The perfect family retreat in Kodaikanal.",
    images: ["https://cloudwalks.com/original-images/cloud%20walks%2056.jpg"],
  },
};

const familyRooms = [
  {
    title: "The Royal Family Chalet",
    tagline: "Spacious Multi-Generational Sanctuary",
    description: "Designed specifically to host your loved ones in absolute comfort, this sprawling chalet features warm timber-clad interiors, cozy reading nooks, and a wide private balcony where the entire family can gather to watch the misty clouds drift across the Kodaikanal valley. Safe, luxurious, and deeply peaceful.",
    image: "/original-images/cloud walks 23.jpg",
    features: ["Spacious double-bedroom suite", "Custom child-safe wooden interiors", "Expansive valley-view balcony", "Dedicated board game corner"],
  },
  {
    title: "Misty Mountain Attic Loft",
    tagline: "High-Altitude Fairy Tale & Adventure",
    description: "Spark the imagination of your children in our handcrafted attic suite. Combining the cozy charm of solid thermal pine logs with a stunning viewing balcony, this suite offers comfortable bedding, hot rain showers, and the unique joy of stargazing and watching misty clouds right from your high-altitude loft.",
    image: "/original-images/cloud walks 32.jpg",
    features: ["Cozy pine log construction", "High-safety stairs and railings", "Plush luxury bedding for 4+", "Scenic partial lake & valley view"],
  }
];

const galleryHighlights = [
  {
    src: "/original-images/cloud walks 26.jpg",
    title: "Artisan Living Space",
    caption: "Spacious, elegantly furnished common areas for family gatherings and evening stories."
  },
  {
    src: "/original-images/cloud walks 30.jpg",
    title: "High-Altitude Panoramic Balcony",
    caption: "Stand above the clouds and watch the spectacular Kodaikanal sunrise together."
  },
  {
    src: "/original-images/cloud walks 50.jpg",
    title: "Lush Eco-Gardens",
    caption: "Safely explore curated gardens blooming with exotic flora, perfectly insulated by mountain mist."
  }
];

export default function FamilyFriendlyHotelPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Cloud Walks Family Friendly Hotel Kodaikanal",
    "description": "Ranked the best family friendly hotel in Kodaikanal, featuring premium luxury wood cottages, spacious suites, kid-friendly mountain lawns, and panoramic misty views.",
    "photo": "https://cloudwalks.com/original-images/cloud%20walks%2056.jpg",
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
        "name": "Spacious Family Gardens",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Child-Safe Interiors",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "High-Speed Fiber Wi-Fi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Artisan Fireplaces",
        "value": "true"
      }
    ]
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-family-hotel"
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
            src="/original-images/cloud walks 56.jpg"
            alt="Family Friendly Hotel in Kodaikanal - Beautiful exterior view at Cloud Walks"
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
              CREATING FAMILY MEMORIES
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
            Family Friendly Hotel <br /> 
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
            Premium Comfort, Kid-Friendly Spaces & Majestic Mountain Views
          </p>

          <div style={{ marginTop: '3rem' }}>
            <Link href="#contact-us">
              <button className="luxury-button" style={{ padding: '1.1rem 3rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                BOOK YOUR FAMILY RETREAT
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
            A Sanctuary for All Generations
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem'
          }}>
            THE PREFERRED FAMILY STAY IN THE HILLS
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
            Welcome to Cloud Walks, a premium **family friendly hotel in Kodaikanal** designed to bring loved ones closer. 
            Located in a quiet, high-altitude sanctuary with pristine air and misty mornings, our property combines 
            modern luxury with family essentials. With incredibly spacious layout options, secure wooden interiors, 
            beautiful expansive gardens for kids to safely play, and warm fireplaces for cozy family bonding, 
            we create an unforgettable high-altitude adventure that caters perfectly to guests of all ages.
          </p>
        </div>
      </section>

      {/* Family Showcase (Rooms) */}
      <section style={{ padding: '60px 5% 80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {familyRooms.map((room, index) => {
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

      {/* Interactive Family Gallery Section */}
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
              Curated Experience
            </span>
            <h2 style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#1a1a1a',
              fontWeight: '400',
              letterSpacing: '0.05em'
            }}>
              DESIGNED FOR FAMILY HARMONY
            </h2>
            <div style={{ width: '50px', height: '1px', backgroundColor: 'var(--primary)', margin: '1.5rem auto 0 auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {galleryHighlights.map((item, idx) => (
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
