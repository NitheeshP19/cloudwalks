import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogClient from "@/components/BlogClient";
import LuxuryCottagesFAQ from "@/components/LuxuryCottagesFAQ";

export const metadata: Metadata = {
  title: "The Cloud Walks Journal | Kodaikanal Luxury Travel Blog",
  description: "Explore deeply researched Kodaikanal travel guides, seasonal weather insights, romantic honeymoon advice, and insider sightseeing tips from the Cloud Walks homestay team.",
  keywords: [
    "Kodaikanal travel blog",
    "best time to visit Kodaikanal",
    "things to do in Kodaikanal",
    "Kodaikanal honeymoon guide",
    "luxury homestay Kodaikanal blog",
    "places to visit in Kodaikanal",
    "Palani hills tourism guide"
  ],
  alternates: {
    canonical: "https://cloudwalks.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com/blog",
    siteName: "Cloud Walks Home Stay",
    title: "The Cloud Walks Journal | Kodaikanal Luxury Travel Blog",
    description: "Deeply researched local guides, honeymoon checklists, and seasonal weather secrets to make your Kodaikanal trip extraordinary.",
    images: [
      {
        url: "/gallery/cloud%20walks%2031.jpg",
        width: 1200,
        height: 630,
        alt: "The Cloud Walks Journal Kodaikanal Travel Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cloud Walks Journal | Kodaikanal Luxury Travel Blog",
    description: "Deeply researched local guides, honeymoon checklists, and seasonal weather secrets to make your Kodaikanal trip extraordinary.",
    images: ["/gallery/cloud%20walks%2031.jpg"],
  },
};

export default function BlogIndexPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdfbf7' }}>
      {/* Universal header navigation */}
      <Header />

      {/* Interactive premium blog client */}
      <BlogClient />

      {/* Reused luxury footer containing FAQs and the "#contact-us" booking form anchor */}
      <LuxuryCottagesFAQ />
    </main>
  );
}
