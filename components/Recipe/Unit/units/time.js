import toFixedOrInteger from '@/src/toFixedOrInteger'

const second = 1
const milisecond = second / 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

const timeUnits = {
  d: {value: day, padding: 1},
  h: {value: hour, padding: 2},
  m: {value: minute, padding: 2},
  s: {value: second, padding: 2},
  ms: {value: milisecond, padding: 3, floor: false}
}

const {d, h, m, s, ms} = timeUnits

const equivalencySymbol = Symbol()

const base = (timeUnits, config) => ({
  ...config,
  type: 'time',
  isBase: true,
  equivalencySymbol,
  format: ({value: seconds}) => Object.entries(timeUnits).reduce(({seconds, components}, [key, {value, padding, floor=true}]) => {
    if(!seconds) return {seconds, components}

    const quantity = floor ? Math.floor(seconds / value) : seconds / value
    const newSeconds = seconds - (quantity * value)

    return {
      seconds: newSeconds,
      components: quantity ? [
        ...components,
        ['value', (floor ? quantity : toFixedOrInteger(quantity, 2)).toString().padStart(components.length ? padding : 0, '0')],
        ['unit', key],
        ['raw', newSeconds ? ' ' : false]
      ] : components
    }
  }, {seconds, components: []}).components,
  parse: def => Object.entries(def).reduce((total, [key, quantity]) => total + (quantity * (timeUnits[key]?.value || 0)), 0),
  isComfortable: seconds => Object.entries(timeUnits).some(([key, {value, floor=true}]) => floor ? Math.floor(seconds / value) : seconds / value)
})

export default {
  time: base({d, h, m, s, ms}, {name: 'time', colour: 'pink'}),

  // dhms: base({d, h, m, s}, {name: 'dhms', colour: 'yellow'}),
  // dhm: base({d, h, m}, {name: 'dhm', colour: 'green'}),
  // dh: base({d, h}, {name: 'dh', colour: 'blue'}),

  hms: base({h, m, s}, {name: 'hms', colour: 'aqua'}),
  mS: base({m, s}, {name: 'mS', colour: 'purple'}),
  s: base({s}, {name: 's', colour: 'indigo'})
}
