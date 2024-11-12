/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
  // presets: [],
};
