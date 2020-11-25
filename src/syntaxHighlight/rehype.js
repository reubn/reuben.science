'use strict';

const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');

require('./languages')(refractor)

module.exports = (options) => {
  options = options || {};

  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parent) {
    if (!(node.tagName === 'inlineCode' || (node.tagName === 'code' && parent && parent.tagName === 'pre'))) {
      return;
    }

    const lang = getLanguage(node);

    if (lang === null) {
      return;
    }

    let result;
    try {
      if(parent.tagName === 'pre') {
        parent.properties.className = (parent.properties.className || []).concat(
          'language-' + lang
        );
        parent.properties.metastring = node.properties.metastring;
      }

      result = refractor.highlight(nodeToString(node), lang);
    } catch (err) {
      return console.error(err)
    }

    node.children = result;
  }
};

function getLanguage(node) {
  const className = node.properties.className || node.className || [];

  for (const classListItem of className) {
    if (classListItem.slice(0, 9) === 'language-') {
      return classListItem.slice(9).toLowerCase();
    }
  }

  return null;
}
