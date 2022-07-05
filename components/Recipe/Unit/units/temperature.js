import {metric, US} from '../constants'

export default {
  K: {
    name: 'kelvin',
    colour: 'pink-red',
    systems: [metric],
    type: 'temperature',
    suffix: true,
    isBase: true,
    comfort: {
      range: {
        comfortableBetween: [-Infinity, Infinity],
        dontShowOutside: [-Infinity, Infinity]
      }
    }
  },
  c: {
    name: 'celcius',
    colour: 'blue',
    systems: [metric],
    suffix: '°C',
    parent: 'K',
    toParent: c => c + 273.15,
    fromParent: k => k - 273.15,
    comfort: {
      range: {
        comfortableBetween: [-Infinity, Infinity],
        dontShowOutside: [-Infinity, Infinity]
      }
    }
  },
  f: {
    name: 'fahrenheit',
    colour: 'orange',
    systems: [US],
    suffix: '°F',
    parent: 'c',
    toParent: f => (f - 32) * (5 / 9),
    fromParent: c => (c * (9 / 5)) + 32,
    comfort: {
      range: {
        comfortableBetween: [-Infinity, Infinity],
        dontShowOutside: [-Infinity, Infinity]
      }
    }
  }
}
