import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            DEFAULT: "#DC2626", // Precision Red
            50: "#FEF2F2",
            100: "#FEE2E2",
            500: "#DC2626",
            600: "#B91C1C",
            700: "#991B1B",
            dark: "#7F1D1D",
          },
          ruby: {
            DEFAULT: "#DC2626",
            glow: "#EF4444",
            deep: "#991B1B",
            light: "#FEF2F2",
            50: "#FEF2F2",
            100: "#FEE2E2",
            500: "#DC2626",
            600: "#B91C1C",
            700: "#991B1B",
          },
          obsidian: {
            DEFAULT: "#09090B",
            canvas: "#09090B",
            surface: "#18181B",
            card: "#18181B",
            border: "rgba(255, 255, 255, 0.08)",
          },
          dark: {
            DEFAULT: "#09090B",
            surface: "#18181B",
            card: "#27272A",
            navy: "#09090B",
            muted: "#71717A",
          },
          accent: {
            green: "#16A34A",
            "green-hover": "#15803D",
            yellow: "#D97706",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
        md: "8px",
        lg: "8px",
        xl: "12px",
        "2xl": "12px",
        "3xl": "16px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 4px 12px -2px rgba(0, 0, 0, 0.06)",
        cctv: "0 2px 8px -1px rgba(0, 0, 0, 0.06)",
        ruby: "0 1px 3px 0 rgba(220, 38, 38, 0.2)",
        "ruby-lg": "0 4px 12px -2px rgba(220, 38, 38, 0.25)",
        glow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "glow-lg": "0 2px 6px 0 rgba(0, 0, 0, 0.08)",
        obsidian: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
        glass: "0 4px 16px 0 rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
