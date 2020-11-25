'use strict'

module.exports = bashExtras
bashExtras.displayName = 'bashExtras'
bashExtras.aliases = []

function bashExtras(Prism) {
  ;(function (Prism) {
    Prism.languages.bash.argument = {
      pattern: /\s-[^\s]+/,
      alias: 'important'
    }
  })(Prism)
}
