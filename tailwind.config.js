module.exports = {
  mode: 'jit',
  purge: ['./index.html', '/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'text': '0 3px 6px rgba(255, 255, 255, 0.31)',
      },
      backgroundImage: {
        'hero-background': "url('./GNS_ZOZO_429__retouch.png')",
        'hero-background-mobil': "url('./GNS_ZOZO_429_retouch.png')",
        'btn-background': "url('./Rectangle718@0.75X.png')",
      },
      fontFamily: {
        'apurabold': ['Apercu Pro Bold'],
        'apuraregular': ['Apercu Pro Regular'],
      },
      colors: {
        'brand'       : '#0C426A',
        'fieldgray'   : '#E5E5E5',
        'orangetext'  : '#E74F3D',
        'footercolor' : '#D8E7FC',
      },
      container: {
        center: true,
        screens: {
          xl: '1024px',
          sm: '303px',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
