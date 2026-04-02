import { useInView } from "./useInView";
import procedureImg from "@/assets/procedure.jpg";

const steps = [
  { step: 1, title: "Preparation", desc: "Gather all chemicals and sterilize equipment", icon: "🧤" },
  { step: 2, title: "Measurement", desc: "Accurately measure required quantities", icon: "⚖️" },
  { step: 3, title: "Mixing", desc: "Combine reagents in correct order", icon: "🔄" },
  { step: 4, title: "Heating", desc: "Apply controlled heat to the mixture", icon: "🔥" },
  { step: 5, title: "Observation", desc: "Monitor color changes and reactions", icon: "👁️" },
  { step: 6, title: "Analysis", desc: "Record results and draw conclusions", icon: "📊" },
];

const ProcedureSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="procedure" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 04</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Experiment Procedure</h2>
        </div>

        {/* Procedure image */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="glass-card p-2 glow-border">
            <img src={procedureImg} alt="Experiment" className="rounded-lg w-full" loading="lazy" width={1280} height={720} />
          </div>
        </div>

        {/* Animated timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card p-5 hover:glow-border transition-all duration-300">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-tech font-bold text-foreground mt-2">Step {s.step}: {s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </div>

              {/* Node */}
              <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center animate-pulse-glow">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              <div className="hidden md:block md:w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcedureSection;
