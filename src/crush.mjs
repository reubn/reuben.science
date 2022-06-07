import {readFile, access, stat} from 'node:fs/promises'
import {constants} from 'node:fs'
import {join, dirname} from 'node:path'
import {exec} from 'node:child_process'

import {findUp} from 'find-up'
import colors from 'colors/safe.js'
import prettyBytes from 'pretty-bytes'

const configName = '.crush'
const extensionRegex = /\.[^\.]+$/

const cwd = process.argv[2] || process.cwd()
const packageJSON = await findUp('package.json', {cwd})
const configFile = await findUp(configName, {cwd, stopAt: packageJSON ? dirname(packageJSON) : undefined})

const configText = await readFile(configFile, 'utf8')

const conversions = configText.split('\n\n').flatMap(_entryText => {
  const entryText = _entryText.trim()

  const [base, ...varientLines] = entryText.split('\n')

  const baseStem = base.replace(extensionRegex, '')
  const extension = base.match(extensionRegex)[0]

  return varientLines.map(varientLine => {
    const [varient, options] = varientLine.split(': ')
    const suffix = varient === '@1x' ? '' : varient

    const from = join(cwd, `${baseStem}${suffix}${extension}`)
    const to = from.replace(new RegExp(extension + '$'), '.webp')
    const command = `cwebp ${options} ${from} -o ${to}`

    return {base, varient, from, to, command}
  })
})

const {longestBase, longestVarient} = conversions.reduce(({longestBase=0, longestVarient=0}, {base, varient}) => ({longestBase: Math.max(longestBase, base.length), longestVarient: Math.max(longestVarient, varient.length)}), {})

const promises = conversions.map(async ({base, varient, from, to, command}) => {
  const tag = `${(base + ':').padEnd(longestBase + 1, ' ')} ${varient.padEnd(longestVarient, ' ')}`

  const fromError = await access(from, constants.R_OK).catch(() => true)

  if(fromError) return console.error(colors.red(tag), 'File Not Accessible')

  const {size: fromSize} = await stat(from)

  const [stderr, stdout] = await new Promise((resolve, reject) => exec(command, cwd, (error, stdout, stderr) => resolve([error ? stderr.trim() : '', stdout])))

  if(stderr) return console.error(colors.red(tag), 'Fail', `[${stderr}]`)

  const {size: toSize} = await stat(to)

  console.log(colors.green(tag), `${prettyBytes(fromSize)} => ${prettyBytes(toSize)}`)
})

Promise.all(promises)
