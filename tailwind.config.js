module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
