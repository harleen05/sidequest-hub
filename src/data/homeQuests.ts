import type { Quest } from "./fitnessQuests";

export const homeQuests: Quest[] = [
  // Easy
  { id: "make-bed",       title: "Make your bed",                                difficulty: "Easy" },
  { id: "take-out-trash", title: "Take out the trash",                           difficulty: "Easy" },
  { id: "plant-care",     title: "Water your plants or tend to one living thing", difficulty: "Easy" },
  { id: "reset-room",     title: "Do a 5-minute room reset before bed",           difficulty: "Easy" },

  // Medium
  { id: "organize-shelf", title: "Organize one shelf",                            difficulty: "Medium" },
  { id: "clear-desk",     title: "Clear your desk completely",                    difficulty: "Medium" },
  { id: "wipe-surfaces",  title: "Wipe down all surfaces in one room",            difficulty: "Medium" },
  { id: "do-dishes",      title: "Wash all dishes in the sink",                   difficulty: "Medium" },

  // Hard
  { id: "laundry",         title: "Do a load of laundry",                         difficulty: "Hard" },
  { id: "declutter-drawer",title: "Declutter one drawer or cabinet",              difficulty: "Hard" },
  { id: "vacuum",          title: "Vacuum or sweep one room",                     difficulty: "Hard" },
  { id: "donate-item",     title: "Find one item to donate or throw away",        difficulty: "Hard" },
];
