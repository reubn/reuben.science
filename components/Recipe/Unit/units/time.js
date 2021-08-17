import toFixedOrInteger from '@/src/toFixedOrInteger'

const second = 1
const milisecond = second / 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

const timeUnits = {
  d: {value: day, identifier: 'd', padding: 1},
  h: {value: hour, identifier: 'h', padding: 2},
  m: {value: minute, identifier: 'm', padding: 2},
  s: {value: second, identifier: 's', padding: 2},
  ms: {value: milisecond, identifier: 'ms', padding: 3, floor: false}
}

const {d, h, m, s, ms} = timeUnits

const base = (timeUnits, config) => ({
  ...config,
  colour: 'pink',
  type: 'time',
  isBase: true,
  base: Symbol(),
  format: ({value: seconds}) => Object.entries(timeUnits).reduce(({seconds, components}, [key, {value, identifier, padding, floor=true}]) => {
    const quantity = floor ? Math.floor(seconds / value) : seconds / value
    const newSeconds = seconds - (quantity * value)

    return {
      seconds: newSeconds,
      components: quantity ? [
        ...components,
        ['value', (floor ? quantity : toFixedOrInteger(quantity, 2)).toString().padStart(components.length ? padding : 0, '0')],
        ['unit', identifier],
        ['raw', newSeconds ? ' ' : false]
      ] : components
    }
  }, {seconds, components: []}).components,
  parse: def => Object.entries(def).reduce((total, [key, quantity]) => total + (quantity * (timeUnits[key]?.value || 0)), 0),
  isComfortable: seconds => true
})

export default {
  time: base({d, h, m, s, ms}, {name: 'time'}),
  dhms: base({d, h, m, s}, {name: 'dhms'}),
  dhm: base({d, h, m}, {name: 'dhm'}),
  dh: base({d, h}, {name: 'dh'}),

  hms: base({h, m, s}, {name: 'hms'}),
}
