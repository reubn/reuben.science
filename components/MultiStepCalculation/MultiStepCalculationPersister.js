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

  #addHandler = node => {
    const key = this.#getKey(node)

/*     console.log('RESTORING', node.id, value) */
    const value = global.localStorage?.getItem(key)
    
    if(value) node.setSpecifiedValue(JSON.parse(value), false)
  }

  activate(){
    this.graph.addEventListener('nodeValueChanged', this.#changeHandlerOuter)
    
    this.graph.nodes.forEach(node => this.#addHandler(node))
  }

  #persist(node){
    // console.log('PERSISTING', node.id, node.value)
    const key = this.#getKey(node)

    requestIdleCallback(() => global.localStorage?.setItem(key, JSON.stringify(node.value)))
  }

  #remove(node){
    // console.log('DELETE', node.id)
    const key = this.#getKey(node)

    requestIdleCallback(() => global.localStorage?.removeItem(key))
  }
}