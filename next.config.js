const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [require('remark-sub-super'), require('./src/syntaxHighlight/remark')],
    rehypePlugins: [require('./src/syntaxHighlight/rehype')],
  },
  extension: /\.mdx?$/
})

module.exports = withPlugins([[withMDX]], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, {isServer}) => {
    config.resolve.extensions.push('.md', '.mdx', '.css', '.module.css')

    // Fixes npm packages that depend on `fs` module
    if(!isServer) config.node = {
      fs: 'empty'
    }

    return config
  }
})
