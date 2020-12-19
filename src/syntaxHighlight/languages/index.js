const languages = [
  require('./bashExtra'),
  require('./txt')
]

module.exports = refractor => languages.forEach(language => refractor.register(language))
