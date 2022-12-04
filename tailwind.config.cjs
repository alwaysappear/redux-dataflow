/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      },
      colors: {
        "pry-clr-0": "rgb(245, 233, 248)"
      }
    },
  },
  plugins: [],
}