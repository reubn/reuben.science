import bashExtra from './bashExtra.mjs'
import txtExtra from './txtExtra.mjs'
import jsonExtra from './jsonExtra.mjs'
import applescriptExtra from './applescriptExtra.mjs'

const languages = [
  bashExtra,
  txtExtra,
  jsonExtra,
  applescriptExtra
]

export default refractor => languages.forEach(language => refractor.register(language))
