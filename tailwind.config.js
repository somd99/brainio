const defaultConfig = require('tailwindcss/defaultConfig');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: ['./components/**/*.tsx', './pages/**/*.tsx', './utils/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        108: '27rem',
        120: '30rem',
      },
      fontFamily: {
        body: ['Prompt', ...defaultTheme.fontFamily.sans],
        headline: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'joy': {
          bg: '#462E49',
          purple1: '#231942',
          purple2: '#5E548E',
          purple3: '#9F86C0',
          purple4: '#BE95C4',
          purple5: '#E0B1CB'
        },
        'colex-gray': {
          light: '#9197A1',
          dark: '#676E79',
        },
        'colex-red': {
          light: '#E17866',
          dark: '#D1432A',
        },
        colex: {
          white: '#F2F5FF',
          black: '#011627',
        },
      },
    },
  },
  variants: {
    borderWidth: ['first', ...defaultConfig.variants.margin],
    margin: ['first', ...defaultConfig.variants.margin],
    padding: ['first', ...defaultConfig.variants.padding],
  },
  plugins: [require('@tailwindcss/ui'),require('tailwindcss')],
};
