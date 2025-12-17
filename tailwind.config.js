/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* =========================
         * SURFACE
         * ========================= */
        primary: "#FFFFFF",
        secondary: "#0B0B0F",

        /* =========================
         * TEXT
         * ========================= */
        "on-primary": "#0B0B0F",
        "on-secondary": "#FFFFFF",

        /* =========================
         * ACCENT
         * ========================= */
        accent: "#C6FF00",

        /* =========================
         * BORDER
         * ========================= */
        "border-primary": "#0B0B0F",
        "border-secondary": "#FFFFFF",
      },

      boxShadow: {
        neon: "0 0 0 2px rgba(198,255,0,0.35)",
        "neon-strong": "0 0 0 3px rgba(198,255,0,0.55)",
      },

      fontFamily: {
        landing: ["Press Start 2P", "system-ui", "sans-serif"],
      },

      /* =========================
       * TEXT SCALE SYSTEM
       * ========================= */
      fontSize: {
        "heading-xl": [
          "2.25rem", // text-4xl
          {
            lineHeight: "2.5rem",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-l": [
          "1.875rem", // text-3xl
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-m": [
          "1.5rem", // text-2xl
          {
            lineHeight: "2rem",
            fontWeight: "600",
          },
        ],
        body: [
          "1rem", // text-base
          {
            lineHeight: "1.75rem", // leading-7
          },
        ],
        small: [
          "0.875rem", // text-sm
          {
            lineHeight: "1.5rem", // leading-6
          },
        ],
        meta: [
          "0.75rem", // text-xs
          {
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          },
        ],
      },
    },
  },
  plugins: [],
};
