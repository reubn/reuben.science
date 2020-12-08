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

    const fileOptions = {
      outputPath: '../public/.assets/',
      publicPath: '/.assets/',
    }

    config.module.rules.push({
        test: /\.(webp)$/i,
        loader: './src/image-loader.js',
        options: fileOptions
    })

    config.module.rules.push({
        test: /\.(webm|mp4)$/i,
        loader: 'file-loader',
        options: fileOptions
    })

    return config
  }
})
