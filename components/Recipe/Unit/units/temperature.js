export default {
  K: {
    name: 'kelvin',
    colour: 'pink-red',
    type: 'temperature',
    suffix: true,
    isBase: true,
    isComfortable: value => true
  },
  c: {
    name: 'celcius',
    colour: 'blue',
    suffix: '°C',
    parent: 'K',
    toParent: c => c + 273.15,
    fromParent: k => k - 273.15,
    isComfortable: value => true
  },
  f: {
    name: 'fahrenheit',
    colour: 'orange',
    suffix: '°F',
    parent: 'c',
    toParent: f => (f - 32) * (5 / 9),
    fromParent: c => (c * (9 / 5)) + 32,
    isComfortable: value => true
  }
}
