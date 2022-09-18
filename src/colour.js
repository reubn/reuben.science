const colours = {
  red: {
    hint: {}
  },
  orange: {
    hint: {}
  },
  yellow: {
    hint: {}
  },
  green: {
    hint: {
      0: {}
    }
  },
  aqua: {
    hint: {}
  },
  blue: {
    hint: {}
  },
  indigo: {
    hint: {}
  },
  purple: {
    hint: {}
  },
  pink: {
    hint: {}
  },
  'pink-red': {
    hint: {}
  },

  dark: {
    shadow: {
      1: {}
    },
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
  },
  light: {
    1: {},
    2: {},
    3: {}
  },
  mid: {
    1: {},
    2: {},
    3: {}
  }
}

const match = (string, {tree={}, path=[]}) => {
  if(string === undefined) return

  const keys = Object.keys(tree ?? {}).sort((a, b) => b.length - a.length)

  if(!string.length) return {path, tree}

  const candidateBranches = keys.filter(key => string.startsWith(key))

  // console.log('match', {path, tree, keys, string, candidateBranches})

  for (const branch of candidateBranches) {
    let newString = string.slice(branch.length)
    if(newString.startsWith('-')) newString = newString.slice(1)

    const result = match(newString, {tree: tree[branch], path: [...path, branch]})

    if(result) return result
  }

  return null
}

const c = (colour, base) => {
  // console.trace('c', {colour, base, hasTree: base?.tree})

  if(typeof colour === 'string' || colour instanceof String) {
    if(colour.valid) return colour

    if(colour.startsWith('#')) return colour.slice(1)
    
    const _base = base ? c(base) : {tree: colours, path: []}
    const result = match(colour, _base)

    if(result) {
      const css = `var(--colours-${result.path.join('-')})`
    
      return Object.assign(css, result, {valid: true})
    }

    return colour
  }
  
  console.error('Invalid colour', colour, typeof colour)
}

export default c


