import { useState, useEffect, useCallback } from "react";
import type { Quest, Difficulty } from "@/data/fitnessQuests";

interface QuestListProps {
  worldId: string;
  worldEmoji: string;
  quests: Quest[];
}

const DIFFICULTY_ORDER: Difficulty[] = ["Easy", "Medium", "Hard"];

const DIFFICULTY_META: Record<
  Difficulty,
  { label: string; color: string; tag: string }
> = {
  Easy: {
    label: "Easy",
    color: "text-emerald-400",
    tag: "border-emerald-500/40 text-emerald-400 bg-emerald-500/5",
  },
  Medium: {
    label: "Medium",
    color: "text-yellow-400",
    tag: "border-yellow-500/40 text-yellow-400 bg-yellow-500/5",
  },
  Hard: {
    label: "Hard",
    color: "text-red-400",
    tag: "border-red-500/40 text-red-400 bg-red-500/5",
  },
};

const QuestList = ({ worldId, worldEmoji, quests }: QuestListProps) => {
  const storageKey = `sidequest_${worldId}`;

  // ---------- STORAGE ----------
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

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state, storageKey]);

  // ---------- UI STATES ----------
  const [animating, setAnimating] = useState<string | null>(null);
  const [flashId, setFlashId] = useState<string | null>(null);
  const [progressGlow, setProgressGlow] = useState(false);

  const [collapsed, setCollapsed] = useState<Record<Difficulty, boolean>>({
    Easy: false,
    Medium: false,
    Hard: false,
  });

  // ---------- HELPERS ----------
  const toggle = (questId: string) => {
    const newVal = !state[questId];

    setState((prev) => ({ ...prev, [questId]: newVal }));

    setFlashId(questId);
    setTimeout(() => setFlashId(null), 300);

    if (newVal) {
      setAnimating(questId);
      setTimeout(() => setAnimating(null), 400);

      setProgressGlow(true);
      setTimeout(() => setProgressGlow(false), 600);
    }
  };

  const resetAll = () => {
    const cleared: Record<string, boolean> = {};
    quests.forEach((q) => (cleared[q.id] = false));
    setState(cleared);
  };

  const toggleSection = (diff: Difficulty) => {
    setCollapsed((prev) => ({ ...prev, [diff]: !prev[diff] }));
  };

  // ---------- DATA ----------
  const total = quests.length;
  const completed = Object.values(state).filter(Boolean).length;
  const pct = total > 0 ? (completed / total) * 100 : 0;

  const grouped: Record<Difficulty, Quest[]> = {
    Easy: [],
    Medium: [],
    Hard: [],
  };

  quests.forEach((q) => {
    grouped[q.difficulty].push(q);
  });

  // ---------- RENDER ----------
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-mono">
          system: {worldId}
        </span>
        <span className="text-xs text-muted-foreground font-mono">
          tracking...
        </span>
      </div>

      {/* PROGRESS */}
      <div
        className={`p-5 border rounded ${
          progressGlow ? "shadow-lg" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-3">
          <div>
            <span>{worldEmoji}</span>{" "}
            <span>
              {completed} / {total}
            </span>
          </div>

          <button onClick={resetAll} className="text-xs border px-2 py-1">
            RESET
          </button>
        </div>

        <div className="h-2 bg-gray-200">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* QUEST LIST */}
      {total === 0 ? (
        <div className="text-center text-sm text-muted-foreground">
          No quests available.
        </div>
      ) : (
        <div className="space-y-4">
          {DIFFICULTY_ORDER.map((diff) => {
            const group = grouped[diff];
            const meta = DIFFICULTY_META[diff];
            const isCollapsed = collapsed[diff];

            if (group.length === 0) return null;

            return (
              <div key={diff}>
                {/* SECTION HEADER */}
                <button
                  onClick={() => toggleSection(diff)}
                  className="flex items-center gap-3 w-full"
                >
                  <span className={meta.color}>{diff}</span>
                  <span className="text-xs">
                    {
                      group.filter((q) => state[q.id]).length
                    }/{group.length}
                  </span>
                </button>

                {/* ITEMS */}
                {!isCollapsed && (
                  <div className="space-y-2 mt-2">
                    {group.map((quest, i) => {
                      const done = state[quest.id];
                      const isAnimating = animating === quest.id;
                      const isFlashing = flashId === quest.id;

                      return (
                        <div
                          key={quest.id}
                          onClick={() => toggle(quest.id)}
                          className={`p-3 border cursor-pointer ${
                            done ? "opacity-60" : ""
                          } ${isAnimating ? "scale-105" : ""} ${
                            isFlashing ? "bg-yellow-100" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={done}
                              readOnly
                            />

                            <span
                              className={`${
                                done ? "line-through" : ""
                              }`}
                            >
                              {quest.title}
                            </span>

                            <span
                              className={`ml-auto text-xs ${
                                done
                                  ? "text-green-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {done ? "done" : "pending"}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuestList;
