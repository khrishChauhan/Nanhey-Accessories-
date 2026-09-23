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
            DEFAULT: "#e52e06",
            50: "#fff1f0",
            100: "#ffe0db",
            500: "#e52e06",
            600: "#cc2400",
            700: "#a81e00",
            dark: "#b91c1c",
          },
          dark: {
            DEFAULT: "#0f172a",
            surface: "#1e293b",
            navy: "#0a0f1d",
            muted: "#334155",
          },
          accent: {
            green: "#22c55e",
            "green-hover": "#16a34a",
            yellow: "#f59e0b",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        cctv: "0 10px 25px -5px rgba(229, 46, 6, 0.15), 0 8px 10px -6px rgba(15, 23, 42, 0.1)",
        card: "0 2px 10px 0 rgba(0, 0, 0, 0.05)",
        "card-hover": "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
