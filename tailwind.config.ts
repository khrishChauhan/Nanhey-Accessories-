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
          ruby: {
            DEFAULT: "#D9222A",
            glow: "#FF2E44",
            deep: "#8A0E15",
            light: "#FFF1F2",
            50: "#FFF1F2",
            100: "#FFE4E6",
            500: "#D9222A",
            600: "#C01B22",
            700: "#8A0E15",
          },
          red: {
            DEFAULT: "#D9222A",
            50: "#FFF1F2",
            100: "#FFE4E6",
            500: "#D9222A",
            600: "#C01B22",
            700: "#8A0E15",
            dark: "#7A0B12",
          },
          obsidian: {
            DEFAULT: "#090D14",
            canvas: "#090D14",
            surface: "#0F172A",
            card: "#131C31",
            border: "rgba(255, 255, 255, 0.08)",
          },
          dark: {
            DEFAULT: "#090D14",
            surface: "#0F172A",
            card: "#131C31",
            navy: "#060A10",
            muted: "#334155",
          },
          accent: {
            green: "#10B981",
            "green-hover": "#059669",
            yellow: "#F59E0B",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        "12": "12px",
      },
      boxShadow: {
        cctv: "0 10px 25px -5px rgba(217, 34, 42, 0.18), 0 8px 10px -6px rgba(9, 13, 20, 0.12)",
        card: "0 2px 10px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        "card-hover": "0 14px 30px -5px rgba(0, 0, 0, 0.08), 0 6px 12px -3px rgba(217, 34, 42, 0.08)",
        ruby: "0 10px 30px -5px rgba(217, 34, 42, 0.25)",
        "ruby-lg": "0 15px 35px -5px rgba(217, 34, 42, 0.35)",
        glow: "0 0 20px -2px rgba(255, 46, 68, 0.25)",
        "glow-lg": "0 0 35px -2px rgba(255, 46, 68, 0.35)",
        obsidian: "0 20px 40px -15px rgba(9, 13, 20, 0.6)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "ruby-glow": "radial-gradient(circle at center, rgba(217, 34, 42, 0.15) 0%, transparent 70%)",
        "studio-spotlight": "radial-gradient(circle at top center, rgba(217, 34, 42, 0.18) 0%, rgba(9, 13, 20, 0) 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
