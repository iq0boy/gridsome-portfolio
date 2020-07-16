module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    zIndex: {
      '-10': '-10',
      '0': 0,
      '10': 10,
      '20': 20,
      '25': 25,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '100': 100,
      '1000': 1000,
      auto: 'auto',
    },
    corePlugins: {
      container: false,
    },
    extend: {},
  },
  variants: {
    zIndex: ['responsive', 'hover'],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1040px',
          },
        },
      })
    },

    function ({ addBase, config }) {
      addBase({
        h1: {
          fontSize: config('theme.fontSize.5xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
        h2: {
          fontSize: config('theme.fontSize.4xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
        h3: {
          fontSize: config('theme.fontSize.3xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
        h4: {
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
        h5: {
          fontSize: config('theme.fontSize.xl'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
        h6: {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: config('theme.fontWeight.bold'),
          fontFamily: config('theme.fontFamily.sans').join(', '),
          marginTop: config('theme.margin.4'),
          marginBottom: config('theme.margin.4'),
        },
      })
    },
  ],
}
