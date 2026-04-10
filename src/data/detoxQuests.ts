import type { Quest } from "./fitnessQuests";

export const detoxQuests: Quest[] = [
  // Easy
  { id: "grayscale",         title: "Switch phone to grayscale mode",                     difficulty: "Easy" },
  { id: "check-screentime",  title: "Check your screen time report and set a goal",       difficulty: "Easy" },
  { id: "airplane-mode",     title: "Turn on airplane mode for 20 minutes",               difficulty: "Easy" },

  // Medium
  { id: "no-phone-10",       title: "No phone for 10 minutes",                            difficulty: "Medium" },
  { id: "disable-notifs",    title: "Disable all notifications for 1 hour",               difficulty: "Medium" },
  { id: "no-screen-meal",    title: "Eat a meal without any screen",                      difficulty: "Medium" },
  { id: "app-limits",        title: "Set a 15-min daily limit on your most-used app",     difficulty: "Medium" },
  { id: "focus-session",     title: "Do a 25-min deep work session, phone face-down",     difficulty: "Medium" },

  // Hard
  { id: "no-social",         title: "Stay off social media for 2 hours",                  difficulty: "Hard" },
  { id: "phone-box",         title: "Put your phone in another room for 30 minutes",      difficulty: "Hard" },
  { id: "no-scroll-morning", title: "Don't check your phone for first 30 min after waking", difficulty: "Hard" },
  { id: "delete-app",        title: "Delete one app you mindlessly open",                 difficulty: "Hard" },
  { id: "screen-curfew",     title: "No screens 30 minutes before bed",                   difficulty: "Hard" },
];
