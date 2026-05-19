import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import GalleryClient from "@/components/GalleryClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Premium Gallery & Misty Nature Views | Cloud Walks Kodaikanal",
  description: "Explore the stunning photo gallery of Cloud Walks Home Stay in Kodaikanal. View our luxury premium rooms, wooden cottages, and breathtaking nature views of misty valleys.",
  keywords: [
    "Cloud Walks Kodaikanal gallery",
    "premium rooms Kodaikanal images",
    "luxury cottages Kodaikanal photos",
    "Kodaikanal misty hills nature views",
    "best homestay in Kodaikanal photos"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/gallery",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/gallery",
    siteName: "Cloud Walks Home Stay",
    title: "Official Photo Gallery | Cloud Walks Premium Homestay Kodaikanal",
    description: "Step inside a visual sanctuary. Explore premium rooms, private luxury cottages, and the magical misty landscapes of Kodaikanal.",
    images: [{ url: "https://cloudwalks.com/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png", width: 1200, height: 630, alt: "Cloud Walks Photo Gallery Kodaikanal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Cloud Walks Premium Homestay Kodaikanal",
    description: "Premium rooms, wooden cottages & breathtaking misty valley views at Cloud Walks Kodaikanal.",
    images: ["https://cloudwalks.com/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png"],
  },
};

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'rooms' | 'nature';
  description: string;
}

