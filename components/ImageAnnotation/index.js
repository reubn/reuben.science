import {useState, useEffect} from 'react'

import c from '@/src/colour'

import Image from '@/components/Image'

import parseLabelMe from './parseLabelMe'
import SVG from './SVG'

import {container, imageContainer, active} from './styles'

const ImageAnnotation = ({image, list, children, ...props}) => {
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
      className: annotations[id]?.active ? active : '',
      onMouseEnter: () => list.setAnnotationActive(id, true),
      onMouseLeave: () => list.setAnnotationActive(id, false),
      ...annotations[id]?.props
    }
  }))

  return (
    <section
    	className={container}
      {...props}
    > 
      <div className={imageContainer}>
        <SVG shapes={displayShapes} imageHeight={imageHeight} imageWidth={imageWidth} />
        <Image image={image} {...props} />
      </div>
      {children}
    </section>
  )
}

export default ImageAnnotation

export {default as AnnotationKey} from './AnnotationKey'
export {default as AnnotationList} from './AnnotationList'