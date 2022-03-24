const languages = [
  require('./bashExtra'),
  require('./txtExtra'),
  require('./jsonExtra'),
  require('./applescriptExtra')
]

module.exports = refractor => languages.forEach(language => refractor.register(language))
