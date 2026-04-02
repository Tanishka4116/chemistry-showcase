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

    {/* Footer */}
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-primary text-sm glow-text mb-2">⚗️ ChemLab Prototype</p>
        <p className="text-muted-foreground text-xs font-tech">
          © 2025 Chemistry Project | Samrudhi, Siddhi, Tanishka & Aniket
        </p>
      </div>
    </footer>
  </div>
);

export default Index;
