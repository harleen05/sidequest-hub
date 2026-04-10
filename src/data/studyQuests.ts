import type { Quest } from "./fitnessQuests";

export const studyQuests: Quest[] = [
  // Easy
  { id: "read-2-pages",       title: "Read 2 pages of a book",                  difficulty: "Easy" },
  { id: "review-yesterday",   title: "Review yesterday's learning",              difficulty: "Easy" },
  { id: "watch-video",        title: "Watch an educational video",               difficulty: "Easy" },

  // Medium
  { id: "read",               title: "Read for 20 minutes",                      difficulty: "Medium" },
  { id: "notes",              title: "Review your notes",                         difficulty: "Medium" },
  { id: "flashcards",         title: "Practice flashcards",                       difficulty: "Medium" },
  { id: "revise-topic",       title: "Revise one topic",                          difficulty: "Medium" },
  { id: "summarize",          title: "Summarize a concept in your own words",     difficulty: "Medium" },
  { id: "organize-materials", title: "Organize study materials",                  difficulty: "Medium" },

  // Hard
  { id: "focus",              title: "Focus session (25 min)",                    difficulty: "Hard" },
  { id: "teach",              title: "Teach someone a concept",                   difficulty: "Hard" },
  { id: "solve-questions",    title: "Solve 5 practice questions",                difficulty: "Hard" },
];
