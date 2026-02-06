"use client";

import { useTheme, ThemeKey } from "@/components/theme-context";

const labels: Record<ThemeKey, string> = {
  traditional: "Traditional",
  playful: "Playful",
  bento: "Bento",
  classic: "Classic",
  linkbio: "Link-in-bio"
};

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="flex items-center gap-2 text-sm font-semibold">
      <span className="text-accent">Concept</span>
      <select
        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm"
        value={theme}
        onChange={(event) => setTheme(event.target.value as ThemeKey)}
        aria-label="Select a design concept"
      >
        {Object.entries(labels).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
