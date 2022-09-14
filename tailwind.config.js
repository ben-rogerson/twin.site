module.exports = {
  theme: {
    extend: {
      colors: {
        twin: '#9500ff',
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      opacity: {
        15: '0.15',
      },
    },
  },
  plugins: [
    // require('tailwindcss-gradients'),
    // require('tailwindcss-typography'),
    require('tailwindcss-aspect-ratio'),
    // require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
    svg,
    gradients,
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

function gradients({ addUtilities, theme }) {
  const gradientText = {
    '-webkit-background-clip': 'text',
    'background-clip': 'text',
    color: 'transparent',
  }
  addUtilities({
    '.twin-gradient-text': {
      background: `linear-gradient(${theme`colors.electric`}, 70%, ${theme`colors.ribbon`})`,
      ...gradientText,
    },
    '.twin-gradient-text-light': {
      background: `linear-gradient(#F5B1FF, 70%, #7769FF)`,
      ...gradientText,
    },
  })
}
