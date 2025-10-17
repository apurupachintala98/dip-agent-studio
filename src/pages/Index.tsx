import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { ToolsetSection } from "@/components/sections/ToolsetSection";
import { BehaviorSection } from "@/components/sections/BehaviorSection";
import { TestingSection } from "@/components/sections/TestingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <KnowledgeSection />
      <ToolsetSection />
      <BehaviorSection />
      <TestingSection />
      <Footer />
    </div>
  );
};

export default Index;
