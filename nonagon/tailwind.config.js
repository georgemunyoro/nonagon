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
          "green-light": "#CBECD9",
          blue: "#428BF9",
        },
      },
      boxShadow: {
        browk:
          "0px 4px 16px 0px rgba(51, 51, 51, 0.08), 0px 4px 4px 0px rgba(51, 51, 51, 0.04)",
        "browk-input-error":
          "0px 4px 40px 0px rgba(255, 195, 195, 0.24), 0px 4px 4px 0px rgba(255, 195, 195, 0.04)",
        "browk-input-success":
          "0px 4px 40px 0px rgba(39, 174, 96, 0.24), 0px 4px 4px 0px rgba(39, 174, 96, 0.04)",
        "browk-hover":
          "0px 4px 56px 0px rgba(51, 51, 51, 0.16), 0px 4px 4px 0px rgba(51, 51, 51, 0.04)",
        "browk-active":
          "0px 4px 24px 0px rgba(51, 51, 51, 0.24), 0px 4px 4px 0px rgba(51, 51, 51, 0.04)",
      },
    },
  },
  plugins: [],
};
