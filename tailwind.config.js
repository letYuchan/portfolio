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
          "3.5rem", // 🔥 메인 히어로 타이틀
          {
            lineHeight: "1.1",
            fontWeight: "700",
            letterSpacing: "-0.03em",
          },
        ],
        "heading-l": [
          "2.75rem", // 섹션 타이틀
          {
            lineHeight: "1.15",
            fontWeight: "700",
            letterSpacing: "-0.025em",
          },
        ],
        "heading-m": [
          "2rem", // 카드/프로젝트 타이틀
          {
            lineHeight: "1.25",
            fontWeight: "600",
          },
        ],
        body: [
          "1.5rem", // 🔥 메인 설명 텍스트
          {
            lineHeight: "1.75",
          },
        ],
        small: [
          "1.25rem", // 보조 설명도 작지 않게
          {
            lineHeight: "1.6",
          },
        ],
        meta: [
          "1rem",
          {
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          },
        ],
      },
    },
  },
  plugins: [],
};
