import time from './units/time'
import mass from './units/mass'
import volume from './units/volume'
import distance from './units/distance'
import temperature from './units/temperature'
import angle from './units/angle'

const types = {
  time,
  mass,
  volume,
  distance,
  temperature,
  angle,
}

const typed = Object.fromEntries(Object.entries(types).flatMap(([type, object]) => Object.entries(object).map(([key, value]) => ([key, ({...value, type})]))))

export const units = Unit => ({
  ...typed,
  abs: {
    name: 'abs',
    type: 'abs',
    format: ({formattedNumber, displayedWithName}) => [['value', formattedNumber]],
    isBase: true,
    isComfortable: value => true
  },
  raw: {
    name: 'raw',
    type: 'raw',
    format: ({value}) => [['unit', value]],
    isBase: true,
    isComfortable: value => true
  },
  _: {
    name: '_',
    type: '_',
    isBase: true
  }
})
