// https://github.com/stefanprobst/remark-inline-code-language/blob/master/index.js

var visit = require('unist-util-visit');

module.exports = attacher;
attacher.withInlineCodeLanguage = withInlineCodeLanguage;

const regex = /^\:\{(.+?)\}/

function attacher(separator) {
  function transformer(tree) {
    visit(tree, 'inlineCode', function visitor(node) {
      return withInlineCodeLanguage(node);
    });
  }

  return transformer;
}

function withInlineCodeLanguage(node) {
  const match = node.value.match(regex)

  const language = match ? match[1] : undefined;
  if (language) {
    node.value = node.value.replace(regex, '');
    node.className = [`language-${language.trim()}`]
  }

  return node;
}
