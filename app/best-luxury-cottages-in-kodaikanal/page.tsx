import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryHeroSlider from "@/components/LuxuryHeroSlider";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Best Luxury Cottages in Kodaikanal | Cloud Walks Home Stay",
  description: "Experience the best luxury cottages in Kodaikanal at Cloud Walks. Indulge in private villas, wooden attic suites, misty mountain views, and premium amenities.",
  keywords: [
    "best luxury cottages Kodaikanal", 
    "luxury villas Kodaikanal", 
    "premium cottage stay Kodaikanal", 
    "wooden cottages Kodaikanal", 
    "homestay in Kodaikanal with valley view",
    "boutique cottages Kodaikanal"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/best-luxury-cottages-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/best-luxury-cottages-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Best Luxury Cottages in Kodaikanal | Cloud Walks Home Stay",
    description: "Nestled in the clouds, experience the peak of Kodaikanal luxury with panoramic mountain views and private elite cottages at Cloud Walks.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg", width: 1200, height: 630, alt: "Best Luxury Cottages in Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Luxury Cottages in Kodaikanal | Cloud Walks",
    description: "Private villas, wooden attic suites, misty mountain views, and premium amenities in the clouds of Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg"],
  },
};

const cottages = [
  {
    title: "Luxury Family Chalet",
    tagline: "Spacious Highland Sanctuary",
    description: "A meticulously crafted multi-tier chalet designed for families seeking unparalleled comfort. Features floor-to-ceiling windows showing the rolling hills, private heated loungers, a stone hearth fireplace, and custom oakwood furniture.",
    image: "/original-images/cloud%20walks%2049.jpg",
    features: ["Perfect for families", "Double-level living space", "Heated luxury lounge", "Stone hearth fireplace"],
  },
  {
    title: "Cozy Wooden Attic Loft",
    tagline: "Insulated Sky-High Comfort",
    description: "A rustic yet refined attic loft featuring solid pine structures, vintage skylights for stargazing, and high-altitude thermal insulation. Enjoy the cozy, warm wooden architecture that keeps you perfectly insulated on cool, misty nights.",
    image: "/original-images/cloud%20walks%2054.jpg",
    features: ["Stargazing glass skylight", "Thermal pine insulation", "Bespoke attic balcony", "Handcrafted log design"],
  },
  {
    title: "Grand Presidential Villa",
    tagline: "The Zenith of Exclusivity",
    description: "An expansive private estate featuring premium double bedrooms, a high-ceilinged teakwood lounge, panoramic glass walls, and a private campfire patio overlooking Kodaikanal's iconic misty pine forests. Designed for families and discerning groups who seek absolute privacy and elite hospitality.",
    image: "/gallery/cloud%20walks%20home%20stay%2043.jpg",
    features: ["Private camp fire patio", "Multi-room estate", "24/7 Butler service", "Glass-walled panoramas"],
  },
  {
    title: "Premium Escape Cottage",
    tagline: "Intimate Nature Sanctuary",
    description: "Carved from premium pine wood and nestled in a secluded grove, this cottage offers a romantic master bedroom, stone fireplace, and a private wooden balcony suspended over the mountain slopes. Ideal for couples seeking a blissful, misty hideaway.",
    image: "/gallery/cloud%20walks%2032.jpg",
    features: ["Private pine wood deck", "Cozy stone fireplace", "Plush king bedding", "En-suite rain shower"],
  },
  {
    title: "Cozy Wooden Attic Suite",
    tagline: "High-Altitude Warmth",
    description: "A delightful cabin design featuring warm solid oakwood interiors, a vintage skylight for night stargazing, and handcrafted log-house elements. It offers high-altitude insulation to keep you perfectly cozy on cold, misty Kodaikanal nights.",
    image: "/original-images/cloud%20walks%2058.JPG",
    features: ["Stargazing skylight", "Classic log cabin interiors", "Insulated warm paneling", "Scenic attic balcony"],
  },
  {
    title: "Cottage Garden View",
    tagline: "Lush botanical elegance",
    description: "Surrounded by blooming hydrangeas and manicured lawns, these cottages connect you directly with the hill station's lush natural flora. Walk straight from your double French doors onto pristine lawns to enjoy morning tea in the mist.",
    image: "/original-images/cloud%20walks%2023.jpg",
    features: ["Direct garden access", "Floor-to-ceiling French doors", "Bespoke wicker lounge", "Mountain-mist garden patio"],
  }
];

