const toSvgPath = ({type, points}) => {
  if(type === 'rectangle') {
    const [[x1, y1], [x2, y2]] = points

    return `M${x1} ${y1} L${x2} ${y1} L${x2} ${y2} L${x1} ${y2} Z`
  }

  if(type === 'circle') {
    const [[x1, y1], [x2, y2]] = points
    
    const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

    return `M${x1} ${y1} m${-radius} 0 a${radius} ${radius} 0 1 0 ${radius * 2} 0 a${radius} ${radius} 0 1 0 ${-radius * 2} 0`
  }

  return `M${points.map(([x, y]) => `${x},${y}`).join(' L')} Z`
}

const toSvgShape = ({id, path, props}) => (
  <a href={`#key-${id}`} id={`svg-${id}`}>
    <path d={path} {...props} />
  </a>
)

export default ({shapes, imageId, imageHeight, imageWidth, ...props}) => {
  return (
    <svg viewBox={`0 0 ${imageWidth} ${imageHeight}`} {...props}>
      <g>
        {shapes.map(shape => ({...shape, path: toSvgPath(shape)})).map(toSvgShape)}
      </g>
    </svg>
  )
}