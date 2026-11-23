import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB", // Primary Accent
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        surface: {
          light: "#F8FAFC",
          cardLight: "#FFFFFF",
          borderLight: "#E2E8F0",
          dark: "#0B0F19",
          cardDark: "#111827",
          cardDarkHover: "#162032",
          borderDark: "#1F2937",
        },
        text: {
          primaryLight: "#101828",
          secondaryLight: "#667085",
          primaryDark: "#F8FAFC",
          secondaryDark: "#94A3B8",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

