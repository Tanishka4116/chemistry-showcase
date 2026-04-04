import { useInView } from "./useInView";

const introCards = [
  {
    title: "Definition of Ink",
    desc: "Ink is a liquid or paste containing pigments or dyes used for writing, printing, and drawing. It consists of colorants suspended or dissolved in a vehicle (solvent) with additives for specific properties.",
    icon: "🖋️",
  },
  {
    title: "Importance of Ink",
    desc: "Ink has been fundamental to human civilization—enabling the preservation of knowledge, artistic expression, and modern printing technologies. From manuscripts to digital printing, ink remains essential.",
    icon: "📜",
  },
  {
    title: "Project Aim",
    desc: "To prepare carbon-based writing ink through chemical prototyping, utilizing gum as binder, glycerol as humectant, copper sulfate as preservative, and ethanol for consistency control.",
    icon: "🎯",
  },
  {
    title: "Chemical Prototyping",
    desc: "This project follows a systematic chemical prototyping approach—designing, formulating, and testing ink composition through controlled experimentation and iterative refinement.",
    icon: "⚗️",
  },
];

const IntroductionSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="introduction" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-particle-drift"
            style={{
              width: 8 + i * 4,
              height: 8 + i * 4,
              top: `${15 + i * 14}%`,
              left: `${10 + i * 15}%`,
              background: `hsl(${160 + i * 30}, 80%, 50%)`,
              opacity: 0.2,
              animationDelay: `${i * 0.8}s`,
              ["--drift-x" as string]: `${(i % 2 ? 1 : -1) * 40}px`,
              ["--drift-y" as string]: `${-20 - i * 10}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 02</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Understanding Ink Chemistry</h2>
        </div>

        {/* Animated lab beakers */}
        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          {[
            { color: "var(--primary)", delay: "0s", label: "Gum" },
            { color: "var(--chem-cyan)", delay: "0.5s", label: "Carbon" },
            { color: "var(--chem-magenta)", delay: "1s", label: "CuSO₄" },
            { color: "var(--chem-amber)", delay: "1.5s", label: "Ethanol" },
          ].map((beaker, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
                <path d="M20 10 L20 70 L10 100 Q10 115 25 115 L55 115 Q70 115 70 100 L60 70 L60 10" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
                <path d="M15 10 L65 10" stroke="hsl(var(--border))" strokeWidth="2" />
                <clipPath id={`beaker-clip-${i}`}>
                  <path d="M21 70 L11 100 Q11 114 26 114 L54 114 Q69 114 69 100 L59 70 Z" />
                </clipPath>
                <rect
                  x="11" y="40" width="58" height="74"
                  clipPath={`url(#beaker-clip-${i})`}
                  fill={`hsl(${beaker.color})`}
                  opacity="0.6"
                  style={{ transition: "all 2s ease-out", transitionDelay: beaker.delay }}
                />
                {inView && [...Array(3)].map((_, j) => (
                  <circle key={j} cx={30 + j * 10} cy={90 - j * 8} r={2 + j} fill={`hsl(${beaker.color})`} opacity="0.4" className="animate-wave" style={{ animationDelay: `${j * 0.3}s` }} />
                ))}
              </svg>
              <p className="text-center text-xs font-tech text-muted-foreground mt-2">{beaker.label}</p>
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {introCards.map((card, i) => (
            <div
              key={card.title}
              className={`glass-card p-6 hover:scale-[1.03] transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${0.3 + i * 0.12}s` }}
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="font-tech font-bold text-foreground mt-3 mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${inView ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "0.8s" }}>
          <blockquote className="glass-card p-6 glow-border">
            <p className="text-primary font-body italic text-lg">"The art of ink-making combines the precision of chemistry with the creativity of formulation."</p>
            <cite className="text-muted-foreground text-sm font-tech mt-2 block">— Principle of Chemical Prototyping</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
