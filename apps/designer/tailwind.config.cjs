import("tailwindcss").Config;
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      RobotoSerif: ["Roboto Serif", "serif"],
      Bodoni: ["Libre Bodoni", "serif"],
      RobotoMono: ["Roboto Mono", "monospace"],
    },

    extend: {
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
      colors: {
        white: "white",
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          400: "#9ca3af",
        },
        amber: {
          100: "#fef3c7",
          300: "#fcd34d",
        },
        rose: {
          100: "#ffe4e6",
        },
        red: {
          50: "#fef2f2",
          200: "#fecaca",
        },
        sky: {
          500: "#0ea5e9",
          600: "#0284c7",
        },
        zinc: {
          300: "#d4d4d8",
        },
        neutral: {
          100: "#f5f5f5",
          400: "#a3a3a3",
          600: "#525252",
        },
        pink: {
          50: "#fdf2f8",
        },
      },
      keyframes: {},
    },
  },
  plugins: [],
};

module.exports = require("config/tailwind.config");
