import { createContext } from "react";

export type ThemeMode = "system" | "light" | "dark";

export interface ThemeContextValue {
  mode: ThemeMode;
  resolved: "light" | "dark";
  setMode: (mode: ThemeMode) => void;
  cycleMode: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
