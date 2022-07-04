export default {
  l: {
    name: 'litre',
    label: 'L',
    colour: 'red',
    type: 'volume',
    suffix: true,
    isBase: true,
    comfort: {
      range: {
        comfortableBetween: [0.5, Infinity],
        dontShowOutside: [0.1, Infinity]
      },
      snapIntervals: [
        [4, [10]],
        [3, [5]],
        [-1, [0.05]],
        [-Infinity, []]
      ]
    }
  },
  ml: {
    name: 'millilitre',
    colour: 'indigo',
    suffix: true,
    parent: 'l',
    toParent: ml => ml / 1000,
    fromParent: l => l * 1000,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0, 10000]
      },
      snapIntervals: [
        [4, [10]],
        [3, [5]],
        [1, [0.5]],
        [-Infinity, []]
      ]
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
    comfort: {
      range: {
        comfortableBetween: [0.5, 6],
        dontShowOutside: [0.25, 6]
      },
      snapIntervals: [
        [-Infinity, [0.5]]
      ]
    }
  },
  tsp: {
    name: 'teaspoon',
    colour: 'blue',
    suffix: 'Tsp',
    parent: 'ml',
    toParent: tsp => tsp * 5,
    fromParent: ml => ml / 5,
    comfort: {
      range: {
        comfortableBetween: [0.25, 6],
        dontShowOutside: [0.25, 6]
      },
      snapIntervals: [
        [-Infinity, [0.5]]
      ]
    }
  },
 /*  tsp2: {
    name: 'teaspoon2',
    colour: 'blue',
    suffix: 'Tsp2',
    parent: 'ml',
    toParent: tsp => tsp * 5,
    fromParent: ml => ml / 5,
    comfort: {
      range: {
        comfortableBetween: [0.25, 10],
        dontShowOutside: [0.25, 10]
      }
    }
  }, */
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
