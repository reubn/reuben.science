import {fromMarkdown} from 'mdast-util-from-markdown'
import {mdxjs} from 'micromark-extension-mdxjs'
import {mdxFromMarkdown} from 'mdast-util-mdx'

export default md => fromMarkdown(md, {
  extensions: [mdxjs()],
  mdastExtensions: [mdxFromMarkdown()]
})
