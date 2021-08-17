export default {
  kg: {
    name: 'kilogram',
    colour: 'pink',
    type: 'mass',
    suffix: true,
    isBase: true,
    // sensibleUnits: value => {
    //   const sensible = []
    //
    //   if(value <= 10) sensible.push('g')
    //
    //   // imperial + US units
    //
    //   return sensible
    // }
  },
  g: {
    name: 'gram',
    colour: 'green',
    suffix: true,
    parent: 'kg',
    toParent: g => g / 1000,
    fromParent: kg => kg * 1000,
    // sensibleUnits: value => {
    //   const sensible = []
    //
    //   if(value >= 100) sensible.push('kg')
    //
    //   // imperial + US units
    //
    //   return sensible
    // }
  }
}
