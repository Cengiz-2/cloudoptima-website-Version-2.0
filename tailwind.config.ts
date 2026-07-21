import type { Config } from "tailwindcss";

/**
 * CloudOptima Design System
 * - Farben ausschließlich über Tokens (keine rohen Hex-Werte in Komponenten)
 * - Typo-Skala: angehobene Lesegrößen (Body 18px, Kleintext min. 14px),
 *   Display-Größen moderat vergrößert, damit Headlines mobil nicht brechen
 * - Spacing: Tailwind 4px-Skala, Layout-Rhythmus in 8px-Schritten
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--void) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          mute: "rgb(var(--ink-mute) / <alpha-value>)",
        },
        azure: {
          DEFAULT: "rgb(var(--azure) / <alpha-value>)",
          bright: "rgb(var(--azure-bright) / <alpha-value>)",
          deep: "rgb(var(--azure-deep) / <alpha-value>)",
        },
        amber: "rgb(var(--amber) / <alpha-value>)",
        mint: "rgb(var(--mint) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
        line: "rgb(var(--ink-soft) / 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.4" }],
        sm: ["1rem", { lineHeight: "1.55" }],
        base: ["1.125rem", { lineHeight: "1.65" }],
        lg: ["1.25rem", { lineHeight: "1.6" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.3" }],
        "3xl": ["2.125rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "4xl": ["2.625rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "5xl": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "6xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "7xl": ["4.9375rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      boxShadow: {
        glow: "0 0 48px -12px rgb(var(--azure) / 0.5)",
        "glow-sm": "0 0 24px -8px rgb(var(--azure) / 0.4)",
        card: "inset 0 1px 0 0 rgb(255 255 255 / 0.05), 0 8px 32px -16px rgb(0 0 0 / 0.6)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
