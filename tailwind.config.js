module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'aprd-tertiary': '#1d1e22',
      },
      textColor: {
        'aprd-secondary': '#A1A1AA',
      },
      zIndex: {
        'uh': '999999',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
