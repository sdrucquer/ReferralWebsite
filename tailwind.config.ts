import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        success: "var(--color-success)",
        danger: "var(--color-danger)"
      },
      boxShadow: {
        card: "0 10px 30px rgba(12, 35, 48, 0.08)",
        cardHover: "0 18px 40px rgba(12, 35, 48, 0.14)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fade-up 500ms ease forwards"
      }
    }
  },
  plugins: []
};

export default config;
