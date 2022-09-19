import {useState, useEffect, useRef} from 'react'

import c from '@/src/colour'

import Image from '@/components/Image'

import parseLabelMe from './parseLabelMe'
import SVG from './SVG'

import AnnotationKey from './AnnotationKey'

import {container, imageContainer, active, activeFromOther} from './styles'

const ImageAnnotation = ({image, list, hideKey=false, children, rootProps: {className: rootClassName, ...rootProps}={}, containerProps: {className: containerClassName, ...containerProps}={}, ...props}) => {
  const {current: imageId} = useRef(Math.random())

  const [annotations, setAnnotations] = useState({})

  useEffect(() => {
    const update = () => {
      setAnnotations({...list.annotations})
    }

    list.addEventListener('change', update)

    update()

    return () => {
      list.removeEventListener('change', update)
    }
  }, [list])

  const {json} = image

  const {shapes, imageHeight, imageWidth} = parseLabelMe(json)

  const displayShapes = shapes.map(({id, type, points}) =>({
    id,
    type,
    points,
    title: list.getTooltip(id),
    active: annotations[id]?.active,
    props: {
      'data-id': id,
      style: {
        color: annotations[id]?.colour && c(annotations[id]?.colour),
      },
      className: annotations[id]?.active ? (annotations[id]?.active !== imageId ? activeFromOther : active) : '',
      onMouseEnter: () => list.setAnnotationActive(id, imageId),
      onMouseLeave: () => list.setAnnotationActive(id, false),
      ...annotations[id]?.props
    }
  }))

  return (
    <section
    	className={`${container} ${rootClassName}`}
      {...rootProps}
    > 
      <div className={`${imageContainer} ${containerClassName}`} {...containerProps}>
        <SVG imageId={imageId} shapes={displayShapes} imageHeight={imageHeight} imageWidth={imageWidth} />
        <Image image={image} {...props} />
      </div>
      {!hideKey && <AnnotationKey list={list} />}
      {children}
    </section>
  )
}

export default ImageAnnotation

export {default as AnnotationKey} from './AnnotationKey'
export {default as AnnotationList} from './AnnotationList'