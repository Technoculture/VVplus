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
      keyframes: {},
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

module.exports = require("config/tailwind.config");
