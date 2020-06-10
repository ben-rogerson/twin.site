module.exports = {
  theme: {
    extend: {
      colors: {
        twin: '#9500ff',
      },
    },
    linearGradientColors: {
      red: '#f00',
      'red-blue': ['#f00', '#00f'],
      'red-green-blue': ['#f00', '#0f0', '#00f'],
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
    require('tailwindcss-typography'),
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/ui'),
    svg,
  ],
}

function svg({ addUtilities }) {
  addUtilities({
    '.svg': {
      width: '1em',
      height: '1em',
    },
  })
}
