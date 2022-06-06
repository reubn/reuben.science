export default txtExtra
txtExtra.displayName = 'txtExtra'
txtExtra.aliases = []

function txtExtra(Prism) {
  Prism.languages.txt = {
    highlightA: {
      pattern: /[\u200B\u00A0].+?[\u200B\u00A0]/g
    },
    highlightB: {
      pattern: /[\u200C\u00A0].+?[\u200C\u00A0]/g
    }
  }
}
