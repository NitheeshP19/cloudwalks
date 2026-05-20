import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Cloud Walks | Luxury Homestay in Kodaikanal",
  description: "Get in touch with Cloud Walks Kodaikanal. Reach out for bookings, directions to our premium homestay, and any inquiries about your upcoming luxury retreat.",
  keywords: [
    "Contact Cloud Walks",
    "Cloud Walks Kodaikanal phone number",
    "Cloud Walks address",
    "Kodaikanal luxury homestay contact",
    "Book Cloud Walks",
    "How to reach Cloud Walks Kodaikanal",
  ],
  alternates: {
    canonical: "https://cloudwalks.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/contact",
    siteName: "Cloud Walks Home Stay",
    title: "Contact Cloud Walks | Luxury Homestay in Kodaikanal",
    description: "Get in touch with Cloud Walks Kodaikanal for bookings and inquiries. Find directions to our premium highland retreat.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg", width: 1200, height: 630, alt: "Contact Cloud Walks Kodaikanal" }],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Cloud Walks Kodaikanal",
    "description": "Contact details, address, and booking information for Cloud Walks luxury homestay in Kodaikanal.",
    "url": "https://cloudwalks.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Cloud Walks Home Stay",
      "image": "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg",
      "telephone": "+919487532321",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Attuvampatti",
        "addressLocality": "Kodaikanal",
        "addressRegion": "Tamil Nadu",
        "postalCode": "624101",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.2500857,
        "longitude": 77.4775873
      }
    }
  };

  return (
    <main style={{ backgroundColor: '#fdfbf7', minHeight: '100vh', color: '#1a1a1a' }}>
      <Script
        id="json-ld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '60vh',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <Image
          src="/gallery/cloud walks 44.jpg"
          alt="Cloud Walks Kodaikanal View"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
          priority
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)',
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
              WE ARE HERE FOR YOU
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
            Get In Touch
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
            Plan your highland escape with our dedicated team
          </p>
        </div>
      </section>

      {/* Direct Contact Information Grid */}
      <section style={{ padding: '80px 5%', backgroundColor: '#ffffff', position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1200px', margin: '-140px auto 0', position: 'relative', zIndex: 3 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}>
            
            {/* Contact Card 1 */}
            <div style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid rgba(197, 160, 89, 0.2)',
              transition: 'transform 0.4s ease',
            }} className="contact-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', color: '#ffffff', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>Call Us</h3>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#a0a0a0', marginBottom: '0.5rem', fontWeight: '300' }}>For immediate assistance</p>
              <a href="tel:+919487532321" style={{ display: 'block', color: 'var(--primary)', fontSize: '1.2rem', fontFamily: 'var(--font-inter), sans-serif', fontWeight: '500', textDecoration: 'none', marginBottom: '0.5rem' }}>+91 94875 32321</a>
              <a href="tel:+917868901688" style={{ display: 'block', color: 'var(--primary)', fontSize: '1.2rem', fontFamily: 'var(--font-inter), sans-serif', fontWeight: '500', textDecoration: 'none', marginBottom: '0.5rem' }}>+91 78689 01688</a>
            </div>

            {/* Contact Card 2 */}
            <div style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid rgba(197, 160, 89, 0.2)',
              transition: 'transform 0.4s ease',
            }} className="contact-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', color: '#ffffff', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>Location</h3>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#a0a0a0', marginBottom: '0.5rem', fontWeight: '300' }}>Attuvampatti, Kodaikanal</p>
              <p style={{ color: '#ffffff', fontSize: '0.95rem', fontFamily: 'var(--font-inter), sans-serif', fontWeight: '300', lineHeight: '1.6' }}>Tamil Nadu 624101, India</p>
            </div>

            {/* Contact Card 3 */}
            <div style={{
              backgroundColor: '#111111',
              padding: '3rem 2rem',
              borderRadius: '16px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid rgba(197, 160, 89, 0.2)',
              transition: 'transform 0.4s ease',
            }} className="contact-card">
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.501-5.734-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.48 2.03 14.041 1.001 11.54 1c-5.444 0-9.873 4.38-9.877 9.808-.001 1.763.486 3.486 1.415 5.014l-.955 3.488 3.624-.95zM17.307 14.3c-.3-.15-1.78-.88-2.05-.98-.28-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.18.2-.35.23-.65.08-1.12-.56-1.93-.97-2.7-2.29-.2-.35.2-.33.58-1.08.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.5-.52-.67-.53-.18-.01-.38-.01-.58-.01-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44s1.05 2.83 1.2 3.03c.15.2 2.06 3.15 5 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.84.11.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.25-.2-.55-.35z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-cinzel), serif', color: '#ffffff', fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>WhatsApp</h3>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#a0a0a0', marginBottom: '0.5rem', fontWeight: '300' }}>Message our concierge</p>
              <a href="https://wa.me/917868901688" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: '#25D366', fontSize: '1.2rem', fontFamily: 'var(--font-inter), sans-serif', fontWeight: '500', textDecoration: 'none' }}>Chat Now</a>
            </div>

          </div>
        </div>
      </section>

      {/* How To Reach Us Section */}
      <section style={{ padding: '40px 5% 80px', backgroundColor: '#fdfbf7' }}>
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
            Your Journey
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontFamily: 'var(--font-cinzel), serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '3rem',
            textTransform: 'uppercase'
          }}>
            How To Reach Cloud Walks
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'left'
          }}>
            {/* By Air */}
            <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5 6.3 7.7l-1.6 1.6 6 4.3L7 17.3l-3.3-.8-1.4 1.4 4.5 1.7 1.7 4.5 1.4-1.4-.8-3.3 3.7-3.7 4.3 6 1.6-1.6z"/>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.2rem', color: '#111', marginBottom: '1rem', fontWeight: '600' }}>By Air</h4>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                The nearest airport is <strong>Madurai Airport (IXM)</strong>, located approximately 135 km away (3.5 hours drive). Alternatively, <strong>Coimbatore International Airport (CJB)</strong> is 170 km away (4.5 hours drive).
              </p>
            </div>

            {/* By Train */}
            <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 15V9a1 1 0 0 0-1-1h-1.5c-1.38 0-2.5-1.12-2.5-2.5V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1.5C7 6.88 5.88 8 4.5 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.5c1.38 0 2.5 1.12 2.5 2.5V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.5c0-1.38 1.12-2.5 2.5-2.5H21a1 1 0 0 0 1-1z"/>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.2rem', color: '#111', marginBottom: '1rem', fontWeight: '600' }}>By Train</h4>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                The closest railway station is <strong>Kodai Road (KQN)</strong>, located about 80 km from the property. A scenic 2.5-hour taxi ride from the station will bring you directly to our homestay.
              </p>
            </div>

            {/* By Road */}
             <div style={{ backgroundColor: '#ffffff', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
               <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                  <circle cx="7" cy="17" r="2"/>
                  <path d="M9 17h6"/>
                  <circle cx="17" cy="17" r="2"/>
                </svg>
              </div>
              <h4 style={{ fontFamily: 'var(--font-cinzel), serif', fontSize: '1.2rem', color: '#111', marginBottom: '1rem', fontWeight: '600' }}>By Road</h4>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Kodaikanal is well-connected by road from major cities like Bangalore, Chennai, and Madurai. From Kodaikanal town center, Cloud Walks is a short 5 km drive towards Attuvampatti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact Section will follow automatically from layout.tsx */}

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.2) !important;
          border-color: var(--primary) !important;
        }
      `}} />
    </main>
  );
}
