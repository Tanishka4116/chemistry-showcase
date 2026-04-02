import { useInView } from "./useInView";
import reactionImg from "@/assets/reaction.jpg";
import heroImg from "@/assets/hero-chemistry.jpg";
import procedureImg from "@/assets/procedure.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";

const photos = [
  { src: reactionImg, label: "Chemical Reaction", w: 1280, h: 720 },
  { src: heroImg, label: "Lab Setup", w: 1920, h: 1080 },
  { src: procedureImg, label: "Mixing Process", w: 1280, h: 720 },
  { src: ingredientsImg, label: "Materials Ready", w: 1280, h: 720 },
];

const PhotosSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="photos" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 06</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Reaction Snapshots</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <div
              key={photo.label}
              className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.15 + i * 0.15}s` }}
            >
              <div className="glass-card p-2 glow-border hover:scale-[1.02] transition-transform duration-500">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy" width={photo.w} height={photo.h}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="font-tech font-semibold text-foreground">{photo.label}</p>
                  </div>
                </div>
              </div>

              {/* Animated shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer pointer-events-none rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;
