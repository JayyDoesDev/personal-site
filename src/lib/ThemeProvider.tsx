import { useEffect, useState, type ReactNode } from "react";
import { THEME_KEY, ThemeContext, type ThemeId } from "./theme";
import { readStore, writeStore } from "./storage";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>(() =>
    readStore(THEME_KEY) === "cherry" ? "cherry" : "gray",
  );

  useEffect(() => {
    writeStore(THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
