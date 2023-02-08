/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins',' sans-serif'],
        'FredokaOne': ['Fredoka One', 'cursive'],
        'Signika': ['Signika', 'sans-serif'],
        'Itim': ['Itim', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}