/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ogText: "#0e0437",
        cream: "#fcf5ef",
      },
      fontFamily: {
        gill: [
          "Gill Sans",
          "Calibri",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
