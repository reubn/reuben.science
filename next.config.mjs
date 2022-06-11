import composePlugins from 'next-compose-plugins'
const {withPlugins, optional} = composePlugins
import withMDX from '@next/mdx'

import remarkMdx from 'remark-mdx'
import remarkGfm from 'remark-gfm'

import refsRemark from './src/refs/remark.mjs'
import refsRehype from './src/refs/rehype.mjs'

import superSub from './src/super-sub.mjs'
import remarkCaptions from 'remark-captions'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import syntaxHighlightRemark from './src/syntaxHighlight/remark.mjs'
import syntaxHighlightRehype from './src/syntaxHighlight/rehype.mjs'

const mdx = withMDX({
  options: {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [
      remarkMdx,
      remarkGfm,
      refsRemark,
      [remarkCaptions, {
        external: {
          code: 'caption:',
        },
        internal: {
          image: 'caption:',
        }
      }],
      superSub,
      syntaxHighlightRemark
    ],
    rehypePlugins: [
      refsRehype,
      syntaxHighlightRehype,
      rehypeSlug,
      [rehypeAutolinkHeadings, {behavior: 'wrap'}]
    ]
  }
})

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    disableStaticImages: true,
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config, {isServer, dev, defaultLoaders}) => {
    // import('./src/cssClassNames')(config, {dev})

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
}

export default withPlugins([mdx], config)
