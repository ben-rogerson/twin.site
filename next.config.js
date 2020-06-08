const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')

module.exports = withFonts(
  withCSS({
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    }
  })
)
