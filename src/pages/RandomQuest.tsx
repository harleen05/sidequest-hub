import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fitnessQuests } from "@/data/fitnessQuests";
import { studyQuests } from "@/data/studyQuests";
import { socialQuests } from "@/data/socialQuests";
import { creativeQuests } from "@/data/creativeQuests";

type QuestWithWorld = {
   id: string;
  title: string;
  world: string;
  emoji: string;
  worldId: string;
};

const allQuests: QuestWithWorld[] = [
  ...fitnessQuests.map((q) => ({ ...q, world: "Fitness World", emoji: "🏋️", worldId: "fitness" })),
  ...studyQuests.map((q) => ({ ...q, world: "Study World", emoji: "📚", worldId: "study" })),
  ...socialQuests.map((q) => ({ ...q, world: "Social World", emoji: "🤝", worldId: "social" })),
  ...creativeQuests.map((q) => ({ ...q, world: "Creative World", emoji: "🎨", worldId: "creative" })),

];

const RandomQuest = () => {
  const navigate = useNavigate();
  const [quest, setQuest] = useState<QuestWithWorld | null>(null);
  const [rolling, setRolling] = useState(false);
  const [done, setDone] = useState(false);
  const [flashKey, setFlashKey] = useState(0);

  const rollQuest = () => {
    setRolling(true);
    setDone(false);

    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allQuests.length);
      setQuest(allQuests[randomIndex]);
      setFlashKey((k) => k + 1);
      count++;
      if (count >= 10) {
        clearInterval(interval);
        setRolling(false);
      }
    }, 80);
  };

  const markDone = () => {
    if (!quest) return;
    const stored = JSON.parse(localStorage.getItem(`sidequest_${quest.worldId}`) || "{}");
    stored[quest.id] = true;
    localStorage.setItem(`sidequest_${quest.worldId}`, JSON.stringify(stored));
    setDone(true);
  };

  return (
    <div className="min-h-screen grid-bg">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="font-heading font-bold text-foreground text-lg bg-transparent border-none cursor-pointer hover:text-primary transition-colors"
        >
          SQ
        </button>
        <span className="text-muted-foreground text-xs font-mono">worlds://random</span>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center gap-10">
        {/* Title */}
        <div className="text-center space-y-2 animate-fade-up">
          <h1 className="text-3xl font-heading font-bold text-foreground">🎲 Random Quest</h1>
          <p className="text-muted-foreground text-sm font-mono">
            Let fate decide your next mission.
          </p>
        </div>

        {/* Quest card */}
        <div
          key={flashKey}
          className={`w-full border p-8 flex flex-col gap-4 transition-all duration-200 ${
            quest
              ? "border-primary bg-card shadow-[0_8px_30px_hsl(var(--primary)/0.15)]"
              : "border-border bg-card opacity-60"
          }`}
        >
          {quest ? (
            <>
  <p className="text-xl font-heading font-semibold text-foreground leading-snug">
    {quest.title}
  </p>
              {done && (
                <span className="text-xs font-mono text-primary animate-fade-up">
                  ✓ quest marked as complete
                </span>
              )}
            </>
          ) : (
            <p className="text-muted-foreground text-sm font-mono text-center py-4">
              press roll to get your quest
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button
            onClick={rollQuest}
            disabled={rolling}
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm tracking-wide border-none cursor-pointer transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_4px_0_0_hsl(var(--primary)/0.4)] active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {rolling ? "Rolling..." : quest ? "Re-roll" : "Roll Quest"}
          </button>

          {quest && !done && !rolling && (
            <button
              onClick={markDone}
              className="flex-1 px-6 py-3 bg-transparent text-primary font-heading font-semibold text-sm tracking-wide border border-primary cursor-pointer transition-all duration-200 hover:bg-primary/5 hover:translate-y-[-2px] active:translate-y-0"
            >
              Mark Complete
            </button>
          )}
        </div>

        {/* Back to worlds */}
        <button
          onClick={() => navigate("/worlds")}
          className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          ← back to worlds
        </button>
      </main>
    </div>
  );
};

export default RandomQuest;
