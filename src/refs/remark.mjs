// https://github.com/zestedesavoir/zmarkdown/blob/master/packages/remark-numbered-footnotes/src/index.js

import {visit} from 'unist-util-visit'

function transformer (tree){
  const footnotes = {}

  visit(tree, 'footnoteDefinition', definitionPass(footnotes))
  visit(tree, 'footnoteReference', referencePass(footnotes))
}

function referencePass(footnotes) {
  return (node, index, parent) => {
    const identifier = node.identifier

    if(!footnotes.hasOwnProperty(identifier)) footnotes[identifier] = Object.keys(footnotes).length + 1

    node.identifier = footnotes[identifier]
    node.label = footnotes[identifier]
  }
}

function definitionPass(footnotes) {
  return (node, index, parent) => {
    const identifier = node.identifier

    if(!footnotes.hasOwnProperty(identifier)) footnotes[identifier] = Object.keys(footnotes).length + 1
    node.identifier = footnotes[identifier]
    node.label = footnotes[identifier]
  }
}

export default () => transformer
