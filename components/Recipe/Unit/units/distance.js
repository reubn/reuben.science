export default {
  m: {
    name: 'metre',
    colour: 'pink',
    type: 'distance',
    suffix: true,
    isBase: true,
    isComfortable: value => {
      if(value < 0.1) return 'mm'
      if(value < 1) return 'cm'

      return true
    }
  },
  cm: {
    name: 'centimetre',
    colour: 'red',
    suffix: true,
    parent: 'm',
    toParent: cm => cm / 100,
    fromParent: m => m * 100,
    isComfortable: value => {
      if(value < 1) return 'mm'
      if(value >= 100) return 'm'

      return true
    }
  },
  mm: {
    name: 'millimetre',
    colour: 'blue',
    suffix: true,
    parent: 'm',
    toParent: mm => mm / 1000,
    fromParent: m => m * 1000,
    isComfortable: value => {
      if(value >= 100) return 'cm'

      return true
    }
  },

  inch: {
    name: 'inch',
    colour: 'orange',
    parent: 'mm',
    suffix: '"',
    toParent: inch => inch * 25.4,
    fromParent: mm => mm / 25.4,
    isComfortable: value => {
      if(value >= 12) return false

      return true
    }
  }
}
