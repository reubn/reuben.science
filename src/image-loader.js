const fs = require('fs')
const path = require('path')

const fileLoader = require('file-loader')

const sizeOf = require('image-size')

const extensionRegex = /\.[^\.]+$/

const config = [
  {
    scale: 0.25,
    suffix: '@0.25x'
  },
  {
    scale: 0.5,
    suffix: '@0.5x'
  },
  {
    scale: 1
  },
  {
    scale: 2,
    suffix: '@2x'
  },
  {
    scale: 3,
    suffix: '@3x'
  }
]

module.exports = async function (content) {
  const intialPath = this.resourcePath
  const basePath = intialPath.replace(extensionRegex, '')
  const extension = this.resourcePath.match(extensionRegex)[0]

  const resolutionsArray = (await Promise.all(config.map(async ({scale, suffix=''}) => {
    const filename = `${basePath}${suffix}${extension}`

    const fileContent = await fs.promises.readFile(filename).catch(() => false)

    if(!fileContent) return

    const {width, height} = sizeOf(fileContent)

    const src = JSON.parse(fileLoader.call(this, fileContent).match(/".+?"/)[0])

    this.addDependency(filename)

    return {
      src,
      scale,
      width,
      height
    }
  }))).filter(s => s)

  const resolutions = resolutionsArray.reduce((obj, size) => ({...obj, [size.scale]: size}), {})

  const jsonFilename = `${basePath}.json`
  const jsonContent = await fs.promises.readFile(jsonFilename).catch(() => false)

  const json = jsonContent ? JSON.parse(jsonContent) : undefined

  this.addDependency(jsonFilename)

  const result = {
    id: Math.random(),
    resolutions,
    json
  }

  return `export default ${JSON.stringify(result)}`
}

module.exports.raw = true;
