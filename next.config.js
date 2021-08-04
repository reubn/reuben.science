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
    rehypePlugins: [
      require('./src/refs/rehype'),
      require('./src/syntaxHighlight/rehype'),
      require('rehype-slug'),
      [require('rehype-autolink-headings'), {behavior: 'wrap'}]
    ],
  },
  extension: /\.mdx?$/
})

module.exports = withPlugins([[withMDX]], {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    disableStaticImages: true,
  },
  webpack: (config, {isServer, dev}) => {
    if(!dev) config.module.rules.forEach(({oneOf}) => oneOf?.forEach(({use}) => {
      use?.forEach?.(({options: {modules}}) => {
        if(modules?.getLocalIdent) {
          delete modules.getLocalIdent
          modules.localIdentName = '[hash:base64:4]'
        }
      })
    }))

    config.resolve.extensions.push('.md', '.mdx', '.css', '.module.css', '.json')

    const fileOptions = {
      outputPath: '../public/.assets/',
      publicPath: '/.assets/',
      name: '[contenthash]/[name].[ext]'
    }

    config.module.rules.push({
        test: /\.(webp)$/i,
        loader: './src/image-loader.js',
        options: fileOptions
    })

    config.module.rules.push({
        test: /(\.(webm|mp4|svg)$)|(\/postFiles\/)/i,
        loader: 'file-loader',
        options: fileOptions
    })

    return config
  }
})
