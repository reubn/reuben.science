// https://github.com/stefanprobst/remark-inline-code-language/blob/master/index.js

const visit = require('unist-util-visit')

const regex = /^\:\{(.+?)\}\s?/ // `{:js} console.log('this is js')`

function withInlineCodeLanguage(node) {
  const match = node.value.match(regex)

  const language = match ? match[1] : undefined
  if(language) {
    node.value = node.value.replace(regex, '')
    node.className = [`language-${language.trim().toLowerCase()}`]
  }
}

module.exports = () => tree => visit(tree, 'inlineCode', node => withInlineCodeLanguage(node))
