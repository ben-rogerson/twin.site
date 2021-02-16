const withFonts = require('next-fonts')
const withMDX = require('@next/mdx')()

const config = {
  // Pick up MDX files in the /pages/ directory
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    return config
  },
}

module.exports = withFonts(withMDX(config))
