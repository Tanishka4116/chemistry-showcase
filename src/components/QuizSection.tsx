import { useState } from "react";
import { useInView } from "./useInView";

const questions = [
  {
    q: "What is the role of Gum Arabic in ink preparation?",
    options: ["Colorant", "Binder & viscosity controller", "Preservative", "Solvent"],
    answer: 1,
  },
  {
    q: "Which chemical is used as a preservative in ink?",
    options: ["Ethanol", "Glycerol", "Copper Sulphate (CuSO₄)", "Carbon Black"],
    answer: 2,
  },
  {
    q: "What is the chemical formula of Glycerol?",
    options: ["C₂H₅OH", "H₂O", "C₃H₈O₃", "CuSO₄"],
    answer: 2,
  },
  {
    q: "What is the purpose of adding Ethanol to ink?",
    options: ["Color enhancement", "Binding", "Consistency & drying control", "Preservation"],
    answer: 2,
  },
  {
    q: "What pH range is maintained in the prepared ink?",
    options: ["2.0 - 3.5", "6.5 - 7.5", "9.0 - 10.5", "12.0 - 14.0"],
    answer: 1,
  },
];

const QuizSection = () => {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === questions[current].answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const q = questions[current];

  return (
    <section id="quiz" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-tech text-primary tracking-[0.2em] text-sm mb-2">SECTION 08</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground glow-text">Quick Quiz</h2>
        </div>

        <div className="max-w-xl mx-auto">
          {finished ? (
            <div className={`glass-card p-8 text-center glow-border transition-all duration-500 ${inView ? "animate-scale-in" : ""}`}>
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-display text-2xl text-foreground mb-2">Quiz Complete!</h3>
              <p className="text-muted-foreground mb-2">Your Score</p>
              <p className="font-display text-5xl text-primary glow-text mb-6">{score}/{questions.length}</p>
              <button onClick={restart} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-tech font-semibold hover:scale-105 transition-transform">
                Try Again
              </button>
            </div>
          ) : (
            <div className={`glass-card p-8 glow-border transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex gap-2 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 flex-1 rounded-full transition-all duration-500"
                    style={{
                      background: i <= current ? "hsl(var(--primary))" : "hsl(var(--muted))",
                      boxShadow: i <= current ? "0 0 8px hsl(var(--primary) / 0.5)" : "none",
                    }}
                  />
                ))}
              </div>

              <p className="font-tech text-xs text-muted-foreground mb-2">Question {current + 1} of {questions.length}</p>
              <h3 className="font-tech text-lg font-semibold text-foreground mb-6">{q.q}</h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  let style = "border-border/50 hover:border-primary/50";
                  if (selected !== null) {
                    if (i === q.answer) style = "border-primary bg-primary/10";
                    else if (i === selected) style = "border-destructive bg-destructive/10";
                  }
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelect(i)}
                      className={`w-full text-left p-4 rounded-lg border transition-all duration-300 font-body text-sm text-foreground ${style}`}
                    >
                      <span className="font-tech text-muted-foreground mr-3">{String.fromCharCode(65 + i)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <button
                  onClick={next}
                  className="mt-6 w-full py-3 rounded-lg bg-primary text-primary-foreground font-tech font-semibold hover:scale-[1.02] transition-transform animate-fade-in"
                >
                  {current < questions.length - 1 ? "Next Question →" : "See Results"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
