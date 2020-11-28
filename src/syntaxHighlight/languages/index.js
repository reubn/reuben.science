const languages = [
  require('./bashExtra')
]

module.exports = refractor => languages.forEach(language => refractor.register(language))
