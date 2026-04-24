import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { MissionSection } from "@/components/home/MissionSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <FeatureGrid />
      <MissionSection />
      <CTASection />
    </div>
  );
}
