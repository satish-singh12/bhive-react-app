/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2B304",
        secondary: "#263238",
        dark: "#222E34",
        light: "#DDDDDD",
      },
      fontFamily: {
        sans: ["Enter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
