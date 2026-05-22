import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromiseSection from "@/components/Promise";
import AmenitiesSection from "@/components/Amenities";
import RoomSlider from "@/components/RoomSlider";
import GoogleReviews from "@/components/GoogleReviews";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata: Metadata = {
  title: "Cloud Walks Home Stay | Best Luxury Resort in Kodaikanal",
  description: "Experience unparalleled luxury at Cloud Walks Home Stay. Enjoy premium cottages, misty mountain views, and top-tier hospitality in Kodaikanal.",
  keywords: [
    "best resorts in Kodaikanal",
    "luxury homestay Kodaikanal",
    "premium cottages Kodaikanal",
    "Kodaikanal honeymoon packages",
    "Cloud Walks Home Stay",
    "luxury stay in Kodaikanal",
    "best place to stay in Kodaikanal",
    "Kodaikanal tourist places"
  ],
  alternates: {
    canonical: "https://cloudwalks.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cloudwalks.com",
    siteName: "Cloud Walks Home Stay",
    title: "Cloud Walks Home Stay | Best Luxury Resort in Kodaikanal",
    description: "Experience unparalleled luxury at Cloud Walks Home Stay. Enjoy premium cottages, misty mountain views, and top-tier hospitality in Kodaikanal.",
    images: [
      {
        url: "https://cloudwalks.com/gallery/cloud%20walks%20home%20stay%2043.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Walks Home Stay Kodaikanal",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PromiseSection />
      <AmenitiesSection />
      <RoomSlider />
      <GoogleReviews />
      <HomeFAQ />
    </main>
  );
}
