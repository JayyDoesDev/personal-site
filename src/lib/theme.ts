import { createContext, useContext } from "react";

export type ThemeId = "gray" | "cherry";

export const THEMES: { id: ThemeId; label: string; a: string; b: string }[] = [
  { id: "gray", label: "B&W", a: "#E6E4DF", b: "#151515" },
  { id: "cherry", label: "Cherry blossom", a: "#F4B6C2", b: "#2B2628" },
];

export const THEME_KEY = "tarab1te:theme";

export interface ThemeValue {
  theme: ThemeId;
  setTheme: (id: ThemeId) => void;
}

export const ThemeContext = createContext<ThemeValue>({ theme: "gray", setTheme: () => undefined });

export function useTheme(): ThemeValue {
  return useContext(ThemeContext);
}
