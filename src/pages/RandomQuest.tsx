import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorldLayout from "@/components/WorldLayout";
import { fitnessQuests } from "@/data/fitnessQuests";
import { studyQuests } from "@/data/studyQuests";
import { socialQuests } from "@/data/socialQuests";
import type { Quest } from "@/data/fitnessQuests";

interface QuestWithWorld extends Quest {
  worldId: string;
  worldEmoji: string;
  worldName: string;
}

const allQuests: QuestWithWorld[] = [
  ...fitnessQuests.map((q) => ({ ...q, worldId: "fitness", worldEmoji: "🏋️", worldName: "Fitness World" })),
  ...studyQuests.map((q) => ({ ...q, worldId: "study", worldEmoji: "📚", worldName: "Study World" })),
  ...socialQuests.map((q) => ({ ...q, worldId: "social", worldEmoji: "🤝", worldName: "Social World" })),
];

const getCompleted = (worldId: string, questId: string): boolean => {
  try {
    const data = JSON.parse(localStorage.getItem(`sidequest_${worldId}`) || "{}");
    return !!data[questId];
  } catch {
    return false;
  }
};

const setCompleted = (worldId: string, questId: string, value: boolean) => {
  try {
    const data = JSON.parse(localStorage.getItem(`sidequest_${worldId}`) || "{}");
    data[questId] = value;
    localStorage.setItem(`sidequest_${worldId}`, JSON.stringify(data));
  } catch {
    // noop
  }
};

const pickRandom = (exclude?: QuestWithWorld): QuestWithWorld => {
  const pool = exclude ? allQuests.filter((q) => q.id !== exclude.id || q.worldId !== exclude.worldId) : allQuests;
  return pool[Math.floor(Math.random() * pool.length)];
};

const RandomQuest = () => {
  const navigate = useNavigate();
  const [quest, setQuest] = useState<QuestWithWorld>(() => pickRandom());
  const [done, setDone] = useState(() => getCompleted(quest.worldId, quest.id));
  const [rolling, setRolling] = useState(false);
  const [flashComplete, setFlashComplete] = useState(false);

  const handleReroll = () => {
    setRolling(true);
    setTimeout(() => {
      const next = pickRandom(quest);
      setQuest(next);
      setDone(getCompleted(next.worldId, next.id));
      setRolling(false);
    }, 300);
  };

  const handleToggle = () => {
    const newVal = !done;
    setDone(newVal);
    setCompleted(quest.worldId, quest.id, newVal);
    if (newVal) {
      setFlashComplete(true);
      setTimeout(() => setFlashComplete(false), 600);
    }
  };

  return (
    <WorldLayout worldName="Random Quest">
      <div className="space-y-6">
        {/* System feedback */}
        <div className="flex items-center justify-between animate-fade-up">
          <span className="text-[10px] text-muted-foreground font-mono opacity-60">
            system: random_quest module active
          </span>
          <span className="text-[10px] text-muted-foreground font-mono opacity-60">
            pulling from all worlds…
          </span>
        </div>

        {/* Quest card */}
        <div
          className={`panel p-6 space-y-5 animate-fade-up transition-all duration-300 ${
            flashComplete ? "shadow-[0_0_20px_hsl(var(--accent)/0.35)]" : ""
          } ${rolling ? "opacity-30 scale-[0.98]" : "opacity-100 scale-100"}`}
          style={{ transition: "opacity 0.25s ease, transform 0.25s ease, box-shadow 0.5s ease" }}
        >
          {/* Source world badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">{quest.worldEmoji}</span>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {quest.worldName}
              </span>
            </div>
            {done && <span className="status-badge-active quest-pop">DONE ✓</span>}
          </div>

          {/* Quest title */}
          <div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">
              Your Quest
            </p>
            <h2
              className={`text-xl font-heading font-semibold transition-colors duration-300 ${
                done ? "text-muted-foreground line-through" : "text-foreground"
              }`}
            >
              {quest.title}
            </h2>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleToggle}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-mono border transition-all duration-200 cursor-pointer ${
                done
                  ? "border-accent text-accent bg-transparent hover:bg-accent hover:text-primary-foreground"
                  : "border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              <div
                className={`w-3.5 h-3.5 border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                  done ? "border-accent bg-accent" : "border-current"
                }`}
              >
                {done && (
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              {done ? "MARK UNDONE" : "MARK DONE"}
            </button>

            <button
              onClick={handleReroll}
              disabled={rolling}
              className="px-4 py-2 text-xs font-mono border border-border text-muted-foreground bg-transparent hover:border-primary hover:text-primary transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ↻ REROLL
            </button>
          </div>
        </div>

        {/* Info panel */}
        <div className="panel p-4 animate-fade-up">
          <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
            <span className="text-primary">// </span>
            Random Quest pulls a single quest from all active worlds. Complete it, or reroll for a new challenge. Progress syncs with each world's tracker.
          </p>
        </div>

        {/* Nav back */}
        <div className="animate-fade-up">
          <button
            onClick={() => navigate("/worlds")}
            className="text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer"
          >
            ← back to worlds
          </button>
        </div>
      </div>
    </WorldLayout>
  );
};

export default RandomQuest;
