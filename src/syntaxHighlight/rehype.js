// https://github.com/mapbox/rehype-prism/blob/main/index.js

const visit = require('unist-util-visit')
const nodeToString = require('hast-util-to-string')
const refractor = require('refractor')

require('./languages')(refractor)

function getLanguage(node) {
  const className = node.properties.className || node.className || []

  for (const classListItem of className) {
    if(classListItem.slice(0, 9) === 'language-') return classListItem.slice(9).toLowerCase()
  }

  return null
}

function visitor(node, index, parent) {
  if (!(node.tagName === 'inlineCode' || (node.tagName === 'code' && parent && parent.tagName === 'pre'))) return

  const lang = getLanguage(node)
  if (lang === null) return

  const properties = {
    className: (parent.properties.className || []).concat('language-' + lang),
    metastring: node.properties.metastring
  }

  if(parent.tagName === 'pre') parent.properties = properties
  node.properties = properties

  let result
  try {result = refractor.highlight(nodeToString(node), lang)}
  catch (err) {return console.error(err)}

  node.children = result
}

module.exports = () => tree => visit(tree, 'element', visitor)
