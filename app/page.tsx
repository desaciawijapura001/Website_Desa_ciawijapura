import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VillageStats } from "@/components/village-stats"
import { NewsSection } from "@/components/news-section"
import { VillageHistory } from "@/components/village-history"
import { VisionMission } from "@/components/vision-mission"
import { UMKMSection } from "@/components/umkm-section"
import { TourismSection } from "@/components/tourism-section"
import { LocationSection } from "@/components/location-section"
import { InteractiveMap } from "@/components/interactive-map"
import { Footer } from "react-day-picker"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VillageStats />
      <NewsSection />
      <VillageHistory />
      <VisionMission />
      <UMKMSection />
      <TourismSection />
      <LocationSection />
      <InteractiveMap />
      <Footer />

    </main>
  )
}
