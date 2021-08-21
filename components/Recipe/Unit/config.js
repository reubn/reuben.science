import time from './units/time'
import mass from './units/mass'
import volume from './units/volume'
import distance from './units/distance'
import temperature from './units/temperature'

export const units = Unit => ({
  ...time,
  ...mass,
  ...volume,
  ...distance,
  ...temperature,
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
  }
})
