import useResize from './useResize'

import {shapes as shapesStyle} from './styles'

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

const toDimensions = ({type, points}) => {
  if(type === 'rectangle') {
    const [[x1, y1], [x2, y2]] = points

    return {width: x2 - x1, height: y2 - y1}
  }

  if(type === 'circle') {
    const [[x1, y1], [x2, y2]] = points

    const radius = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    
    return {width: radius * 2, height: 0}
  }

  const xs = points.map(([x]) => x)
  const ys = points.map(([, y]) => y)

  const maxX = Math.max(...xs)
  const minX = Math.min(...xs)
  const maxY = Math.max(...ys)
  const minY = Math.min(...ys)

  return {width: maxX - minX, height: maxY - minY}
}

const toSvgShape = ({id, path, dimensions: {width, height}, props, tooltip, index}) => (
  <path d={path} id={`svg-${id}`} key={`${id}-${index}`} {...props} style={{'--size': Math.max(width, height), ...props?.style}}>
    <title>{tooltip}</title>
  </path>
)

export default ({shapes, imageId, imageHeight, imageWidth, ...props}) => {
  const {ref, rect} = useResize() 

  return (
    <svg ref={ref} viewBox={`0 0 ${imageWidth} ${imageHeight}`} style={{'--render-width': rect?.width, '--viewBox-width': imageWidth}} {...props}>
      <g className={shapesStyle}>
        { 
          shapes
          // .sort(({active: a}, {active: b}) => (a ? 1 : 0) - (b ? 1 : 0))
          .map(shape => ({...shape, path: toSvgPath(shape), dimensions: toDimensions(shape)}))
          .map(toSvgShape)
        }
      </g>
    </svg>
  )
}