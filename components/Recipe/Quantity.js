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

    this.config.unit = Unit.from(this.config.unit)

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
    return new Quantity({...this.config, value: fn(this.value)})
  }

  formatted({displayedWithName=false}={}){
    const key = displayedWithName ? '_formattedDisplayedWithName' : '_formattedDisplayedWithoutName'
    if(this[key]) console.log(this[key])
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
    if(this.unit.suffix) this[key] = [['value', formattedNumber], ['unit', this.unit.suffix]]
    if(this.unit.prefix) this[key] = [['unit', this.unit.prefix], ['value', formattedNumber]]

    if(!this[key]) throw `Unit '${this.unit.label}' Must Implement .format(), .suffix, or .prefix`

    return this[key]
  }

  static from = quantityOrConfig => quantityOrConfig instanceof Quantity ? quantityOrConfig : new Quantity(quantityOrConfig)
}

export default Quantity
