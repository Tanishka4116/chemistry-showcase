import { useInView } from "./useInView";
import ingredientsImg from "@/assets/ingredients.jpg";

const ingredients = [
  { name: "Gum Arabic", formula: "Complex Polysaccharide", role: "Binder & viscosity controller", icon: "🌿", color: "var(--primary)" },
  { name: "Distilled Water", formula: "H₂O", role: "Solvent medium", icon: "💧", color: "var(--chem-cyan)" },
  { name: "Carbon Black", formula: "C", role: "Primary pigment colorant", icon: "⚫", color: "var(--chem-magenta)" },
  { name: "Glycerol", formula: "C₃H₈O₃", role: "Humectant for flow improvement", icon: "🧴", color: "var(--chem-amber)" },
  { name: "Copper Sulphate", formula: "CuSO₄", role: "Preservative against microbes", icon: "💎", color: "var(--primary)" },
  { name: "Ethanol", formula: "C₂H₅OH", role: "Consistency & drying control", icon: "🔬", color: "var(--chem-cyan)" },
];

const IngredientsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="ingredients" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 03</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Materials & Chemicals Used</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">Each component plays a crucial role in the ink formulation process, contributing specific properties to the final product.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="glass-card p-2 glow-border">
              <img src={ingredientsImg} alt="Lab ingredients" className="rounded-lg w-full" loading="lazy" width={1280} height={720} />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {ingredients.map((ing, i) => (
              <div
                key={ing.name}
                className={`glass-card p-4 hover:scale-105 transition-all duration-500 group cursor-default ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <div className="text-3xl mb-2 group-hover:animate-wave">{ing.icon}</div>
                <h3 className="font-tech font-semibold text-sm text-foreground">{ing.name}</h3>
                <p className="font-mono text-xs mt-1" style={{ color: `hsl(${ing.color})` }}>{ing.formula}</p>
                <p className="text-muted-foreground text-xs mt-1">{ing.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
