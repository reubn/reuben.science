export class DirectionalAcyclicGraph extends EventTarget {
  constructor(NodeConstructor=Node){
    super()

    this._NodeConstructor = NodeConstructor

    this.nodes = new Set()
    this.edges = []
  }

  createNode(...args){
    const newNode = new this._NodeConstructor(this, ...args)

    return this.addNode(newNode)
  }

  addNode(node){
    if(!(node instanceof this._NodeConstructor)) throw new Error('node must be an instance of Node')
    if(!node.graph) node.graph = this
    if(node.graph !== this) throw new Error('node not part of graph')

    this.nodes.add(node)
    this.fireEvent('nodeAdded', {node})

    return node
  }

  addEdge({from, to}){
    if(from === to) throw new Error('cannot add self-loop')

/*     if(!this.nodes.has(from)) throw new Error('from is not in graph')
    if(!this.nodes.has(to)) throw new Error('to is not in graph') */
    const edge = {from, to}

    this.edges.push(edge)
    this.fireEvent('edgeAdded', {edge})
  }

/*   get topologicallySorted(){
    const unvisited = new Set(this.nodes)
    const sorted = []

    const visit = node => {
      const visited = !unvisited.has(node)
      if(visited) return
      
      const cantGoDeeper = node.isLeaf || node.children.every(child => !unvisited.has(child))
      if(cantGoDeeper) sorted.unshift(node)

      // console.log('visit', node.data.name, {visited, cantGoDeeper, path: path.map(n => n.data.name), unvisited: [...unvisited].map(n => n.data.name)}, visited ? 'SKIP' : cantGoDeeper ? 'ADD' : 'VISIT')
      
      unvisited.delete(node)
    }

    while(unvisited.size){
      const [unvisitedNode] = unvisited

      // console.log('pick unvisited node', unvisitedNode.data.name)

      unvisitedNode.exploreChildren(visit)
    }

    return sorted
  } */

  fireEvent(eventOrType='update', detail={}){
    const event = eventOrType instanceof Event ? eventOrType : new CustomEvent(eventOrType, {detail})
    this.dispatchEvent(event)
  }
}

export class DirectionalAcyclicGraphNode extends EventTarget {
  constructor(graph, data){
    super()
    if(graph) this.graph = graph
    if(data) this.data = data
  }

  get incomingEdges(){
    return this.graph.edges.filter(({to}) => to === this)
  }

  get outgoingEdges(){
    return this.graph.edges.filter(({from}) => from === this)
  }

  get parents(){
    return this.incomingEdges.map(({from}) => from)
  }

  get children(){
    return this.outgoingEdges.map(({to}) => to)
  }

  get isRoot(){
    return this.parents.length === 0
  }

  get isLeaf(){
    return this.children.length === 0
  }

  addEdge({from=this, to=this}){
    this.graph.addEdge({from, to})
  }

/*   _makeExplorer(property){
    return fn => {
      const dfs = (node, path=[]) => {
        const newPath = [...path, node]
        
        node[property].forEach(nextNode => dfs(nextNode, newPath))
        fn(node, newPath)
      }
  
      dfs(this)
    }
  }

  exploreChildren = this._makeExplorer('children')
  exploreParents = this._makeExplorer('parents') */

  fireEvent(eventOrType='update', detail={}){
    const event = eventOrType instanceof Event ? eventOrType : new CustomEvent(eventOrType, {detail: {node: this, ...detail}})
    this.dispatchEvent(event)
    this.graph.fireEvent(event)
  }
}