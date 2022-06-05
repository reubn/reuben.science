import {visit} from 'unist-util-visit'

function visitor(node, index, parent) {
  if(node.tagName === 'li' && node.properties && node.properties.id && node.properties.id.startsWith('fn-')) node.properties['ref-number'] = node.properties.id.replace(/^fn-/, '')
}

export default () => tree => visit(tree, 'element', visitor)
