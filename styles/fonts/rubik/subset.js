const fs = require('fs')
const {exec} = require("child_process")

const fontName = 'Rubik'
const fontDisplay = 'swap'
const subsets = `latin latin-ext` //`cyrillic cyrillic-ext greek greek-ext vietnamese sinhala hebrew oriya malayalam gurmukhi kannada arabic tamil khmer telugu bengali thai devanagari myanmar gujarati`

// directory path
const dir = './'
const outputDir = './'

// list all files in the directory
const files = fs.readdirSync(dir).filter(s => s.endsWith('.ttf'))

const weightMap = Object.entries({
  extrablack: 950,
  black: 900,
  extrabold: 800,
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
  light: 300,
  extralight: 200,
  thin: 100
}).sort((a, b) => a.length - b.length)

const info = files.map(file => {
  const lowerCase = file.toLowerCase()

  const [_, weight] = weightMap.find(([search]) => lowerCase.includes(search)) || [, 400]
  const style = lowerCase.includes('italic') ? 'italic' : 'normal'

  return {file, weight, style}
})

const commands = info.map(({file, weight, style}) => `npx -y font-ranger -o ${outputDir} -f ${file} -u ${subsets} -n ${weight}-${style} -m ${fontName} -b ${weight} -s ${style} -i ${fontDisplay}`)
const css = info.map(({file, weight, style}) => `@import './${weight}-${style}.css';`).join('\n')

console.log(css)

commands.forEach(command => exec(command))
