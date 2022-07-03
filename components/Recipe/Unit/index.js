import {units} from './config'

class Unit {
  constructor(config){
    this.config = config
  }

  get alias(){
    return this.config.alias
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

  get order(){
    return this.config.order || 0
  }

  get type(){
    return this.config.type
  }

  get format(){
    return this.config.format
  }

  get snapIntervalConfig(){
    return this.config.snapIntervalConfig || [
      [4, [10]],
      [3, [5]],
      [2, [1]],
      [-1, [0.25]],
      [-Infinity, []]
    ]
  }

  get parse(){
    return this.config.parse
  }

  get equivalencySymbol(){
    return this.config.equivalencySymbol
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

  _parentChain = new Set()
  get parentChain(){
    if(!this._parentChain.size) Unit.resolveCommonAncestor(this, Unit.units._)
    return this._parentChain
  }

  _base = undefined
  get base(){
    if(this.isBase) return this

    if(!this._base) {
      let link
      for(link of this.parentChain);
      this._base = link
    }

    return this._base
  }

  get toBase(){
    return this.conversionFnTo(this.base)
  }

  _conversionCache = new Map()
  conversionFnTo(unitOrString){
    const unit = Unit.from(unitOrString)

    if(this._conversionCache.has(unit)) return this._conversionCache.get(unit)

    const {commonAncestor, upChain, downChain} = Unit.resolveCommonAncestor(this, unit)
  
    if(!commonAncestor) throw `Cannot Convert ${this.label} to Incompatible Unit ${unit.label}`

    const upFn = upChain.reduce((fn, link) => value => link.toParent(fn ? fn(value) : value), null)
    const downFn = downChain.reduce((fn, link) => value => fn ? fn(link.fromParent(value)) : link.fromParent(value), null)

    const fn = number => downFn(upFn(number))

    this._conversionCache.set(unit, fn)

    return fn
  }

  get compatibleUnits(){
    if(!this._compatibleUnits) this._compatibleUnits = Unit.unitsArray.filter(([_, unit]) => unit.type === this.type).map(([_, unit]) => unit)
    return this._compatibleUnits
  }

  sensibleUnitsWith(value){
    const usingConfigResults = typeof this.config.sensibleUnits !== 'undefined'
    let configResults = null

    if(usingConfigResults) {
      const configPassIn = []
      const configReturnResults = this.config.sensibleUnits?.(value, configPassIn)

      configResults = (configReturnResults || configPassIn).map(Unit.from)
      configResults.push(this)
    }

    return (configResults ?? this.compatibleUnits.filter(unit => unit.comfortableWith(this.conversionFnTo(unit)(value)).comfortable)).sort((a, b) => {
      const aBaseValue = a.toBase(1)
      const bBaseValue = b.toBase(1)

      if(aBaseValue === bBaseValue) return a.order - b.order

      return bBaseValue - aBaseValue
    })
  }

  comfortableWith(value){ // TODO: this should recur. What if suggested value isn't comfortable?
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

    const lookup = typeof unknown !== 'undefined' && Unit.units[unknown] || Unit.unitsArray.find(([label, unit]) => unit.alias === unknown || unit.alias?.includes?.(unknown))?.[1]
    if(lookup) return lookup
  
    console.warn(`Unit ${unknown} not defined, using absolute Unit`)

    return Unit.units.abs
  }

  static convert = (from, to, value) => Unit.from(from).conversionFnTo(to)(value)

  static resolveCommonAncestor = (unitA, unitB) => {
    let a = Unit.from(unitA)
    let b = Unit.from(unitB)

    const aSeen = a._parentChain
    const bSeen = b._parentChain

    const commonAncestorIs = commonAncestor => {
      const upChain = [...aSeen]
      const downChain = [...bSeen]

      upChain.forEach((link, i) => link._parentChain = link._parentChain || new Set(upChain.slice(i)))
      downChain.forEach((link, i) => link._parentChain = link._parentChain || new Set(downChain.slice(i)))

      return {
        commonAncestor,
        upChain,
        downChain
      }
    }

    while(true) {
      aSeen.add(a)
      bSeen.add(b)

      if(aSeen.has(b)) return commonAncestorIs(b)
      if(bSeen.has(a)) return commonAncestorIs(a)

      if(a.isBase && b.isBase) return commonAncestorIs((a === b || (a.equivalencySymbol && (a.equivalencySymbol === b.equivalencySymbol))) ? [a, b] : undefined)

      if(!a.isBase) a = a.parent
      if(!b.isBase) b = b.parent
    }
  }

  static createAbsolute = (plural, singular = (plural.endsWith('s') ? plural.slice(0, -1) : plural)) => new Unit({
    label: plural,
    name: plural,
    format: ({formattedNumber, displayedWithName, value}) => displayedWithName ? [['value', formattedNumber]] : [['value', formattedNumber], ['unit', value === 1 ? singular : plural, true]],
    isBase: true,
    isComfortable: value => true
  })
}

export default Unit
