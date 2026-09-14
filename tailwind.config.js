/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode toggling via a class on the HTML tag
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          card: "rgb(var(--color-card) / <alpha-value>)",
          neon: "rgb(var(--color-neon) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', "monospace", "ui-monospace"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
