import { useState, useEffect, useCallback } from "react";
import type { Quest } from "@/data/fitnessQuests";

interface QuestListProps {
  worldId: string;
  worldEmoji: string;
  quests: Quest[];
}

const QuestList = ({ worldId, worldEmoji, quests }: QuestListProps) => {
  const storageKey = `sidequest_${worldId}`;

  const loadState = useCallback((): Record<string, boolean> => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  }, [storageKey]);

  const [state, setState] = useState<Record<string, boolean>>(() => {
    const saved = loadState();
    const full: Record<string, boolean> = {};
    quests.forEach((q) => (full[q.id] = saved[q.id] ?? false));
    return full;
  });

  const [animating, setAnimating] = useState<string | null>(null);
  const [flashId, setFlashId] = useState<string | null>(null);
  const [progressGlow, setProgressGlow] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  const toggle = (questId: string) => {
    const newVal = !state[questId];
    setState((prev) => ({ ...prev, [questId]: newVal }));

    // Flash effect
    setFlashId(questId);
    setTimeout(() => setFlashId(null), 300);

    if (newVal) {
      setAnimating(questId);
      setTimeout(() => setAnimating(null), 400);
      // Progress glow
      setProgressGlow(true);
      setTimeout(() => setProgressGlow(false), 600);
    }
  };

  const resetAll = () => {
    const cleared: Record<string, boolean> = {};
    quests.forEach((q) => (cleared[q.id] = false));
    setState(cleared);
  };

  const completed = Object.values(state).filter(Boolean).length;
  const total = quests.length;
  const pct = total > 0 ? (completed / total) * 100 : 0;
  const filteredQuests = quests.filter((q) =>
  q.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="space-y-6">
      {/* System feedback */}
      <div className="flex items-center justify-between animate-fade-up">
        <span className="text-[10px] text-muted-foreground font-mono opacity-60">
          system: {worldId} module active
        </span>
        <span className="text-[10px] text-muted-foreground font-mono opacity-60">
          tracking daily activity…
        </span>
      </div>

      {/* Progress panel */}
      <div
        className={`panel p-5 space-y-4 animate-fade-up transition-shadow duration-500 ${
          progressGlow ? "shadow-[0_0_16px_hsl(var(--accent)/0.25)]" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
              Status
            </span>
            <div className="flex items-center gap-2">
              <span className="text-lg">{worldEmoji}</span>
              <span className="text-sm text-foreground font-mono font-medium">
                {completed} / {total}
              </span>
              <span className="text-xs text-muted-foreground font-mono">
                quests completed
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {completed === total && total > 0 && (
              <span className="status-badge-active quest-pop">ALL CLEAR ✓</span>
            )}
            <button
              onClick={resetAll}
              className="text-[10px] font-mono text-muted-foreground border border-border px-2 py-1 bg-transparent cursor-pointer hover:text-destructive hover:border-destructive transition-colors duration-200"
            >
              RESET
            </button>
          </div>
        </div>
        <div className="h-2 bg-quest-pending w-full overflow-hidden">
          <div
            className={`h-full bg-accent transition-all duration-700 ease-out ${
              progressGlow ? "shadow-[0_0_8px_hsl(var(--accent)/0.5)]" : ""
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="panel p-3 animate-fade-up">
         <input
          type="text"
          placeholder="Search quests..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 text-sm font-mono bg-transparent border border-border focus:outline-none focus:border-accent"
        />
      </div>




      {/* Quest items */}
      {filteredQuests.length === 0 ? (
        <div className="panel p-8 text-center animate-fade-up">
          <p className="text-muted-foreground text-sm font-mono">
          {search ? "No quests found." : "No quests available."}
</p>
        </div>
      ) : (
        <div className="space-y-1">
          {filteredQuests.map((quest, i) => {

            const done = state[quest.id];
            const isAnimating = animating === quest.id;
            const isFlashing = flashId === quest.id;
            return (
              <div
                key={quest.id}
                onClick={() => toggle(quest.id)}
                className={`quest-item group relative p-4 flex items-center gap-4 cursor-pointer select-none animate-fade-up border border-border bg-card transition-all duration-200
                  ${isAnimating ? "quest-pop" : ""}
                  ${isFlashing ? "quest-flash" : ""}
                  ${done ? "opacity-80" : ""}
                `}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {/* Left accent line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-top" />

                {/* Checkbox */}
                <div
                  className={`w-5 h-5 border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    done
                      ? "border-accent bg-accent shadow-[0_0_6px_hsl(var(--accent)/0.4)]"
                      : "border-muted-foreground bg-transparent group-hover:border-foreground"
                  }`}
                >
                  {done && (
                    <svg
                      className={`w-3 h-3 text-primary-foreground ${isAnimating ? "quest-check-enter" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <span
                  className={`text-sm font-mono transition-all duration-200 ${
                    done ? "text-muted-foreground line-through" : "text-foreground"
                  }`}
                >
                  {quest.title}
                </span>

                {/* Status */}
                <span
                  className={`ml-auto text-[10px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                    done ? "text-accent" : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {done ? "done" : "pending"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuestList;
