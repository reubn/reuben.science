import {units} from './config'
import * as constants from './constants'

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
    return this.config.comfort?.snapIntervals || [
      [4, [5]],
      [3, [1]],
      [2, [0.5]],
      [-1, [0.05]],
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
    const result = this.compatibleUnits
    .map(unit => {
      const valueWithUnit = this.conversionFnTo(unit)(value)
      return {
        unit,
        valueWithUnit,
        scoreBreakdown: unit.comfortableWith(this.conversionFnTo(unit)(value))
      }
    })
    .filter(({scoreBreakdown: {isInRange}}) => isInRange !== false)
    

    .map(({valueWithUnit, ...object}) => ({...object, valueWithUnit, magnitude: Math.abs(Math.log10(valueWithUnit))}))

    .sort(({magnitude: a}, {magnitude: b}) => b - a)
    .reduce(({cursor, prev, map}, object) => {
      if((prev === null) || Math.abs(prev - object.magnitude) > 0.001) cursor++

      object.score = object.scoreBreakdown.score + cursor
      object.valueScoreAdd = cursor
      return {cursor, prev: object.magnitude, map: [...map, object]}
    }, {cursor: -1, prev: null, map: []}).map
  
/* 
    .map(({valueWithUnit, ...object}) => {
      const magRaw = Math.log10(valueWithUnit)
      const magnitude = magRaw < 0 ? 1000 + magRaw : magRaw
      return ({...object, valueWithUnit, magnitude})
    }) // makes 0.1mm beat 0.01cm
    .sort(({magnitude: a}, {magnitude: b}) => a - b) // makes 0.1mm beat 0.01cm
    .reduce(({cursor, prev, map}, object) => {
      
      if((prev === null) || Math.abs(prev - object.magnitude) > 0.001) cursor+=2

      console.log('red', object.unit.label, {prev, magnitude: object.magnitude, cursor})

      object.score = object.score + cursor
      object.magnitudeScoreAdd = cursor
      return {cursor, prev: object.magnitude, map: [...map, object]}
    }, {cursor: -1, prev: null, map: []}).map */
    
    .sort(({scoreBreakdown: {snapIntervalRemainder: a}}, {scoreBreakdown: {snapIntervalRemainder: b}}) => b - a)
    .reduce(({cursor, prev, map}, object) => {
      if((prev === null) || Math.abs(prev - object.scoreBreakdown.snapIntervalRemainder) > 0.001) cursor++

      object.score = object.score + cursor + 1
      object.snapIntervalRemainderScoreAdd = cursor + 1
      return {cursor, prev:  object.scoreBreakdown.snapIntervalRemainder, map: [...map, object]}
    }, {cursor: -1, prev: null, map: []}).map
    // .map(({score, ...object}, snapIntervalRemainderIndex, {length}) => ({...object, snapIntervalRemainderIndex, score: score + ((snapIntervalRemainderIndex + 1) / length)}))

    .sort(({score: a}, {score: b}) => b - a)

    console.log('sensibleUnitsWith', {value, unit: this.label}, result.map(({unit: {label}, ...o}) => ({label, ...o})))

    return result
  }

  comfortableWith(value){ // TODO: this should recur. What if suggested value isn't comfortable?
    if(!this.config.comfort) return {}
    const {custom, range} = this.config.comfort || {}
    if(custom) return custom(value)
    
    const inRange = (value, {comfortableBetween: [lowerComfort=0.5, upperComfort=Infinity]=[], dontShowOutside: [dontShowBelow=0.1, dontShowAbove=Infinity + 1]=[]}) => {
      if(value >= lowerComfort && value < upperComfort) return true
      if(value >= dontShowBelow && value < dontShowAbove) return null
      return false
    }

    const powerOf10 = Math.floor(Math.log10(value))
    const magnitudeSign = Math.sign(powerOf10)
    const magnitude = value ? magnitudeSign > -1 ? powerOf10 + 1 : powerOf10 : 0

    const [_, snapIntervals] = this.snapIntervalConfig.find(([key]) => key <= magnitude)
    
    const {snapPoint: snappedValue, remainder} = snapIntervals.reduce((bestSoFar, snapInterval) => {
      const snappedBelow = Math.floor(value / snapInterval) * snapInterval
      const snappedAbove = Math.ceil(value / snapInterval) * snapInterval

      const [remainder, snapPoint] = [snappedBelow, snappedAbove]
        .map(snappedPoint => [Math.abs(value - snappedPoint), snappedPoint])
        .sort(([remainderA], [remainderB]) => remainderA - remainderB)
        [0]

      if(remainder < bestSoFar.remainder || (remainder === bestSoFar.remainder && snapPoint < bestSoFar.snapPoint)) return {remainder, snapInterval, snapPoint}
      
      return bestSoFar
    }, {remainder: Infinity, snapInterval: Infinity, snapPoint: value})

    console.log({value, snappedValue, remainder})

    const isUserChosen = null
    const isInRange = inRange(value, range)
    const isWhole = Math.abs(value - Math.floor(value)) < 0.00001
    const isWholeSnapped = Math.abs(snappedValue - Math.floor(snappedValue)) < 0.00001

    const score = [isUserChosen, isInRange, isWhole, isWholeSnapped].reduce((sum, component, index, {length}) => {
      const componentScore = (component === null ? 1 : (component ? 2 : 0)) * (length / (index + 1))

      return sum + componentScore
    }, 0)

    return {score, isUserChosen, isInRange, snapIntervalRemainder: (remainder === Infinity ? 0 : remainder) / value}
  }

  static unitsArray = Object.entries(units(Unit)).map(([label, config]) => [label, new Unit({label, ...config})])
  static units = Object.fromEntries(Unit.unitsArray)
  static constants = constants
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
    format: ({formattedNumber, displayedWithName, value}) => displayedWithName
      ? [{type: 'value', content: formattedNumber, rawValue: value}]
      : [{type: 'value', content: formattedNumber, rawValue: value}, {type: 'unit', content: value === 1 ? singular : plural, fullSpaceBeforeUnit: true}],
    isBase: true,
    comfort: { 
      custom: () => ({score: 1, isInRange: true})
    }
  })
}

export default Unit
