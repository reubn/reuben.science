export default {
  l: {
    name: 'litre',
    label: 'L',
    colour: 'red',
    type: 'volume',
    suffix: true,
    isBase: true,
    isComfortable: value => {
      if(value < 1) return 'ml'

      return true
    },
    sensibleUnits: (value, units) => {
      if(value < 10) units.push('ml')
    }
  },
  ml: {
    name: 'millilitre',
    colour: 'indigo',
    suffix: true,
    parent: 'l',
    toParent: ml => ml / 1000,
    fromParent: l => l * 1000,
    isComfortable: value => {
      const tbspValue = value / 15
      const tbspRemainder = tbspValue % 1
      const tbspWouldBeBetter = tbspValue <= 10 && (tbspRemainder <= 0.0000001 || Math.abs(tbspRemainder - 0.5) <= 0.0000001)

      if(tbspWouldBeBetter) return 'tbsp'

      const tspValue = value / 5
      const tspRemainder = tspValue % 1
      const tspWouldBeBetter = tspValue <= 10 && (tspRemainder <= 0.0000001 || Math.abs(tspRemainder - 0.5) <= 0.0000001)

      if(tspWouldBeBetter) return 'tsp'

      if(value >= 1000) return 'l'

      return true //value >= 0.5
    },
    sensibleUnits: (value, units) => {
      if(value <= (10 * 5)) units.push('tsp')
      if(value <= (10 * 15)) units.push('tbsp')
      // if(value >= 10) units.push('cl')
      if(value >= 100) units.push('l')
    }
  },
  // cl: {
  //   name: 'centilitre',
  //   suffix: true,
  //   parent: 'ml',
  //   toParent: cl => cl * 10,
  //   fromParent: ml => ml / 10
  // },
  tbsp: {
    name: 'tablespoon',
    colour: 'orange',
    suffix: 'Tbsp',
    parent: 'ml',
    toParent: tbsp => tbsp * 15,
    fromParent: ml => ml / 15,
    isComfortable: value => {
      const currentRemainder = value % 1

      if(currentRemainder >= 0.0000001 && Math.abs(currentRemainder - 0.5) >= 0.0000001) {
        const tspValue = value * 3
        const tspRemainder = tspValue % 1
        const tspWouldBeBetter = tspValue <= 10 && (tspRemainder <= 0.0000001 || Math.abs(tspRemainder - 0.5) <= 0.0000001)

        if(tspWouldBeBetter) return 'tsp'
      }


      return value >= 0.5 && value <= 10
    },
    sensibleUnits: value => ['tsp', 'ml']
  },
  tsp: {
    name: 'teaspoon',
    colour: 'blue',
    suffix: 'Tsp',
    parent: 'ml',
    toParent: tsp => tsp * 5,
    fromParent: ml => ml / 5,
    isComfortable: value => {
      const tbspValue = value / 3
      const tbspRemainder = tbspValue % 1
      const tbspWouldBeBetter = tbspValue <= 10 && (tbspRemainder <= 0.0000001 || Math.abs(tbspRemainder - 0.5) <= 0.0000001)

      if(tbspWouldBeBetter) return 'tbsp'

      return (value >= 0.5 && value <= 10) || 'tbsp'
    },
    sensibleUnits: value => ['tbsp', 'ml']
  },
  // impGal: {
  //   name: 'imperial gallon',
  //   suffix: 'imp. gal',
  //   parent: 'ml',
  //   toParent: gal => gal * 4546.09,
  //   fromParent: ml => ml / 4546.09
  // },
  // impQuart: {
  //   name: 'imperial quart',
  //   suffix: 'qt',
  //   parent: 'impGal',
  //   toParent: qt => qt / 4,
  //   fromParent: impGal => impGal * 4
  // },
  // impPint: {
  //   name: 'imperial pint',
  //   suffix: 'pt',
  //   parent: 'impQuart',
  //   toParent: pt => pt / 2,
  //   fromParent: impQuart => impQuart * 2
  // },
  // impFlOz: {
  //   name: 'imperial fluid ounce',
  //   suffix: 'fl oz',
  //   parent: 'impPint',
  //   toParent: flOz => flOz / 20,
  //   fromParent: impPint => impPint * 20
  // },
  //
  // usGal: {
  //   name: 'US gallon',
  //   suffix: 'gal',
  //   parent: 'l',
  //   toParent: gal => gal * 3.785411784,
  //   fromParent: l => l / 3.785411784
  // },
  // usQuart: {
  //   name: 'US quart',
  //   suffix: 'qt',
  //   parent: 'usGal',
  //   toParent: qt => qt / 4,
  //   fromParent: usGal => usGal * 4
  // },
  // usPint: {
  //   name: 'US pint',
  //   suffix: 'pt',
  //   parent: 'usQuart',
  //   toParent: pt => pt / 2,
  //   fromParent: usQuart => usQuart * 2
  // },
  // usCup: {
  //   name: 'US cup',
  //   suffix: 'cup',
  //   parent: 'ml',
  //   flag: true,
  //   toParent: cup => cup * (((6 * 240) + (8 * 236.5882365) + (6 * 250)) / 20), // https://cooking.stackexchange.com/a/28292
  //   fromParent: ml => ml / (((6 * 240) + (8 * 236.5882365) + (6 * 250)) / 20)
  // },
  // usFlOz: {
  //   name: 'US fluid ounce',
  //   suffix: 'fl oz',
  //   parent: 'usPint',
  //   toParent: flOz => flOz / 16,
  //   fromParent: usPint => usPint * 16
  // },
}
