import heroImg from "@/assets/hero-chemistry.jpg";
import moleculeImg from "@/assets/molecules.png";
import tanishkaImg from "@/assets/tanishka.jpg";
import samrudhiImg from "@/assets/samrudhi.jpg";
import aniketImg from "@/assets/aniket.jpg";

const members = [
  { name: "Samruddhi Phulari", prn: "202401040129", photo: samrudhiImg },
  { name: "Tanishka Bhor", prn: "202401040132", photo: tanishkaImg },
  { name: "Siddhi Patil", prn: "202401040152", photo: null },
  { name: "Aniket Rajput", prn: "202401040138", photo: aniketImg },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Chemistry lab" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    {/* Floating molecule */}
    <img src={moleculeImg} alt="" className="absolute top-20 right-10 w-32 h-32 molecule-spin opacity-40" loading="lazy" width={512} height={512} />
    <img src={moleculeImg} alt="" className="absolute bottom-32 left-10 w-24 h-24 molecule-spin opacity-30" style={{ animationDirection: "reverse", animationDuration: "30s" }} loading="lazy" width={512} height={512} />

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <div className="animate-fade-in">
        <p className="font-tech text-primary tracking-[0.3em] text-sm mb-4 uppercase">Engineering Chemistry Project</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text text-foreground leading-tight">
          Chemical Prototyping & <span className="text-primary">Preparation of Ink</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body">
          A comprehensive study of ink formulation using gum, carbon, glycerol, copper sulfate, and ethanol through systematic chemical processes.
        </p>
        <p className="text-muted-foreground text-sm font-tech">Department of Computer Engineering • Academic Year 2024-25</p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {members.map((m, i) => (
          <div
            key={m.prn}
            className="glass-card p-4 animate-fade-in glow-border hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${0.3 + i * 0.15}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center text-2xl overflow-hidden">
              {m.photo ? (
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
              ) : (
                "🧑‍🔬"
              )}
            </div>
            <h3 className="font-tech font-semibold text-sm text-foreground">{m.name}</h3>
            <p className="text-primary text-xs font-mono mt-1">PRN: {m.prn}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-card inline-block px-6 py-3 animate-fade-in" style={{ animationDelay: "1s" }}>
        <p className="text-muted-foreground text-sm font-tech">Under the guidance of our esteemed faculty</p>
      </div>

      {/* Scroll indicator */}
      <div className="mt-12 animate-wave">
        <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;
