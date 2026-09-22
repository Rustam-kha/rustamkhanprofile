// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#02060f", // deepest navy
        navy: "#040c1f", // mid navy
        navyLight: "#071735", // lightest navy
        accent: "#5ba8ff", // Inverex accent blue
        accentDark: "#2d5fa0",
        gold: "#e8c078", // Inverex warm gold
        lightWhite: "#e7e7e7", // Inverex light text
        mutedGray: "#7a818a", // Inverex muted text
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};