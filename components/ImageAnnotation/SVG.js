const toSvgShape = ({id, title, type, points, props}) => {
  if(type === 'rectangle') {
    const [[x1, y1], [x2, y2]] = points

    return (
      <a href={`#key-${id}`} id={`svg-${id}`}>
        <rect x={x1} y={y1} width={x2 - x1} height={y2 - y1} {...props}>
        <title>{title}</title>
        </rect>
      </a>
    )
  }

  if(type === 'circle') {
    const [[x1, y1], [x2, y2]] = points
    
    const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

    return (
      <a href={`#key-${id}`} id={`svg-${id}`}>
        <circle cx={x1} cy={y1} r={radius} {...props}>
          <title>{title}</title>
        </circle>
      </a>
    )
  }

  return (
    <a href={`#key-${id}`} id={`svg-${id}`}>
      <polygon points={points.map(([x, y]) => `${x},${y}`).join(' ')} {...props}>
        <title>{title}</title>
      </polygon>
    </a>
  )
}


export default ({shapes, imageHeight, imageWidth, ...props}) => {
  return (
    <svg viewBox={`0 0 ${imageWidth} ${imageHeight}`} {...props}>
      {shapes.map(toSvgShape)}
    </svg>
  )
}