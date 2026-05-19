import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import PremiumHeroSlider from "@/components/PremiumHeroSlider";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Premium Stays in Kodaikanal | Cloud Walks Home Stay",
  description: "Discover Cloud Walks' premium stays in Kodaikanal — elegant suites, honeymoon rooms, royal canopy beds, and refined highland hospitality at its finest.",
  keywords: [
    "premium stays Kodaikanal",
    "premium rooms Kodaikanal",
    "luxury suites Kodaikanal",
    "honeymoon room Kodaikanal",
    "royal suite Kodaikanal",
    "highland premium stay Kodaikanal",
    "best premium homestay Kodaikanal",
  ],
  alternates: {
    canonical: "https://cloudwalks.com/premium-stays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/premium-stays",
    siteName: "Cloud Walks Home Stay",
    title: "Premium Stays in Kodaikanal | Cloud Walks Home Stay",
    description: "Elevated comfort, refined interiors, and panoramic misty views. Experience premium highland living at Cloud Walks Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg", width: 1200, height: 630, alt: "Premium Stays in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Stays in Kodaikanal | Cloud Walks",
    description: "Royal canopy suites, honeymoon rooms & refined interiors. The best premium highland stays in Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg"],
  },
};

const rooms = [
  {
    title: "Misty Pine Forest Suite",
    tagline: "Immersed in Highland Serenity",
    description: "Perched above a dense grove of ancient pines, this expansive suite offers floor-to-ceiling windows that frame ever-shifting mist and forest silhouettes. Wake to birdsong filtering through old-growth trees, and retire to plush premium bedding and warm ambient lighting that transforms the room into a sanctuary of absolute calm.",
    image: "/gallery/cloud%20walks%2025.jpg",
    features: ["Floor-to-ceiling pine forest views", "Premium plush bedding", "Warm ambient lighting", "Private mist-view balcony"],
  },
  {
    title: "Grand Presidential Suite",
    tagline: "The Pinnacle of Highland Prestige",
    description: "An expansive multi-room presidential suite commanding sweeping views of Kodaikanal's misty horizon. Featuring a teakwood sitting lounge, a double master bedroom dressed in Egyptian cotton, and a private balcony designed for sunset silences. This suite defines what premium accommodation in Kodaikanal truly means.",
    image: "/gallery/cloud%20walks%20home%20stay%203.jpg",
    features: ["Multi-room presidential layout", "Panoramic misty horizon views", "Egyptian cotton master bedroom", "Private sunset balcony"],
  },
  {
    title: "Royal Canopy Suite",
    tagline: "Grandeur Beneath The Clouds",
    description: "Defined by its dramatic four-poster canopy bed framed in rich dark timber, this suite combines old-world luxury with Kodaikanal's highland tranquility. Custom handcrafted furnishings, warm mood lighting, and a private sitting nook make this a retreat within a retreat — ideal for celebrations and romantic highland escapes.",
    image: "/gallery/cloud%20walks%20room%201.png",
    features: ["Four-poster canopy king bed", "Handcrafted timber furnishings", "Private sitting nook", "Romantic mood lighting"],
  },
  {
    title: "Honeymoon Suite Bedroom",
    tagline: "A Love Story Amongst The Mist",
    description: "Exclusively crafted for couples, this intimate suite features a plush queen bed layered with soft rose-white linen, a private tiled en-suite bath, and a window view that opens directly onto the mist rolling across the valley at dawn. Every detail — the lighting, the décor, the layout — is designed to make moments feel genuinely timeless.",
    image: "/gallery/cloud%20walks%20home%20stay%2043.jpg",
    features: ["Romantic couples-only suite", "Valley mist dawn view", "En-suite private bathroom", "Layered rose-white premium linen"],
  },
  {
    title: "Cottage Garden View Suite",
    tagline: "Lush Botanical Highland Elegance",
    description: "Step through wide French doors directly onto a manicured garden terrace bursting with Kodaikanal's signature hydrangeas and highland wildflowers. This suite combines the charm of a garden cottage with modern suite-level finishes — quality linen, full-length mirrors, and a sunlit reading corner perfect for cool highland mornings.",
    image: "/gallery/cloud%20walks%2023.jpg",
    features: ["Direct garden terrace access", "French door botanical views", "Sunlit reading corner", "Modern suite-level finishes"],
  },
  {
    title: "Premium Escape Suite",
    tagline: "Curated Luxury, Absolute Privacy",
    description: "A carefully curated premium suite designed for guests who demand quality in every detail. Features high-thread-count linen, a custom wardrobe fitted in natural wood, blackout curtains for undisturbed rest, and a dedicated en-suite designed with spa-quality fixtures. Enjoy complete highland privacy in this serene, considered space.",
    image: "/affordable-rooms.png",
    features: ["High-thread-count premium linen", "Custom natural wood wardrobe", "Spa-quality en-suite", "Blackout curtains for deep rest"],
  },
];

export default function PremiumStaysPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cloud Walks Premium Stays Kodaikanal",
    "description": "Premium suites and rooms in Kodaikanal featuring royal canopy beds, honeymoon suites, panoramic valley views, and elite highland hospitality.",
    "photo": "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kodaikanal",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India",
    },
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5",
    },
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-premium-stays"
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
        zIndex: 1,
      }}>
        <PremiumHeroSlider />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.6) 100%)',
          zIndex: 0,
        }} />

        <div style={{ zIndex: 1, padding: '0 20px', marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.8)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              fontWeight: '600',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}>
              REFINED ELEGANCE
            </span>
            <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(255,255,255,0.8)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
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
            Premium Stays <br />
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
            Elevated suites, royal canopy beds, and panoramic mist-draped serenity
          </p>
        </div>
      </section>

      {/* Intro Section */}
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
            A Cut Above The Rest
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem',
          }}>
            THE CLOUD WALKS PREMIUM SUITE COLLECTION
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
            Situated above the mist line in Attuvampatti, Kodaikanal, Cloud Walks' premium suites represent
            the ideal middle ground between intimate boutique warmth and genuine 5-star quality. Each suite
            has been individually designed with bespoke furniture, premium bedding, refined lighting, and
            curated views — so that every moment spent inside feels as memorable as the landscape outside.
          </p>
        </div>
      </section>

      {/* Rooms Showcase — alternating layout */}
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
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="cottage-img"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
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

                  {/* Feature highlights */}
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
                        INQUIRE ABOUT THIS SUITE
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
        {/* Watermark */}
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
            Every Detail Curated For Your Serenity
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#666666',
            fontWeight: '300',
            marginBottom: '3rem',
          }}>
            Our premium suites in Kodaikanal offer double-insulated walls for acoustic privacy,
            designer copper-accented fireplaces, ultra-luxurious 400-thread-count Egyptian cotton sheets,
            custom-blended cedarwood bathroom amenities, and concierge service ready to curate your perfect
            highland experience from arrival to departure.
          </p>

          <Link href="#contact-us" style={{ display: 'inline-block' }}>
            <button className="luxury-button" style={{ padding: '1.2rem 3.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
              RESERVE YOUR SUITE
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      {/* Hover animations */}
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
