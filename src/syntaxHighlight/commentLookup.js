const comments = {
  '//': ['js', 'json', 'c', 'c++', 'swift', 'php'],
  '#': ['bash', 'python', 'php'],
  ';': ['ini'],
  '/*': ['js', 'c', 'c++', 'swift', 'php']
}

module.exports = Object.entries(comments)
  .map(([comment, languages]) => languages.map(language => [language, comment]))
  .flat()
  .reduce((obj, [key, value]) => {
    if(obj[key]) obj[key].push(value)
    else obj[key] = [value]

    return obj
  }, {})
