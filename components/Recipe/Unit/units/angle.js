export default {
  deg: {
    name: 'degree',
    colour: 'blue',
    type: 'angle',
    suffix: '°',
    parent: 'rad',
    toParent: deg => deg / (180 / Math.PI),
    fromParent: rad => rad * (180 / Math.PI),
    isComfortable: value => true
  },
  rad: {
    name: 'radian',
    colour: 'pink',
    type: 'angle',
    suffix: true,
    isBase: true,
    isComfortable: value => true
  }
}
