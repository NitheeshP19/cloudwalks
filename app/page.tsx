import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromiseSection from "@/components/Promise";
import AmenitiesSection from "@/components/Amenities";
import RoomSlider from "@/components/RoomSlider";
import HomeFAQ from "@/components/HomeFAQ";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PromiseSection />
      <AmenitiesSection />
      <RoomSlider />
      <HomeFAQ />
    </main>
  );
}
