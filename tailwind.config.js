module.exports = {
  theme: {
    extend: {
      colors: {
        twin: '#9500ff',
      },
    },
  },
  plugins: [require('@tailwindcss/ui'), svg],
}

function svg({ addUtilities }) {
  addUtilities({
    '.svg': {
      width: '1em',
      height: '1em',
    },
  })
}
