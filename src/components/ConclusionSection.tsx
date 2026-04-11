import { useInView } from "./useInView";

const learnings = [
  {
    icon: "🔬",
    title: "Chemical Understanding",
    desc: "Gained hands-on knowledge of ink formulation using Gum Arabic, Carbon Black, CuSO₄, Glycerol, and Ethanol.",
  },
  {
    icon: "⚗️",
    title: "Process Optimization",
    desc: "Learned to control variables like temperature, mixing time, and filtration for consistent ink quality.",
  },
  {
    icon: "📊",
    title: "Quality Analysis",
    desc: "Evaluated ink properties including viscosity, drying time (15-20 sec), pH levels (6.5-7.5), and water resistance.",
  },
  {
    icon: "🧪",
    title: "Lab Safety & Techniques",
    desc: "Practiced safe handling of chemicals, proper use of lab equipment, and systematic experimental procedures.",
  },
];

const ConclusionSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="conclusion" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 09</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Conclusion</h2>
        </div>

        {/* Summary */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="glass-card p-8 glow-border text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-4 glow-text">Project Summary</h3>
            <p className="text-muted-foreground leading-relaxed font-tech text-sm md:text-base">
              Through this project, we successfully prepared ink using a systematic chemical process involving
              Gum Arabic as a binder, Carbon Black as a pigment, Copper Sulfate as a preservative, Glycerol
              for viscosity control, and Ethanol as a drying agent. The final product demonstrated excellent
              writing quality, consistent flow, and appropriate drying characteristics suitable for everyday use.
            </p>
          </div>
        </div>

        {/* Learning Outcomes */}
        <h3 className={`font-display text-xl md:text-2xl text-center text-foreground mb-10 glow-text transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
          Key Learning Outcomes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {learnings.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card p-6 glow-border hover:scale-105 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h4 className="font-tech font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Acknowledgement */}
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "1s" }}>
          <div className="glass-card p-8 glow-border">
            <div className="text-3xl mb-3">🙏</div>
            <h3 className="font-display text-lg text-foreground mb-3 glow-text">Acknowledgement</h3>
            <p className="text-muted-foreground text-sm font-tech leading-relaxed">
              We extend our sincere gratitude to our faculty guide for their invaluable guidance and support
              throughout this project. Special thanks for providing the resources and laboratory facilities
              that made this project possible.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Samruddhi Phulari", "Tanishka Bhor", "Siddhi Patil", "Aniket Rajput"].map((name) => (
                <span key={name} className="px-3 py-1.5 rounded-full text-xs font-tech font-semibold border border-primary/30 text-primary bg-primary/5">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
