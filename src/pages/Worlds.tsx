import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface WorldCard {
  id: string;
  name: string;
  emoji: string;
  description: string;
  active: boolean;
  path?: string;
}

const worlds: WorldCard[] = [
  { id: "fitness", name: "Fitness World", emoji: "🏋️", description: "Move your body, level up your health.", active: true, path: "/worlds/fitness" },
  { id: "study", name: "Study World", emoji: "📚", description: "Learn something new every day.", active: true, path: "/worlds/study" },
  { id: "social", name: "Social World", emoji: "🤝", description: "Build connections, grow your network.", active: true, path: "/worlds/social" },
  { id: "creative", name: "Creative World", emoji: "🎨", description: "Express yourself through creation.", active: true, path: "/worlds/creative" },
  { id: "mindfulness",name: "Mindfulness World", emoji: "🧘",description: "Relax your mind and improve awareness.",active: true,  path: "/worlds/mindfulness" },
  { id: "finance", name: "Finance World", emoji: "💰", description: "Master your money, build your wealth.", active: true, path: "/worlds/finance" },
  { id: "outdoor", name: "Outdoor World", emoji: "🌳", description: "Step outside, breathe fresh air, and reconnect with nature.", active: true, path: "/worlds/outdoor" },
  { id: "health", name: "Health & Nutrition World", emoji: "🥗", description: "Build small daily habits for a healthier diet.", active: true, path: "/worlds/health" },
  { id: "fun", name: "Fun & Play World", emoji: "🎉", description: "Relax, enjoy, and have fun while staying active.", active: true, path: "/worlds/fun" },
  { id: "audio", name: "Audio & Learning World", emoji: "🎧", description: "Turn passive listening into active learning.", active: true, path: "/worlds/audio" },
  { id: "outdoor", name: "Outdoor World", emoji: "🌿", description: "Explore and connect with nature.", active: true, path: "/worlds/outdoor" },
  { id: "health", name: "Health World", emoji: "🧠", description: "Improve your mental and physical wellbeing.", active: true, path: "/worlds/health" },
  { id: "fun", name: "Fun World", emoji: "🎮", description: "Relax, play, and enjoy life.", active: true, path: "/worlds/fun" },

];

const triggerConfetti = () => {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const getProgress = (worldId: string): { done: number; total: number } => {
  try {
    const data = JSON.parse(localStorage.getItem(`sidequest_${worldId}`) || "{}");
    const keys = Object.keys(data);
    const done = keys.filter((k) => data[k]).length;
    return { done, total: keys.length || 0 };
  } catch {
    return { done: 0, total: 0 };
  }
};

const Worlds = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [clickFlash, setClickFlash] = useState<string | null>(null);

  // 🎉 Confetti logic (FIXED)
  useEffect(() => {
    worlds.forEach((world) => {
      const progress = getProgress(world.id);

      const isCompleted =
        progress.total > 0 && progress.done === progress.total;

      const key = `celebrated_${world.id}`;
      const alreadyCelebrated = localStorage.getItem(key);

      if (isCompleted && !alreadyCelebrated) {
        triggerConfetti();
        localStorage.setItem(key, "true");
      }

      // allow re-trigger if user unchecks later
      if (!isCompleted) {
        localStorage.removeItem(key);
      }
    });
  }, []);

  const handleWorldClick = (world: WorldCard) => {
    if (!world.active || !world.path) return;
    setClickFlash(world.id);
    setTimeout(() => {
      navigate(world.path!);
    }, 150);
  };

  return (
    <div className="fixed inset-0 flex flex-col grid-bg">
      {/* Header */}
      <header className="border-b border-border px-6 py-4 flex items-center justify-between bg-background z-10 sticky top-0">
        <button
          onClick={() => navigate("/")}
          className="font-heading font-bold text-foreground text-lg bg-transparent border-none cursor-pointer hover:text-primary transition-colors"
        >
          SQ
        </button>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/random")}
            className="text-xs font-mono text-muted-foreground border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer bg-transparent"
          >
            🎲 Random Quest
          </button>

        </div>
      </header>

      <main className="flex-1 overflow-auto w-full">
        <div className="max-w-4xl mx-auto px-6 pt-12 space-y-2 mb-10 animate-fade-up">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Select a World
            </h1>

            <button
              onClick={() => navigate("/about")}
              className="px-3 py-1 border border-border rounded text-primary hover:bg-primary/10 transition-all text-sm font-mono"
            >
              About
            </button>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            Choose your quest line. More worlds coming soon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {worlds.map((world, i) => {
            const progress = world.active
              ? getProgress(world.id)
              : null;

            const isHovered = hoveredId === world.id;
            const isFlashing = clickFlash === world.id;

            const isCompleted =
              progress &&
              progress.total > 0 &&
              progress.done === progress.total;

            return (
              <div
                key={world.id}
                className={`animate-fade-up animate-fade-up-delay-${i + 1} relative group ${
                  world.active ? "cursor-pointer" : "cursor-not-allowed"
                } p-5 flex flex-col gap-3 border transition-all duration-300 ease-in-out
                hover:scale-[1.03] hover:-translate-y-2 ${
                  isFlashing ? "world-click-flash" : ""
                } ${
                  world.active
                    ? "border-border bg-card hover:border-primary hover:shadow-[0_8px_25px_hsl(var(--primary)/0.2)]"
                    : "border-border bg-card opacity-50 blur-[0.3px]"
                }`}
                onClick={() => handleWorldClick(world)}
                onMouseEnter={() => setHoveredId(world.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{world.emoji}</span>

                  {isCompleted ? (
                    <span className="px-2 py-1 text-[10px] font-mono bg-green-500/20 text-green-400 border border-green-500/30 animate-pulse">
                      ✓ COMPLETED
                    </span>
                  ) : world.active ? (
                    <span className="status-badge-active status-pulse">
                      ACTIVE
                    </span>
                  ) : (
                    <span className="status-badge-soon">SOON</span>
                  )}
                </div>

                <h2 className="font-heading font-semibold text-foreground">
                  {world.name}
                </h2>
                <p className="text-muted-foreground text-xs">
                  {world.description}
                </p>

                {world.active && isHovered && (
                  <span className="text-[10px] font-mono text-primary opacity-80 animate-fade-up">
                    → click to open
                  </span>
                )}

                {!world.active && isHovered && (
                  <span className="text-[10px] font-mono text-muted-foreground opacity-60 animate-fade-up">
                    module not yet deployed
                  </span>
                )}

                {world.active && progress && (
                  <div className="mt-auto pt-2">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>progress</span>
                      <span>
                        {progress.done}/{progress.total}
                      </span>
                    </div>

                    <div className="h-1 bg-quest-pending w-full">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{
                          width: `${
                            progress.total > 0
                              ? (progress.done / progress.total) * 100
                              : 0
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Add world */}
          <div
            className="add-world-card border-2 border-dashed border-border p-5 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] bg-card group animate-fade-up"
            onClick={() =>
              alert("Fork the repo and add your own world!")
            }
          >
            <span className="text-3xl text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-125 inline-block">
              +
            </span>
            <span className="text-xs text-muted-foreground font-mono group-hover:text-primary transition-colors duration-300">
              Add Your World
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Worlds;
