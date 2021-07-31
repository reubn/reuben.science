const languages = [
  require('./bashExtra'),
  require('./txtExtra'),
  require('./jsonExtra'),
]

module.exports = refractor => languages.forEach(language => refractor.register(language))
