const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#97B434',
        'primary-dark': '#505A1B',
        'primary-background': '#f2f5f7',
        'primary-font': '#5d7079',
        'secondary-font': '#37517e',
      },
      fontFamily: {
        primary: ['Montserrat'],
      },
      backgroundImage: {
        solarBg: "url('/solar-panel.jpeg)",
        agroBg: "url('/agro.jpeg')",
        fmcgBg: "url('/fmcg.jpeg')",
        miningBg: "url('/mining.jpeg')",
        whiteBg: "url('/white.png')",
      },
      transitionProperty: {
        background: 'background',
      },
    },
  },
  plugins: [],
}
