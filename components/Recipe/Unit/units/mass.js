export default {
  t: {
    name: 'metric tonne',
    colour: 'blue',
    type: 'mass',
    parent: 'kg',
    suffix: true,
    toParent: t => t * 1000,
    fromParent: kg => kg / 1000,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0.25, Infinity]
      },
      snapIntervals: [
        [4, [10]],
        [3, [5]],
        [2, [1]],
        [-1, [0.05]],
        [-Infinity, []]
      ]
    }
  },
  kg: {
    name: 'kilogram',
    colour: 'pink',
    type: 'mass',
    suffix: true,
    isBase: true,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0.1, 1000]
      },
      snapIntervals: [
        [4, [5]],
        [3, [1]],
        [2, [0.5]],
        [-1, [0.05]],
        [-Infinity, []]
      ]
    }
  },
  g: {
    name: 'gram',
    colour: 'green',
    suffix: true,
    parent: 'kg',
    toParent: g => g / 1000,
    fromParent: kg => kg * 1000,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0, 1000]
      },
      snapIntervals: [
        [3, [5]],
        [2, [1]],
        [-1, [0.05]],
        [-Infinity, []]
      ]
    }
  },
  mg: {
    name: 'milligram',
    colour: 'orange',
    suffix: true,
    parent: 'g',
    toParent: mg => mg / 1000,
    fromParent: g => g * 1000,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0, 1000]
      }
    }
  }
}
