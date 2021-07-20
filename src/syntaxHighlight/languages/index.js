const languages = [
  require('./bashExtra'),
  require('./txt'),
  require('./jsonExtra'),
]

module.exports = refractor => languages.forEach(language => refractor.register(language))
