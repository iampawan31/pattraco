const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        solarBg: "url('/solar-panel.jpeg)",
        agroBg: "url('/agro.jpeg')",
        fmcgBg: "url('/fmcg.jpeg')",
        miningBg: "url('/mining.jpeg')",
      },
    },
  },
  plugins: [],
}
