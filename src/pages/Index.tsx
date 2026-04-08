import AnimatedBubbles from "@/components/AnimatedBubbles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import IngredientsSection from "@/components/IngredientsSection";
import ProcedureSection from "@/components/ProcedureSection";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import PhotosSection from "@/components/PhotosSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import QuizSection from "@/components/QuizSection";
import ConclusionSection from "@/components/ConclusionSection";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    <AnimatedBubbles />
    <Navbar />
    <HeroSection />
    <IntroductionSection />
    <IngredientsSection />
    <ProcedureSection />
    <FlowDiagramSection />
    <PhotosSection />
    <ApplicationsSection />
    <QuizSection />
    <ConclusionSection />

    {/* Footer */}
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-primary text-sm glow-text mb-2">🖋️ InkCraft — Chemical Prototyping</p>
        <p className="text-muted-foreground text-xs font-tech">
          © 2025 Preparation of Ink | Samrudhi, Siddhi, Tanishka & Aniket
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
