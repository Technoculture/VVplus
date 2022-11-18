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
    },
    extend: {
      keyframes: {},
    },
  },
  plugins: [],
};

module.exports = require("config/tailwind.config");
