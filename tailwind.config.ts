import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-vazirmatn)", "system-ui", "sans-serif"],
        en: ["var(--font-inter)", "system-ui", "sans-serif"],
        fa: ["var(--font-vazirmatn)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      // We map the CSS variables here so you can use classes like `text-primary` or `bg-surface`
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        border: "var(--color-border)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
    },
  },
  plugins: [],
};

export default config;