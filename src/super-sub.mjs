import {visit} from 'unist-util-visit'

const markers = {
  '~': 'sub',
  '\\^': 'sup',
}

const searches = Object.entries(markers).map(([delimiter, tag]) => ({tag, regex: new RegExp(`${delimiter}(?<content>.+?)${delimiter}`, 'g')}))

function transformer(tree){
  visit(tree, 'text', textTransformer)
}

function textTransformer(node, index, parent) {
  const text = node.value

  const nodes = searches
    .reduce((parts, {regex, tag}) => {
      const results = parts.map(part =>
      [...part.content.matchAll(regex)]
        .reduce(({offset, currentPart, parts}, {0: {length}, index, groups: {content}}) => {
          const newParts = [
              {...currentPart, content: currentPart.content.slice(0, index - offset)},
              {type: 'tag', tag, content}
          ]

          return {
            offset: index + length,
            currentPart: {...currentPart, content: currentPart.content.slice((index - offset) + length)},
            parts: [...parts, ...newParts]
          }
        }, {offset: 0, currentPart: part, parts: []})
      )

      return results.flatMap(result => {
        const full = [...result.parts]
        if(result.currentPart.content) full.push(result.currentPart)

        return full
      })
    }, [{type: 'text', content: text}])
    .map(({type, tag, content}) => {
      if(type === 'tag') return {type: 'mdxJsxFlowElement', name: tag, children: [{type: 'text', value: content}]}
      if(type === 'text') return {type: 'text', value: content}
    })

    parent.children.splice(index, 1, ...nodes)
}

export default () => transformer
