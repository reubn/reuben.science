export default class AnnotationList extends EventTarget {
  constructor(annotations){
    super()

    this.annotations = annotations
  }

  setAnnotationActive(id, state){
    this.annotations[id].active = state
    this.didChange()
  }

  didChange(){
    this.dispatchEvent(new CustomEvent('change'))
  }
}