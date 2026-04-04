import { useInView } from "./useInView";
import processFlowImg from "@/assets/process-flow-diagram.png";
import blockDiagramImg from "@/assets/block-diagram.png";

const flowSteps = [
  { label: "Raw Materials", sub: "Gum, Carbon, Water", color: "var(--chem-amber)" },
  { label: "Grinding", sub: "Carbon pigment", color: "var(--primary)" },
  { label: "Mixing", sub: "Combine reagents", color: "var(--chem-magenta)" },
  { label: "Heating", sub: "Water bath", color: "var(--chem-cyan)" },
  { label: "Filtration", sub: "Remove impurities", color: "var(--primary)" },
  { label: "Final Ink", sub: "Product output", color: "var(--chem-amber)" },
];

const FlowDiagramSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="flowdiagram" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 05</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Process Flow Diagram</h2>
        </div>

        {/* Process Flow Diagram Image */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="glass-card p-3 glow-border">
            <img src={processFlowImg} alt="Process Flow Diagram for Preparation of Ink" className="rounded-lg w-full bg-white" loading="lazy" />
            <p className="text-center text-muted-foreground text-xs font-tech mt-3">Process Flow Diagram — From raw materials to final ink product</p>
          </div>
        </div>

        {/* Block Diagram Image */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "0.3s" }}>
          <div className="glass-card p-3 glow-border">
            <img src={blockDiagramImg} alt="Block Diagram for Ink Preparation" className="rounded-lg w-full bg-white" loading="lazy" />
            <p className="text-center text-muted-foreground text-xs font-tech mt-3">Block Diagram — Workflow overview</p>
          </div>
        </div>

        {/* Animated flow steps */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div
                  className={`glass-card p-5 md:p-6 text-center min-w-[140px] hover:scale-110 transition-all duration-500 ${
                    inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    transitionDelay: `${0.5 + i * 0.15}s`,
                    boxShadow: inView ? `0 0 20px hsl(${step.color} / 0.3)` : "none",
                  }}
                >
                  <div
                    className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-display font-bold text-lg"
                    style={{
                      background: `hsl(${step.color} / 0.2)`,
                      border: `2px solid hsl(${step.color} / 0.5)`,
                      color: `hsl(${step.color})`,
                    }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-tech font-semibold text-sm text-foreground">{step.label}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div
                    className={`hidden md:block transition-all duration-500 ${inView ? "opacity-100 w-12" : "opacity-0 w-0"}`}
                    style={{ transitionDelay: `${0.7 + i * 0.15}s` }}
                  >
                    <svg width="48" height="24" viewBox="0 0 48 24">
                      <line x1="0" y1="12" x2="36" y2="12" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="36,6 48,12 36,18" fill="hsl(var(--primary))" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Circular workflow */}
          <div className={`mt-20 flex justify-center transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1.2s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 molecule-spin" />
              <div className="absolute inset-4 rounded-full border border-secondary/20 molecule-spin" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
              {flowSteps.map((step, i) => {
                const angle = (i / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                const r = 120;
                const x = 50 + (r / 160) * 50 * Math.cos(angle);
                const y = 50 + (r / 160) * 50 * Math.sin(angle);
                return (
                  <div
                    key={step.label + "-circle"}
                    className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-tech text-xs font-bold animate-pulse-glow"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      background: `hsl(${step.color} / 0.3)`,
                      border: `1px solid hsl(${step.color} / 0.6)`,
                      color: `hsl(${step.color})`,
                    }}
                  >
                    {i + 1}
                  </div>
                );
              })}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-primary text-sm glow-text">INK</p>
                  <p className="text-muted-foreground text-xs">Workflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowDiagramSection;
