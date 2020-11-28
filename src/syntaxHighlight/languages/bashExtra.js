'use strict'

module.exports = bashExtras
bashExtras.displayName = 'bashExtras'
bashExtras.aliases = []

function bashExtras(Prism) {
  Prism.languages.bash.argument = {
    pattern: /\s-[^\s]+/
  }
}
