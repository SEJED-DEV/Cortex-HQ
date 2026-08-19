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
        aurora: {
          purple: "#6d28d9",
          violet: "#a855f7",
          blue: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "16px",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.5s ease-out both",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "scale-in": "scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "drift-1": "drift-1 25s ease-in-out infinite",
        "drift-2": "drift-2 30s ease-in-out infinite",
        "drift-3": "drift-3 28s ease-in-out infinite",
        "aurora-pulse": "aurora-pulse 8s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "float-slow": "float-slow 4s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        marquee: "marquee 30s linear infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
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
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "drift-1": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "drift-2": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(1.05)" },
          "66%": { transform: "translate(30px, -40px) scale(0.9)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "drift-3": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, 40px) scale(1.08)" },
          "66%": { transform: "translate(-30px, -30px) scale(0.92)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
        "aurora-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(168, 85, 247, 0.2)" },
          "50%": { boxShadow: "0 0 40px -5px rgba(168, 85, 247, 0.4)" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(168, 85, 247, 0.2)" },
          "50%": { borderColor: "rgba(168, 85, 247, 0.5)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
