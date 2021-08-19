import {units, sensibleUnits} from './config'

class Unit {
  constructor(config){
    this.config = config
  }

  get name(){
    return this.config.name
  }

  get label(){
    return this.config.label
  }

  get colour(){
    return this.config.colour
  }

  get type(){
    return this.isBase ? this.config.type : this.base.type
  }

  get format(){
    return this.config.format
  }

  get parse(){
    return this.config.parse
  }

  get prefix(){
    if(typeof this.config.prefix === 'boolean' && this.config.prefix) return this.label
    return this.config.prefix
  }

  get suffix(){
    if(typeof this.config.suffix === 'boolean' && this.config.suffix) return this.label
    return this.config.suffix
  }

  get parent(){
    return this.config.isBase ? this : Unit.from(this.config.parent)
  }

  get toParent(){
    return this.config.isBase ? n => n : this.config.toParent
  }

  get fromParent(){
    return this.config.isBase ? n => n : this.config.fromParent
  }

  get isBase(){
    return !!this.config.isBase
  }

  get baseChain(){
    if(!this._baseChain) this._baseChain = Unit.resolveBase({unit: this})

    return this._baseChain
  }

  get base(){
    return this.baseChain.unit
  }

  get toBase(){
    const {chain} = this.baseChain

    return chain.reduce((fn, link) => {
      if(link.isBase) return value => fn ? fn(value) : value
      return value => link.toParent(fn ? fn(value) : value)
    }, null)
  }

  get fromBase(){
    const {chain} = this.baseChain
    const reversed = chain.slice().reverse()

    return reversed.reduce((fn, link) => {
      if(link === this) return value => link.fromParent(fn ? fn(value) : value)
      return value => fn ? fn(link.fromParent(value)) : link.fromParent(value)
    }, null)
  }

  conversionFnTo(unitOrString){
    const unit = Unit.from(unitOrString)

    if(unit.base !== this.base) throw `Cannot Convert ${this.label} to Incombatible Unit ${unit.label}`

    return number => unit.fromBase(this.toBase(number))
  }

  get compatibleUnits(){
    if(!this._compatibleUnits) this._compatibleUnits = Unit.unitsArray.filter(([_, unit]) => unit.type === this.type).map(([_, unit]) => unit)
    return this._compatibleUnits
  }

  sensibleUnitsWith(value){
    // const other = this.config.sensibleUnits?.(value)?.map(Unit.from)
    // if(other) other.push(this)
    //
    // return other ?? this.compatibleUnits

    return sensibleUnits.find(arr => arr.includes(this.label))?.map(Unit.from) ?? this.compatibleUnits
  }

  comfortableWith(value){
    const configResult = this.config.isComfortable?.(value)

    if(configResult === undefined || typeof configResult === 'boolean') return {
      comfortable: configResult ?? (value >= 1 && value < 1000),
      suggested: null
    }

    return {
      comfortable: false,
      suggested: Unit.from(configResult)
    }
  }

  static unitsArray = Object.entries(units(Unit)).map(([label, config]) => [label, new Unit({label, ...config})])
  static units = Object.fromEntries(Unit.unitsArray)
  static from = unknown => {
    if(unknown instanceof Unit) return unknown
    if(typeof unknown === 'string') return Unit.units[unknown]
    if(typeof unknown === 'undefined') return Unit.units.abs
  }

  static convert = (from, to, value) => Unit.from(from).conversionFnTo(to)(value)

  static resolveBase = ({unit, chain=[]}) => {
    if(unit.isBase) {
      const finalChain = [...chain, unit]

      finalChain.forEach((link, i) => link._baseChain = {
        unit,
        chain: finalChain.slice(i)
      })

      return {
        unit,
        chain: finalChain
      }
    }

    if(unit._baseChain) return {
      unit: unit._baseChain.unit,
      chain: [...chain, ...unit._baseChain.chain]
    }

    return Unit.resolveBase({
      unit: unit.parent,
      chain: [...chain, unit]
    })
  }
}

export default Unit
