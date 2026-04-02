import { useInView } from "./useInView";

const categories = [
  {
    title: "Applications",
    icon: "🏭",
    items: ["Industrial manufacturing", "Pharmaceutical synthesis", "Water purification", "Food processing"],
    color: "var(--primary)",
  },
  {
    title: "Uses",
    icon: "🔬",
    items: ["pH testing & calibration", "Chemical analysis", "Quality control", "Research & development"],
    color: "var(--chem-cyan)",
  },
  {
    title: "Advantages",
    icon: "✅",
    items: ["Cost-effective process", "Environmentally friendly", "High yield reaction", "Easy to replicate"],
    color: "var(--chem-amber)",
  },
  {
    title: "Safety Measures",
    icon: "🛡️",
    items: ["Wear protective gloves", "Use fume hood", "Eye protection required", "Proper waste disposal"],
    color: "var(--chem-magenta)",
  },
];

const ApplicationsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="applications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 07</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Applications & Safety</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${0.15 + i * 0.12}s`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-wave"
                style={{
                  background: `hsl(${cat.color} / 0.15)`,
                  border: `1px solid hsl(${cat.color} / 0.3)`,
                }}
              >
                {cat.icon}
              </div>
              <h3 className="font-display text-sm font-bold mb-4" style={{ color: `hsl(${cat.color})` }}>
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: `hsl(${cat.color})` }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
