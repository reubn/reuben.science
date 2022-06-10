export default {
  t: {
    name: 'metric tonne',
    colour: 'blue',
    type: 'mass',
    parent: 'kg',
    suffix: true,
    toParent: t => t * 1000,
    fromParent: kg => kg / 1000,
    sensibleUnits: (value, units) => {
      if(value <= 10) units.push('kg')
    }
  },
  kg: {
    name: 'kilogram',
    colour: 'pink',
    type: 'mass',
    suffix: true,
    isBase: true,
    sensibleUnits: (value, units) => {
      if(value >= 100) units.push('t')
      if(value <= 10) units.push('g')
    }
  },
  g: {
    name: 'gram',
    colour: 'green',
    suffix: true,
    parent: 'kg',
    toParent: g => g / 1000,
    fromParent: kg => kg * 1000,
    sensibleUnits: (value, units) => {
      if(value >= 100) units.push('kg')
    }
  }
}
