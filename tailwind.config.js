const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'sans': ['Andika', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}