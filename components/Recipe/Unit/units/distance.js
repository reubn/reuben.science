export default {
  m: {
    name: 'meter',
    colour: 'pink',
    type: 'distance',
    suffix: true,
    isBase: true
  },
  cm: {
    name: 'centimeter',
    colour: 'red',
    suffix: true,
    parent: 'm',
    toParent: cm => cm / 100,
    fromParent: m => m * 100
  },
  mm: {
    name: 'miliimeter',
    colour: 'blue',
    suffix: true,
    parent: 'm',
    toParent: cm => cm / 1000,
    fromParent: m => m * 1000
  },

  inch: {
    name: 'inch',
    colour: 'orange',
    parent: 'mm',
    suffix: '"',
    toParent: inch => inch * 25.4,
    fromParent: mm => mm / 25.4
  }
}
