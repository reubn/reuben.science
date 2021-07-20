'use strict'

module.exports = jsonExtra
jsonExtra.displayName = 'jsonExtra'
jsonExtra.aliases = []

function jsonExtra(Prism) {
  const original = Prism.languages.json

  Prism.languages.json = {
    ...original,
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: true,
      greedy: true,
      inside: {
        quote: /(^")|("$)/
      }
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: true,
      greedy: true,
      inside: {
        quote: /(^")|("$)/
      }
    },
    boolean: {
      pattern: /\b(?:true|false)\b/,
      inside: {
        booleanTrue: /true/,
        booleanFalse: /false/
      }
    },
  }
}
