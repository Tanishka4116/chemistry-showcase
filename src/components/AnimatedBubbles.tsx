import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const colors = [
  "hsl(160, 100%, 45%)",
  "hsl(185, 100%, 50%)",
  "hsl(310, 80%, 55%)",
  "hsl(40, 95%, 55%)",
];

const AnimatedBubbles = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generated: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 20,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setBubbles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            background: `radial-gradient(circle at 30% 30%, ${b.color}66, ${b.color}11)`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBubbles;
