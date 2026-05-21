import type { Metadata } from "next";
import PreloadedImage from "@/components/PreloadedImage";
import Link from "next/link";
import Header from "@/components/Header";
import Script from "next/script";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";
import RoomsViewSlider from "@/components/RoomsViewSlider";

export const metadata: Metadata = {
  title: "Budget Friendly Premium Wood House Stay in Kodaikanal | Cloud Walks",
  description: "Experience the ultimate budget friendly premium wood house stay in Kodaikanal. Cozy pine wood interiors, misty mountain views, campfires, and premium hospitality.",
  keywords: [
    "budget friendly premium wood house stay in kodaikanal",
    "wooden house Kodaikanal",
    "wooden cottages in Kodaikanal for rent",
    "budget premium homestay Kodaikanal",
    "affordable wooden cabins Kodaikanal",
    "pine wood stay Kodaikanal",
    "best wooden cottages in Kodaikanal"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/budget-friendly-premium-wood-house-stay-in-kodaikanal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/budget-friendly-premium-wood-house-stay-in-kodaikanal",
    siteName: "Cloud Walks Home Stay",
    title: "Budget Friendly Premium Wood House Stay in Kodaikanal | Cloud Walks",
    description: "Discover affordable luxury at Cloud Walks. Our wooden houses offer the perfect blend of rustic charm and premium comfort nestled in the misty Palani Hills.",
    images: [{ url: "https://cloudwalks.com/original-images/cloud%20walks%2054.jpg", width: 1200, height: 630, alt: "Budget Friendly Premium Wood House Stay Kodaikanal - Cloud Walks" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Budget Friendly Premium Wood House Stay in Kodaikanal",
    description: "Rustic pine wood cabins, campfires & misty mountain views at the best budget wooden homestay in Kodaikanal.",
    images: ["https://cloudwalks.com/original-images/cloud%20walks%2054.jpg"],
  },
};

const woodHouseFeatures = [
  {
    title: "Solid Pine Architecture",
    description: "Authentic, warm wooden interiors that provide excellent natural insulation against the cool highland mist.",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 9h3v11h12V9h3L12 2z" />
        <path d="M12 22V9" />
        <path d="M9 16h6" />
      </svg>
    )
  },
  {
    title: "Misty Valley Views",
    description: "Wake up to breathtaking panoramic views of the dense Kodaikanal pine forests straight from your window.",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: "Evening Campfires",
    description: "Gather around crackling outdoor fires to stargaze and enjoy the crisp mountain air with your loved ones.",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    )
  },
  {
    title: "Premium Comfort",
    description: "Enjoy high-thread-count bedding, modern en-suite bathrooms, and flawless hospitality at pocket-friendly rates.",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
];

export default function BudgetPremiumWoodHousePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Cloud Walks Budget Friendly Premium Wood House",
    "description": "Authentic, highly rated budget-friendly premium wooden house stays in Kodaikanal. Experience pine interiors and valley views.",
    "photo": "https://cloudwalks.com/original-images/cloud%20walks%2054.jpg",
    "priceRange": "$$",
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
        id="json-ld-wood-house"
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
        <div style={{ position: 'absolute', inset: 0, zIndex: -2 }}>
          <PreloadedImage
            src="/original-images/cloud walks 54.jpg"
            alt="Beautiful wooden house exterior in Kodaikanal"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 100%)',
          zIndex: -1
        }} />
        
        <div style={{ zIndex: 1, padding: '0 20px', marginTop: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
            <span style={{
              fontFamily: 'var(--font-cinzel), serif',
              fontSize: '0.85rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'var(--primary)',
              fontWeight: '600',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)'
            }}>
              RUSTIC LUXURY
            </span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }} />
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
            fontFamily: 'var(--font-cinzel), serif', 
            fontWeight: '300', 
            letterSpacing: '0.03em', 
            color: '#ffffff',
            textShadow: '0 4px 25px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.7)',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Budget Friendly Premium <br /> 
            <span style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '400', textTransform: 'none' }}>Wood House Stay</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', 
            letterSpacing: '0.15em', 
            fontWeight: '300',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.95)',
            maxWidth: '800px',
            margin: '0 auto',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Experience Authentic Cabin Living in Kodaikanal
          </p>

          <div style={{ marginTop: '3rem' }}>
            <Link href="#contact-us">
              <button className="luxury-button" style={{ padding: '1.2rem 3.5rem', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                RESERVE YOUR WOOD HOUSE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction with Premium SVGs */}
      <section style={{ padding: '100px 5% 60px 5%', position: 'relative', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
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
              Affordable Elegance
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '400',
              letterSpacing: '0.05em',
              color: '#111111',
              marginBottom: '2rem'
            }}>
              WHY CHOOSE OUR WOOD HOUSE?
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: 'var(--primary)', margin: '0 auto' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem',
          }}>
            {woodHouseFeatures.map((feature, idx) => (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '2.5rem 1.5rem',
                backgroundColor: '#faf7f2',
                border: '1px solid rgba(197, 160, 89, 0.1)',
                borderRadius: '8px',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }} className="feature-card">
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 1.5rem auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  borderRadius: '50%',
                  color: 'var(--primary)',
                  transition: 'background-color 0.4s ease, color 0.4s ease'
                }} className="feature-icon-container">
                  {feature.svg}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel), serif',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: '#666666',
                  fontWeight: '300'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Gallery Section */}
      <section style={{ padding: '80px 5% 100px 5%', backgroundColor: '#fdfbf7' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {/* Block 1: Wood Architecture */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }} className="gallery-block">
              <div style={{ flex: '1 1 500px', position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <PreloadedImage src="/original-images/cloud walks 49.jpg" alt="Stunning Wooden Architecture" fill style={{ objectFit: 'cover' }} className="zoom-img" />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '1.5rem' }}>Warm Wooden Interiors</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
                  Handcrafted solid pine walls wrap you in an atmosphere of warmth and nostalgia. The wooden architecture not only offers incredible visual appeal but also provides superior acoustic and thermal insulation, ensuring your sleep is deeply restful and utterly undisturbed by the cool Kodaikanal mist outside.
                </p>
              </div>
            </div>

            {/* Block 2: Attic & Comfort */}
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }} className="gallery-block">
              <div style={{ flex: '1 1 500px', position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <PreloadedImage src="/original-images/cloud walks 55.jpg" alt="Cozy Attic Wood House" fill style={{ objectFit: 'cover' }} className="zoom-img" />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '1.5rem' }}>Cozy Attic Retreats</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
                  Experience the quintessential cabin-in-the-woods feeling with our meticulously designed attic suites. Nestled directly beneath angled wooden roofs, these rooms offer an incredibly cozy, intimate environment perfect for couples, small families, or solo travelers seeking absolute peace.
                </p>
              </div>
            </div>

            {/* Block 3: Breathtaking Views */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }} className="gallery-block">
              <div style={{ flex: '1 1 500px', position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <PreloadedImage src="/original-images/cloud walks 35.jpg" alt="Premium Comfort inside the Wood House" fill style={{ objectFit: 'cover' }} className="zoom-img" />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '1.5rem' }}>Bespoke Furnishings</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
                  A budget-friendly price point never means a compromise on quality. Every wooden cabin is fitted with ultra-luxurious, premium bedding, bespoke wooden furniture crafted by local artisans, and pristine modern en-suite bathrooms equipped with high-pressure hot rain showers.
                </p>
              </div>
            </div>

            {/* Block 4: Outdoor Ambiance */}
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }} className="gallery-block">
              <div style={{ flex: '1 1 500px', position: 'relative', aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
                <PreloadedImage src="/original-images/cloud walks 53.jpg" alt="Misty Outdoor Spaces" fill style={{ objectFit: 'cover' }} className="zoom-img" />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h3 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '2rem', color: '#1a1a1a', marginBottom: '1.5rem' }}>Step Out into Nature</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
                  Walk straight out from your wood house onto a lush garden patio overlooking the rolling valleys. Sip freshly brewed local coffee as the morning fog lifts, or enjoy an atmospheric evening campfire under the brilliantly clear high-altitude stars.
                </p>
              </div>
            </div>

          </div>
          
          {/* Final Large Showcase Image */}
          <div className="final-showcase" style={{ marginTop: '8rem', position: 'relative', height: '60vh', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
            <PreloadedImage src="/original-images/cloud walks 34.jpg" alt="Cloud Walks Wood House Estate" fill style={{ objectFit: 'cover' }} className="zoom-img" />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', textShadow: '0 4px 15px rgba(0,0,0,0.6)', marginBottom: '2rem' }}>
                  Your Wood House Awaits
                </h2>
                <Link href="#contact-us">
                  <button className="luxury-button" style={{ padding: '1.2rem 3rem', fontSize: '0.85rem', letterSpacing: '0.15em' }}>
                    CHECK AVAILABILITY
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <RoomsViewSlider />
      <LuxuryCottagesFAQ />

      <style dangerouslySetInnerHTML={{ __html: `
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(197, 160, 89, 0.15) !important;
          border-color: rgba(197, 160, 89, 0.4) !important;
        }
        .feature-card:hover .feature-icon-container {
          background-color: var(--primary) !important;
          color: white !important;
        }
        .zoom-img {
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .gallery-block:hover .zoom-img {
          transform: scale(1.08) !important;
        }
        
        /* Mobile Responsiveness Fixes */
        @media (max-width: 991px) {
          .gallery-block {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          /* Reset flex-basis so elements don't overflow the screen width */
          .gallery-block > div {
            flex: 1 1 auto !important;
            width: 100% !important;
            min-width: 0 !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          .gallery-block > div > h3 {
            font-size: 1.6rem !important;
          }
          .final-showcase {
            margin-top: 4rem !important;
            height: 45vh !important;
          }
        }
      `}} />
    </main>
  );
}
