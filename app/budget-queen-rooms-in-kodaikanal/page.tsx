import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";
import BudgetQueenHeroSlider from "@/components/BudgetQueenHeroSlider";

export const metadata: Metadata = {
  title: "Budget Queen Rooms in Kodaikanal | Premium Comfort & Misty Views",
  description: "Book premium Budget Queen Rooms in Kodaikanal at Cloud Walks. Experience absolute luxury, thermal wood paneling, warm fireplaces, and panoramic misty valley views at unmatched value.",
  keywords: [
    "budget queen rooms in kodaikanal",
    "affordable luxury rooms Kodaikanal",
    "best queen suite homestay Kodaikanal",
    "cheap premium stays Kodaikanal",
    "Kodaikanal valley view rooms budget",
    "Cloud Walks Kodaikanal queen rooms"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/budget-queen-rooms-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/budget-queen-rooms-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Budget Queen Rooms in Kodaikanal | Cloud Walks Home Stay",
    description: "Affordable luxury nestled in the clouds. Premium Queen-sized bedding, warm hand-crafted pine interiors, and stunning ridge-line views of Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20room%202.png", width: 1200, height: 630, alt: "Budget Queen Rooms in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Queen Rooms in Kodaikanal | Cloud Walks",
    description: "Premium Queen bedding, pine wood interiors & misty valley views at the best budget homestay in Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20room%202.png"],
  },
};

const queenRoomHighlights = [
  {
    title: "The Classic Queen Suite",
    tagline: "Sophisticated Solomon & Comfort",
    description: "Designed for premium solace, the Classic Queen Suite blends a refined warm timber color palette, high-density orthopedic bedding, and premium ambient lighting. It provides the ultimate cozy comfort for couples and solo travelers looking for high-end rest at exceptional budget-friendly rates.",
    image: "/gallery/cloud walks room 2.png",
    features: ["Orthopedic Queen Bedding", "Modern en-suite hot rain shower", "Soundproof thermal paneling", "Elegant reading desk lounge"],
  },
  {
    title: "High-Altitude Valley View Queen",
    tagline: "Watch the Floating Clouds Roll In",
    description: "Step into an incredible highland escape where massive French window panes frame a majestic canvas of Kodaikanal's green mountain ridges and rolling fog. This room connects you directly with the high-elevation climate of the hills, maintaining a warm and cozy heart.",
    image: "/original-images/cloud walks 26.jpg",
    features: ["Panoramic valley vistas", "Wide floor-to-ceiling windows", "Cozy morning coffee nook", "Local wool comfort blankets"],
  },
  {
    title: "Cathedral Timber Queen Loft",
    tagline: "Stately Vaulted Highland Masterwork",
    description: "An architecturally stunning elevated suite crafted with hand-finished local pine. The high-pitched cathedral timber ceiling design creates an incredibly spacious, warm timber sanctuary that perfectly insulates you from Kodaikanal's signature freezing nights.",
    image: "/original-images/cloud walks 58.JPG",
    features: ["Cathedral high timber ceilings", "Natural warm pine wood paneling", "Insulated mountain insulation", "Premium clouds-comfort pillows"],
  },
  {
    title: "Cozy Insulated Queen Attic",
    tagline: "Rustic Cabin Charm & Stargazing Skylights",
    description: "Enjoy a authentic, cozy cabin vibe in our insulated Queen Attic, complete with custom exposed wooden rafters and ceiling windows that let in natural mountain sunlight by day and provide romantic stargazing views under clear Kodaikanal night skies.",
    image: "/original-images/cloud walks 59.jpg",
    features: ["Romantic stargazing skylights", "Thermally insulated interior", "Elegant wooden timber rafters", "Cozy built-in corner benches"],
  },
  {
    title: "Classic Parquet Parapet Queen",
    tagline: "Refined Modern Mountain Living",
    description: "Combining deep-toned polished hardwood parquet flooring and modern clean architecture, this room features double-glazed large windows that open up to gorgeous morning light filtering through the surrounding misty tree canopies.",
    image: "/original-images/cloud walks 56.jpg",
    features: ["Polished hardwood parquet flooring", "Dual-layered soundproof glass", "Direct mountain sunrise access", "Generous built-in wardrobe spaces"],
  }
];

