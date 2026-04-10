export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Quest {
  id: string;
  title: string;
  difficulty: Difficulty;
}

export const fitnessQuests: Quest[] = [
  // Easy
  { id: "water",       title: "Drink water",                      difficulty: "Easy" },
  { id: "rotations",   title: "Rotate your neck & shoulders",     difficulty: "Easy" },
  { id: "posture",     title: "Fix your posture for 2 minutes",   difficulty: "Easy" },
  { id: "breathing",   title: "5-minute deep breathing",          difficulty: "Easy" },

  // Medium
  { id: "walk",        title: "Go for a walk",                    difficulty: "Medium" },
  { id: "stretch",     title: "Stretch for 5 minutes",            difficulty: "Medium" },
  { id: "sleep",       title: "Sleep 7+ hours",                   difficulty: "Medium" },
  { id: "dance",       title: "Dance to a full song",             difficulty: "Medium" },
  { id: "touch-toes",  title: "Touch your toes 10 times",         difficulty: "Medium" },
  { id: "roomcleanup", title: "Do a quick room clean-up sprint",  difficulty: "Medium" },

  // Hard
  { id: "pushups",     title: "Do 10 push-ups",                   difficulty: "Hard" },
  { id: "plank",       title: "30-second plank",                  difficulty: "Hard" },
  { id: "wallsit",     title: "Do 15-second wall sit",            difficulty: "Hard" },
];
