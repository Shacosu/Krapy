/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./views/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss/plugin'),
    require('tw-elements/dist/plugin')
  ],
}