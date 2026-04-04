import { useInView } from "./useInView";

const categories = [
  {
    title: "Applications",
    icon: "✒️",
    items: ["Writing ink for fountain pens", "Drawing & calligraphy art", "Educational lab demonstrations", "Basic printing purposes"],
    color: "var(--primary)",
  },
  {
    title: "Results",
    icon: "📊",
    items: ["Deep black color intensity", "Optimal flow & viscosity", "15-20 sec drying time", "No sedimentation after 48hrs"],
    color: "var(--chem-cyan)",
  },
  {
    title: "Advantages",
    icon: "✅",
    items: ["Cost-effective formulation", "pH maintained at 6.5-7.5", "6+ months shelf life", "No pen clogging observed"],
    color: "var(--chem-amber)",
  },
  {
    title: "Safety Measures",
    icon: "🛡️",
    items: ["Wear safety goggles always", "Chemical-resistant gloves for CuSO₄", "Work in ventilated area", "Keep ethanol from open flames"],
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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Results & Applications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`glass-card p-6 hover:scale-105 transition-all duration-500 group ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
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
              <h3 className="font-display text-sm font-bold mb-4" style={{ color: `hsl(${cat.color})` }}>{cat.title}</h3>
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
