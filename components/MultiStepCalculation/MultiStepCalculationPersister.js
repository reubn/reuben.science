import debounce from '@/src/debounce'

import {SPECIFIED} from './MultiStepCalculationGraph'

export class MultiStepCalculationPersister {
  constructor(graph){
    this.graph = graph
  }

  #getKey(node){
    return `${this.graph.id}-${node.id}`
  }

  #changeHandler = debounce(node => {
    if(node.valueState === SPECIFIED) this.#persist(node)
    else this.#remove(node)
  }, 300)

  #changeHandlerOuter = ({detail: {node, userSpecified}}) => {
    if(!userSpecified) return 

    this.#changeHandler(node)
  }

  #addHandler = ({detail: {node}}) => {
    const key = this.#getKey(node)
    const value = localStorage?.getItem(key)

/*     console.log('RESTORING', node.id, value) */
    
    if(value) node.setSpecifiedValue(JSON.parse(value), false)
  }

  listen(){
    this.graph.addEventListener('nodeValueChanged', this.#changeHandlerOuter)
    this.graph.addEventListener('nodeAdded', this.#addHandler)
  }

  #persist(node){
    // console.log('PERSISTING', node.id, node.value)
    const key = this.#getKey(node)

    requestIdleCallback(() => localStorage?.setItem(key, JSON.stringify(node.value)))
  }

  #remove(node){
    // console.log('DELETE', node.id)
    const key = this.#getKey(node)

    requestIdleCallback(() => localStorage?.removeItem(key))
  }
}