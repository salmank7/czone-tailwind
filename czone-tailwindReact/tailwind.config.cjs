/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "#064F88",
        "blue-2": "#0C4A79",
        "blue-3": "#022E4C",
        "blue-4": "#00385E",
        "yellow-1": "#FFDC0D",
        "grey-1": "#E2E9EF",
        "grey-2": "#E7E7E7",
        "grey-3": "#49494A",
        "white-2": "#f9f0f9",
        "black-1": "#7A7A7B",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}