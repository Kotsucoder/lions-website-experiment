import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Adobe Caslon", "Times New Roman", "Times", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
