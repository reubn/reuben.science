const visit = require('unist-util-visit')

const preview = tree => {
  const codeNodes = []

  const visitor = node => {
    if(!codeNodes.includes(node)) codeNodes.push(node)
  }

  visit(tree, 'code', visitor)

  const exportValue = codeNodes.map(({lang, value}) => ({language: lang, lines: value.split('\n')}))

  const exportNode = {
    type: 'export',
    value: `export const codeBlocks = ${JSON.stringify(exportValue)}`
  }

  tree.children.unshift(exportNode)
}

module.exports = preview
