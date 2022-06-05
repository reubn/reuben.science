import {visit} from 'unist-util-visit'

const regex = /^\{\:(.+?)\}\s?/ // `{:js} console.log('this is js')`

function withInlineCodeLanguage(node) {
  const match = node.value.match(regex)

  const language = match ? match[1] : undefined
  if(language) {
    node.value = node.value.replace(regex, '')
    node.className = [`language-${language.trim().toLowerCase()}`]
  }
}

export default tree => visit(tree, 'inlineCode', withInlineCodeLanguage)
