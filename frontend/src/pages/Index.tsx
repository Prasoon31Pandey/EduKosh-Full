import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SkillMarketplaceSection from "@/components/SkillMarketplaceSection";
import FocusModeSection from "@/components/FocusModeSection";
import AISuggestionsSection from "@/components/AISuggestionsSection";
import ResumeBuilderSection from "@/components/ResumeBuilderSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SkillMarketplaceSection />
      <FocusModeSection />
      <AISuggestionsSection />
      <ResumeBuilderSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
