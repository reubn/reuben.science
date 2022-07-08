import {metric, US} from '../constants'

export default {
  t: {
    name: 'metric tonne',
    colour: 'blue',
    systems: [metric],
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
    systems: [metric],
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
    systems: [metric],
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
    systems: [metric],
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
  },

  st: {
    name: 'US short ton',
    colour: 'green',
    systems: [US],
    suffix: 'ton',
    parent: 'lb',
    toParent: st => st * 2000,
    fromParent: lb => lb / 2000,
    comfort: {
      range: {
        comfortableBetween: [0.5, Infinity],
        dontShowOutside: [0.5, Infinity]
      },
      snapIntervals: [
        [-Infinity, [0.25]]
      ]
    }
  },
  lb: {
    name: 'US pound',
    colour: 'red',
    systems: [US],
    suffix: true,
    parent: 'kg',
    toParent: lb => lb * 0.45359237,
    fromParent: kg => kg / 0.45359237,
    comfort: {
      range: {
        comfortableBetween: [0.25, 1000],
        dontShowOutside: [0.125, 2000]
      },
      snapIntervals: [
        [-Infinity, [0.25]]
      ]
    }
  },
  oz: {
    name: 'US ounce',
    colour: 'orange',
    systems: [US],
    suffix: true,
    parent: 'lb',
    toParent: oz => oz / 16,
    fromParent: lb => lb * 16,
    comfort: {
      range: {
        comfortableBetween: [0, 16],
        dontShowOutside: [0, 32]
      },
      snapIntervals: [
        [-Infinity, [0.25]]
      ]
    }
  },
}
