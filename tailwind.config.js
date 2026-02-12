/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        ogText: "#233323",
        cream: "#fcf5ef",
      },
      fontFamily: {
        gill: [
          "Gill Sans",
          "Gill Sans MT",
          "Calibri",
          "Trebuchet MS",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
