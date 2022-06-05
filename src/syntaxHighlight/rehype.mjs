// https://github.com/mapbox/rehype-prism/blob/main/index.js

import {visit} from 'unist-util-visit'
import {toString} from 'hast-util-to-string'
import {refractor} from 'refractor'

import clickToCopy from './clickToCopyServer.mjs'

import commentLookup from './commentLookup.mjs'

import languages from './languages/index.mjs'
languages(refractor)

function getLanguage(node) {
  const className = node.properties.className || node.className || []

  for (const classListItem of className) {
    if(classListItem.slice(0, 9) === 'language-') return classListItem.slice(9).toLowerCase()
  }

  return null
}

function visitor(node, index, parent) {
  if(node.tagName === 'pre') node.children.unshift(clickToCopy)
  if(node.tagName === 'pre' && parent && parent.tagName === 'figure') return parent.properties.className = (parent.properties.className || []).concat('code')
  if(!(node.tagName === 'inlineCode' || (node.tagName === 'code' && parent && parent.tagName === 'pre'))) return

  const lang = getLanguage(node)
  if(lang === null) return

  const properties = {
    className: (parent.properties.className || []).concat('language-' + lang),
    metastring: node.properties.metastring ? `${(lang && commentLookup[lang]?.[0]) || '//'} ${node.properties.metastring}` : undefined
  }

  node.properties = properties

  let result
  try {result = refractor.highlight(toString(node), lang)}
  catch (err) {return console.error(err)}

  node.children = result.children
}

export default () => tree => visit(tree, 'element', visitor)
