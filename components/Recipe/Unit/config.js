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
  }
})

export const sensibleUnits = [
  ['g', 'kg'],
  ['tbsp', 'tsp', 'ml', 'l'], // this needs to be done as a funciton of the input unit and value
  ['ml', 'cl', 'l']
  // best way might be to have a comfortableRange for each unit, and if outside - don't include, BUT THIS NEEDS TO BE SEPERATE AS USE SHOULD BE ALLOWED TO CHOOSE THEM
]
