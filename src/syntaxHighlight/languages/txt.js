'use strict'

module.exports = txt
txt.displayName = 'txt'
txt.aliases = []

function txt(Prism) {
  Prism.languages.txt = {
    highlightA: {
      pattern: /[\u200B\u00A0].+?[\u200B\u00A0]/g
    },
    highlightB: {
      pattern: /[\u200C\u00A0].+?[\u200C\u00A0]/g
    }
  }
}
