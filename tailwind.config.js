/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary_light: " #6b21a8",
        primary_dark: "#9333ea",
        secondary_light: "#a8a29e",
        secondary_dark: "#57534e",
        light: "#f1f5f9",
        light2: "#f8fafc",
        dark: "#020617",
      },
    },
  },
  plugins: [],
}
