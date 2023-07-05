/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        browk: {
          disabled: "#E3DAF9",
          primary: "#6E41E2",
          hover: "#5835B0",
          active: "#472C8A",
          "white-88": "rgba(255, 255, 255, 0.88)",
          "gray-m": "#FAFAFA",
          "gray-l": "#F1F1F1",
          "gray-s": "#D4D4D4",
          "gray-s-48": "rgba(17, 17, 17, 0.48)",
          "gray-k": "#6B6B6B",
          black: "#111111",
          "red-girl": "#F9E3E3",
          "red-boy": "#F2CACA",
          red: "#DB524E",
          green: "#27AE60",
          blue: "#428BF9",
        },
      },
    },
  },
  plugins: [],
};
