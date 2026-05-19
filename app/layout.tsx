import type { Metadata } from "next";
import { Playfair_Display, Inter, Cinzel } from "next/font/google";
import "./globals.css";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cloudwalks.com'),
  title: {
    default: "Cloud Walks | Premium Luxury Home Stay & Resorts in Kodaikanal",
    template: "%s | Cloud Walks Home Stay",
  },
  description: "Experience unparalleled luxury at Cloud Walks. A premium retreat in Kodaikanal featuring luxury cottages, honeymoon suites, and misty mountain views.",
  keywords: [
    "Cloud Walks Kodaikanal",
    "luxury homestay Kodaikanal",
    "premium cottages Kodaikanal",
    "best resorts in Kodaikanal",
    "Kodaikanal luxury stay",
  ],
  authors: [{ name: "Cloud Walks" }],
  creator: "Cloud Walks",
  publisher: "Cloud Walks Home Stay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com",
    siteName: "Cloud Walks Home Stay",
    title: "Cloud Walks | Premium Luxury Home Stay in Kodaikanal",
    description: "Experience unparalleled luxury at Cloud Walks. A premium retreat in Kodaikanal featuring luxury cottages and misty mountain views.",
    images: [
      {
        url: "/gallery/cloud%20walks%20home%20stay%2043.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Walks Luxury Home Stay Kodaikanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Walks | Premium Luxury Home Stay in Kodaikanal",
    description: "Experience unparalleled luxury at Cloud Walks. A premium retreat in Kodaikanal featuring luxury cottages and misty mountain views.",
    images: ["/gallery/cloud%20walks%20home%20stay%2043.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cloud Walks Home Stay",
  "image": "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg",
  "@id": "https://cloudwalks.com",
  "url": "https://cloudwalks.com",
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
  },
  "priceRange": "$$$",
  "description": "Experience unparalleled luxury at Cloud Walks. A premium retreat in Kodaikanal featuring luxury cottages, honeymoon suites, and misty mountain views.",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
