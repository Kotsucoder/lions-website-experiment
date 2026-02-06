"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeKey = "traditional" | "playful" | "bento" | "classic" | "linkbio";

const ThemeContext = createContext<{ theme: ThemeKey; setTheme: (t: ThemeKey) => void } | null>(null);

const themeOptions: ThemeKey[] = ["traditional", "playful", "bento", "classic", "linkbio"];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeKey>("traditional");

  useEffect(() => {
    const stored = window.localStorage.getItem("mlc-theme") as ThemeKey | null;
    if (stored && themeOptions.includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("mlc-theme", theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