export default function GalleryPage() {
  const roomsImages: GalleryImage[] = [
    {
      id: "room-1",
      src: "/gallery/cloud walks room 1.png",
      alt: "Royal Suite Bedroom Cloud Walks Kodaikanal",
      title: "Royal Suite Bedroom",
      category: "rooms",
      description: "Sophisticated comfort with plush seating and wide windows framing the misty valley views."
    },
    {
      id: "room-2",
      src: "/gallery/cloud walks room 2.png",
      alt: "Premium Deluxe Room Cloud Walks Kodaikanal",
      title: "Premium Deluxe Room",
      category: "rooms",
      description: "Elegant woodwork, customized lighting, and spacious layouts designed for a perfect retreat."
    },
    {
      id: "room-3",
      src: "/gallery/cloud walks home stay 3.jpg",
      alt: "Honeymoon Suite Bedroom Cloud Walks Kodaikanal",
      title: "Honeymoon Suite Bedroom",
      category: "rooms",
      description: "Cozy warm pine ceiling panels, king-size comfort, and an intimate setting for couples."
    },
    {
      id: "room-4",
      src: "/gallery/cloud walks home stay 4.jpg",
      alt: "Living Lounge Area Cloud Walks",
      title: "Executive Lounge Area",
      category: "rooms",
      description: "Sophisticated common space featuring plush sofas and handcrafted local wood furniture."
    },
    {
      id: "room-5",
      src: "/gallery/cloud walks home stay 5.jpg",
      alt: "Master Executive Bedroom Cloud Walks Kodaikanal",
      title: "Master Executive Bedroom",
      category: "rooms",
      description: "Traditional Kodaikanal high-ceiling layout blended with premium luxury amenities."
    },
    {
      id: "room-6",
      src: "/gallery/cloud walks home stay 6.jpg",
      alt: "Premium Suite Balcony View Kodaikanal",
      title: "Premium Suite Balcony",
      category: "rooms",
      description: "Wake up to unobstructed mountain peaks and clouds floating directly to your window."
    },
    {
      id: "room-7",
      src: "/gallery/cloud walks home stay 7.jpg",
      alt: "Cozy Attic Room Cloud Walks",
      title: "Cozy Wooden Attic Room",
      category: "rooms",
      description: "A snug cabin-style space with skylights and pine paneling for a warm, rustic feel."
    },
    {
      id: "room-8",
      src: "/gallery/cloiud walks home stay 8.jpg",
      alt: "Elegant Room Foyer Cloud Walks Homestay",
      title: "Elegant Room Foyer",
      category: "rooms",
      description: "Beautifully lit entranceway highlighting clean lines and high-end design accents."
    },
    {
      id: "room-9",
      src: "/gallery/cloud walks home stay 9.png",
      alt: "Luxury Cottage Bedroom Cloud Walks",
      title: "Luxury Cottage Suite",
      category: "rooms",
      description: "Plush upholstery, wooden flooring, and massive double-glazed windows overlooking the garden."
    },
    {
      id: "room-10",
      src: "/gallery/cloud walks home stay 10.jpg",
      alt: "Suite Sitting Room Kodaikanal Homestay",
      title: "Suite Sitting Room",
      category: "rooms",
      description: "Comfortable lounge chairs situated by glass walls for private nature contemplation."
    },
    {
      id: "room-11",
      src: "/gallery/cloud walks home stay 11.jpg",
      alt: "Deluxe Family Room Cloud Walks Kodaikanal",
      title: "Deluxe Family Room",
      category: "rooms",
      description: "Generous space with double bedding, modern wardrobes, and cozy lighting for families."
    },
    {
      id: "room-12",
      src: "/gallery/cloud walks home stay 12.jpg",
      alt: "Spacious Living Room Cloud Walks",
      title: "Grand Living Hall",
      category: "rooms",
      description: "Large glass doors, classic architectural framing, and an abundance of natural light."
    },
    {
      id: "room-13",
      src: "/gallery/cloud walks home stay 13.jpg",
      alt: "Cozy Bedroom Fireplace Cloud Walks",
      title: "Suites with Fireplace",
      category: "rooms",
      description: "A traditional indoor brick fireplace to keep you warm and cozy during freezing Kodaikanal nights."
    },
    {
      id: "room-14",
      src: "/gallery/cloud walks home stay 14.jpg",
      alt: "Executive Suite Balcony Cloud Walks",
      title: "Executive Suite Balcony",
      category: "rooms",
      description: "Step out onto glass-railed wooden decks for a breathtaking morning view over the canopy."
    },
    {
      id: "room-15",
      src: "/gallery/cloud walks home stay 15.jpg",
      alt: "Premium Room Dressing Area Cloud Walks",
      title: "Premium Dressing Area",
      category: "rooms",
      description: "Large vanity mirrors, dedicated storage, and warm golden illumination."
    },
    {
      id: "room-16",
      src: "/gallery/cloud walks home stay 16.jpg",
      alt: "Luxury Penthouse Suite Cloud Walks",
      title: "Luxury Penthouse Suite",
      category: "rooms",
      description: "Splendid room structure on the highest floor with double-height wooden timber ceilings."
    },
    {
      id: "room-17",
      src: "/gallery/cloud walks home stay 17.jpg",
      alt: "Heritage Sitting Lounge Cloud Walks Kodaikanal",
      title: "Heritage Sitting Lounge",
      category: "rooms",
      description: "Crafted teak wood armchairs and table arrangements creating a nostalgic reading space."
    },
    {
      id: "room-18",
      src: "/gallery/cloud walks home stay 18.jpg",
      alt: "Modern En-Suite Bathroom Cloud Walks",
      title: "Modern En-Suite Bathroom",
      category: "rooms",
      description: "Premium sanitary fixtures, hot water geysers, and pristine hygiene maintenance."
    },
    {
      id: "room-19",
      src: "/gallery/cloud walks home stay 19.jpg",
      alt: "Cozy Window Bay Seating Cloud Walks",
      title: "Cozy Window Bay Seating",
      category: "rooms",
      description: "Sit with a hot cup of tea and watch the mist roll in right outside your window pane."
    },
    {
      id: "room-20",
      src: "/gallery/cloud walks home stay 43.jpg",
      alt: "Grand Presidential Suite Cloud Walks Kodaikanal",
      title: "Grand Presidential Suite",
      category: "rooms",
      description: "Our largest suite featuring a state-of-the-art bed layout, separate lounge, and ultimate luxury."
    },
    {
      id: "room-21",
      src: "/original-images/cloud walks 47.jpg",
      alt: "Nature Retreat Suite Cloud Walks Kodaikanal",
      title: "Nature Retreat Suite",
      category: "rooms",
      description: "A private mountain haven surrounded by towering pines and gorgeous morning light."
    },
    {
      id: "room-22",
      src: "/original-images/cloud walks 49.jpg",
      alt: "Luxury Family Lounge Suite Cloud Walks",
      title: "Luxury Family Lounge Suite",
      category: "rooms",
      description: "Expansive layout featuring premium double bedding, customized furniture, and private reading benches."
    },
    {
      id: "room-23",
      src: "/original-images/cloud walks 50.jpg",
      alt: "Deluxe Bunk Bed Family Suite Cloud Walks",
      title: "Deluxe Bunk Bed Family Suite",
      category: "rooms",
      description: "Beautifully organized two-tier bunk beds matching a grand master bed, perfect for luxury family vacations."
    },
    {
      id: "room-24",
      src: "/original-images/cloud walks 53.jpg",
      alt: "Premium Executive Suite Cloud Walks Kodaikanal",
      title: "Premium Executive Suite",
      category: "rooms",
      description: "Sophisticated wooden accents, premium fabrics, and high-end styling details for business or leisure."
    },
    {
      id: "room-25",
      src: "/original-images/cloud walks 54.jpg",
      alt: "Cozy Wooden Attic Loft Cloud Walks Kodaikanal",
      title: "Cozy Wooden Attic Loft",
      category: "rooms",
      description: "A gorgeous pine-crafted loft bedroom overlooking green valley vistas shrouded in clouds."
    },
    {
      id: "room-26",
      src: "/original-images/cloud walks 55.jpg",
      alt: "Grand Mountain View Suite Cloud Walks",
      title: "Grand Mountain View Suite",
      category: "rooms",
      description: "Stately room design featuring expansive windows framing Kodaikanal's rolling hill ridges."
    },
    {
      id: "room-27",
      src: "/original-images/cloud walks 56.jpg",
      alt: "Deluxe Family Suite View Cloud Walks",
      title: "Deluxe Family Suite View",
      category: "rooms",
      description: "A warm and inviting interior combining parquet timber flooring with plush comforts."
    },
    {
      id: "room-28",
      src: "/original-images/cloud walks 58.JPG",
      alt: "High-Ceiling Attic Loft Cloud Walks",
      title: "High-Ceiling Attic Loft",
      category: "rooms",
      description: "A grand wooden cathedral-ceiling suite showcasing local timber craftsmanship."
    },
    {
      id: "room-29",
      src: "/original-images/cloud walks 59.jpg",
      alt: "Misty Window Attic Cabin Cloud Walks",
      title: "Misty Window Attic Cabin",
      category: "rooms",
      description: "Snuggle in luxury while looking directly into Kodaikanal's signature floating clouds."
    },
    {
      id: "room-30",
      src: "/original-images/cloud walks 61.jpg",
      alt: "Attic Lounge Deck Cloud Walks Kodaikanal",
      title: "Attic Lounge Deck",
      category: "rooms",
      description: "A private, elevated space featuring cozy seating arrangements and pristine valley panoramas."
    },
    {
      id: "room-31",
      src: "/original-images/cloud walks rooms.jpg",
      alt: "Premium Resort Cottages Overview Cloud Walks",
      title: "Premium Resort Cottages Overview",
      category: "rooms",
      description: "An elegant look into our stone-crafted luxury cottage structures built straight on the ridge."
    }
  ];

  const natureImages: GalleryImage[] = [
    {
      id: "nature-1",
      src: "/gallery/cloud walks 13.jpg",
      alt: "Misty Valley Morning Cloud Walks Kodaikanal",
      title: "Misty Valley Morning",
      category: "nature",
      description: "Waking up to the spectacular rolling mist blanketing the green pine valleys of Kodaikanal."
    },
    {
      id: "nature-2",
      src: "/gallery/cloud walks 20.jpg",
      alt: "Morning Dew Garden Pathways Cloud Walks",
      title: "Morning Dew Garden Pathways",
      category: "nature",
      description: "Lush, professionally landscaped gardens bursting with colorful, fresh mountain flowers."
    },
    {
      id: "nature-3",
      src: "/gallery/cloud walks 21.jpg",
      alt: "Sunrise over the Mountain Ridges Cloud Walks",
      title: "Sunrise over the Ridges",
      category: "nature",
      description: "First morning rays piercing through the Kodaikanal forest cover, painting the peaks in gold."
    },
    {
      id: "nature-4",
      src: "/gallery/cloud walks 22.jpg",
      alt: "Scenic Forest Walkway Trail Cloud Walks",
      title: "Scenic Forest Walkway Trail",
      category: "nature",
      description: "A private stone-lined trail leading you directly into towering pine canopies."
    },
    {
      id: "nature-5",
      src: "/gallery/cloud walks 23.jpg",
      alt: "Cottage Garden View Cloud Walks Kodaikanal",
      title: "Cottage Garden View",
      category: "nature",
      description: "Beautiful stone cottage facade framed by neat emerald lawns and floral borders."
    },
    {
      id: "nature-6",
      src: "/gallery/colud walks 23.jpg",
      alt: "Overhanging Cloud Deck Cloud Walks",
      title: "Overhanging Cloud Deck",
      category: "nature",
      description: "Watch clouds literally roll onto the patio decks, offering a truly celestial experience."
    },
    {
      id: "nature-7",
      src: "/gallery/cloud walks 24.jpg",
      alt: "Green Hill Slopes Cloud Walks Resort",
      title: "Green Hill Slopes",
      category: "nature",
      description: "A gorgeous layered terraced structure demonstrating nature in its purest mountain form."
    },
    {
      id: "nature-8",
      src: "/gallery/cloud walks 25.jpg",
      alt: "Misty Pine Forest Cloud Walks Kodaikanal",
      title: "Misty Pine Forest",
      category: "nature",
      description: "Stately pine trees shrouded in mysterious white fog, situated just steps from the cottages."
    },
    {
      id: "nature-9",
      src: "/gallery/cloud walks 26.jpg",
      alt: "Panoramic Valley Vista Cloud Walks Homestay",
      title: "Panoramic Valley Vista",
      category: "nature",
      description: "An incredible wide view showcasing layers of mountain ridges fading into blue hues."
    },
    {
      id: "nature-10",
      src: "/gallery/cloud walks 27.jpg",
      alt: "Morning Tea View Deck Cloud Walks",
      title: "Morning Tea View Deck",
      category: "nature",
      description: "Enjoy a steaming beverage while looking out over the majestic mountain backdrop."
    },
    {
      id: "nature-11",
      src: "/gallery/cloud walks 28.jpg",
      alt: "Sunset Silhouette Kodaikanal Cloud Walks",
      title: "Sunset Silhouette",
      category: "nature",
      description: "The sun dropping below the horizon, creating a breathtaking gradient of violet and orange."
    },
    {
      id: "nature-12",
      src: "/gallery/cloud walks 29.jpg",
      alt: "Stone Cottage Lawn Path Cloud Walks",
      title: "Stone Cottage Lawn Path",
      category: "nature",
      description: "Crafted stone-paved steps winding around our cottage lawns to private viewing spots."
    },
    {
      id: "nature-13",
      src: "/gallery/cloud walks 30.jpg",
      alt: "Towering Pine Tree Canopies Cloud Walks",
      title: "Pine Tree Canopies",
      category: "nature",
      description: "A look upwards at the massive forest cover surrounding the resort."
    },
    {
      id: "nature-14",
      src: "/gallery/cloud walks 31.jpg",
      alt: "Thick Mist Rolling In Cloud Walks Homestay",
      title: "Thick Mist Rolling In",
      category: "nature",
      description: "Witness the rapid, dramatic, and romantic weather transformations unique to our hilltop location."
    },
    {
      id: "nature-15",
      src: "/gallery/cloud walks 32.jpg",
      alt: "Hilltop Gazebo Cloud Walks Kodaikanal",
      title: "Hilltop Gazebo",
      category: "nature",
      description: "A classic wooden gazebo offering 360-degree views of the valleys and gardens."
    },
    {
      id: "nature-16",
      src: "/gallery/cloud walks 33.jpg",
      alt: "Cottage Verandah View Cloud Walks",
      title: "Cottage Verandah View",
      category: "nature",
      description: "Relax on custom wooden chairs and absorb the peacefulness of the mountain atmosphere."
    },
    {
      id: "nature-17",
      src: "/gallery/cloud walks 34.jpg",
      alt: "Quiet Garden Bench Cloud Walks",
      title: "Quiet Garden Bench",
      category: "nature",
      description: "A tranquil wooden bench nestled under shading pine trees, ideal for readers and writers."
    },
    {
      id: "nature-18",
      src: "/gallery/cloud walks 35.jpg",
      alt: "Cottage Exterior Architecture Cloud Walks",
      title: "Cottage Exterior Architecture",
      category: "nature",
      description: "High-end stone and wood architecture that blends flawlessly with the natural terrain."
    },
    {
      id: "nature-19",
      src: "/gallery/cloud walks 36.jpg",
      alt: "Misty Morning Meadow Cloud Walks",
      title: "Misty Morning Meadow",
      category: "nature",
      description: "A sprawling green meadow blanketed with fresh dew and soft white clouds."
    },
    {
      id: "nature-20",
      src: "/gallery/cloud walks 37.jpg",
      alt: "Distant Valley Ranges Cloud Walks Kodaikanal",
      title: "Distant Valley Ranges",
      category: "nature",
      description: "Beautifully layered blue valleys disappearing into the horizon."
    },
    {
      id: "nature-21",
      src: "/gallery/cloud walks 38.png",
      alt: "Panoramic Hill View Kodaikanal Cloud Walks",
      title: "Panoramic Hill View",
      category: "nature",
      description: "A spectacular wide-angle capture of the green hillsides cascading down the valley."
    },
    {
      id: "nature-22",
      src: "/gallery/cloud walks 39.png",
      alt: "Cottage Balcony Sunrise Cloud Walks",
      title: "Cottage Balcony Sunrise",
      category: "nature",
      description: "Awaken to a sky of pure fire and gold, all from the privacy of your cottage balcony."
    },
    {
      id: "nature-23",
      src: "/gallery/cloud walks 40.png",
      alt: "Clouds over Valleys Cloud Walks Homestay",
      title: "Clouds over Valleys",
      category: "nature",
      description: "Thick pillows of white clouds hovering underneath our elevated hilltop viewpoint."
    },
    {
      id: "nature-24",
      src: "/gallery/cloud walks 41.jpg",
      alt: "Twilight Cottage Ridge View Cloud Walks",
      title: "Twilight Cottage Ridge",
      category: "nature",
      description: "Deep indigo twilight skies reflecting against warm, glowing exterior resort lighting."
    },
    {
      id: "nature-25",
      src: "/gallery/cloud walks 42.jpg",
      alt: "Pine Ridge Walking Trail Cloud Walks",
      title: "Pine Ridge Walking Trail",
      category: "nature",
      description: "Stone paths winding through evergreen trees, perfect for a refreshing morning walk."
    },
    {
      id: "nature-26",
      src: "/gallery/cloud walks 44.jpg",
      alt: "Golden Hour Mountain Range Cloud Walks",
      title: "Golden Hour Mountain Range",
      category: "nature",
      description: "Pure sunshine highlighting Kodaikanal's jagged ridgelines in beautiful warm gold tones."
    },
    {
      id: "nature-27",
      src: "/gallery/cloud walks night view.jpg",
      alt: "Magical Starry Night View Cloud Walks Kodaikanal",
      title: "Magical Cottage Night View",
      category: "nature",
      description: "An incredibly cozy atmosphere as our premium cottages glow warmly under a clear, starry sky."
    },
    {
      id: "nature-28",
      src: "/gallery/cloud walks and home stay kodaikanal.png",
      alt: "Cloud Walks Resort Exterior Panoramic View",
      title: "Cloud Walks Resort Exterior",
      category: "nature",
      description: "A wide, beautiful landscape showcasing our premium cottages integrated into Kodaikanal's hills."
    }
  ];

  // Schema Markup for ImageGallery
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Cloud Walks Kodaikanal Gallery",
    "description": "Visual gallery of premium rooms, luxury cottages, and stunning nature views at Cloud Walks Homestay in Kodaikanal.",
    "url": "https://cloudwalks.com/gallery",
    "image": [
      ...roomsImages.map(img => `https://cloudwalks.com${img.src}`),
      ...natureImages.map(img => `https://cloudwalks.com${img.src}`)
    ],
    "about": {
      "@type": "Hotel",
      "name": "Cloud Walks Homestay",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kodaikanal",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "India"
      }
    }
  };

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <Script
        id="gallery-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <Header />

      {/* Luxury Hero Banner */}
      <section style={{ 
        position: 'relative', 
        minHeight: '80vh', 
        paddingTop: '120px', // Prevents overlap with fixed header
        paddingBottom: '60px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#1a1a1a',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image with lighter overlay */}
        <Image 
          src="/gallery/cloud%20walks%20and%20home%20stay%20kodaikanal.png" 
          alt="Cloud Walks Homestay Kodaikanal Photo Gallery" 
          fill 
          priority 
          style={{ objectFit: 'cover', zIndex: -2, filter: 'brightness(0.85)' }}
        />
        
        {/* Parallax Gradient Overlay (Light Theme) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(248, 245, 240, 0.4) 0%, rgba(248, 245, 240, 0.8) 60%, #f8f5f0 100%)',
          zIndex: -1
        }}></div>

        {/* Floating Clouds Background Animation Effect */}
        <div className="floating-clouds"></div>

        {/* Main Hero Content - Split Layout for Premium Feel */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: 'clamp(2rem, 5vw, 6rem)', 
          zIndex: 1, 
          padding: '0 5%', 
          maxWidth: '1200px',
          width: '100%',
          flexWrap: 'wrap'
        }}>
          {/* Text Side */}
          <div className="animate-fade-in-up" style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
            <span style={{ 
              fontSize: '0.8rem', 
              letterSpacing: '0.4em', 
              color: 'var(--primary)', 
              textTransform: 'uppercase', 
              marginBottom: '1rem', 
              display: 'block',
              fontWeight: '600'
            }}>
              A VISUAL JOURNEY
            </span>
            <h1 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
              marginBottom: '1.2rem',
              fontFamily: 'var(--font-cinzel), serif',
              fontWeight: '400',
              letterSpacing: '0.05em',
              color: '#1a1a1a',
              lineHeight: 1.1
            }}>
              OUR PORTFOLIO
            </h1>
            <div style={{ 
              width: '60px', 
              height: '1px', 
              backgroundColor: 'var(--primary)', 
              marginBottom: '1.5rem',
              boxShadow: '0 0 4px rgba(197, 160, 89, 0.4)'
            }}></div>
            <p style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
              lineHeight: '1.7', 
              color: '#555555',
              fontWeight: '300',
              fontFamily: 'var(--font-inter), sans-serif',
              maxWidth: '500px'
            }}>
              Step into the elegant architecture and magical landscape of Cloud Walks. Explore our premium rooms and the jaw-dropping nature views that wait outside your window.
            </p>
          </div>

          {/* Premium Foreground Image Addition */}
          <div className="animate-fade-in-up" style={{ 
            flex: '1', 
            minWidth: '300px', 
            display: 'flex', 
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '3/4',
              borderRadius: '4px',
              padding: '12px',
              border: '1px solid rgba(197, 160, 89, 0.2)',
              background: '#ffffff',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              transform: 'rotate(2deg)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: '2px' }}>
                <Image 
                  src="/gallery/cloud%20walks%2013.jpg" 
                  alt="Premium Misty View"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section style={{ 
        padding: '20px 5% 100px 5%', 
        backgroundColor: '#f8f5f0', // Seamless transition from hero
        position: 'relative' 
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <GalleryClient 
            roomsImages={roomsImages} 
            natureImages={natureImages} 
          />
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: '#ffffff', 
        borderTop: '1px solid rgba(197, 160, 89, 0.15)',
        textAlign: 'center',
        color: '#1a1a1a',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ 
            color: 'var(--primary)', 
            fontSize: '0.75rem', 
            letterSpacing: '0.3em', 
            textTransform: 'uppercase',
            fontWeight: '600',
            display: 'block',
            marginBottom: '1rem'
          }}>
            PLAN YOUR ESCAPE
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            fontFamily: 'var(--font-cinzel), serif', 
            fontWeight: '400',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>
            Ready to Experience this Luxury Firsthand?
          </h2>
          <p style={{ 
            color: '#555555', 
            fontSize: '1.05rem', 
            marginBottom: '3rem',
            lineHeight: '1.8',
            fontWeight: '300'
          }}>
            Indulge in misty mountain walks, premium custom rooms, and warm fire lit cottages in the heart of Kodaikanal. Book your dream vacation today.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/#contact-us">
              <button className="luxury-button" style={{ padding: '1.2rem 3rem' }}>
                CHECK ROOM AVAILABILITY
              </button>
            </Link>
            <Link href="/#contact-us">
              <button 
                className="luxury-outline-button" 
                style={{ 
                  padding: '1.2rem 3rem',
                  border: '1px solid var(--primary)',
                  color: 'var(--primary)',
                  background: 'transparent'
                }}
              >
                CONTACT CONCIERGE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating clouds css effect is imported globally */}
    </main>
  );
}
