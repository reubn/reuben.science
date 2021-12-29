const path = require('path')
const loaderUtils = require('loader-utils')

const _localIdentName = '[hash:base64:4]'

function getLocalIdent(loaderContext, _, localName, options) {
  let localIdentName = _localIdentName

  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  const request = path
    .relative(options.context, loaderContext.resourcePath)
    .replace(/\\/g, '/');

  // eslint-disable-next-line no-param-reassign
  options.content = `${options.hashPrefix + request}+${localName}`;

  // eslint-disable-next-line no-param-reassign
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);

  const hash = loaderUtils.interpolateName(
    loaderContext,
    localIdentName,
    options
  );_

  return hash
    .replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-')
    .replace(/^((-?[0-9])|--)/, '_$1');
}

module.exports = (config, {dev}) => {
  if(!dev) config.module.rules.forEach(({oneOf}) => oneOf?.forEach(({use}) => {
    use?.forEach?.(({options: {modules}}) => {
      if(modules?.getLocalIdent) {
        modules.localIdentName = _localIdentName
        modules.getLocalIdent = getLocalIdent
      }
    })
  }))
}
