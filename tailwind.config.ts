import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"]
      },
      colors: {
        primary: {
          50: "#E9F3FF",
          100: "#D2E6FF",
          200: "#A0CBFF",
          300: "#6EB0FF",
          400: "#3C95FF",
          500: "#0B7AFF",
          600: "#005FD6",
          700: "#0046A0",
          800: "#002D6A",
          900: "#001334"
        },
        accent: {
          50: "#F5F5FF",
          100: "#ECEBFF",
          200: "#D2CEFF",
          300: "#B9B1FF",
          400: "#A094FF",
          500: "#8777FF",
          600: "#695BCC",
          700: "#4E4199",
          800: "#342866",
          900: "#1A1033"
        },
        success: "#20C997",
        warning: "#F0AD4E",
        danger: "#E45865",
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5F5",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A"
        }
      },
      boxShadow: {
        soft: "0 10px 40px -20px rgba(15, 23, 42, 0.35)",
        card: "0 15px 30px -10px rgba(15, 23, 42, 0.25)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(11, 122, 255, 0.25), rgba(135, 119, 255, 0.05) 45%, transparent)",
        "gradient-accent":
          "linear-gradient(135deg, rgba(11, 122, 255, 0.9), rgba(135, 119, 255, 0.9))",
        "gradient-surface":
          "linear-gradient(145deg, rgba(248, 250, 252, 0.98), rgba(236, 239, 244, 0.88))"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.5rem"
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