const galleryHighlights = [
  {
    src: "/original-images/cloud walks 23.jpg",
    title: "Secluded Ridge Cottage Exterior",
    desc: "Premium stone-crafted cottage structures built straight on the scenic ridge of Kodaikanal."
  },
  {
    src: "/original-images/cloud walks 25.jpg",
    title: "Misty Forest Ridges",
    desc: "Breathtaking tall pine trees draped in thick white fog, situated just steps from the rooms."
  },
  {
    src: "/original-images/cloud walks 30.jpg",
    title: "Highland Canopy Walkway",
    desc: "Tranquil stone paths winding through evergreen tree canopies for fresh morning strolls."
  },
  {
    src: "/original-images/cloud walks 32.jpg",
    title: "Scenic Hilltop Gazebo",
    desc: "A beautiful, traditional wooden gazebo offering unparalleled 360-degree valley views."
  },
  {
    src: "/original-images/cloud walks 50.jpg",
    title: "Queen Bunk Family Combo",
    desc: "Spacious layout featuring custom double-tier solid pine frames for family convenience."
  },
  {
    src: "/original-images/cloud walks 61.jpg",
    title: "Elevated Attic Viewing Deck",
    desc: "A private, high-altitude lounge deck with comfortable seats overlooking misty mountain vistas."
  }
];

