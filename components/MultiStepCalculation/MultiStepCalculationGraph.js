import {DirectionalAcyclicGraph, DirectionalAcyclicGraphNode} from './DirectionalAcyclicGraph'

export const SPECIFIED = Symbol('SPECIFIED')
export const CALCULATED = Symbol('CALCULATED')
export const PENDING = Symbol('PENDING')

export const UNVISITED = Symbol('UNVISITED')
export const VISITED = Symbol('VISITED')

export const NO_CHILDREN = Symbol('NO_CHILDREN')
export const IN_USE = Symbol('IN_USE')
export const ALL_CHILDREN_SPECIFIED = Symbol('ALL_CHILDREN_SPECIFIED')

const noop = () => {}

export class MultiStepCalculationGraph extends DirectionalAcyclicGraph {
  constructor(id){
    super(MultiStepCalculationNode)

    this.id = id
  }
}

export class MultiStepCalculationNode extends DirectionalAcyclicGraphNode {
  #specifiedValue
  #calculatedValue

  constructor(graph, {id, formula, value}){
    super(graph)

    this.id = id
    this.formula = formula

    const identifyParents = parent => {this.addEdge({from: parent})}
    this.formula?.(identifyParents, identifyParents)

    if(value !== undefined) this.setSpecifiedValue(value, false)
  }

  get nodeState(){
    // VISITED

    if(this._visited) return VISITED

    return UNVISITED
  }

  get inputsSatisfied(){
    return this.parents.every(parent => parent.valueState !== PENDING)
  }

  get valueState(){
    // SPECIFIED
    // CALCULATED
    // PENDING

    if(this.#specifiedValue !== undefined) return SPECIFIED
    if(this.#calculatedValue !== undefined) return CALCULATED

    return PENDING
  }

  get useState(){
    // NO_CHILDREN
    // IN_USE
    // ALL_CHILDREN_SPECIFIED

    if(this.isLeaf) return NO_CHILDREN

    const allChildrenSpecified = this.children.every(child => child.valueState === SPECIFIED || child.useState === ALL_CHILDREN_SPECIFIED)
    if(allChildrenSpecified) return ALL_CHILDREN_SPECIFIED
    
    return IN_USE
  }

  get value(){
    // console.log('GETTING VALUE', this.id)
    
    if(this.valueState === SPECIFIED || this.isRoot) return this.#specifiedValue
    if(this.valueState === CALCULATED) return this.#calculatedValue

    return this.calculateValue()
  }

  calculateValue(){
    if(this.isRoot) return undefined
    if(this.valueState === CALCULATED) return this.#calculatedValue

    // console.log('CALCULATING', this.id)

    const getParentValue = parent => parent.value

    const calculatedValue = this.formula(getParentValue, noop)

    this.#calculatedValue = this.inputsSatisfied ? calculatedValue : undefined
    
    return this.#calculatedValue
  }

  setSpecifiedValue(value, userSpecified=true){
    // console.log('SETTING SPECIFIED VALUE', this.id, value)

    this.#specifiedValue = value

    this.fireEvent('nodeValueChanged', {node: this, userSpecified})

    this.invalidateChildren()
    this.informParents()
  }

  invalidateCalculatedValue(){
    if(this.valueState === SPECIFIED) return

    // console.log('INVALIDATING CALCULATED VALUE', this.id)

    this.#calculatedValue = undefined

    this.calculateValue()
    
    this.fireEvent('nodeValueChanged')
  }

  invalidateChildren(){
    // console.log('INVALIDATING CHILDREN', this.id)
    this.invalidateCalculatedValue()
    
    this.children.forEach(child => child.invalidateChildren())
  }

  informParents(){
    // console.log('INFORMING PARENTS', this.id)

    this.parents.forEach(parent => {
      parent.informParents()
      parent.fireEvent('childNodeValueChanged', {child: this})
    })
  }

  /* identifyBlockingInputs(){
    const blockingInputs = new Set()

    this.exploreParents(node => {
      if(node.isRoot && node.valueState === PENDING && node.useState !== ALL_CHILDREN_SPECIFIED) blockingInputs.add(node)
    })

    return [...blockingInputs]
  } */
}