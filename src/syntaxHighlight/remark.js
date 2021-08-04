const withInlineCodeLanguage = require('./withInlineCodeLanguage')
const preview = require('./preview')

module.exports = () => tree => {
  withInlineCodeLanguage(tree)
  preview(tree)
}
