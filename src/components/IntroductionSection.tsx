import { useInView } from "./useInView";

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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Introduction</h2>
        </div>

        {/* Animated lab beakers */}
        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          {[
            { color: "var(--primary)", delay: "0s", fill: "85%" },
            { color: "var(--chem-cyan)", delay: "0.5s", fill: "65%" },
            { color: "var(--chem-magenta)", delay: "1s", fill: "75%" },
            { color: "var(--chem-amber)", delay: "1.5s", fill: "55%" },
          ].map((beaker, i) => (
            <div
              key={i}
              className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Beaker SVG */}
              <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
                <path d="M20 10 L20 70 L10 100 Q10 115 25 115 L55 115 Q70 115 70 100 L60 70 L60 10" fill="none" stroke="hsl(var(--border))" strokeWidth="2" />
                <path d="M15 10 L65 10" stroke="hsl(var(--border))" strokeWidth="2" />
                {/* Liquid */}
                <clipPath id={`beaker-clip-${i}`}>
                  <path d="M21 70 L11 100 Q11 114 26 114 L54 114 Q69 114 69 100 L59 70 Z" />
                </clipPath>
                <rect
                  x="11" y="40" width="58" height="74"
                  clipPath={`url(#beaker-clip-${i})`}
                  fill={`hsl(${beaker.color})`}
                  opacity="0.6"
                  className={inView ? "" : "h-0"}
                  style={{
                    transition: "all 2s ease-out",
                    transitionDelay: beaker.delay,
                  }}
                />
                {/* Bubbles inside */}
                {inView && [...Array(3)].map((_, j) => (
                  <circle
                    key={j}
                    cx={30 + j * 10}
                    cy={90 - j * 8}
                    r={2 + j}
                    fill={`hsl(${beaker.color})`}
                    opacity="0.4"
                    className="animate-wave"
                    style={{ animationDelay: `${j * 0.3}s` }}
                  />
                ))}
              </svg>
            </div>
          ))}
        </div>

        {/* DNA helix animation */}
        <div className={`flex justify-center transition-all duration-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}`} style={{ transitionDelay: "0.6s" }}>
          <div className="relative w-full max-w-3xl h-48 overflow-hidden">
            {[...Array(20)].map((_, i) => {
              const x = (i / 20) * 100;
              const y1 = 50 + Math.sin(i * 0.6) * 30;
              const y2 = 50 - Math.sin(i * 0.6) * 30;
              return (
                <div key={i} className="absolute" style={{ left: `${x}%` }}>
                  <div
                    className="w-3 h-3 rounded-full animate-wave"
                    style={{
                      top: `${y1}%`,
                      position: "absolute",
                      background: "hsl(var(--primary))",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                  <div
                    className="w-3 h-3 rounded-full animate-wave"
                    style={{
                      top: `${y2}%`,
                      position: "absolute",
                      background: "hsl(var(--chem-cyan))",
                      animationDelay: `${i * 0.15 + 0.5}s`,
                    }}
                  />
                  <div
                    className="absolute w-px"
                    style={{
                      left: "5px",
                      top: `${Math.min(y1, y2)}%`,
                      height: `${Math.abs(y1 - y2)}%`,
                      background: "hsl(var(--border))",
                      opacity: 0.3,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
