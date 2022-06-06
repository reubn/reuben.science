import {visit} from 'unist-util-visit'

function visitor(node, index, parent) {
  if(node.tagName === 'li' && node.properties?.id?.startsWith('user-content-fn-')) {
    const refNumber = node.properties.id.replace(/^user-content-fn-/, '')
    node.properties['ref-number'] = refNumber
    node.properties.id = `def-${refNumber}`

    // remove intermediate p
    const pChild = node.children[1]
    node.children = pChild.children
  } else

  // Defintion
  if(node.tagName === 'a' && node.properties?.dataFootnoteBackref) {
    const refNumber = node.properties?.href?.replace(/^#user-content-fnref-/, '')
    node.properties.href = `#ref-${refNumber}`
  } else

  // Reference
  if(node.tagName === 'a' && node.properties?.dataFootnoteRef) {
    const refNumber = node.properties?.id?.replace(/^user-content-fnref-/, '')
    node.properties.id = `ref-${refNumber}`
    node.properties.href = `#def-${refNumber}`
  } else

  if(node.tagName === 'h2' && node.properties?.id === 'footnote-label') {
    node.tagName = 'hr'
    node.children = []
    node.properties = {}
  }
}

export default () => tree => visit(tree, 'element', visitor)
