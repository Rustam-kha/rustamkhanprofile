// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightWhite: "#f8f9fa",
        deepCharcoal: "#1a1a1a",
        mutedBlue: "#6c8ebf",
      },
    },
  },
  plugins: [],
};
