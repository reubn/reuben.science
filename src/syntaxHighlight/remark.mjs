import withInlineCodeLanguage from './withInlineCodeLanguage.mjs'
import preview from './preview.mjs'

export default () => tree => {
  withInlineCodeLanguage(tree)
  preview(tree)
}
