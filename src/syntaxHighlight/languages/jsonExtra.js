'use strict'

module.exports = jsonExtra
jsonExtra.displayName = 'jsonExtra'
jsonExtra.aliases = []

function jsonExtra(Prism) {
  const original = Prism.languages.json

  Prism.languages.json = {
    ...original,
    boolean: {
      pattern: /\b(?:true|false)\b/,
      inside: {
        booleanTrue: /true/,
        booleanFalse: /false/
      }
    },
  }
}
