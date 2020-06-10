module.exports = {
  theme: {
    extend: {},
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
