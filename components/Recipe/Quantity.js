import toFixedOrInteger from '@/src/toFixedOrInteger'

import Unit from './Unit'

class Quantity {
  constructor(config){
    if(Array.isArray(config)) this.config = {
      value: config[0],
      unit: config[1],
      sensibleUnits: config[2]
    }
    else this.config = config

    this.config.unit = Unit.from(this.config.unit || Unit.units.abs)

    if(this.config.sensibleUnits){
      this.config.sensibleUnits = this.config.sensibleUnits.map(u => Unit.from(u))

      if(!this.config.sensibleUnits.includes(this.config.unit)) this.config.sensibleUnits.unshift(this.config.unit)
    }

    if(typeof this.config.value !== 'number' && this.config.unit.parse){
      this.config.value = this.config.unit.parse(this.config.value)
    }
  }

  get value(){
    return this.config.value
  }

  get unit(){
    return this.config.unit
  }

  get comfort(){
    const unitComfort = this.unit.comfortableWith(this.value)

    const suggestedIsAllowed = this.config.sensibleUnits?.includes(unitComfort.suggested) ?? true
    if(!suggestedIsAllowed) delete unitComfort.suggested

    return unitComfort
  }

  get sensibleUnits(){
    return this.config.sensibleUnits || this.unit.sensibleUnitsWith(this.value)
  }

  get betterUnitChoice(){
    const comfort = this.comfort

    if(!comfort.comfortable){
      const betterUnit = comfort.suggested || this.sensibleUnits.find(unit => (unit !== this.unit) && this.convert(unit).comfort.comfortable)

      if(betterUnit) return betterUnit
    }

    return null
  }

  convert(unitOrString){
    const unit = Unit.from(unitOrString)

    if(unit === this.unit) return this

    const conversionFn = this.unit.conversionFnTo(unit)

    const value = conversionFn(this.value)

    return new Quantity({...this.config, value, unit})
  }

  transform(fn){
    if(!fn) return this
    
    return new Quantity({...this.config, value: fn(this.value)})
  }

  formatted({displayedWithName=false}={}){
    const key = displayedWithName ? '_formattedDisplayedWithName' : '_formattedDisplayedWithoutName'
    if(this[key]) return this[key]

    const fractions = Object.entries({
      '¼': 0.25,
      '½': 0.5,
      '¾': 0.75,
      // '⅐': 0.14285714285714285,
      // '⅑': 0.1111111111111111,
      // '⅒': 0.1,
      '⅓': 0.3333333333333333,
      '⅔': 0.6666666666666666,
      // '⅕': 0.2,
      // '⅖': 0.4,
      // '⅗': 0.6,
      // '⅘': 0.8,
      // '⅙': 0.16666666666666666,
      // '⅚': 0.8333333333333334,
      // '⅛': 0.125,
      // '⅜': 0.375,
      // '⅝': 0.625,
      // '⅞': 0.875,
    })

    const integer = Math.floor(this.value)

    const powerOf10 = Math.floor(Math.log10(this.value))
    const magnitudeSign = Math.sign(powerOf10)
    const magnitude = this.value ? magnitudeSign > -1 ? powerOf10 + 1 : powerOf10 : 0

    const [_, snapIntervals] = this.unit.snapIntervalConfig.find(([key]) => key <= magnitude)
    
    const {snapPoint: snappedValue} = snapIntervals.reduce((bestSoFar, snapInterval) => {
      const snappedBelow = Math.floor(this.value / snapInterval) * snapInterval
      const snappedAbove = Math.ceil(this.value / snapInterval) * snapInterval

      const [remainder, snapPoint] = [snappedBelow, snappedAbove].map(snappedPoint => [Math.abs(this.value - snappedPoint), snappedPoint]).sort(([remainderA], [remainderB]) => remainderA - remainderB)[0]

      if(remainder < bestSoFar.remainder || (remainder === bestSoFar.remainder && snapPoint < bestSoFar.snapPoint)) return {remainder, snapInterval, snapPoint}
      
      return bestSoFar
    }, {remainder: Infinity, snapInterval: Infinity, snapPoint: this.value})

    // console.log({value: this.value, integer, magnitude, snapIntervals, snapIntervalConfig: this.unit.snapIntervalConfig, snapped: snappedValue})

    const enoughMagnitude = magnitude >= 3

    const remainder = snappedValue % 1
    const fraction = !enoughMagnitude && remainder > 0.0001 && fractions.find(([_, fraction]) => Math.abs(remainder - fraction) <= 0.000001)?.[0]
    const mixed = !enoughMagnitude && fraction && (integer ? `${integer}${fraction}` : fraction)

    const formattedNumber = enoughMagnitude ? snappedValue : (mixed || toFixedOrInteger(snappedValue, 2))

    if(this.unit.format) this[key] = this.unit.format({value: this.value, formattedNumber, displayedWithName})
    else this[key] = [this.unit.prefix && ['unit', this.unit.prefix], ['value', formattedNumber], this.unit.suffix && ['unit', this.unit.suffix]].filter(x => x)

    return this[key]
  }

  static from = quantityOrConfig => quantityOrConfig instanceof Quantity ? quantityOrConfig : new Quantity(quantityOrConfig)
}

export default Quantity
