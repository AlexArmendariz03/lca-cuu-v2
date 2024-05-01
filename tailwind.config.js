const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {}
  },
  darkMode: "class",
  plugins: [
    require("tw-elements/plugin.cjs"),
    nextui()]
}


