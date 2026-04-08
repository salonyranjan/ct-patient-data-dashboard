// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-accent": "#00B894",
        "sidebar-dark": "#004A7F",
        "text-dark-gray": "#072635",
        "bg-light-gray": "#F4F4F4",
        "card-bg": "#FFFFFF",
        "systolic-pink": "#E66F7F",
        "diastolic-purple": "#986BFF",
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
