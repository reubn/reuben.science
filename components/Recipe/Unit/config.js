import time from './units/time'
import mass from './units/mass'
import volume from './units/volume'
import distance from './units/distance'

export const units = Unit => ({
  ...time,
  ...mass,
  ...volume,
  ...distance,
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
