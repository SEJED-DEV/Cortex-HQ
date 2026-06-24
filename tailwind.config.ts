import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cortex: {
          bg: "#fafafa",
          card: "#ffffff",
          border: "#e2e8f0",
          accent: "#ffffff",
          "accent-light": "#f0f0f0",
          text: "#1a1a2e",
          muted: "#64748b",
          "overlay": "rgba(0,0,0,0.55)",
        },
      },
      fontFamily: {
        sans: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
