export default {
  deg: {
    name: 'degree',
    colour: 'blue',
    type: 'angle',
    suffix: '°',
    parent: 'rad',
    toParent: deg => deg / (180 / Math.PI),
    fromParent: rad => rad * (180 / Math.PI),
    comfort: {
      range: {
        comfortableBetween: [-Infinity, Infinity],
        dontShowOutside: [-Infinity, Infinity]
      },
      snapIntervals: [
        [-Infinity, []]
      ]
    }
  },
  rad: {
    name: 'radian',
    colour: 'pink',
    type: 'angle',
    suffix: true,
    isBase: true,
    comfort: {
      range: {
        comfortableBetween: [-Infinity, Infinity],
        dontShowOutside: [-Infinity, Infinity]
      },
      snapIntervals: [
        [-Infinity, []]
      ]
    }
  }
}
