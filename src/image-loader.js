const fs = require('fs')
const path = require('path')

const fileLoader = require('file-loader')

const sizeOf = require('image-size')

const extensionRegex = /\.[^\.]+$/

const suffixes = ['', '@2x', '@3x']

module.exports = async function (content) {
  const intialPath = this.resourcePath
  const basePath = intialPath.replace(extensionRegex, '')
  const extension = this.resourcePath.match(extensionRegex)[0]

  const {width, height} = sizeOf(content)

  const srcSet = await Promise.all(suffixes.map(async (suffix, index) => {
    const density = index + 1

    const filename = `${basePath}${suffix}${extension}`

    const fileContent = await fs.promises.readFile(filename).catch(() => false)

    if(!fileContent) return ''

    const src = JSON.parse(fileLoader.call(this, fileContent).match(/".+?"/)[0])

    this.addDependency(filename)

    return {src, density}
  }))


  const result = {
    size: {width, height},
    src: srcSet[0].src,
    srcSet: srcSet.filter(s => s).map(({src, density}) => `${src} ${density}x`).join(', ')
  }

  return `export default ${JSON.stringify(result)}`
}

module.exports.raw = true;
