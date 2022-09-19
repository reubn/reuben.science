export default class AnnotationList extends EventTarget {
  constructor(annotations){
    super()

    this.annotations = annotations
  }

  getTitle(id){
    const annotation = this.annotations[id]
    
    return annotation?.title || id
  }

  getDesc(id){
    const annotation = this.annotations[id]
    
    return annotation?.desc
  }
  
  getTooltip(id){
    const desc = this.getDesc(id)

    return desc ? `${this.getTitle(id)}\n${desc}` : this.getTitle(id)
  }

  setAnnotationActive(id, state){
    this.annotations[id].active = state
    this.didChange()
  }

  didChange(){
    this.dispatchEvent(new CustomEvent('change'))
  }
}