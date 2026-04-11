export interface Quest {
  id: string;
  title: string;
}

export const fitnessQuests: Quest[] = [
  { id: "water",       title: "Drink water" },
  { id: "rotations",   title: "Rotate your neck & shoulders" },
  { id: "posture",     title: "Fix your posture for 2 minutes" },
  { id: "breathing",   title: "5-minute deep breathing" },
  { id: "walk",        title: "Go for a walk" },
  { id: "stretch",     title: "Stretch for 5 minutes" },
  { id: "sleep",       title: "Sleep 7+ hours" },
  { id: "dance",       title: "Dance to a full song" },
  { id: "touch-toes",  title: "Touch your toes 10 times" },
  { id: "roomcleanup", title: "Do a quick room clean-up sprint" },
  { id: "pushups",     title: "Do 10 push-ups" },
  { id: "plank",       title: "30-second plank" },
  { id: "wallsit",     title: "Do 15-second wall sit" },
];
