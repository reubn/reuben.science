import {metric, US} from '../constants'

export default {
  m: {
    name: 'metre',
    colour: 'pink',
    systems: [metric],
    type: 'distance',
    suffix: true,
    isBase: true,
    comfort: {
      range: {
        comfortableBetween: [1, 1000],
        dontShowOutside: [0.1, 1000]
      }
    }
  },
  cm: {
    name: 'centimetre',
    colour: 'red',
    systems: [metric],
    suffix: true,
    parent: 'm',
    toParent: cm => cm / 100,
    fromParent: m => m * 100,
    comfort: {
      range: {
        comfortableBetween: [1, 100],
        dontShowOutside: [0, 1000]
      },
      snapIntervals: [
        [3, [1]],
        [-Infinity, []]
      ]
    }
  },
  mm: {
    name: 'millimetre',
    colour: 'blue',
    systems: [metric],
    suffix: true,
    parent: 'm',
    toParent: mm => mm / 1000,
    fromParent: m => m * 1000,
    comfort: {
      range: {
        comfortableBetween: [0.5, 100],
        dontShowOutside: [0, 100]
      },
      snapIntervals: [
        [-Infinity, []]
      ]
    }
  },

  inch: {
    name: 'inch',
    colour: 'orange',
    systems: [US],
    parent: 'mm',
    suffix: '"',
    toParent: inch => inch * 25.4,
    fromParent: mm => mm / 25.4,
    comfort: {
      range: {
        comfortableBetween: [0.25, 12],
        dontShowOutside: [0.25, 12]
      },
      snapIntervals: [
        [-Infinity, [0.1]]
      ]
    }
  }
}
