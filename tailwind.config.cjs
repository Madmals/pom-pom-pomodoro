/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'nice': '#496365',
      'ok': '#A53D72',
      'button':'#CFFAFE',
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'testing-background':'#aed9ed',
      'silver': '#ecebff',
      'bubble-gum': '#E6F4F1',
      'bermuda': '#CFFAFE',
      'slate': '#8075A7',
      'nice-bg':'#9792BB',
      'red':'#FFCCCB'
    },
    extend: {},
  },
  plugins: [],
}