export default function BudgetQueenRoomsPage() {
  const lodgindSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "name": "Budget Queen Rooms at Cloud Walks Kodaikanal",
    "description": "Premium Queen-sized lodging in Kodaikanal at highly affordable rates. Features custom pine interiors, misty forest views, modern en-suite amenities, and superior soundproofing.",
    "photo": "https://cloudwalks.com/gallery/cloud%20walks%20room%202.png",
    "bed": {
      "@type": "BedDetails",
      "numberOfBeds": "1",
      "type": "Queen Bed"
    },
    "occupancy": {
      "@type": "QuantitativeValue",
      "value": "2"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Valley View",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Wi-Fi",
        "value": "true"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Hot Water Shower",
        "value": "true"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "3500",
      "valueAddedText": "Complimentary gourmet breakfast included"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cloudwalks.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Budget Queen Rooms",
        "item": "https://cloudwalks.com/budget-queen-rooms-in-kodaikanal"
      }
    ]
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-budget-queen-room"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgindSchema) }}
      />
      <Script
        id="json-ld-budget-queen-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
        zIndex: 1,
      }}>
        <BudgetQueenHeroSlider />
        
        {/* Deep Cinematic Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 100%)',
          zIndex: 0,
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
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}>
              AFFORDABLE HIGHLAND LUXURY
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.4rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '300',
            letterSpacing: '0.03em',
            color: '#ffffff',
            textShadow: '0 4px 25px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
          }}>
            Budget Queen Rooms <br />
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none', textShadow: '0 4px 25px rgba(0,0,0,0.8)' }}>in Kodaikanal</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
            letterSpacing: '0.15em',
            fontWeight: '300',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '850px',
            margin: '0 auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
          }}>
            Experience Premium Comfort, Custom Wooden Architecture, and Misty Pine Panoramas
          </p>

          <div style={{ marginTop: '3rem' }}>
            <Link href="#contact-us">
              <button className="luxury-button" style={{ padding: '1.1rem 3.2rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                RESERVE YOUR QUEEN ROOM
              </button>
            </Link>
          </div>
        </div>

        {/* Dynamic Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '35px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.8,
          zIndex: 1
        }}>
          <div style={{
            width: '1px',
            height: '55px',
            background: 'linear-gradient(to bottom, transparent, white)',
            animation: 'scrollLine 2s infinite'
          }}></div>
        </div>
      </section>

      {/* Premium SEO Rich Context Intro */}
      <section style={{ padding: '90px 5% 50px 5%', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            color: 'var(--primary)',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1.2rem',
            fontWeight: '600',
          }}>
            Cozy Highlands Sanctuary
          </span>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.2rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem',
            lineHeight: '1.3'
          }}>
            THE FINEST BUDGET QUEEN LODGING IN KODAIKANAL
          </h2>

          <div style={{
            width: '65px',
            height: '1px',
            backgroundColor: 'var(--primary)',
            margin: '0 auto 2.5rem auto',
            boxShadow: '0 0 3px rgba(197, 160, 89, 0.4)'
          }} />

          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.15rem',
            lineHeight: '1.95',
            color: '#555555',
            fontWeight: '300',
          }}>
            Nestled inside the cloud-kissed heights of Kodaikanal, Cloud Walks welcomes you to the ultimate collection of **Budget Queen Rooms**. Crafted with architectural brilliance, these rooms redefine affordable luxury. We combine native pine wood interiors, state-of-the-art thermal insulation, high-end bedding, and spectacular misty views of private valleys and forest ridges. Perfect for budget-conscious couples, travelers, and small families looking for high-quality, memorable stays in Kodaikanal.
          </p>
        </div>
      </section>

      {/* Main Rooms Showcase */}
      <section style={{ padding: '50px 5% 80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '110px' }}>
          {queenRoomHighlights.map((room, index) => {
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
                {/* Image Showcase */}
                <div
                  className="queen-image-container"
                  style={{
                    flex: '1 1 500px',
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    boxShadow: '0 25px 55px rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.18)',
                    borderRadius: '4px'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: '16px',
                    border: '1px solid rgba(255,255,255,0.25)',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }} />
                  <PreloadedImage
                    src={room.image}
                    alt={`${room.title} - Budget Queen Room in Kodaikanal`}
                    fill
                    className="queen-img"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Text Description Block */}
                <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                  <div style={{ position: 'relative' }}>
                    <span style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.22em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      display: 'block',
                      marginBottom: '0.6rem',
                    }}>
                      {room.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'clamp(1.75rem, 3.5vw, 2.3rem)',
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
                    lineHeight: '1.85',
                    color: '#555555',
                    fontWeight: '300',
                  }}>
                    {room.description}
                  </p>

                  {/* Amenities Features Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.1rem',
                    marginTop: '0.5rem',
                    borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                    paddingTop: '1.6rem',
                  }}>
                    {room.features.map((feature, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                          flexShrink: 0,
                          boxShadow: '0 0 3px rgba(197, 160, 89, 0.6)'
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
                      <button className="luxury-button" style={{ padding: '0.95rem 2.4rem', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
                        CHECK QUEEN ROOM AVAILABILITY
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Premium Visual Highlights Grid */}
      <section style={{
        padding: '90px 5%',
        backgroundColor: '#f8f5f0',
        borderTop: '1px solid rgba(197, 160, 89, 0.12)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.12)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.8rem',
              letterSpacing: '0.3em',
              color: 'var(--primary)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '0.8rem',
              fontWeight: '600'
            }}>
              Immersive Scenic Surroundings
            </span>
            <h2 style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              color: '#1a1a1a',
              fontWeight: '400',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}>
              HIGHLAND VIEW PORTFOLIO
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--primary)',
              margin: '1.5rem auto 0 auto'
            }} />
          </div>

          {/* Visual Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2.5rem'
          }}>
            {galleryHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="gallery-card"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(197, 160, 89, 0.12)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <PreloadedImage 
                    src={item.src}
                    alt={`${item.title} - Cloud Walks Kodaikanal`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
                    className="gallery-card-img"
                  />
                </div>
                <div style={{ padding: '1.6rem' }}>
                  <h4 style={{
                    fontFamily: 'var(--font-cinzel), serif',
                    fontSize: '1rem',
                    color: '#1a1a1a',
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    marginBottom: '0.6rem',
                    textTransform: 'uppercase'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#666666',
                    fontWeight: '300'
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider & FAQ Elements */}
      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      {/* Styled Animations and CSS Effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .queen-image-container img {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .queen-image-container:hover img {
          transform: scale(1.06) !important;
        }
        .gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(197, 160, 89, 0.1) !important;
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.05);
        }
        @media (max-width: 991px) {
          section {
            padding-top: 55px !important;
            padding-bottom: 55px !important;
          }
        }
      `}} />
    </main>
  );
}
