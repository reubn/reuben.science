import {metric, US} from '../constants'

export default {
  l: {
    name: 'litre',
    label: 'L',
    colour: 'red',
    systems: [metric],
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
    systems: [metric],
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
/*   cl: {
    name: 'centilitre',
    systems: [metric],
    suffix: true,
    parent: 'ml',
    toParent: cl => cl * 10,
    fromParent: ml => ml / 10
  }, */
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
  usGal: {
    name: 'US gallon',
    systems: [US],
    suffix: 'gal',
    parent: 'l',
    toParent: gal => gal * 3.785411784,
    fromParent: l => l / 3.785411784
  },
  usQuart: {
    name: 'US quart',
    systems: [US],
    suffix: 'qt',
    parent: 'usGal',
    toParent: qt => qt / 4,
    fromParent: usGal => usGal * 4
  },
  usPint: {
    name: 'US pint',
    systems: [US],
    suffix: 'pt',
    parent: 'usQuart',
    toParent: pt => pt / 2,
    fromParent: usQuart => usQuart * 2
  },
  usCup: {
    name: 'US average liquid cup',
    systems: [US],
    suffix: ' cup',
    parent: 'ml',
    toParent: cup => cup * (((6 * 240) + (8 * 236.5882365) + (6 * 250)) / 20), // https://cooking.stackexchange.com/a/28292
    fromParent: ml => ml / (((6 * 240) + (8 * 236.5882365) + (6 * 250)) / 20)
  },
  usFlOz: {
    name: 'US fluid ounce',
    systems: [US],
    suffix: 'fl oz',
    parent: 'usPint',
    toParent: flOz => flOz / 16,
    fromParent: usPint => usPint * 16
  },
}
