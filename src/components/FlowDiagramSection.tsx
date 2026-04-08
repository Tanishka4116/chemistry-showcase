import { useInView } from "./useInView";
import processFlowImg from "@/assets/process-flow-diagram.png";

const flowSteps = [
  { label: "Distilled Water", sub: "Solvent base", icon: "💧" },
  { label: "Mixing", sub: "Glue + CuSO₄", icon: "🔄" },
  { label: "Heating", sub: "Controlled heat", icon: "🔥" },
  { label: "Cooling", sub: "Temperature drop", icon: "❄️" },
  { label: "Filtration", sub: "Separation", icon: "🧪" },
  { label: "Raw Ink", sub: "+ Alcohol & Boric Acid", icon: "🧫" },
  { label: "Mixing", sub: "Final blend", icon: "🔄" },
  { label: "Filtration", sub: "Final filter", icon: "🧪" },
  { label: "Ink", sub: "Final product", icon: "✒️" },
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

        {/* Animated flow steps - horizontal chain */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0">
            {flowSteps.map((step, i) => (
              <div key={step.label + i} className="flex items-center">
                <div
                  className={`glass-card p-4 md:p-5 text-center min-w-[110px] md:min-w-[120px] hover:scale-110 transition-all duration-500 ${
                    inView ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${0.5 + i * 0.12}s` }}
                >
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="font-tech font-semibold text-xs text-foreground">{step.label}</h3>
                  <p className="text-muted-foreground text-[10px] mt-1">{step.sub}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div
                    className={`hidden md:block transition-all duration-500 ${inView ? "opacity-100 w-8" : "opacity-0 w-0"}`}
                    style={{ transitionDelay: `${0.6 + i * 0.12}s` }}
                  >
                    <svg width="32" height="24" viewBox="0 0 32 24">
                      <line x1="0" y1="12" x2="22" y2="12" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 4" />
                      <polygon points="22,6 32,12 22,18" fill="hsl(var(--primary))" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hexagonal Workflow */}
          <div className={`mt-20 transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1.2s" }}>
            <h3 className="font-display text-xl md:text-2xl text-center text-foreground mb-10 glow-text">Ink Preparation Workflow</h3>
            <div className="flex justify-center">
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
                {/* Animated rotating rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 molecule-spin" />
                <div className="absolute inset-6 rounded-full border border-primary/10 molecule-spin" style={{ animationDirection: "reverse", animationDuration: "25s" }} />
                <div className="absolute inset-12 rounded-full border border-dashed border-accent/15 molecule-spin" style={{ animationDuration: "35s" }} />

                {/* SVG connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {flowSteps.map((_, i) => {
                    const a1 = (i / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                    const a2 = ((i + 1) / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                    const r = 38;
                    const x1 = 50 + r * Math.cos(a1);
                    const y1 = 50 + r * Math.sin(a1);
                    const x2 = 50 + r * Math.cos(a2);
                    const y2 = 50 + r * Math.sin(a2);
                    return (
                      <line
                        key={`line-${i}`}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.3"
                        strokeDasharray="1 1"
                        opacity="0.5"
                      />
                    );
                  })}
                  {/* Animated particle traveling the path */}
                  <circle r="1" fill="hsl(var(--primary))" opacity="0.9">
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      path={(() => {
                        const r = 38;
                        const pts = flowSteps.map((_, i) => {
                          const a = (i / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                          return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
                        });
                        return `M${pts[0]} L${pts.slice(1).join(" L")} Z`;
                      })()}
                    />
                  </circle>
                  <circle r="0.6" fill="hsl(var(--accent))" opacity="0.7">
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      begin="2s"
                      path={(() => {
                        const r = 38;
                        const pts = flowSteps.map((_, i) => {
                          const a = (i / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                          return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
                        });
                        return `M${pts[0]} L${pts.slice(1).join(" L")} Z`;
                      })()}
                    />
                  </circle>
                </svg>

                {/* Step nodes */}
                {flowSteps.map((step, i) => {
                  const angle = (i / flowSteps.length) * Math.PI * 2 - Math.PI / 2;
                  const r = 38;
                  const x = 50 + r * Math.cos(angle);
                  const y = 50 + r * Math.sin(angle);
                  return (
                    <div
                      key={step.label + "-hex-" + i}
                      className="absolute group cursor-pointer"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {/* Node */}
                      <div
                        className="w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center font-tech text-sm font-bold transition-all duration-300 group-hover:scale-125 relative"
                        style={{
                          background: `hsl(var(--primary) / 0.15)`,
                          border: `2px solid hsl(var(--primary) / 0.5)`,
                          boxShadow: `0 0 12px hsl(var(--primary) / 0.3)`,
                        }}
                      >
                        <span className="text-base md:text-lg">{step.icon}</span>
                        {/* Pulse ring */}
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            border: `1px solid hsl(var(--primary) / 0.3)`,
                            animationDuration: `${2 + i * 0.3}s`,
                          }}
                        />
                      </div>
                      {/* Tooltip on hover */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-14 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 whitespace-nowrap pointer-events-none z-20">
                        <div className="glass-card px-4 py-2.5 text-center border border-primary/30 shadow-lg shadow-primary/10">
                          <p className="font-tech text-sm text-foreground font-bold">{step.label}</p>
                          <p className="text-muted-foreground text-xs mt-0.5">{step.sub}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center glass-card px-5 py-3 rounded-full">
                    <p className="font-display text-primary text-lg md:text-xl glow-text font-bold">INK</p>
                    <p className="text-muted-foreground text-[10px] font-tech tracking-wider">9 STEPS</p>
                  </div>
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
