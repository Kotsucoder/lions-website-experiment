"use client";

import { ThemeProvider } from "@/components/theme-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
