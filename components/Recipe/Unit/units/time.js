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
  isComfortable: seconds => {
    const specific = config.isComfortable?.(seconds)

    if(specific !== undefined && specific !== true) return specific

    const [key, {value, floor=true}] = Object.entries(timeUnits)[0]
    const quantity = floor ? Math.floor(seconds / value) : seconds / value

    return !!quantity
  }
})

export default {
  dhmsms: base({d, h, m, s, ms}, {name: 'days, hours, minutes, seconds, and milliseconds', colour: 'pink', alias: 'time'}),
   hmsms: base({h, m, s, ms}, {name: 'hours, minutes, seconds, and milliseconds', colour: 'aqua', isComfortable: seconds => seconds <= day * 5}),
    msms: base({m, s, ms}, {name: 'minutes, seconds, and milliseconds', colour: 'purple', isComfortable: seconds => seconds <= hour * 12}),
     sms: base({s, ms}, {name: 'seconds, and milliseconds', colour: 'indigo', isComfortable: seconds => seconds <= hour * 2}),
      ms: base({ms}, {name: 'milliseconds', colour: 'pink-red', isComfortable: seconds => seconds <= 10})
}
