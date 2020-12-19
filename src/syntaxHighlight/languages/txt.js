'use strict'

module.exports = txt
txt.displayName = 'txt'
txt.aliases = []

function txt(Prism) {
  Prism.languages.txt = {
    highlight: {
      pattern: /[\u200B\u00A0].+?[\u200B\u00A0]/g
    }
  }
}
