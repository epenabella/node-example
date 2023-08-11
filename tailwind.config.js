/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'volvo-blue': '#003173',
        'volvo-blue-light': '#194581'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('preline/plugin')],
  darkMode: 'class'
}