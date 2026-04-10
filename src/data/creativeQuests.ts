export type { Difficulty } from "./fitnessQuests";
import type { Quest } from "./fitnessQuests";

export const creativeQuests: Quest[] = [
  // Easy
  { id: "c4", title: "Make a playlist for a specific vibe",          difficulty: "Easy" },
  { id: "c5", title: "Take a creative photo",                        difficulty: "Easy" },

  // Medium
  { id: "c1", title: "Sketch your dream room or workspace",          difficulty: "Medium" },
  { id: "c3", title: "Create a short story in under 5 sentences",   difficulty: "Medium" },

  // Hard
  { id: "c2", title: "Recreate a scene from a movie or series",     difficulty: "Hard" },
];
