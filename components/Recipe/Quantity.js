import toFixedOrInteger from '@/src/toFixedOrInteger'

import Unit from './Unit'

class Quantity {
  constructor(config){
    if(Array.isArray(config)) this.config = {
      value: config[0],
      unit: config[1]
    }
    else this.config = config
  }

  get value(){
    return this.config.value
  }

  get unit(){
    return Unit.from(this.config.unit)
  }

  get comfort(){
    return this.unit.comfortableWith(this.value)
  }

  get sensibleUnits(){
    return this.unit.sensibleUnitsWith(this.value)
  }

  convert(unitOrString){
    const unit = Unit.from(unitOrString)

    if(unit === this.unit) return this

    const transformation = this.unit.transformationTo(unit)

    const value = transformation(this.value)

    return new Quantity([value, unit])
  }

  transform(fn){
    return new Quantity([fn(this.value), this.unit])
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
    const enoughSigFig = integer.toString().length >= 3

    const remainder = this.value % 1
    const fraction = !enoughSigFig && remainder > 0.0001 && fractions.find(([_, fraction]) => Math.abs(remainder - fraction) <= 0.000001)?.[0]
    const mixed = !enoughSigFig && fraction && (integer ? `${integer}${fraction}` : fraction)

    const formattedNumber = enoughSigFig ? integer : (mixed || toFixedOrInteger(this.value, 2))

    // const fraction = this.value < 1 && fractions.find(([_, fraction]) => Math.abs(this.value - fraction) <= 0.000001)?.[0]
    //
    // const formattedNumber = fraction || toFixedIfNecessary(this.value, 2)

    if(this.unit.format) this[key] = this.unit.format({value: this.value, formattedNumber, displayedWithName})
    if(this.unit.suffix) this[key] = [formattedNumber, this.unit.suffix]
    if(this.unit.prefix) this[key] = [this.unit.prefix, formattedNumber]

    return this[key]
  }

  static from = quantityOrConfig => quantityOrConfig instanceof Quantity ? quantityOrConfig : new Quantity(quantityOrConfig)
}

export default Quantity