export default function LuxuryCottagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cloud Walks Luxury Cottages Kodaikanal",
    "description": "The premium and best luxury cottages in Kodaikanal featuring mountain views, wooden attic suites, and elite bespoke hospitality.",
    "photo": "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg",
    "priceRange": "$$$$",
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
        id="json-ld-cottages"
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
        zIndex: 1
      }}>
        <LuxuryHeroSlider />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 25%)',
          zIndex: 0
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
              textShadow: '0 2px 8px rgba(0,0,0,0.8)'
            }}>
              ESTABLISHED PRESTIGE
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
            lineHeight: '1.2'
          }}>
            Best Luxury Cottages <br /> 
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none', textShadow: '0 4px 25px rgba(0,0,0,0.8)' }}>in Kodaikanal</span>
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
            A sublime blend of wild forest vistas and absolute comfort
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
            fontWeight: '600'
          }}>
            A Highland Paradise
          </span>
          
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '2rem'
          }}>
            THE CLOUD WALKS COTTAGE COLLECTION
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
            Nestled in the high slopes of Kodaikanal, Cloud Walks offers some of the **best luxury cottages** in the region. 
            Each design blends warm natural timber, expansive glass frames, and handcrafted details to invite the mist, 
            pine forest panoramas, and absolute tranquility straight into your private sanctuary. Discover a curated retreat 
            where premium hospitality meets high-altitude serenity.
          </p>
        </div>
      </section>

      {/* Cottages Showcase */}
      <section style={{ padding: '60px 5% 100px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '100px' }}>
          
          {cottages.map((cottage, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={cottage.title}
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
                  className="cottage-image-container"
                  style={{
                    flex: '1 1 500px',
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.2)'
                  }}
                >
                  {/* Decorative Border Layer */}
                  <div style={{
                    position: 'absolute',
                    inset: '15px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    zIndex: 2,
                    pointerEvents: 'none'
                  }} />
                  
                  <PreloadedImage
                    src={cottage.image}
                    alt={cottage.title}
                    fill
                    className="cottage-img"
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
                      {cottage.tagline}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-cinzel), serif',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                      color: '#1a1a1a',
                      fontWeight: '400',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}>
                      {cottage.title}
                    </h3>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '1.05rem',
                    lineHeight: '1.8',
                    color: '#555555',
                    fontWeight: '300'
                  }}>
                    {cottage.description}
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
                    {cottage.features.map((feature, fIdx) => (
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
                        INQUIRE ABOUT THIS VILLA
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Indulgent Premium Experiences Banner */}
      <section style={{ 
        position: 'relative', 
        padding: '100px 5%', 
        backgroundColor: '#f8f5f0',
        borderTop: '1px solid rgba(197, 160, 89, 0.15)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative background watermark */}
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
          zIndex: 0
        }}>
          CLOUD WALKS
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: 'var(--font-cinzel), serif',
            fontSize: '2.5rem',
            color: '#1a1a1a',
            fontWeight: '400',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            Every Detail Curated for Your Serenity
          </h2>
          <p style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            color: '#666666',
            fontWeight: '300',
            marginBottom: '3rem'
          }}>
            Our luxury cottages in Kodaikanal offer features engineered to maximize physical rest and spiritual rejuvenation. 
            Enjoy double-insulated walls for rich acoustic privacy, state-of-the-art designer copper fireplaces, ultra-luxurious 
            400-thread count Egyptian cotton sheets, custom-blended cedarwood bathroom toiletries, and private chefs standing 
            ready to curate culinary memories under the misty night sky.
          </p>

          <Link href="#contact-us" style={{ display: 'inline-block' }}>
            <button className="luxury-button" style={{ padding: '1.2rem 3.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
              RESERVE YOUR HIDEAWAY
            </button>
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      {/* Styled Responsive Media Queries & Hover Animations */}
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
