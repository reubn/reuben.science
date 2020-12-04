const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [require('./src/refs/remark'), require('remark-sub-super'), [require('remark-captions'), {
      external: {
        code: 'caption:',
      },
      internal: {
        image: 'caption:',
      }
    }], require('./src/syntaxHighlight/remark')],
    rehypePlugins: [require('./src/refs/rehype'), require('./src/syntaxHighlight/rehype')],
  },
  extension: /\.mdx?$/
})

module.exports = withPlugins([[withMDX]], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, {isServer}) => {
    config.resolve.extensions.push('.md', '.mdx', '.css', '.module.css', '.json')

    return config
  }
})
