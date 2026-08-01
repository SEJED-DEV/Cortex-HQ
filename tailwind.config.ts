import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cortex: {
          50: "#ffffff",
          100: "#fafafa",
          200: "#f5f5f6",
          300: "#efeff1",
          400: "#ffffff",
          500: "#f1f1f3",
          600: "#d9d9de",
          700: "#bcbcc3",
          800: "#9a9aa3",
          900: "#76767f",
          950: "#505057",
        },
        surface: {
          50: "#0a0a0b",
          100: "#0c0c0e",
          200: "#101012",
          300: "#141416",
          400: "#19191c",
          500: "#1f1f23",
          600: "#26262a",
          700: "#2f2f34",
          800: "#3a3a40",
          900: "#48484f",
          950: "#5a5a63",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-sans)", "monospace"],
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out both",
        "cursor-blink": "cursor-blink 1.1s step-end infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
