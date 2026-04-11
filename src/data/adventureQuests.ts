import { Quest } from "./fitnessQuests";

// Daily routine-based adventure quests
export const adventureQuests: Quest[] = [
  // Easy (Low Friction)
  { id: "try-new", title: "Try something new today", difficulty: "Easy" },
  { id: "new-route", title: "Take a completely different route to work or the store", difficulty: "Easy" },
  
  // Medium (Social/Action)
  { id: "talk-new", title: "Talk to someone new (e.g., a barista or neighbor)", difficulty: "Medium" },
  { id: "no-phone-meal", title: "Eat a meal or visit a cafe without using your phone", difficulty: "Medium" },
  
  // Hard (Significant Comfort Break)
  { id: "explore", title: "Explore a new neighborhood or local park you've never visited", difficulty: "Hard" },
  { id: "stranger-recommendation", title: "Ask a stranger for a book or music recommendation", difficulty: "Hard" }
];
